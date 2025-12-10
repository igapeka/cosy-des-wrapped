import slide09 from "./slide09.module.css";

interface Props {
  name: string;
  movie: string;
  caption: string;
  vidurl: string;
}

function Slide09({ name, movie, caption, vidurl }: Props) {
  return (
    <div className={slide09.slide}>
      <div className={slide09.wrap}>
        <p className={slide09.name}>{name}</p>
        <p className={slide09.movie}>«{movie}»</p>
        <p className={slide09.caption}>{caption}</p>
      </div>
      <video
        autoPlay={true}
        muted
        loop
        playsInline
        className={slide09.video}
        src={vidurl}
      ></video>
    </div>
  );
}

export default Slide09;
