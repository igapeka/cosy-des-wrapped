import type { ReactNode } from "react";
import section from "./section.module.css";

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return (
    <>
      <section className={section.section}>{children}</section>
    </>
  );
}

export default Section;
