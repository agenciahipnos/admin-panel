import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import './styles.scss'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>
        Dashboard
      </h1>
      <div className="section-counting">
        <div className="counting">
          <div className="info">
            <h2>
              30
            </h2>
            <div className="text">
              Notícias Cadastradas
            </div>
          </div>
          <div className="icon">
            <FaNewspaper />
          </div>   
        </div> 
        <div className="counting"> 
          <div className="info"> 
            <h2>
              30
            </h2>
            <div className="text">
              Notícias Cadastradas
            </div>
          </div>
          <div className="icon">
            <FaNewspaper />
          </div>
        </div>
        <div className="counting">
          <div className="info">
            <h2>
              30
            </h2>
            <div className="text">
              Notícias Cadastradas
            </div>
          </div>
          <div className="icon">
            <FaNewspaper />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard