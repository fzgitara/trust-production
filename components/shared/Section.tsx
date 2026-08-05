import type { HTMLAttributes } from "react";
import Container from "./Container";

type Props = HTMLAttributes<HTMLElement> & {
  id?: string;
  tone?: "dark" | "light";
  /** Remove the default vertical padding rhythm. */
  flush?: boolean;
};

/**
 * Semantic section with consistent vertical spacing rhythm.
 * Dark-elegant theme: default is the ink background.
 */
export default function Section({
  id,
  tone = "dark",
  flush = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <section
      id={id}
      className={`${
        tone === "light" ? "bg-mist-100 text-ink-900" : "bg-ink-950 text-mist-100"
      } ${flush ? "" : "py-20 sm:py-28"} ${className}`}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}
