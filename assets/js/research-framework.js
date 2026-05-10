const root = document.getElementById("research-framework-root");
const BASE_WIDTH = 1400;
const BASE_HEIGHT = 760;
const BASE_PADDING = 28;
const NODE_TRANSITION_MS = 920;
let trajectoryFocusActive = false;
const connectorMap = new Map();
let connectorRevealTimer = null;
let connectorSyncFrame = null;
let connectorSyncUntil = 0;

const connectorSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
connectorSvg.setAttribute("class", "rf-connectors");
connectorSvg.setAttribute("aria-hidden", "true");
connectorSvg.innerHTML = `
  <defs>
    <marker id="rf-connector-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M0 0 L10 5 L0 10 Z"></path>
    </marker>
  </defs>
`;
root.appendChild(connectorSvg);

[
  "Field",
  "PM-Tree",
  "Map Matching",
  "Translation",
  "Mobility Intelligence",
  "Planning Insight"
].forEach((title) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", "rf-connector-path");
  path.dataset.targetTitle = title;
  connectorSvg.appendChild(path);
  connectorMap.set(title, path);
});

function setActiveNode(activeElement) {
  if (activeElement) {
    root.classList.add("is-hovering-node");
  } else if (!trajectoryFocusActive) {
    root.classList.remove("is-hovering-node");
  }

  nodeElements.forEach(({ element }) => {
    element.classList.toggle("is-active", element === activeElement);
  });
}

function applyTrajectoryFocusPositions() {
  nodeElements.forEach(({ element }) => {
    const focused = trajectoryFocusActive && !element.classList.contains("rf-node--trajectory");
    const left = focused
      ? element.style.getPropertyValue("--rf-focused-left")
      : element.style.getPropertyValue("--rf-base-left");
    const top = focused
      ? element.style.getPropertyValue("--rf-focused-top")
      : element.style.getPropertyValue("--rf-base-top");

    if (left) {
      element.style.left = left;
    }

    if (top) {
      element.style.top = top;
    }
  });
}

function activateTrajectoryFocus() {
  if (trajectoryFocusActive) {
    return;
  }

  if (connectorRevealTimer) {
    clearTimeout(connectorRevealTimer);
    connectorRevealTimer = null;
  }

  trajectoryFocusActive = true;
  root.classList.add("is-trajectory-focus");
  root.classList.add("is-connector-hidden");
  root.classList.add("is-hovering-node");
  setActiveNode(trajectoryElement);
  layoutFramework();
}

function deactivateTrajectoryFocus() {
  if (!trajectoryFocusActive) {
    return;
  }

  trajectoryFocusActive = false;
  root.classList.remove("is-trajectory-focus");
  root.classList.add("is-connector-hidden");
  root.classList.remove("is-hovering-node");
  setActiveNode(null);
  layoutFramework();

  if (connectorRevealTimer) {
    clearTimeout(connectorRevealTimer);
  }

  connectorRevealTimer = window.setTimeout(() => {
    updateConnectorPaths();
    root.classList.remove("is-connector-hidden");
    connectorRevealTimer = null;
  }, NODE_TRANSITION_MS);
}

const nodes = [
  {
    title: "Field",
    x: 45,
    y: 9,
    size: 268,
    description: "Layered latent data cloud",
    hasFieldCloud: true
  },

  {
    title: "Trajectory",
    x: 45,
    y: 45,
    size: 232,
    description: "Raw large-scale mobility trajectories",
    hasTrail: true
  },

  {
    title: "PM-Tree",
    x: 20,
    y: 18,
    size: 186,
    description: "Hierarchical trajectory structure<br>3% observations \u2192 96% structural recovery",
    hasTree: true
  },

  {
    title: "Map Matching",
    x: 72,
    y: 20,
    size: 170,
    description: "Trajectory → Road Network",
    hasSupPath: true
  },

  {
    title: "Translation",
    x: 24,
    y: 88,
    size: 180,
    description: "Trajectory → Planning Network"
  },

  {
    title: "Mobility Intelligence",
    x: 72,
    y: 90,
    size: 174,
    description: "OD · Access · Behavior"
  },

  {
    title: "Planning Insight",
    x: 45,
    y: 80,
    size: 184,
    description: "Accessibility · Equity · Systems"
  }
];

const nodeElements = [];
let trajectoryElement = null;

