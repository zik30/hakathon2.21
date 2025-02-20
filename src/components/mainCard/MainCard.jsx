import { Button } from "antd";
import stl from "./mainCard.module.scss"

function MainCard({title, body}) {
  return (
    <div className={stl.card}>
      <div className={stl.circle}></div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Button className={stl.btn}>Learn more ⮕</Button>
    </div>
  );
}

export default MainCard;
