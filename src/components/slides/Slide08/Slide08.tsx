import { Heatmap } from "@paper-design/shaders-react";
import slide08 from "./slide08.module.css";

function Slide08() {
  return (
    <div className={slide08.slide}>
      <p className={slide08.hi}>Пора узнать, кто ты из</p>
      <div className={slide08.titles}>
        <div>
          <div>Игры Престолов</div>
          <div>Очень странных дел</div>
          <div>Друзей</div>
          <div>Острых козырьков</div>
          <div>Офиса</div>
          <div>Теории Большого Взрыва</div>
          <div>...</div>
        </div>
      </div>
      <p className={slide08.caption}>
        Настоящий искуственный интеллект (за деньги) проанализировал твои
        действия в чате и сделал выводы. В «Уютном» ты как...
      </p>
      <Heatmap
        speed={0.7}
        contour={0.5}
        angle={0}
        noise={0.5}
        innerGlow={0.5}
        outerGlow={0.5}
        scale={0.6}
        colors={["#3F8491", "#F5DDBB"]}
        colorBack="#022735"
        image="./movie.svg"
        style={{
          backgroundColor: "#000000",
          backgroundRepeat: "no-repeat",
          inset: "0",
          position: "absolute",
          zIndex: "-999",
        }}
      />
    </div>
  );
}

export default Slide08;
