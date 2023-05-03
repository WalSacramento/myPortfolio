import CardsAboutMe from '../CardsAboutMe'
import S from './styles.module.scss'

import javascriptIcon from '../../icons/javascriptIcon.svg'
import reactIcon from '../../icons/reactIcon.svg'
import nodejsIcon from '../../icons/nodejsIcon.svg'
import sassIcon from '../../icons/sassIcon.svg'


export default function AboutMe() {
  
  const cardsData = [
    {
      title: 'JavaScript',
      icon: javascriptIcon
    },
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
    }
  ]

  return (
    <>
      <div className={S.aboutMe}>
        <h1 className={S.title}>Sobre mim:</h1>
        <p className={S.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est
          optio harum adipisci ad asperiores animi culpa, nemo nostrum ducimus
          natus fugiat fuga. Sit, veniam? Voluptates maxime possimus soluta
          natus.
        </p>

        <h1 className={S.title}>Linguagens e Tecnologias:</h1>
        <div className={S.cards}>
        {cardsData.map((card, index) => (
          <CardsAboutMe
            key = {index}
            cardTitle={card.title}
            cardIcon={card.icon}
          />
        ))}
        </div>
        
      </div>
    </>
  )
}
