import CeltCardBtn from "../celtCardBtn/CeltCardBtn";
import CeltCardDesc from "../celtCardDesc/CeltCardDesc";
import CeltCardList from "../celtCardList/CeltCardList";
import CeltCardTitle from "../celtCardTitle/CeltCardTitle";
import "./css/celtCardMain.css";
const CeltCardMain = ({ data }) => {
  return (
    <div className="celt_card">
      <CeltCardTitle title={data?.name} />
      <ul>
        <CeltCardList list={data?.group} />
      </ul>
      {/* <CeltCardDesc desc={card.desc} />
      <div className="celt_main_btn">
        <CeltCardBtn btn={card.btnTitle} />
      </div> */}
    </div>
  );
};

export default CeltCardMain;
