import React from 'react'
import { FiGrid as Grid, FiChevronRight as RightArrow, FiAlignLeft, FiChevronDown as DownArrow } from 'react-icons/fi'
import './styles.scss'

const LeftBar: React.FC = () => {
  return (
    <div className="left-bar">
      <div className="logo">
        <img src="/assets/img/logo/logo-branca.png" alt="Logo Agência Hipnoss"/>
      </div>
      <div className="person">
        <div className="info">
          <div className="avatar">
            <img src="https://www.xcommerceweb.com.br/admin/data/dynamic/equipe/10/downloads/0bc17e2aa6a4c70598705fb9c2ac3376.jpg" alt="Elian Batista"/>
          </div>
          <div className="title">
            <div className="name">
              Elian Batista
            </div>
            <div className="cargo">
              Founder and CTO
            </div>
          </div>
        </div>
        <div className="down-arrow">
          <DownArrow />
        </div>
      </div>
      <ul className="menu">
        <li>
          <div className="info">
            <div className="icon">
              <Grid />
            </div>
            <div className="title">
              Dashboard
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li>
        <li>
          <div className="info">
            <div className="icon">
              <FiAlignLeft />
            </div>
            <div className="title">
              Notícias
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </li> 
      </ul>
    </div>
  )
}

export default LeftBar