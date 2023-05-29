import { Card, Button } from 'react-bootstrap'

import S from './styles.module.scss'

export default function CardsProjects({
  title,
  description,
  imgSrc,
  deploySrc,
  repoSrc
}) {
  return (
    <>
      <Card className={S.cardProjects} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body className={S.cardBody}>
          <Card.Title className={S.title}>{title}</Card.Title>
          <Card.Text className={S.text}>{description}</Card.Text>

          <div className={S.buttons}>
            {deploySrc && (
              <Button
                href={deploySrc}
                variant="outline"
                className={S.btnDeploy}
              >
                Deploy
              </Button>
            )}
            {repoSrc && (
              <Button
                href={repoSrc}
                variant="primary"
                className={S.btnRepository}
              >
                Repositório
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
