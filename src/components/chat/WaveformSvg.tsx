type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function WaveformSvg({
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
      <rect x="3" y="10" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="7" y="7" width="2" height="10" rx="1" fill="currentColor" />
      <rect x="11" y="5" width="2" height="14" rx="1" fill="currentColor" />
      <rect x="15" y="7" width="2" height="10" rx="1" fill="currentColor" />
      <rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}
