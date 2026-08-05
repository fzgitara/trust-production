type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Small letter-spaced section label. */
export default function Eyebrow({ children, className = "" }: Props) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