function renderSupHMMAnimation() {
  return `
    <div class="rf-mini-suphmm">
      <svg class="rf-suphmm-network" viewBox="0 0 250 140" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path class="rf-suphmm-road rf-suphmm-road-1" d="M16 92 C46 62, 78 46, 112 56 S180 88, 236 58"></path>
        <path class="rf-suphmm-road rf-suphmm-road-2" d="M20 34 C56 42, 84 70, 118 94 S182 120, 232 108"></path>
        <path class="rf-suphmm-road rf-suphmm-road-3" d="M92 18 C108 36, 122 64, 136 122"></path>

        <g class="rf-suphmm-step" style="--rf-suphmm-delay: 0s;">
          <circle class="rf-suphmm-search-radius" cx="30" cy="86" r="5.4"></circle>
          <path class="rf-suphmm-candidate-branch rejected" d="M22 74 Q30 68 40 62"></path>
          <path class="rf-suphmm-candidate-branch selected" d="M24 84 Q30 80 36 78"></path>
          <path class="rf-suphmm-candidate-branch rejected" d="M20 96 Q30 100 40 94"></path>
        </g>

        <g class="rf-suphmm-step" style="--rf-suphmm-delay: -1.28s;">
          <circle class="rf-suphmm-search-radius" cx="78" cy="52" r="5.4"></circle>
          <path class="rf-suphmm-candidate-branch rejected" d="M70 48 Q78 42 90 42"></path>
          <path class="rf-suphmm-candidate-branch selected" d="M72 56 Q74 60 76 62"></path>
          <path class="rf-suphmm-candidate-branch rejected" d="M70 76 Q80 84 90 82"></path>
        </g>

        <g class="rf-suphmm-step" style="--rf-suphmm-delay: -2.56s;">
          <circle class="rf-suphmm-search-radius" cx="126" cy="86" r="5.4"></circle>
          <path class="rf-suphmm-candidate-branch rejected" d="M118 88 Q124 94 134 98"></path>
          <path class="rf-suphmm-candidate-branch selected" d="M126 86 Q124 80 124 72"></path>
          <path class="rf-suphmm-candidate-branch rejected" d="M128 82 Q134 72 138 64"></path>
        </g>

        <g class="rf-suphmm-step" style="--rf-suphmm-delay: -3.84s;">
          <circle class="rf-suphmm-search-radius" cx="176" cy="90" r="5.4"></circle>
          <path class="rf-suphmm-candidate-branch rejected" d="M176 82 Q182 72 190 68"></path>
          <path class="rf-suphmm-candidate-branch selected" d="M176 90 Q172 82 168 75"></path>
          <path class="rf-suphmm-candidate-branch rejected" d="M176 96 Q186 102 196 98"></path>
        </g>

        <g class="rf-suphmm-step" style="--rf-suphmm-delay: -5.12s;">
          <circle class="rf-suphmm-search-radius" cx="214" cy="48" r="5.4"></circle>
          <path class="rf-suphmm-candidate-branch rejected" d="M206 44 Q214 40 224 42"></path>
          <path class="rf-suphmm-candidate-branch selected" d="M214 48 Q216 56 216 63"></path>
          <path class="rf-suphmm-candidate-branch rejected" d="M208 56 Q218 70 222 84"></path>
        </g>

        <g class="rf-suphmm-transition" style="--rf-suphmm-delay: 0s;">
          <path class="rf-suphmm-transition-alt rejected" d="M40 62 Q58 48 84 44" pathLength="100"></path>
          <path class="rf-suphmm-transition-selected" d="M36 78 Q54 66 76 62" pathLength="100"></path>
          <path class="rf-suphmm-transition-alt rejected" d="M40 94 Q58 102 82 84" pathLength="100"></path>
        </g>

        <g class="rf-suphmm-transition" style="--rf-suphmm-delay: -1.28s;">
          <path class="rf-suphmm-transition-alt rejected" d="M76 62 Q100 44 126 54" pathLength="100"></path>
          <path class="rf-suphmm-transition-selected" d="M76 62 Q98 58 124 72" pathLength="100"></path>
          <path class="rf-suphmm-transition-alt rejected" d="M76 62 Q98 88 124 96" pathLength="100"></path>
        </g>

        <g class="rf-suphmm-transition" style="--rf-suphmm-delay: -2.56s;">
          <path class="rf-suphmm-transition-alt rejected" d="M124 72 Q146 60 170 62" pathLength="100"></path>
          <path class="rf-suphmm-transition-selected" d="M124 72 Q146 81 168 75" pathLength="100"></path>
          <path class="rf-suphmm-transition-alt rejected" d="M124 72 Q146 96 172 92" pathLength="100"></path>
        </g>

        <g class="rf-suphmm-transition" style="--rf-suphmm-delay: -3.84s;">
          <path class="rf-suphmm-transition-alt rejected" d="M168 75 Q190 48 218 50" pathLength="100"></path>
          <path class="rf-suphmm-transition-selected" d="M168 75 Q192 67 216 63" pathLength="100"></path>
          <path class="rf-suphmm-transition-alt rejected" d="M168 75 Q194 94 216 102" pathLength="100"></path>
        </g>

        <path class="rf-suphmm-route rf-suphmm-route-1" style="--rf-suphmm-delay: 0s;" d="M36 78 Q54 66 76 62" pathLength="100"></path>
        <path class="rf-suphmm-route rf-suphmm-route-2" style="--rf-suphmm-delay: -1.28s;" d="M76 62 Q98 58 124 72" pathLength="100"></path>
        <path class="rf-suphmm-route rf-suphmm-route-3" style="--rf-suphmm-delay: -2.56s;" d="M124 72 Q146 81 168 75" pathLength="100"></path>
        <path class="rf-suphmm-route rf-suphmm-route-4" style="--rf-suphmm-delay: -3.84s;" d="M168 75 Q192 67 216 63" pathLength="100"></path>

        <path class="rf-suphmm-best-path" d="M36 78 Q54 66 76 62 Q98 58 124 72 Q146 81 168 75 Q192 67 216 63" pathLength="100"></path>

        <circle class="rf-suphmm-gps-point rf-suphmm-gps-point-1" style="--rf-suphmm-delay: 0s;" cx="30" cy="86" r="3.1"></circle>
        <circle class="rf-suphmm-gps-point rf-suphmm-gps-point-2" style="--rf-suphmm-delay: -1.28s;" cx="78" cy="52" r="3.1"></circle>
        <circle class="rf-suphmm-gps-point rf-suphmm-gps-point-3" style="--rf-suphmm-delay: -2.56s;" cx="126" cy="86" r="3.1"></circle>
        <circle class="rf-suphmm-gps-point rf-suphmm-gps-point-4" style="--rf-suphmm-delay: -3.84s;" cx="176" cy="90" r="3.1"></circle>
        <circle class="rf-suphmm-gps-point rf-suphmm-gps-point-5" style="--rf-suphmm-delay: -5.12s;" cx="214" cy="48" r="3.1"></circle>
      </svg>
    </div>
  `;
}

