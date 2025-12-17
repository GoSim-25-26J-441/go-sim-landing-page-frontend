"use client";

export type Card3Props = {
  key?: string;
  title?: string;
  isUnderline?: boolean;
  subTitle?: string;
  introduction?: string;
};

export type Points = {
  mainPoints: string;
  subPoints: string;
};

export default function Card3({
  key,
  title,
  isUnderline = true,
  subTitle,
  introduction,
}: Card3Props) {
  return (
    <div key={key} className="h-full flex flex-col p-6 max-w-md mx-auto">
      <div className="shrink-0 mb-6">
        <h2 className="text-lg font-normal text-white text-center min-h-5 flex items-center justify-center my-3">
          {title}
        </h2>

        {isUnderline && <div className="w-full h-px bg-white mt-2 animate-grow-center-x" />}
      </div>

      {introduction && (
        <h1 className="text-sm font-bold text-white text-center min-h-4 flex items-center justify-center mb-6">
          {subTitle}
        </h1>
      )}

      {introduction && (
        <p className="text-xs font-normal text-white/80 text-center min-h-4 flex items-center justify-center mb-6">
          {introduction}
        </p>
      )}

      <style jsx>{`
    
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
        .animate-grow-center-x {
          transform-origin: center;
          animation: grow-center-x 1.2s ease-out forwards;
        }
      `}</style>

    </div>
  );
}
