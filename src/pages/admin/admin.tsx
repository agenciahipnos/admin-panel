import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import LeftBar from '../../components/left-bar/LeftBar'
import './styles.scss'

const Admin: React.FC = () => {
  return (
    <div className="wrapper"> 
      <div className="content-body">
        <div className="left-side">
          <LeftBar />
        </div>
        <div className="right-side">
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default Admin