function renderTranslationAnimation() {
  return `
    <div class="rf-mini-translation">
      <svg class="rf-translation-graphic" viewBox="0 0 250 140" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path class="rf-translation-bg-network" d="M28 104 Q72 78 112 88 T214 72"></path>
        <path class="rf-translation-bg-network" d="M34 40 Q82 54 116 48 T220 54"></path>

        <path class="rf-translation-taz origin" d="M18 72 L30 42 L58 32 L82 44 L88 70 L70 96 L38 102 Z"></path>
        <path class="rf-translation-taz destination" d="M164 48 L190 34 L220 42 L232 66 L222 94 L194 102 L168 84 Z"></path>

        <path class="rf-translation-connector rf-translation-connector-origin" d="M54 68 L92 64" pathLength="100"></path>
        <path class="rf-translation-network-path" d="M92 64 L122 52 L150 72 L176 64" pathLength="100"></path>
        <path class="rf-translation-connector rf-translation-connector-destination" d="M176 64 L198 72" pathLength="100"></path>
        <path class="rf-translation-final-path" d="M54 68 L92 64 L122 52 L150 72 L176 64 L198 72" pathLength="100"></path>

        <circle class="rf-translation-centroid origin" cx="54" cy="68" r="4"></circle>
        <circle class="rf-translation-centroid destination" cx="198" cy="72" r="4"></circle>

        <text class="rf-translation-label origin" x="36" y="52">O</text>
        <text class="rf-translation-label destination" x="206" y="58">D</text>
      </svg>
    </div>
  `;
}

