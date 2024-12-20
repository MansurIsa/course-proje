import React from "react";
import LogoLang from "../../layouts/logoLang/LogoLang";
import TitleSearch from "../../layouts/titleSearch/TitleSearch";
import HWResaltCard from "./HWResaltCard";

const HWResaltMain = () => {
  const data = [
    {
      id: 1,
      title: "CELT English A2",
      name: "HW U1 L1",
      point: "100",
      date: "04/06/2021",
      result: "Pass",
    },
    {
      id: 2,
      title: "CELT English B1",
      name: "Placement Test A1",
      point: "37",
      date: "14/06/2021",
      result: "Fail",
    },
    {
      id: 3,
      title: "CELT English B2",
      name: "HW U4 L3",
      point: "20",
      date: "06/08/2021",
      result: "Fail",
    },
    {
      id: 4,
      title: "English Placement Test",
      name: "SAT Math L2 U7 E4",
      point: "80",
      date: "17/06/2021",
      result: "Pass",
    },
    {
      id: 5,
      title: "CELT English A2",
      name: "HW U1 L1",
      point: "100",
      date: "04/06/2021",
      result: "Pass",
    },
    {
      id: 6,
      title: "CELT English B1",
      name: "Placement Test A1",
      point: "37",
      date: "14/06/2021",
      result: "Fail",
    },
    {
      id: 7,
      title: "CELT English B2",
      name: "HW U4 L3",
      point: "20",
      date: "06/08/2021",
      result: "Fail",
    },
    {
      id: 8,
      title: "English Placement Test",
      name: "SAT Math L2 U7 E4",
      point: "80",
      date: "17/06/2021",
      result: "Pass",
    },
    {
      id: 9,
      title: "CELT English A2",
      name: "HW U1 L1",
      point: "100",
      date: "04/06/2021",
      result: "Pass",
    },
    {
      id: 10,
      title: "CELT English B1",
      name: "Placement Test A1",
      point: "37",
      date: "14/06/2021",
      result: "Fail",
    },
    {
      id: 11,
      title: "CELT English B2",
      name: "HW U4 L3",
      point: "20",
      date: "06/08/2021",
      result: "Fail",
    },
    {
      id: 12,
      title: "English Placement Test",
      name: "SAT Math L2 U7 E4",
      point: "80",
      date: "17/06/2021",
      result: "Pass",
    },
    {
      id: 13,
      title: "CELT English A2",
      name: "HW U1 L1",
      point: "100",
      date: "04/06/2021",
      result: "Pass",
    },
    {
      id: 14,
      title: "CELT English B1",
      name: "Placement Test A1",
      point: "37",
      date: "14/06/2021",
      result: "Fail",
    },
    {
      id: 15,
      title: "CELT English B2",
      name: "HW U4 L3",
      point: "20",
      date: "06/08/2021",
      result: "Fail",
    },
    {
      id: 16,
      title: "English Placement Test",
      name: "SAT Math L2 U7 E4",
      point: "80",
      date: "17/06/2021",
      result: "Pass",
    },
  ];
  return (
    <div className="hwResalt_main container">
      <LogoLang />
      <TitleSearch title={"HW Results"} />
      <HWResaltCard  data={data} />
    </div>
  );
};

export default HWResaltMain;
