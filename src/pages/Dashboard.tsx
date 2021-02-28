import React from 'react'
import { FaNewspaper } from 'react-icons/fa'
import LeftBar from '../components/LeftBar'

import styles from '../styles/pages/Dashboard.module.css'

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}> 
      <div className="content-body">
        <div className="left-side">
          <LeftBar />
        </div>
        <div className="right-side">
          <div className={styles.dashboardInterContainer}>
            <h1>
              Dashboard
            </h1>
            <h2 className="subtitle">
              Aqui você terá uma visão geral do seu site que foi feito com muito carinho pelas Hipnos :D
            </h2>
            <div className="section-counting">
              <div className="counting">
                <div className="icon">
                  <FaNewspaper />
                </div> 
                <div className="info">
                  <h2>
                    30
                  </h2>
                  <div className="text">
                    Notícias Cadastradas
                  </div>
                </div>
              </div> 
              <div className="counting"> 
                <div className="icon">
                  <FaNewspaper />
                </div>
                <div className="info"> 
                  <h2>
                    30
                  </h2> 
                  <div className="text">
                    Notícias Cadastradas
                  </div>
                </div>
              </div>
              <div className="counting">
                <div className="icon">
                  <FaNewspaper />
                </div> 
                <div className="info"> 
                  <h2>
                    30
                  </h2>
                  <div className="text">
                    Notícias Cadastradas
                  </div>
                </div>
              </div>
            </div>
            <h2 className="next-title">
              Notícias Cadastradas
            </h2>
            <div className="section-last-news">
              <div className="box-noticia">
                <div className="title">
                  Teste de notícia muito doida
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium tellus et justo dictum bibendum. Nunc ac lectus vitae mauris laoreet aliquet quis 
                  eget arcu. In ac nulla egestas, blandit lorem sit amet, cursus purus.
                </div>
                <div className="tags">
                  <div className="tag">
                    Design
                  </div>
                  <div className="tag">
                    Desenvolvimento
                  </div>
                </div>
                <div className="dots">

                </div>
              </div>
              <div className="box-noticia">
                <div className="title">
                  Teste de notícia muito doida
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium tellus et justo dictum bibendum. Nunc ac lectus vitae mauris laoreet aliquet quis 
                  eget arcu. In ac nulla egestas, blandit lorem sit amet, cursus purus.
                </div>
                <div className="tags">
                  <div className="tag">
                    Design
                  </div>
                  <div className="tag">
                    Desenvolvimento
                  </div>
                </div>
                <div className="dots">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard