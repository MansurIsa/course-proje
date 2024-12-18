import CeltCardBtn from "../celtCardBtn/CeltCardBtn";
import CeltCardDesc from "../celtCardDesc/CeltCardDesc";
import CeltCardList from "../celtCardList/CeltCardList";
import CeltCardTitle from "../celtCardTitle/CeltCardTitle";
import "./css/celtCardMain.css";
const CeltCardMain = ({ card }) => {
  return (
    <div className="celt_card">
      <CeltCardTitle title={card.title} />
      <ul>
        <CeltCardList list={card.list} />
      </ul>
      <CeltCardDesc desc={card.desc} />
      <div className="celt_main_btn">
        <CeltCardBtn btn={card.btnTitle} />
      </div>
    </div>
  );
};

export default CeltCardMain;
