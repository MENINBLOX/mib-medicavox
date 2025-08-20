type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function KeyboardSvg({
  size = 24,
  color = 'currentColor',
  className,
  style,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      style={style}
      color={color}
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect x="5" y="8" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="8.5" y="8" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="12" y="8" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="15.5" y="8" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="5" y="11.5" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect
        x="8.5"
        y="11.5"
        width="2"
        height="2"
        rx="0.5"
        fill="currentColor"
      />
      <rect x="12" y="11.5" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="6" y="15" width="12" height="1.6" rx="0.8" fill="currentColor" />
    </svg>
  );
}
