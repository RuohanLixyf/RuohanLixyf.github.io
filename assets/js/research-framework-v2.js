(function () {
  const root = document.getElementById("research-framework-v2");
  const pipeline = root && root.querySelector(".rf2-pipeline");
  const svg = pipeline && pipeline.querySelector(".rf2-connectors");

  if (!pipeline || !svg) return;

  const links = [
    ["source", "tree"],
    ["source", "match"],
    ["source", "translate"],
    ["tree", "intelligence"],
    ["match", "intelligence"],
    ["translate", "intelligence"],
    ["intelligence", "planning"]
  ];

  function point(name, edge) {
    const element = pipeline.querySelector(`[data-node="${name}"]`);
    const rect = element.getBoundingClientRect();
    const parent = pipeline.getBoundingClientRect();
    return {
      x: rect.left - parent.left + rect.width / 2,
      y: edge === "top" ? rect.top - parent.top : rect.bottom - parent.top
    };
  }

  function renderConnectors() {
    if (window.matchMedia("(max-width: 760px)").matches) {
      svg.innerHTML = "";
      return;
    }

    svg.setAttribute("viewBox", `0 0 ${pipeline.clientWidth} ${pipeline.clientHeight}`);
    svg.innerHTML = links.map(([from, to], index) => {
      const start = point(from, "bottom");
      const end = point(to, "top");
      const mid = start.y + (end.y - start.y) * 0.5;
      return `<path class="rf2-connector" style="animation-delay:${index * -0.32}s" d="M ${start.x} ${start.y} C ${start.x} ${mid}, ${end.x} ${mid}, ${end.x} ${end.y}"></path>`;
    }).join("");
  }

  const observer = new ResizeObserver(renderConnectors);
  observer.observe(pipeline);
  window.addEventListener("load", renderConnectors);
  window.addEventListener("resize", renderConnectors, { passive: true });
  renderConnectors();
}());
