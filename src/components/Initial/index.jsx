import Button from 'react-bootstrap/Button'

import S from './styles.module.scss'

export default function Initial() {
  return (
    <>
      <div className={S.initial}>
        <div className={S.textInitial}>
          <h2>Olá, eu sou</h2>
          <h1>Waldsson Sacramento</h1>
          <p>
            Desenvolvedor Full-stack jovem e apaixonado por tecnologia, graduando em Sistemas de Informação na Universidade Federal de Alagoas - UFAL. Com conhecimento em React.js, JavaScript, HTML, CSS, Python, Java, C e Arduino, busco uma oportunidade de desenvolver minhas habilidades como Desenvolvedor Júnior.
          </p>
          <div>
            <Button href='https://www.linkedin.com/in/WaldssonSacramento' variant="outline" className={S.btnAbout}>
              LinkedIn
            </Button>
            <Button href='https://github.com/WalSacramento' variant="primary" className={S.btnProjects}>
              Github
            </Button>{' '}
          </div>
        </div>
        <img
          className={S.imgInitial}
          src="src/img/fotoPerfil-removebg-preview.png"
          alt="Foto de Perfil"
        />
      </div>
    </>
  )
}
