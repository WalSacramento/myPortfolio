import AboutMe from "../../components/AboutMe";
import Initial from "../../components/Initial";
import Navigation from "../../components/Nav";
import Projects from "../../components/Projects";

import S from './styles.module.scss'

export default function Home (){
  return(
    <div>
    <Navigation/>
    <Initial/>
    <div className={S.spacing}/>
    <AboutMe/>
    <div className={S.spacing}/>
    <Projects/>
    </div>
  )
}