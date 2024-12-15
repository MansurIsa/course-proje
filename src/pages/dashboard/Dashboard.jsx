import React from 'react'
import Sidebar from '../../layouts/sidebar/Sidebar'
import DashboardMain from '../../components/dashboard/dashboardMain/DashboardMain'
import "../css/mainPage.css"

const Dashboard = () => {
  return (
    <div className='main_page_container'>
        <Sidebar/>
        <DashboardMain/>
    </div>
  )
}

export default Dashboard