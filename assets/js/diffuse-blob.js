(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderContent(children) {
    if (children == null) {
      return "";
    }

    if (typeof children === "string") {
      return children;
    }

    if (children instanceof Node) {
      const wrapper = document.createElement("div");
      wrapper.appendChild(children.cloneNode(true));
      return wrapper.innerHTML;
    }

    return String(children);
  }

  function buildStyle(props) {
    const styles = [];

    if (props.accentColor) {
      styles.push(`--db-accent: ${props.accentColor}`);
    }

    if (props.size) {
      const sizeValue = typeof props.size === "number" ? `${props.size}px` : props.size;
      styles.push(`--db-size: ${sizeValue}`);
    }

    return styles.length ? ` style="${styles.join("; ")}"` : "";
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function buildPolygonLayers(density, accentColor) {
    const basePolygons = [
      "18,8 79,10 92,38 76,84 30,92 8,56",
      "22,14 70,4 94,28 86,74 48,94 12,70 6,34",
      "12,18 58,6 88,18 94,56 72,88 28,92 8,62",
      "18,10 44,4 84,16 96,42 80,82 42,96 10,70 6,34",
      "10,28 34,8 76,8 94,36 84,74 52,92 18,80 4,52",
      "22,6 66,8 88,30 90,70 62,92 24,88 8,54",
      "14,16 52,4 84,18 96,54 70,90 24,90 4,46",
      "8,24 32,8 68,6 92,24 94,58 76,86 34,94 10,68"
    ];
    const palette = [
      "rgba(227, 241, 251, 0.72)",
      "rgba(217, 237, 248, 0.62)",
      "rgba(208, 233, 247, 0.54)",
      "rgba(221, 230, 248, 0.50)",
      "rgba(232, 236, 251, 0.44)",
      "rgba(202, 226, 244, 0.42)"
    ];
    const innerPalette = [
      "rgba(181, 213, 236, 0.34)",
      "rgba(170, 206, 235, 0.30)",
      "rgba(186, 199, 236, 0.28)"
    ];
    const layerCount = clamp(Math.round(density || 11), 8, 15);
    const layers = [];

    for (let index = 0; index < layerCount; index += 1) {
      const ratio = index / Math.max(layerCount - 1, 1);
      const angle = index * 31;
      const radius = 6 + ratio * 20;
      const x = 50 + Math.cos((angle * Math.PI) / 180) * radius * 0.78;
      const y = 50 + Math.sin((angle * Math.PI) / 180) * radius * 0.72;
      const scale = 1.12 - ratio * 0.34 + (index % 3) * 0.03;
      const rotate = index % 2 === 0 ? angle * 0.9 : angle * -0.7;
      const opacity = 0.26 - ratio * 0.12;
      const blur = 3 + ratio * 16;

      let color = palette[index % palette.length];
      if (ratio < 0.34) {
        color = innerPalette[index % innerPalette.length];
      }
      if (ratio < 0.24 && accentColor) {
        color = accentColor;
      }

      layers.push(`
        <polygon
          points="${basePolygons[index % basePolygons.length]}"
          fill="${color}"
          opacity="${opacity}"
          style="filter: blur(${blur}px);"
          transform="translate(${x - 50} ${y - 50}) rotate(${rotate} 50 50) scale(${scale})"
        ></polygon>
      `);
    }

    return layers.join("");
  }

  function DiffuseBlob(props = {}) {
    const title = props.title ? `<div class="diffuse-blob__title">${escapeHtml(props.title)}</div>` : "";
    const subtitle = props.subtitle ? `<div class="diffuse-blob__subtitle">${props.subtitle}</div>` : "";
    const caption = props.caption ? `<div class="diffuse-blob__caption">${props.caption}</div>` : "";
    const className = props.className ? ` ${escapeHtml(props.className)}` : "";
    const children = renderContent(props.children);

    return `
      <div class="diffuse-blob${className}"${buildStyle(props)}>
        <div class="diffuse-blob__field">
          <div class="diffuse-blob__layer diffuse-blob__layer--outer"></div>
          <div class="diffuse-blob__layer diffuse-blob__layer--halo"></div>
          <div class="diffuse-blob__layer diffuse-blob__layer--core"></div>
          <div class="diffuse-blob__layer diffuse-blob__layer--mist"></div>

          <svg class="diffuse-blob__mesh" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <g class="diffuse-blob__mesh-lines">
              <path d="M14 58 C24 36, 42 28, 56 42 S82 72, 92 52"></path>
              <path d="M18 30 C34 24, 44 42, 54 58 S74 78, 88 68"></path>
              <path d="M22 76 C34 64, 46 62, 58 72 S78 82, 86 74"></path>
              <path d="M42 18 C48 30, 52 44, 54 60"></path>
              <path d="M64 22 C62 34, 64 48, 72 60"></path>
            </g>
            <g class="diffuse-blob__mesh-points">
              <circle cx="22" cy="31" r="1.4"></circle>
              <circle cx="34" cy="46" r="1.2"></circle>
              <circle cx="53" cy="41" r="1.6"></circle>
              <circle cx="69" cy="33" r="1.1"></circle>
              <circle cx="78" cy="62" r="1.5"></circle>
              <circle cx="40" cy="70" r="1.3"></circle>
              <circle cx="58" cy="73" r="1.4"></circle>
            </g>
          </svg>

          <div class="diffuse-blob__particles" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="diffuse-blob__content">
            ${title}
            <div class="diffuse-blob__motif">${children}</div>
            ${subtitle}
            ${caption}
          </div>
        </div>
      </div>
    `;
  }

  DiffuseBlob.create = function create(props = {}) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = DiffuseBlob(props).trim();
    return wrapper.firstElementChild;
  };

  function LayeredPolygonCloud(props = {}) {
    const title = props.title ? `<div class="layered-polygon-cloud__title">${escapeHtml(props.title)}</div>` : "";
    const subtitle = props.subtitle ? `<div class="layered-polygon-cloud__subtitle">${props.subtitle}</div>` : "";
    const caption = props.caption ? `<div class="layered-polygon-cloud__caption">${props.caption}</div>` : "";
    const className = props.className ? ` ${escapeHtml(props.className)}` : "";
    const children = renderContent(props.children);

    return `
      <div class="layered-polygon-cloud${className}"${buildStyle(props)}>
        <div class="layered-polygon-cloud__field">
          <svg class="layered-polygon-cloud__polygons" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            ${buildPolygonLayers(props.density, props.accentColor)}
            <g class="layered-polygon-cloud__network">
              <path d="M28 34 C34 42, 42 48, 52 30"></path>
              <path d="M38 52 C46 56, 52 58, 58 62"></path>
              <path d="M52 30 C60 34, 64 38, 66 42"></path>
              <path d="M66 42 C68 50, 70 56, 72 62"></path>
              <path d="M40 68 C48 66, 54 64, 58 62"></path>
            </g>
            <g class="layered-polygon-cloud__nodes">
              <circle cx="28" cy="34" r="1.8"></circle>
              <circle cx="38" cy="52" r="1.4"></circle>
              <circle cx="52" cy="30" r="1.7"></circle>
              <circle cx="66" cy="42" r="1.5"></circle>
              <circle cx="58" cy="62" r="1.6"></circle>
              <circle cx="40" cy="68" r="1.3"></circle>
              <circle cx="72" cy="62" r="1.2"></circle>
            </g>
          </svg>
          <div class="layered-polygon-cloud__content">
            ${title}
            <div class="layered-polygon-cloud__motif">${children}</div>
            ${subtitle}
            ${caption}
          </div>
        </div>
      </div>
    `;
  }

  LayeredPolygonCloud.create = function create(props = {}) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = LayeredPolygonCloud(props).trim();
    return wrapper.firstElementChild;
  };

  const ACADEMIC_GALAXY_THEMES = {
    pmtree: {
      density: 13,
      clusterAnchors: [
        { x: 49, y: 46, weight: 1 },
        { x: 40, y: 32, weight: 0.68 },
        { x: 60, y: 33, weight: 0.66 },
        { x: 34, y: 61, weight: 0.54 },
        { x: 66, y: 60, weight: 0.54 }
      ],
      polygonColors: [
        "rgba(230, 238, 252, 0.52)",
        "rgba(214, 229, 248, 0.46)",
        "rgba(204, 221, 246, 0.42)",
        "rgba(188, 208, 240, 0.36)"
      ],
      particleColor: "rgba(237, 245, 255, 0.82)",
      lineColor: "rgba(121, 154, 196, 0.46)",
      curveColor: "rgba(136, 169, 209, 0.42)"
    },
    mapmatching: {
      density: 11,
      clusterAnchors: [
        { x: 46, y: 50, weight: 1 },
        { x: 34, y: 58, weight: 0.62 },
        { x: 58, y: 44, weight: 0.72 },
        { x: 70, y: 36, weight: 0.54 },
        { x: 26, y: 68, weight: 0.42 }
      ],
      polygonColors: [
        "rgba(223, 245, 246, 0.48)",
        "rgba(203, 236, 238, 0.42)",
        "rgba(188, 230, 234, 0.36)",
        "rgba(164, 216, 224, 0.28)"
      ],
      particleColor: "rgba(237, 251, 251, 0.8)",
      lineColor: "rgba(82, 170, 177, 0.44)",
      curveColor: "rgba(65, 182, 191, 0.46)"
    },
    translation: {
      density: 10,
      clusterAnchors: [
        { x: 50, y: 49, weight: 1 },
        { x: 36, y: 38, weight: 0.58 },
        { x: 65, y: 36, weight: 0.58 },
        { x: 40, y: 63, weight: 0.5 },
        { x: 62, y: 64, weight: 0.5 }
      ],
      polygonColors: [
        "rgba(237, 233, 251, 0.5)",
        "rgba(226, 221, 247, 0.44)",
        "rgba(215, 211, 244, 0.38)",
        "rgba(201, 196, 237, 0.28)"
      ],
      particleColor: "rgba(247, 244, 255, 0.82)",
      lineColor: "rgba(131, 125, 189, 0.4)",
      curveColor: "rgba(154, 143, 205, 0.42)"
    },
    planning: {
      density: 9,
      clusterAnchors: [
        { x: 50, y: 52, weight: 1 },
        { x: 34, y: 48, weight: 0.52 },
        { x: 67, y: 49, weight: 0.54 },
        { x: 42, y: 66, weight: 0.44 },
        { x: 60, y: 66, weight: 0.42 }
      ],
      polygonColors: [
        "rgba(252, 240, 219, 0.44)",
        "rgba(248, 228, 198, 0.38)",
        "rgba(244, 218, 185, 0.34)",
        "rgba(234, 195, 147, 0.22)"
      ],
      particleColor: "rgba(255, 248, 237, 0.82)",
      lineColor: "rgba(184, 138, 74, 0.36)",
      curveColor: "rgba(205, 154, 88, 0.4)"
    },
    mobility: {
      density: 12,
      clusterAnchors: [
        { x: 49, y: 50, weight: 1 },
        { x: 36, y: 40, weight: 0.62 },
        { x: 62, y: 38, weight: 0.64 },
        { x: 34, y: 62, weight: 0.46 },
        { x: 66, y: 63, weight: 0.5 }
      ],
      polygonColors: [
        "rgba(220, 236, 250, 0.48)",
        "rgba(204, 226, 246, 0.42)",
        "rgba(189, 214, 241, 0.36)",
        "rgba(154, 186, 226, 0.24)"
      ],
      particleColor: "rgba(239, 246, 255, 0.8)",
      lineColor: "rgba(90, 129, 188, 0.4)",
      curveColor: "rgba(86, 142, 212, 0.42)"
    }
  };

  function buildAcademicPolygons(theme, density) {
    const basePolygons = [
      "18,8 79,10 92,38 76,84 30,92 8,56",
      "22,14 70,4 94,28 86,74 48,94 12,70 6,34",
      "12,18 58,6 88,18 94,56 72,88 28,92 8,62",
      "18,10 44,4 84,16 96,42 80,82 42,96 10,70 6,34",
      "10,28 34,8 76,8 94,36 84,74 52,92 18,80 4,52",
      "22,6 66,8 88,30 90,70 62,92 24,88 8,54",
      "14,16 52,4 84,18 96,54 70,90 24,90 4,46",
      "8,24 32,8 68,6 92,24 94,58 76,86 34,94 10,68"
    ];
    const layerCount = clamp(Math.round(density || theme.density || 11), 8, 15);
    const layers = [];
    const anchors = theme.clusterAnchors || [{ x: 50, y: 50, weight: 1 }];

    for (let index = 0; index < layerCount; index += 1) {
      const ratio = index / Math.max(layerCount - 1, 1);
      const anchor = anchors[index % anchors.length];
      const orbit = (index * 37 + (index % 3) * 11) * (Math.PI / 180);
      const localRadius = 3.5 + ratio * 9.5 + (index % 2) * 1.3;
      const offsetX = Math.cos(orbit) * localRadius * (0.72 + (index % 3) * 0.08);
      const offsetY = Math.sin(orbit) * localRadius * (0.58 + (index % 4) * 0.07);
      const x = anchor.x + offsetX * anchor.weight;
      const y = anchor.y + offsetY * anchor.weight;
      const scale = 0.9 - ratio * 0.16 + (index % 4) * 0.03 + anchor.weight * 0.08;
      const rotate = index % 2 === 0 ? (index * 26) + anchor.weight * 14 : (index * -21) - anchor.weight * 10;
      const opacity = 0.28 - ratio * 0.1 + anchor.weight * 0.02;
      const blur = 3.4 + ratio * 9.5;
      const color = theme.polygonColors[index % theme.polygonColors.length];

      layers.push(`
        <polygon
          points="${basePolygons[index % basePolygons.length]}"
          fill="${color}"
          opacity="${opacity.toFixed(3)}"
          style="filter: blur(${blur}px);"
          transform="translate(${x - 50} ${y - 50}) rotate(${rotate} 50 50) scale(${scale})"
        ></polygon>
      `);
    }

    return layers.join("");
  }

  function buildAcademicDiffuseBands(variant) {
    if (variant === "pmtree") {
      return `
        <g class="academic-galaxy__bands">
          <path d="M28 60 C36 46, 44 34, 50 28 C56 34, 64 46, 72 60"></path>
          <path d="M34 44 C40 38, 46 34, 50 32 C54 34, 60 38, 66 44"></path>
          <path d="M38 68 C42 60, 46 54, 50 50 C54 54, 58 60, 62 68"></path>
        </g>
      `;
    }

    if (variant === "mapmatching") {
      return `
        <g class="academic-galaxy__bands">
          <path d="M20 68 C34 56, 44 46, 54 34 C62 28, 72 28, 82 38"></path>
          <path d="M24 74 C38 64, 50 54, 62 44 C70 38, 78 40, 84 48"></path>
          <path d="M30 58 C42 50, 54 46, 68 48"></path>
        </g>
      `;
    }

    if (variant === "translation") {
      return `
        <g class="academic-galaxy__bands">
          <path d="M26 38 C34 34, 42 34, 48 40 C54 46, 58 54, 64 60 C70 66, 78 68, 84 64"></path>
          <path d="M22 66 C30 62, 38 58, 46 52 C54 46, 62 42, 72 42"></path>
          <path d="M34 30 C44 40, 50 50, 56 62"></path>
        </g>
      `;
    }

    if (variant === "planning") {
      return `
        <g class="academic-galaxy__bands">
          <path d="M18 58 C28 52, 40 48, 52 48 C64 48, 76 52, 88 60"></path>
          <path d="M24 34 C36 32, 48 34, 62 40 C72 44, 80 50, 86 56"></path>
          <path d="M30 70 C42 66, 54 64, 68 66"></path>
        </g>
      `;
    }

    return `
      <g class="academic-galaxy__bands">
        <path d="M18 62 C30 50, 42 42, 54 42 C66 42, 78 50, 88 62"></path>
        <path d="M24 42 C34 38, 44 38, 54 44 C64 50, 74 58, 82 68"></path>
        <path d="M28 72 C40 66, 52 62, 66 62"></path>
      </g>
    `;
  }

  function AcademicGalaxyCluster(props = {}) {
    const variant = props.variant || "pmtree";
    const theme = ACADEMIC_GALAXY_THEMES[variant] || ACADEMIC_GALAXY_THEMES.pmtree;
    const title = props.title ? `<div class="academic-galaxy__title">${escapeHtml(props.title)}</div>` : "";
    const subtitle = props.subtitle ? `<div class="academic-galaxy__subtitle">${props.subtitle}</div>` : "";
    const caption = props.caption ? `<div class="academic-galaxy__caption">${props.caption}</div>` : "";
    const className = props.className ? ` ${escapeHtml(props.className)}` : "";
    const children = renderContent(props.children);

    return `
      <div class="academic-galaxy academic-galaxy--${variant}${className}"${buildStyle(props)}>
        <div class="academic-galaxy__field">
          <svg class="academic-galaxy__svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            ${buildAcademicPolygons(theme, props.density)}
            ${buildAcademicDiffuseBands(variant)}
          </svg>
          <div class="academic-galaxy__content">
            ${title}
            ${children ? `<div class="academic-galaxy__motif">${children}</div>` : ""}
            ${subtitle}
            ${caption}
          </div>
        </div>
      </div>
    `;
  }

  AcademicGalaxyCluster.create = function create(props = {}) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = AcademicGalaxyCluster(props).trim();
    return wrapper.firstElementChild;
  };

  window.DiffuseBlob = DiffuseBlob;
  window.LayeredPolygonCloud = LayeredPolygonCloud;
  window.AcademicGalaxyCluster = AcademicGalaxyCluster;
}());
