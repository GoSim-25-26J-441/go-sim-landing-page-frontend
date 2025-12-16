"use client";

type Section1Props = {
  leftTitle: string;
  rightTitle: string;
  className?: string;
};

export default function Section1({
  leftTitle,
  rightTitle,
  className,
}: Section1Props) {
  return (
    <section className={className}>
      <div className="flex flex-col md:flex-row md:items-baseline justify-center gap-5">
        <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight">
          {leftTitle}
        </h2>

        {/* Mobile: horizontal line */}
        <div className="block md:hidden relative w-full h-px overflow-hidden my-2">
          <div className="absolute inset-0 bg-white/80 animate-grow-center-x" />
        </div>

        {/* Desktop: vertical line (give it a visible height) */}
        <div className="hidden md:block relative w-px h-10 overflow-hidden mx-2">
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white/80 animate-grow-center-y" />
        </div>

        <h2 className="text-xl lg:text-3xl font-normal text-white leading-tight">
          {rightTitle}
        </h2>
      </div>

      <style jsx>{`
        @keyframes grow-center-y {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        @keyframes grow-center-x {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        .animate-grow-center-y {
          transform-origin: center;
          animation: grow-center-y 1.2s ease-out forwards;
        }
        .animate-grow-center-x {
          transform-origin: center;
          animation: grow-center-x 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
