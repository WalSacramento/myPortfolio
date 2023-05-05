import { Button } from 'react-bootstrap'

import S from './styles.module.scss'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import linkedinIcon from '../../icons/linkedinIcon.svg'
import gmailIcon from '../../icons/gmailIcon.svg'
import githubIcon from '../../icons/githubIcon.svg'



export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault()

    if(name ===  '' || email === '' || message === '') {
      alert('Existem campos que não foram preenchidos')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_4yft9hj', 'template_8mz71sg', templateParams, 'dCtMexXn5kfeJEjwi').then((response) =>{
      console.log(response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log(err)
    })
  }

  return (
    <div className={S.contact}>
      <div className={S.contactSocial}>
        <h1 className={S.title}>Entre em contato comigo!</h1>
        <p className={S.text}>Minhas redes sociais:</p>
        <div className={S.buttons}>
          <Button
            href="https://www.linkedin.com/in/WaldssonSacramento"
            variant="outline"
            className={S.btnIcon}
          >
            <img src={linkedinIcon} alt="" />
          </Button>

          <Button
            href="https://github.com/WalSacramento"
            variant="outline"
            className={S.btnIcon}
          >
            <img src={githubIcon} alt="" />
          </Button>

          <Button
            href="waldsson.dev@gmail.com"
            variant="outline"
            className={S.btnIcon}
          >
            <img src={gmailIcon} alt="" />
          </Button>
        </div>
      </div>

      <div className={S.contactForm}>
        <h1 className={S.title}>
          Preencha o formulário e me envie uma mensagem!
        </h1>
        <form className={S.form} onSubmit={sendEmail}>
          <input
            className={S.inputText}
            type="text"
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)}
            value={name}
          />

          <input
            className={S.inputText}
            type="text"
            placeholder="Digite seu email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <input
            className={S.inputMessage}
            type="textarea"
            placeholder="Digite sua mensagem..."
            onChange={e => setMessage(e.target.value)}
            value={message}
          />

          {/* <input className={S.btnSubmit} type="submit" value='Enviar' /> */}

          <Button type="submit" value='Enviar' variant="outline" className={S.btnSubmit}>
              Enviar
            </Button>
        </form>
      </div>
    </div>
  )
}
