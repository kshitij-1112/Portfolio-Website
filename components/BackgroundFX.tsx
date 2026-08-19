"use client";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 grid-veil" />

      <div
        className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, #4cf3ff, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #9b6bff, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-[0.12] blur-[110px]"
        style={{ background: "radial-gradient(circle, #5fffb0, transparent 70%)" }}
      />

      <div className="absolute inset-0 noise-overlay mix-blend-overlay" />

      <div
        aria-hidden
        className="absolute left-0 right-0 h-32 opacity-[0.05]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(76,243,255,0.6), transparent)",
          animation: "scanline 9s linear infinite",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/90" />
    </div>
  );
}
