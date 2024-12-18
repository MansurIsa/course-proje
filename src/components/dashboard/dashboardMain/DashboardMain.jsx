import React from 'react'
import LogoLang from '../../../layouts/logoLang/LogoLang'
import TitleSearch from '../../../layouts/titleSearch/TitleSearch'
import DashboardTopContainer from '../dashboardTop/DashboardTopContainer'
import DashboardBottomContainer from '../dashboardBottom/DashboardBottomContainer'
import "./css/dashboardMain.css"

const DashboardMain = () => {
  return (
    <div className='main_container container'>
        <LogoLang/>
        <TitleSearch title={"Dashboard"}/>
        <DashboardTopContainer/>
        <DashboardBottomContainer/>
    </div>
  )
}

export default DashboardMain