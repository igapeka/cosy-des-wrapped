import { Heatmap } from "@paper-design/shaders-react";
import slide04 from "./slide04.module.css";
import SlotCounter from "react-slot-counter";

interface Props {
  reactionsGot: number;
}

function Slide04({ reactionsGot }: Props) {
  return (
    <div className={slide04.slide}>
      <SlotCounter
        value={reactionsGot}
        containerClassName={slide04.total}
        charClassName={slide04.totalChar}
        animateOnVisible={{
          triggerOnce: false,
          rootMargin: "0px 0px -100px 0px",
        }}
      />
      <p className={slide04.caption}>
        Столько реакций мы поставили на твои сообщения
      </p>
      <Heatmap
        speed={1}
        contour={0.5}
        angle={34}
        noise={0.5}
        innerGlow={0.5}
        outerGlow={0.5}
        scale={0.79}
        frame={954092.6999999972}
        image="./heart.svg"
        colors={["#3F8491", "#F5DDBB"]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#3F8491",
          backgroundRepeat: "no-repeat",
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide04;
