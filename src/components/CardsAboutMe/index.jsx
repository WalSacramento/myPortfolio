import S from './styles.module.scss'

export default function CardsAboutMe({cardTitle, cardIcon}) {
  return (
    <>
      <div className={S.card}>
        <img src={cardIcon} alt="kajfshdka" className={S.cardIcon}/>
        <p className={S.cardTitle}>{cardTitle}</p>
      </div>
    </>
  )
}