function renderFieldCloud() {
  return `
    <div class="rf-field-cloud" aria-hidden="true">
      <svg class="rf-field-cloud__svg" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="rf-field-blur-atmosphere" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="34"></feGaussianBlur>
          </filter>
          <filter id="rf-field-blur-outer" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="22"></feGaussianBlur>
          </filter>
          <filter id="rf-field-blur-mid" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14"></feGaussianBlur>
          </filter>
          <filter id="rf-field-blur-inner" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7"></feGaussianBlur>
          </filter>
        </defs>

        <g class="rf-field-cloud__atmosphere">
          <polygon points="8,112 42,46 116,12 194,20 254,74 282,148 258,228 190,278 102,284 28,238 -4,166" />
          <polygon points="96,-6 186,4 256,42 296,116 290,198 236,260 156,290 78,266 18,204 14,100" />
          <polygon points="128,110 204,82 276,116 314,188 288,264 214,306 126,294 62,244 52,166" />
          <polygon points="12,158 52,86 126,64 198,94 226,174 202,262 126,312 42,282 -6,214" />
        </g>

        <g class="rf-field-cloud__layer rf-field-cloud__layer--outer">
          <polygon points="22,112 54,58 118,38 166,72 176,128 148,180 90,202 34,172 10,138" />
          <polygon points="134,32 192,18 242,54 250,110 214,158 152,150 112,98" />
          <polygon points="122,132 176,102 244,118 276,168 258,226 198,252 138,232 108,182" />
          <polygon points="56,178 108,146 164,158 188,212 156,262 88,268 34,228" />
          <polygon points="72,76 116,24 176,18 224,56 214,116 154,140 90,126 52,98" />
        </g>

        <g class="rf-field-cloud__layer rf-field-cloud__layer--mid">
          <polygon points="46,108 88,78 136,86 154,132 126,176 72,182 38,146" />
          <polygon points="144,66 196,62 230,98 226,146 182,182 136,156 126,104" />
          <polygon points="164,152 208,134 246,158 248,206 206,232 158,218 142,182" />
          <polygon points="88,170 132,150 176,170 176,214 136,236 88,224 68,190" />
          <polygon points="92,38 140,34 176,68 166,112 122,126 82,102 72,64" />
        </g>

        <g class="rf-field-cloud__layer rf-field-cloud__layer--inner">
          <polygon points="88,104 118,92 142,110 140,144 110,162 78,148 70,122" />
          <polygon points="156,88 192,86 214,114 206,148 170,162 144,136 142,108" />
          <polygon points="168,170 202,164 224,188 216,218 184,232 158,214 152,188" />
          <polygon points="106,174 138,166 162,188 156,220 124,232 96,214 92,190" />
        </g>

        <g class="rf-field-cloud__bridges">
          <polygon points="108,106 134,96 168,106 182,126 166,146 132,148 106,132 98,118" />
          <polygon points="152,126 178,122 198,142 196,170 172,186 148,178 136,152" />
          <polygon points="118,156 146,150 166,170 162,196 136,208 114,194 106,172" />
          <polygon points="82,140 108,132 130,146 128,170 102,184 78,172 70,152" />
          <polygon points="118,120 144,112 174,122 182,148 166,172 138,176 114,160 108,138" />
        </g>

        <g class="rf-field-cloud__cores">
          <circle cx="98" cy="122" r="18"></circle>
          <circle cx="188" cy="122" r="15"></circle>
          <circle cx="188" cy="198" r="13"></circle>
          <circle cx="128" cy="196" r="11"></circle>
          <circle cx="62" cy="92" r="8"></circle>
          <circle cx="226" cy="92" r="7"></circle>
          <circle cx="78" cy="226" r="7"></circle>
          <circle cx="122" cy="118" r="9"></circle>
          <circle cx="154" cy="128" r="10"></circle>
          <circle cx="140" cy="176" r="8"></circle>
          <circle cx="146" cy="148" r="12"></circle>
        </g>

        <g class="rf-field-cloud__luminous-cores">
          <circle cx="72" cy="116" r="12"></circle>
          <circle cx="118" cy="84" r="11"></circle>
          <circle cx="188" cy="92" r="12"></circle>
          <circle cx="210" cy="140" r="10"></circle>
          <circle cx="184" cy="196" r="11"></circle>
          <circle cx="126" cy="206" r="10"></circle>
          <circle cx="148" cy="144" r="13"></circle>
          <circle cx="96" cy="160" r="9"></circle>
          <circle cx="60" cy="92" r="9"></circle>
          <circle cx="232" cy="96" r="9"></circle>
          <circle cx="82" cy="224" r="8"></circle>
        </g>

        <g class="rf-field-cloud__stars">
          <circle cx="44" cy="110" r="2.4"></circle>
          <circle cx="64" cy="74" r="1.9"></circle>
          <circle cx="118" cy="46" r="2.2"></circle>
          <circle cx="232" cy="74" r="2.1"></circle>
          <circle cx="254" cy="128" r="2.6"></circle>
          <circle cx="236" cy="196" r="2"></circle>
          <circle cx="194" cy="234" r="2.3"></circle>
          <circle cx="76" cy="226" r="2.2"></circle>
          <circle cx="92" cy="132" r="2.8"></circle>
          <circle cx="154" cy="112" r="1.7"></circle>
          <circle cx="204" cy="124" r="2.7"></circle>
          <circle cx="176" cy="194" r="2.5"></circle>
          <circle cx="126" cy="190" r="2.4"></circle>
        </g>
      </svg>
      <div class="rf-field-cloud__caption">Toward trajectory structure</div>
    </div>
  `;
}

