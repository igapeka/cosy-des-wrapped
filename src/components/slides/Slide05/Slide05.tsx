import { StaticRadialGradient } from "@paper-design/shaders-react";
import slide05 from "./slide05.module.css";

interface ReactionItem {
  c: number;
  r: string;
}

interface Props {
  name: string;
  text?: string | null;
  image?: string | null;
  reactions?: ReactionItem[] | null;
}

function Slide05({ text, image, name, reactions }: Props) {
  return (
    <div className={slide05.slide}>
      <div className={slide05.message}>
        {image && <img src={image} alt="" className={slide05.image} />}
        {text && (
          <div className={slide05.nameWrap}>
            <p className={slide05.name}>{name}</p>
          </div>
        )}
        {text && <p className={slide05.text}>{text}</p>}
        <div className={slide05.wrap}>
          {reactions &&
            reactions.map((reaction) => (
              <p className={slide05.total} key={reaction.r}>
                {reaction.r} {reaction.c}
              </p>
            ))}
        </div>
      </div>
      <p className={slide05.hi}>
        Это твоё самое залайканное сообщение. Помнишь?
      </p>
      <StaticRadialGradient
        scale={1}
        offsetX={0}
        offsetY={-0.25}
        radius={1.16}
        focalDistance={1}
        focalAngle={0}
        falloff={0.55}
        mixing={0.6}
        distortionShift={0}
        distortionFreq={12}
        grainMixer={0.1}
        grainOverlay={0.4}
        colors={["#3F8491", "#F5DDBB"]}
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

export default Slide05;
