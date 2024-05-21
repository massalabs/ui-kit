// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

interface CardProps {
  children: React.ReactNode;
  enableBorder?: boolean;
  bgColor?: string;
  customClass?: string;
}

export function Card({
  bgColor = 'bg-secondary',
  enableBorder = false,
  customClass = '',
  children,
}: CardProps) {
  const borderClass = enableBorder ? 'border border-tertiary' : 'border-none';
  return (
    <div
      className={`${bgColor} ${borderClass} w-full h-fit text-f-primary rounded-lg p-4 ${customClass}`}
    >
      {children}
    </div>
  );
}
