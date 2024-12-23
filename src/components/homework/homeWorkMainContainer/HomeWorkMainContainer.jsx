import { useEffect } from "react";
import CeltCard from "../../../ui/celtCard/celtCardMain/CeltCardMain";
import "./css/HomeWorkMainContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { getHomeWorks, getMyHomeWorks } from "../../../actions/homeworkAction";
const HomeWorkMainContainer = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getMyHomeWorks())
    dispatch(getHomeWorks())
  },[dispatch])

  const {homeworks,myHomeworks}=useSelector(state=>state.homework)
  const {userObj}=useSelector(state=>state.sidebar)

  console.log(homeworks);
  console.log(myHomeworks);
  
  const arr = [
    {
      id: 1,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
    {
      id: 2,
      title: "HW U3 L2",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 3,
      title: "HW U3 L2",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 4,
      title: "Home U10 Video 3",
      list: "Class:",
      desc: "CELT English B2",
      btnTitle: "Start",
    },
    {
      id: 5,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
    {
      id: 6,
      title: "Placement Test B1",
      list: "Class:",
      desc: "English Placement Test",
      btnTitle: "Start",
    },
  ];
  return (
    <div className="home_work_main">
      {/* {arr?.map((card) => (
        <CeltCard key={card.id} card={card} />
      ))} */}
      {
        userObj?.is_staff?
        homeworks?.map((data,i)=>{
          return  <CeltCard key={i} data={data} />
        }): 
        myHomeworks?.map((data,i)=>{
          return  <CeltCard key={i} data={data} />
        })
      }
    </div>
  );
};

export default HomeWorkMainContainer;
