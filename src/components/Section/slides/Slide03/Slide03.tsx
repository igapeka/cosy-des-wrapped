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
      <svg className={slide03.filter}>
        <defs>
          <filter
            id="gggrain-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              seed="1"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="colormatrix"
            ></feColorMatrix>
            <feComponentTransfer
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="colormatrix"
              result="componentTransfer"
            >
              <feFuncR type="linear" slope="3"></feFuncR>
              <feFuncG type="linear" slope="3"></feFuncG>
              <feFuncB type="linear" slope="3"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="componentTransfer"
              result="colormatrix2"
              type="matrix"
              values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 25 -17"
            ></feColorMatrix>
          </filter>
        </defs>
        <g>
          <rect
            width="100%"
            height="100%"
            fill="transparent"
            filter="url(#gggrain-filter)"
            opacity="1"
            style={{ mixBlendMode: "soft-light" }}
          ></rect>
        </g>
      </svg>
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
    </div>
  );
}

export default Slide03;