nodes.forEach((node, index) => {

  const div = document.createElement("div");

  div.className = "rf-node";
  if (node.hasTrail) {
    div.classList.add("rf-node--trajectory");
    trajectoryElement = div;
  }
  if (node.hasFieldCloud) {
    div.classList.add("rf-node--field");
    div.classList.add("rf-node--diffuse");
  }
  if (node.hasSupPath) {
    div.classList.add("rf-node--suphmm");
  }
  if (node.title === "Translation") {
    div.classList.add("rf-node--translation");
  }
  if (node.title === "PM-Tree") {
    div.classList.add("rf-node--pmtree");
  }
  if (node.title === "Mobility Intelligence") {
    div.classList.add("rf-node--mobility");
  }
  if (node.title === "Planning Insight") {
    div.classList.add("rf-node--planning");
  }

  div.style.setProperty("--rf-float-delay", `${index * 0.7}s`);

  const trailMarkup = node.hasTrail
    ? `
      <div class="rf-mini-trail" aria-hidden="true">
        <svg class="rf-mini-trail-curve" viewBox="0 0 375 120" preserveAspectRatio="none">
          <path d="M21 74 C63 26, 116 34, 165 62 S260 92, 354 46" pathLength="100"></path>
        </svg>
        <span class="rf-mini-point point-1"></span>
        <span class="rf-mini-point point-2"></span>
        <span class="rf-mini-point point-3"></span>
        <span class="rf-mini-point point-4"></span>
        <span class="rf-mini-point point-5"></span>
      </div>
    `
    : "";

  const treeMarkup = node.hasTree
    ? `
      <div class="rf-mini-tree" aria-hidden="true">
        <svg class="rf-mini-tree-lines" viewBox="0 0 220 150" preserveAspectRatio="none">
          <path d="M110 24 L110 56" pathLength="100"></path>
          <path d="M110 56 L66 84" pathLength="100"></path>
          <path d="M110 56 L154 84" pathLength="100"></path>
          <path d="M66 84 L32 122" pathLength="100"></path>
          <path d="M66 84 L86 122" pathLength="100"></path>
          <path d="M154 84 L134 122" pathLength="100"></path>
          <path d="M154 84 L188 122" pathLength="100"></path>
        </svg>
        <span class="rf-mini-point tree-point tree-point-1"></span>
        <span class="rf-mini-point tree-point tree-point-2"></span>
        <span class="rf-mini-point tree-point tree-point-3"></span>
        <span class="rf-mini-point tree-point tree-point-4"></span>
        <span class="rf-mini-point tree-point tree-point-5"></span>
        <span class="rf-mini-point tree-point tree-point-6"></span>
        <span class="rf-mini-point tree-point tree-point-7"></span>
      </div>
    `
    : "";

  const supPathMarkup = node.hasSupPath
    ? renderSupHMMAnimation()
    : "";

  const translationMarkup = node.title === "Translation"
    ? renderTranslationAnimation()
    : "";

  const bulletItems = node.title === "Mobility Intelligence"
    ? ["OD", "Access", "Behavior"]
    : node.title === "Planning Insight"
      ? ["Accessibility", "Equity", "Systems"]
      : null;

  const detailItems = node.title === "PM-Tree"
    ? [
        {
          label: "Sparse observations recover global trajectory structure",
          title: "[PM-Tree — IEEE T-ITS, under review]"
        }
      ]
    : node.title === "Map Matching"
      ? [
          {
            label: "Projecting noisy trajectory observations onto road-network representations",
            title: "[Sup-HMM — IEEE T-ITS, revision submitted]"
          }
        ]
      : node.title === "Translation"
        ? [
            {
              label: "Translating trajectories into planning-network representations",
              title: "[Trajectory Translation Framework — ongoing work]"
            }
          ]
        : node.title === "Planning Insight"
          ? [
              {
                label: "Revealing behavioral mismatch in transit equity systems",
                title: "[Transit Desert & Mirages — TR Part A, under review]"
              },
              {
                label: "Evaluating zone connector bias in regional planning models",
                title: "[Do Observed Trips Follow Zone Connector Assumptions? — TR Part A, under review]"
              }
            ]
          : node.title === "Mobility Intelligence"
            ? [
                {
                  label: "Understanding OD behavior and structural mobility patterns",
                  title: "[Large-scale mobility analytics — ongoing work]"
                }
              ]
            : null;

  const detailMarkup = detailItems
    ? `
      <div class="rf-node-detail">
        ${detailItems.map((item) => `
          <div class="rf-node-detail-item">
            <span class="rf-node-detail-dot" aria-hidden="true"></span>
            <div class="rf-node-detail-text">
              <div class="rf-node-detail-label">${item.label}</div>
              <div class="rf-node-detail-title">${item.title}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `
    : "";

  const descriptionMarkup = node.hasFieldCloud
    ? ""
    : bulletItems
    ? `
      <div class="rf-node-bullets">
        ${bulletItems.map((item) => `
          <div class="rf-node-bullet">
            <span class="rf-node-bullet-dot" aria-hidden="true"></span>
            <span class="rf-node-bullet-text">${item}</span>
          </div>
        `).join("")}
      </div>
    `
    : `<div class="rf-node-desc">${node.description}</div>`;

  const fieldCloudMarkup = node.hasFieldCloud
    ? renderFieldCloud()
    : "";

  div.innerHTML = `
    <div class="rf-node-inner">
      ${node.hasFieldCloud ? "" : `<div class="rf-node-title">${node.title}</div>`}
      ${fieldCloudMarkup}
      ${trailMarkup}
      ${treeMarkup}
      ${supPathMarkup}
      ${translationMarkup}
      ${descriptionMarkup}
      ${detailMarkup}
    </div>
  `;

  root.appendChild(div);
  nodeElements.push({ element: div, config: node });

  div.addEventListener("pointerenter", () => {
    setActiveNode(div);
  });

  div.addEventListener("pointerleave", () => {
    if (!trajectoryFocusActive) {
      setActiveNode(null);
    }
  });
});

if (trajectoryElement) {
  document.addEventListener("pointermove", (event) => {
    const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
    const hoveredNode = hoveredElement ? hoveredElement.closest(".rf-node") : null;

    if (hoveredNode === trajectoryElement) {
      activateTrajectoryFocus();
      return;
    }

    if (trajectoryFocusActive) {
      deactivateTrajectoryFocus();
      return;
    }

    if (hoveredNode) {
      setActiveNode(hoveredNode);
    } else {
      setActiveNode(null);
    }
  });
  root.addEventListener("pointerleave", deactivateTrajectoryFocus);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function stopConnectorSync() {
  if (connectorSyncFrame !== null) {
    window.cancelAnimationFrame(connectorSyncFrame);
    connectorSyncFrame = null;
  }
}

function syncConnectorPathsUntil(timestamp) {
  updateConnectorPaths();

  if (timestamp < connectorSyncUntil) {
    connectorSyncFrame = window.requestAnimationFrame(syncConnectorPathsUntil);
    return;
  }

  connectorSyncFrame = null;
}

function scheduleConnectorSync(duration = NODE_TRANSITION_MS + 120) {
  stopConnectorSync();
  connectorSyncUntil = performance.now() + duration;
  connectorSyncFrame = window.requestAnimationFrame(syncConnectorPathsUntil);
}

function updateConnectorPaths() {
  const trajectoryNode = nodeElements.find(({ config }) => config.title === "Trajectory");

  if (!trajectoryNode) {
    return;
  }

  const trajectoryRect = trajectoryNode.element.getBoundingClientRect();
  const rootRect = root.getBoundingClientRect();
  const startX = trajectoryRect.left - rootRect.left + trajectoryRect.width / 2;
  const startY = trajectoryRect.top - rootRect.top + trajectoryRect.height / 2;
  const trajectoryRadius = trajectoryRect.width / 2;

  connectorSvg.setAttribute("viewBox", `0 0 ${root.clientWidth} ${root.clientHeight}`);

  nodeElements.forEach(({ element, config }) => {
    if (config.title === "Trajectory") {
      return;
    }

    const path = connectorMap.get(config.title);

    if (!path) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const endX = rect.left - rootRect.left + rect.width / 2;
    const endY = rect.top - rootRect.top + rect.height / 2;
    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.hypot(dx, dy) || 1;
    const ux = dx / distance;
    const uy = dy / distance;
    const endRadius = rect.width / 2;
    const sx = startX + ux * (trajectoryRadius - 6);
    const sy = startY + uy * (trajectoryRadius - 6);
    const ex = endX - ux * (endRadius - 10);
    const ey = endY - uy * (endRadius - 10);
    const curve = Math.min(42, Math.max(18, distance * 0.12));
    const c1x = sx + dx * 0.28 - uy * curve;
    const c1y = sy + dy * 0.28 + ux * curve;
    const c2x = sx + dx * 0.72 - uy * curve * 0.7;
    const c2y = sy + dy * 0.72 + ux * curve * 0.7;

    path.setAttribute("d", `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`);
  });
}

function clampPosition(layoutNode, availableWidth, availableHeight) {
  const half = layoutNode.size / 2;
  layoutNode.x = clamp(layoutNode.x, half, availableWidth - half);
  layoutNode.y = clamp(layoutNode.y, half, availableHeight - half);
}

function enforceTrajectorySpacing(layoutNodes, trajectoryNode, availableWidth, availableHeight) {
  if (!trajectoryNode) {
    return;
  }

  const minGap = 26;

  layoutNodes.forEach((node) => {
    if (node === trajectoryNode) {
      return;
    }

    const dx = node.x - trajectoryNode.x;
    const dy = node.y - trajectoryNode.y;
    const distance = Math.hypot(dx, dy) || 0.001;
    const minDistance = (node.size + trajectoryNode.size) / 2 + minGap;

    if (distance >= minDistance) {
      return;
    }

    const push = minDistance - distance;
    node.x += (dx / distance) * push;
    node.y += (dy / distance) * push;
    clampPosition(node, availableWidth, availableHeight);
  });
}

function resolveCollisions(layoutNodes, availableWidth, availableHeight) {
  const gap = 14;

  for (let iteration = 0; iteration < 80; iteration += 1) {
    let moved = false;

    for (let i = 0; i < layoutNodes.length; i += 1) {
      for (let j = i + 1; j < layoutNodes.length; j += 1) {
        const a = layoutNodes[i];
        const b = layoutNodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.001;
        const minDistance = (a.size + b.size) / 2 + gap;

        if (distance >= minDistance) {
          continue;
        }

        const overlap = minDistance - distance;
        const nx = dx / distance;
        const ny = dy / distance;

        if (a.protected && !b.protected) {
          b.x += nx * overlap;
          b.y += ny * overlap;
          clampPosition(b, availableWidth, availableHeight);
        } else if (!a.protected && b.protected) {
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          clampPosition(a, availableWidth, availableHeight);
        } else {
          const push = overlap / 2;
          a.x -= nx * push;
          a.y -= ny * push;
          b.x += nx * push;
          b.y += ny * push;
          clampPosition(a, availableWidth, availableHeight);
          clampPosition(b, availableWidth, availableHeight);
        }

        moved = true;
      }
    }

    if (!moved) {
      break;
    }
  }
}

function resolveFocusedCollisions(layoutNodes, availableWidth, availableHeight) {
  const gap = 18;

  for (let iteration = 0; iteration < 80; iteration += 1) {
    let moved = false;

    for (let i = 0; i < layoutNodes.length; i += 1) {
      for (let j = i + 1; j < layoutNodes.length; j += 1) {
        const a = layoutNodes[i];
        const b = layoutNodes[j];
        const dx = b.focusedX - a.focusedX;
        const dy = b.focusedY - a.focusedY;
        const distance = Math.hypot(dx, dy) || 0.001;
        const minDistance = (a.size + b.size) / 2 + gap;

        if (distance >= minDistance) {
          continue;
        }

        const overlap = minDistance - distance;
        const nx = dx / distance;
        const ny = dy / distance;

        if (a.protected && !b.protected) {
          b.focusedX += nx * overlap;
          b.focusedY += ny * overlap;
          const clampedB = { x: b.focusedX, y: b.focusedY, size: b.size };
          clampPosition(clampedB, availableWidth, availableHeight);
          b.focusedX = clampedB.x;
          b.focusedY = clampedB.y;
        } else if (!a.protected && b.protected) {
          a.focusedX -= nx * overlap;
          a.focusedY -= ny * overlap;
          const clampedA = { x: a.focusedX, y: a.focusedY, size: a.size };
          clampPosition(clampedA, availableWidth, availableHeight);
          a.focusedX = clampedA.x;
          a.focusedY = clampedA.y;
        } else {
          const push = overlap / 2;
          a.focusedX -= nx * push;
          a.focusedY -= ny * push;
          b.focusedX += nx * push;
          b.focusedY += ny * push;
          const clampedA = { x: a.focusedX, y: a.focusedY, size: a.size };
          const clampedB = { x: b.focusedX, y: b.focusedY, size: b.size };
          clampPosition(clampedA, availableWidth, availableHeight);
          clampPosition(clampedB, availableWidth, availableHeight);
          a.focusedX = clampedA.x;
          a.focusedY = clampedA.y;
          b.focusedX = clampedB.x;
          b.focusedY = clampedB.y;
        }

        moved = true;
      }
    }

    if (!moved) {
      break;
    }
  }
}

function layoutFramework() {

  const availableWidth = root.clientWidth;
  const availableHeight = root.clientHeight;

  if (!availableWidth || !availableHeight) {
    return;
  }

  const compactness = Math.min(
    availableWidth / BASE_WIDTH,
    availableHeight / BASE_HEIGHT
  );

  const nodeScale = clamp(compactness, 0.74, 1);
  const maxNodeSize = Math.max(...nodes.map((node) => node.size * nodeScale));
  const halfMax = maxNodeSize / 2;

  const basePositions = nodes.map((node) => ({
    x: (node.x / 100) * BASE_WIDTH,
    y: (node.y / 100) * BASE_HEIGHT
  }));

  const minBaseX = Math.min(...basePositions.map((point) => point.x));
  const maxBaseX = Math.max(...basePositions.map((point) => point.x));
  const minBaseY = Math.min(...basePositions.map((point) => point.y));
  const maxBaseY = Math.max(...basePositions.map((point) => point.y));

  const baseCenterX = (minBaseX + maxBaseX) / 2;
  const baseCenterY = (minBaseY + maxBaseY) / 2;
  const baseSpreadX = maxBaseX - minBaseX;
  const baseSpreadY = maxBaseY - minBaseY;

  const edgePadding = clamp(BASE_PADDING * nodeScale, 18, 28);
  const usableWidth = Math.max(availableWidth - halfMax * 2 - edgePadding * 2, 40);
  const usableHeight = Math.max(availableHeight - halfMax * 2 - edgePadding * 2, 40);

  const positionScaleX = Math.min(usableWidth / baseSpreadX, 1);
  const positionScaleY = Math.min(usableHeight / baseSpreadY, 1);
  const centerX = availableWidth / 2;
  const centerY = availableHeight / 2;
  const layoutNodes = [];

  nodeElements.forEach(({ element, config }) => {
    const size = config.size * nodeScale;
    const baseX = (config.x / 100) * BASE_WIDTH;
    const baseY = (config.y / 100) * BASE_HEIGHT;
    const left = centerX + (baseX - baseCenterX) * positionScaleX;
    const top = centerY + (baseY - baseCenterY) * positionScaleY;

    layoutNodes.push({
      element,
      config,
      size,
      x: left,
      y: top,
      protected: config.title === "Trajectory"
    });
  });

  const odNode = layoutNodes.find((node) => node.config.title === "OD Analysis");
  if (odNode) {
    odNode.x = Math.max(odNode.size / 2 + edgePadding, availableWidth * 0.17);
    odNode.y = Math.min(availableHeight - odNode.size / 2 - edgePadding, availableHeight * 0.86);
    clampPosition(odNode, availableWidth, availableHeight);
  }

  resolveCollisions(layoutNodes, availableWidth, availableHeight);

  const trajectoryNode = layoutNodes.find((node) => node.protected);
  enforceTrajectorySpacing(layoutNodes, trajectoryNode, availableWidth, availableHeight);
  resolveCollisions(layoutNodes, availableWidth, availableHeight);

  layoutNodes.forEach(({ element, config, size, x, y }) => {
    let shiftX = 0;
    let shiftY = 0;

    if (trajectoryNode && !element.classList.contains("rf-node--trajectory")) {
      const dx = trajectoryNode.x - x;
      const dy = trajectoryNode.y - y;
      const distance = Math.hypot(dx, dy) || 1;
      const weight = config.title === "PM-Tree" ? 1.65 : 1.18;
      const approach = clamp(Math.min(distance * 0.42 * weight, 150), 48, 150);
      shiftX = (dx / distance) * approach;
      shiftY = (dy / distance) * approach;
    }

    element._layoutMeta = {
      element,
      config,
      size,
      protected: element.classList.contains("rf-node--trajectory"),
      focusedX: x + shiftX,
      focusedY: y + shiftY
    };
  });

  const focusedNodes = layoutNodes.map(({ element }) => element._layoutMeta);
  resolveFocusedCollisions(focusedNodes, availableWidth, availableHeight);

  layoutNodes.forEach(({ element, config, size, x, y }) => {
    const focusedNode = element._layoutMeta;
    const focusedLeft = focusedNode ? focusedNode.focusedX : x;
    const focusedTop = focusedNode ? focusedNode.focusedY : y;

    element.style.setProperty("--rf-base-left", `${x}px`);
    element.style.setProperty("--rf-base-top", `${y}px`);
    element.style.setProperty("--rf-focused-left", `${focusedLeft}px`);
    element.style.setProperty("--rf-focused-top", `${focusedTop}px`);
    element.style.left = trajectoryFocusActive && !element.classList.contains("rf-node--trajectory")
      ? `${focusedLeft}px`
      : `${x}px`;
    element.style.top = trajectoryFocusActive && !element.classList.contains("rf-node--trajectory")
      ? `${focusedTop}px`
      : `${y}px`;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.setProperty("--rf-node-scale", `${nodeScale}`);
    element.style.setProperty("--rf-node-padding", `${clamp(18 * nodeScale, 14, 20)}px`);
    element.style.setProperty("--rf-title-size", `${clamp(1.15 * nodeScale, 0.92, 1.15)}rem`);
    element.style.setProperty("--rf-desc-size", `${clamp(0.85 * nodeScale, 0.68, 0.85)}rem`);
    delete element._layoutMeta;
  });

  updateConnectorPaths();
  scheduleConnectorSync();
}

window.addEventListener("resize", layoutFramework);
window.addEventListener("load", layoutFramework);

if (typeof ResizeObserver !== "undefined") {
  const resizeObserver = new ResizeObserver(() => {
    layoutFramework();
  });

  resizeObserver.observe(root);
  if (root.parentElement) {
    resizeObserver.observe(root.parentElement);
  }
}

layoutFramework();
