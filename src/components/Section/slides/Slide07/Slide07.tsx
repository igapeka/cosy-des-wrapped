import slide07 from "./slide07.module.css";

interface Props {
  reaction: string;
}

function Slide07({ reaction }: Props) {
  return (
    <div className={slide07.slide}>
      <svg className={slide07.filter} width="0" height="0">
        <filter id="mask" colorInterpolationFilters="sRGB">
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="3"
            result="blur1"
          ></feGaussianBlur>
          <feSpecularLighting
            result="spec1"
            in="blur1"
            surfaceScale="5"
            specularConstant="0.4"
            specularExponent="120"
            lightingColor="#ffffffff"
          >
            <fePointLight x="123" y="50" z="500"></fePointLight>
          </feSpecularLighting>
          <feComposite
            in="spec1"
            in2="SourceAlpha"
            operator="in"
            result="specOut2"
          ></feComposite>
          <feComposite
            in="SourceGraphic"
            in2="specOut2"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litPaint"
          ></feComposite>
        </filter>
      </svg>
      <div>
        <p className={slide07.reaction}>{reaction}</p>
        <img className={slide07.kode} src="../src/assets/kode.svg" alt="" />
      </div>
      <p className={slide07.caption}>
        А это — твоя самая любимая реакция в этом году
      </p>
      <img className={slide07.svg} src="../src/assets/apple.svg" alt="" />
    </div>
  );
}

export default Slide07;
