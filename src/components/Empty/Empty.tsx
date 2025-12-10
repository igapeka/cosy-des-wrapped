import empty from "./empty.module.css";

interface Props {
  symbol: string;
  text: string;
}

function Empty({ symbol, text }: Props) {
  return (
    <div className={empty.empty}>
      <div className={empty.wrap}>
        <p className={empty.symbol}>{symbol}</p>
        <p className={empty.text}>{text}</p>
      </div>
    </div>
  );
}

export default Empty;
