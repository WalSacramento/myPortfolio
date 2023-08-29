import CardsAboutMe from '../CardsAboutMe'
import S from './styles.module.scss'

import javascriptIcon from '../../icons/javascriptIcon.svg'
import reactIcon from '../../icons/reactIcon.svg'
import nodejsIcon from '../../icons/nodejsIcon.svg'
import sassIcon from '../../icons/sassIcon.svg'
import boostrapIcon from '../../icons/bootstrapIcon.svg'
import gitIcon from '../../icons/gitIcon.svg'
import viteIcon from '../../icons/viteIcon.svg'
import pythonIcon from '../../icons/pythonIcon.svg'
import cIcon from '../../icons/cIcon.svg'
import javaIcon from '../../icons/javaIcon.svg'
import html5Icon from '../../icons/html5Icon.svg'
import css3Icon from '../../icons/css3Icon.svg'

export default function AboutMe() {
  const languagesData = [
    {
      title: 'JavaScript',
      icon: javascriptIcon
    },
    {
      title: 'Python',
      icon: pythonIcon
    },
    {
      title: 'Css3',
      icon: css3Icon
    },
    {
      title: 'Html5',
      icon: html5Icon
    },
    {
      title: 'Java',
      icon: javaIcon
    },
    {
      title: 'C',
      icon: cIcon
    }
  ]
  const tecnologiesData = [
    {
      title: 'React',
      icon: reactIcon
    },
    {
      title: 'NodeJS',
      icon: nodejsIcon
    },
    {
      title: 'SASS',
      icon: sassIcon
    },
    {
      title: 'Vite',
      icon: viteIcon
    },
    {
      title: 'Boostrap',
      icon: boostrapIcon
    },
    {
      title: 'Git',
      icon: gitIcon
    }
  ]

  return (
    <>
      <div className={S.aboutMe}>
        <h1 className={S.title}>Sobre mim:</h1>
        <p className={S.text}>
          Com experiência em projetos acadêmicos, pessoais e freelancer, estou sempre em
          busca de ampliar meus conhecimentos e praticar minhas habilidades.
          Além disso, tive a oportunidade de atuar como monitor nas disciplinas
          de programação 1, 2 e 3 na universidade, o que me permitiu compartilhar meus
          conhecimentos e ajudar outros estudantes a desenvolver suas
          habilidades.
        </p>
        <p className={S.text}>
          Acredito que posso trazer uma perspectiva jovem e entusiasta para
          qualquer equipe, além de ser dedicado e focado em aprender e crescer
          profissionalmente. Estou animado para usar minhas habilidades e paixão
          pela tecnologia para ajudar a alcançar os objetivos de uma empresa e
          colaborar com uma equipe de alta performance.
        </p>

        <h1 className={S.title}>Linguagens:</h1>
        <div className={S.cards}>
          {languagesData.map((card, index) => (
            <CardsAboutMe
              key={index}
              cardTitle={card.title}
              cardIcon={card.icon}
            />
          ))}
        </div>

        <h1 className={S.title}>Tecnologias:</h1>
        <div className={S.cards}>
          {tecnologiesData.map((card, index) => (
            <CardsAboutMe
              key={index}
              cardTitle={card.title}
              cardIcon={card.icon}
            />
          ))}
        </div>
      </div>
    </>
  )
}
