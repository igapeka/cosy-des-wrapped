import { MeshGradient } from "@paper-design/shaders-react";
import slide01 from "./slide01.module.css";
import imgUrl from "public/2025.svg";

interface Props {
  userName: string;
}

function Slide01({ userName }: Props) {
  return (
    <div className={slide01.slide}>
      <img src={imgUrl} alt="" className={slide01.svg} />
      <div>
        <p className={slide01.hi}>Привет,</p>
        <p className={slide01.name}>{userName}</p>
      </div>
      <p className={slide01.caption}>
        Пришло время подвести итоги твоего года в чате Уютный DES
      </p>
      <MeshGradient
        speed={1}
        scale={1}
        distortion={1}
        swirl={1}
        frame={1329342.357}
        grainMixer={0.1}
        grainOverlay={0.4}
        colors={["#A5BFC4", "#3F8491"]}
        style={{
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide01;
