import React from 'react'
import { FaEnvelopeOpenText as EmailIcon, FaUnlockAlt as PasswordIcon } from 'react-icons/fa'

import styles from '../styles/pages/Login.module.css'

const Login: React.FC = () => {
  return (
    <section className={styles.loginContainer}> 
      <div className="box-login">
        <div className="logo">
          <img src="/assets/img/logo/logo.png" alt="Logo Agência Hipnos"/>
        </div>
        <form>
          <h1>
            Bem-vinde de volta
          </h1>
          <h2>k
            Use suas credenciais abaixo para logar em nosso sistema.
          </h2> 
          <div className="field-input">
            <div className="icon">
              <EmailIcon />
            </div>
            <input type="text" placeholder="Digite seu e-mail" />
          </div>
          <div className="field-input">
            <div className="icon">
              <PasswordIcon />
            </div>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <button>
            Entrar
          </button>
        </form>
        <p>
          Esqueceu sua senha? <a href="javascript:"> Recuperar agora! </a>
        </p>
      </div>
    </section>
  )
}

export default Login