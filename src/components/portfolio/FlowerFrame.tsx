import type { ReactNode } from "react";

/**
 * Flower-shaped frame around content (image, text...).
 * Uses an SVG clip-path + a colored outline behind for the Stella Social vibe.
 */
export function FlowerFrame({
  children,
  color = "var(--magenta)",
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  // Unique id so multiple frames don't collide
  const id = `flower-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            {/* 6-petal soft flower */}
            <path d="M0.5,0 C0.62,0.05 0.7,0.12 0.72,0.22 C0.85,0.18 0.95,0.28 0.95,0.4 C1,0.5 0.95,0.62 0.85,0.7 C0.92,0.82 0.85,0.95 0.72,0.95 C0.65,1 0.55,0.98 0.5,0.92 C0.45,0.98 0.35,1 0.28,0.95 C0.15,0.95 0.08,0.82 0.15,0.7 C0.05,0.62 0,0.5 0.05,0.4 C0.05,0.28 0.15,0.18 0.28,0.22 C0.3,0.12 0.38,0.05 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Colored outline behind */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.06]"
        style={{
          background: color,
          clipPath: `url(#${id})`,
          WebkitClipPath: `url(#${id})`,
        }}
      />

      {/* Clipped content */}
      <div
        className="relative"
        style={{
          clipPath: `url(#${id})`,
          WebkitClipPath: `url(#${id})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Tiny decorative SVG flower used as sticker. */
export function FlowerSticker({
  color = "var(--magenta)",
  size = 40,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 10 C58 10 64 18 62 28 C70 22 82 26 84 36 C86 46 78 54 68 54 C76 60 78 72 70 78 C62 84 52 80 50 70 C48 80 38 84 30 78 C22 72 24 60 32 54 C22 54 14 46 16 36 C18 26 30 22 38 28 C36 18 42 10 50 10 Z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <circle cx="50" cy="48" r="8" fill="var(--cream)" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

/** Tiny star sprinkle SVG. */
export function Star({
  color = "var(--magenta)",
  size = 24,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1 L14 9 L22 12 L14 15 L12 23 L10 15 L2 12 L10 9 Z"
        fill={color}
      />
    </svg>
  );
}

/** Wavy SVG divider between sections. */
export function WavyDivider({
  color = "var(--magenta)",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full leading-[0] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
        aria-hidden="true"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
