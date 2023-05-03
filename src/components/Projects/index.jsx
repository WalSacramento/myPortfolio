import CardsProjects from '../CardsProjects'
import S from './styles.module.scss'

import reactQuizImg from '../../img/quizReactImg.png'
import alfaImportedImg from '../../img/alfaImportedImg.png'
import topekaBankImg from '../../img/topekaBankImg.png'

export default function Projects() {
  const projectsData = [
    {
      title: 'React Quiz',
      description:
        'Quiz sobre react construído com as mais recentes tecnologias para desenvolvimento web.',
      imgSrc: reactQuizImg,
      deploySrc: 'https://quiz-react-theta.vercel.app/',
      repoSrc: 'https://github.com/WalSacramento/QuizApp-React'
    },
    {
      title: 'Topeka Bank',
      description:
        'Este projeto foi desenvolvido para obtenção de nota na disciplina de "Programação Web 1". O objetivo do projeto é simular uma plataforma bancária online.',
      imgSrc: topekaBankImg,
      deploySrc: ' ',
      repoSrc: 'https://github.com/camillaalves12/topeca_bank_React'
    },
    {
      title: 'Alfa Imported',
      description:
        'LandinPage para ser utilizada em diversos tipos de produtos! Feita para praticar conceitos de HTML, CSS e GIT!',
      imgSrc: alfaImportedImg,
      deploySrc: 'https://walsacramento.github.io/LandingPage/',
      repoSrc: 'https://github.com/WalSacramento/LandingPage'
    }
  ]
  return (
    <>
      <div className={S.projects}>
        <h1 className={S.title}>Projetos:</h1>
        <div className={S.cardProjects}>
          {projectsData.map((card, index) => (
            <CardsProjects
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              deploySrc={card.deploySrc}
              repoSrc={card.repoSrc}
            />
          ))}
        </div>
      </div>
    </>
  )
}
