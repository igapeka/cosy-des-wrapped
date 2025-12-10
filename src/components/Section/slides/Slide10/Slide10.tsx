import { MeshGradient } from "@paper-design/shaders-react";
import slide10 from "./slide10.module.css";

interface Props {
  msgtotal: number;
  reactsgiven: number;
  reactsgot: number | null;
  date: string;
}

function Slide10({ msgtotal, reactsgiven, reactsgot, date }: Props) {
  const datedate = new Date(date);
  const toDate = datedate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "numeric",
  });
  return (
    <div className={slide10.slide}>
      <div>
        <p className={slide10.caption}>Таким был твой</p>
        <p className={slide10.year}>2025</p>
        <p className={slide10.caption}>с нами в «Уютном»</p>
      </div>
      <div className={slide10.grid}>
        <div className={slide10.span2}>
          <p className={slide10.label}>Сообщений написано</p>
          <p className={slide10.value}>{msgtotal}</p>
        </div>
        <div className={!reactsgot ? slide10.span2 : undefined}>
          <p className={slide10.label}>Реакций поставлено</p>
          <p className={slide10.value}>{reactsgiven}</p>
        </div>
        {reactsgot && (
          <div>
            <p className={slide10.label}>Реакций получено</p>
            <p className={slide10.value}>{reactsgot}</p>
          </div>
        )}
        <div className={slide10.span2}>
          <p className={slide10.label}>Первое сообщение</p>
          <p className={slide10.value}>{toDate}</p>
        </div>
      </div>
      <MeshGradient
        speed={1}
        scale={1}
        distortion={1}
        swirl={1}
        frame={1329342.357}
        grainMixer={0.1}
        grainOverlay={0.4}
        colors={["#B6863C", "#F5DDBB"]}
        style={{
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide10;
