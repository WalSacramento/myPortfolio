import AboutMe from '../../components/AboutMe'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Initial from '../../components/Initial'
import Navigation from '../../components/Nav'
import Projects from '../../components/Projects'

import S from './styles.module.scss'

export default function Home() {
  return (
    <div>
      <Navigation />
      <div id="home">
        <Initial />
      </div>
      <div className={S.spacing} />
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div className={S.spacing} />
      <div id="projects">
        <Projects />
      </div>
      <div className={S.spacing} />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
