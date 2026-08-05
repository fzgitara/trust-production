import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

/** Max-width content wrapper with consistent horizontal padding. */
export default function Container({ className = "", ...rest }: Props) {
  return <div className={`container-site ${className}`} {...rest} />;
}
