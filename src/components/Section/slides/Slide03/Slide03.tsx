import { GrainGradient } from "@paper-design/shaders-react";
import slide03 from "./slide03.module.css";

interface Props {
  name: string;
  date: string;
  text?: string | null;
  image?: string | null;
}

function Slide03({ text, image, name, date }: Props) {
  const datedate = new Date(date);
  const toDate = datedate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });

  const toTime = `${datedate.getHours() - 2}:${
    (datedate.getMinutes() < 10 ? "0" : "") + datedate.getMinutes()
  }`;

  return (
    <div className={slide03.slide}>
      <p className={slide03.hi}>Твой год начался {toDate} с этого сообщения:</p>
      <div className={slide03.message}>
        {image && <img src={image} alt="" className={slide03.image} />}
        {text && (
          <div className={slide03.nameWrap}>
            <p className={slide03.name}>{name}</p>
            <p className={slide03.time}>{toTime}</p>
          </div>
        )}
        {text && <p className={slide03.text}>{text}</p>}
      </div>
      <GrainGradient
        speed={0}
        scale={1.3}
        rotation={0}
        offsetX={0}
        offsetY={0.7}
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="sphere"
        colors={["#0E4458", "#377B97", "#4696B7", "#F1E2C8"]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#022735",
          backgroundRepeat: "no-repeat",
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide03;
