import S from './styles.module.scss'

export default function Footer() {
  return (
    <div className={S.footer}>
      <p className={S.textFooter}>Feito com &#x2764; por: </p>
      <p className={S.nameFooter}>&nbsp;Waldsson Sacramento</p>
    </div>
  )
}
