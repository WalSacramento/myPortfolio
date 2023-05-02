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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            blanditiis omnis rem harum hic! Laborum sequi labore alias quam
            fugit dolores mollitia quaerat. Nesciunt, quis numquam? Modi maiores
            eveniet laboriosam.
          </p>
          <div>
            <Button variant="outline" className={S.btnAbout}>
              Sobre mim
            </Button>{' '}
            <Button variant="primary" className={S.btnProjects}>
              Projetos
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
