import React, {useState} from 'react'
import {Div, Email, Password, LoginRight, Eye} from './style'
import {RiLoginCircleLine} from 'react-icons/ri';
import {MdEmail, MdLock} from 'react-icons/md';
import {HiEyeOff, HiEye} from 'react-icons/hi'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <Div>
      <div>
          <RiLoginCircleLine/>
      </div>
 
      <LoginRight>
        <h1>Acessa App</h1>

        <Email>
          <MdEmail/>
          <input 
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange= {e => setEmail(e.target.value)}
          />
        </Email>
        <Password>
          <MdLock/>
          <input 
                type="passoword" 
                placeholder="Digite sua senha"
                type={show ? "text" : "password"}
                value={password}
                onChange= {e => setPassword(e.target.value)}
          />
          <Eye>
            {show ? (
              <HiEye 
                size={20}
                onClick={handleClick}
              />
            ) : (
              <HiEyeOff
                size={20}
                onClick={handleClick}
              />
            )}
          </Eye>
        </Password>

        <button type="submit">
          Entrar
        </button>

        <h4>Nao tenho conta!</h4>

        <button type="submit">
          Cadastrar
        </button>
      </LoginRight>
    </Div>
  )
}

export default Login