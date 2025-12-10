import slide02 from "./slide02.module.css";
import SlotCounter from "react-slot-counter";

interface Props {
  total: number;
}

function Slide02({ total }: Props) {
  return (
    <>
      <div className={slide02.slide}>
        <p>e</p>
        <SlotCounter
          value={total}
          duration={1.3}
          containerClassName={slide02.total}
          charClassName={slide02.totalChar}
          animateOnVisible={{
            triggerOnce: false,
            rootMargin: "0px 0px -100px 0px",
          }}
        />
        <p className={slide02.caption}>
          Столько твоих сообщений мы прочитали в этом году
        </p>
      </div>
    </>
  );
}

export default Slide02;
