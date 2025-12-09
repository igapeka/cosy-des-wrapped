import { Heatmap } from "@paper-design/shaders-react";
import slide06 from "./slide06.module.css";

interface Props {
  total: number;
}

function Slide06({ total }: Props) {
  return (
    <div className={slide06.slide}>
      <p className={slide06.total}>{total}</p>
      <p className={slide06.caption}>
        Столько твоих реакций мы получили. Спасибо тебе!
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
        image="src/assets/heart.svg"
        colors={["#9d7e53ff", "#F5DDBB"]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#F5DDBB",
          backgroundRepeat: "no-repeat",
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide06;
