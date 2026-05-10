import * as React from "react";

type LayeredPolygonCloudProps = {
  accentColor?: string;
  size?: number | string;
  density?: number;
  children?: React.ReactNode;
  className?: string;
};

type PolygonLayer = {
  points: string;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  opacity: number;
  blur: number;
  color: string;
};

const BASE_POLYGONS = [
  "18,8 79,10 92,38 76,84 30,92 8,56",
  "22,14 70,4 94,28 86,74 48,94 12,70 6,34",
  "12,18 58,6 88,18 94,56 72,88 28,92 8,62",
  "18,10 44,4 84,16 96,42 80,82 42,96 10,70 6,34",
  "10,28 34,8 76,8 94,36 84,74 52,92 18,80 4,52",
  "22,6 66,8 88,30 90,70 62,92 24,88 8,54",
  "14,16 52,4 84,18 96,54 70,90 24,90 4,46",
  "8,24 32,8 68,6 92,24 94,58 76,86 34,94 10,68"
];

const PALETTE = [
  "rgba(227, 241, 251, 0.72)",
  "rgba(217, 237, 248, 0.62)",
  "rgba(208, 233, 247, 0.54)",
  "rgba(221, 230, 248, 0.5)",
  "rgba(232, 236, 251, 0.44)",
  "rgba(202, 226, 244, 0.42)"
];

const INNER_PALETTE = [
  "rgba(181, 213, 236, 0.34)",
  "rgba(170, 206, 235, 0.3)",
  "rgba(186, 199, 236, 0.28)"
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function getSizeStyle(size: number | string | undefined) {
  if (typeof size === "number") {
    return { width: `${size}px`, height: `${size}px` };
  }

  if (typeof size === "string" && size.trim()) {
    return { width: size, height: size };
  }

  return undefined;
}

function tintColor(base: string | undefined, alpha: number) {
  if (!base) {
    return `rgba(165, 205, 232, ${alpha})`;
  }

  if (base.startsWith("rgb(")) {
    return base.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
  }

  if (base.startsWith("rgba(")) {
    const channels = base.slice(5, -1).split(",").slice(0, 3).join(",");
    return `rgba(${channels}, ${alpha})`;
  }

  return base;
}

function buildLayers(density: number, accentColor?: string): PolygonLayer[] {
  const layerCount = clamp(Math.round(density), 8, 15);
  const layers: PolygonLayer[] = [];

  for (let index = 0; index < layerCount; index += 1) {
    const ratio = index / Math.max(layerCount - 1, 1);
    const polygon = BASE_POLYGONS[index % BASE_POLYGONS.length];
    const angle = index * 31;
    const radius = 6 + ratio * 20;
    const x = 50 + Math.cos((angle * Math.PI) / 180) * radius * 0.78;
    const y = 50 + Math.sin((angle * Math.PI) / 180) * radius * 0.72;
    const scale = 1.12 - ratio * 0.34 + (index % 3) * 0.03;
    const rotate = index % 2 === 0 ? angle * 0.9 : angle * -0.7;
    const opacity = 0.26 - ratio * 0.12;
    const blur = 3 + ratio * 16;

    let color = PALETTE[index % PALETTE.length];
    if (ratio < 0.34) {
      color = INNER_PALETTE[index % INNER_PALETTE.length];
    }
    if (ratio < 0.24 && accentColor) {
      color = tintColor(accentColor, 0.18 - ratio * 0.03);
    }

    layers.push({
      points: polygon,
      x,
      y,
      scale,
      rotate,
      opacity,
      blur,
      color
    });
  }

  return layers;
}

function buildNodePoints() {
  return [
    { x: 28, y: 34, r: 1.8 },
    { x: 38, y: 52, r: 1.4 },
    { x: 52, y: 30, r: 1.7 },
    { x: 66, y: 42, r: 1.5 },
    { x: 58, y: 62, r: 1.6 },
    { x: 40, y: 68, r: 1.3 },
    { x: 72, y: 62, r: 1.2 }
  ];
}

export function LayeredPolygonCloud({
  accentColor,
  size = 320,
  density = 11,
  children,
  className
}: LayeredPolygonCloudProps) {
  const layers = React.useMemo(
    () => buildLayers(density, accentColor),
    [accentColor, density]
  );

  const sizeStyle = getSizeStyle(size);
  const nodePoints = buildNodePoints();

  return (
    <div
      className={joinClassNames(
        "relative isolate aspect-square max-w-full",
        className
      )}
      style={sizeStyle}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id="polygon-cloud-soften" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>

        {layers.map((layer, index) => (
          <polygon
            key={`polygon-layer-${index}`}
            points={layer.points}
            fill={layer.color}
            opacity={layer.opacity}
            style={{
              filter: `blur(${layer.blur}px)`
            }}
            transform={`translate(${layer.x - 50} ${layer.y - 50}) rotate(${layer.rotate} 50 50) scale(${layer.scale})`}
          />
        ))}

        <g opacity="0.28" filter="url(#polygon-cloud-soften)">
          <path
            d="M28 34 C34 42, 42 48, 52 30"
            fill="none"
            stroke="rgba(120, 163, 191, 0.75)"
            strokeWidth="0.45"
            strokeDasharray="1.6 2.6"
            strokeLinecap="round"
          />
          <path
            d="M38 52 C46 56, 52 58, 58 62"
            fill="none"
            stroke="rgba(123, 170, 198, 0.65)"
            strokeWidth="0.45"
            strokeDasharray="1.6 2.6"
            strokeLinecap="round"
          />
          <path
            d="M52 30 C60 34, 64 38, 66 42"
            fill="none"
            stroke="rgba(130, 160, 204, 0.62)"
            strokeWidth="0.45"
            strokeDasharray="1.6 2.6"
            strokeLinecap="round"
          />
          <path
            d="M66 42 C68 50, 70 56, 72 62"
            fill="none"
            stroke="rgba(117, 165, 191, 0.58)"
            strokeWidth="0.45"
            strokeDasharray="1.6 2.6"
            strokeLinecap="round"
          />
          <path
            d="M40 68 C48 66, 54 64, 58 62"
            fill="none"
            stroke="rgba(126, 167, 196, 0.56)"
            strokeWidth="0.42"
            strokeDasharray="1.4 2.4"
            strokeLinecap="round"
          />
        </g>

        <g>
          {nodePoints.map((point, index) => (
            <circle
              key={`polygon-node-${index}`}
              cx={point.x}
              cy={point.y}
              r={point.r}
              fill="rgba(245, 250, 255, 0.92)"
            />
          ))}
        </g>
      </svg>

      <div className="absolute inset-[18%] z-10 flex items-center justify-center">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export default LayeredPolygonCloud;
