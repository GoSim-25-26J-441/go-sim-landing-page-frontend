type TitleProps = {
  title: string;
  isUnderline?: boolean;
  description?: string;
  className?: string;
};

export default function Title({
  title,
  isUnderline = false,
  description,
  className = "",
}: TitleProps) {
  return (
    <div className={`mx-10 ${className}`}>
      <h1 className="text-2xl font-bold text-white">{title}</h1>

      {description && (
        <p className="mt-3 text-xs font-normal text-[#7D7F86]">{description}</p>
      )}

      {isUnderline && (
        <div className="mt-2 h-0.5 w-full bg-white mb-8" />
      )}
    </div>
  );
}
