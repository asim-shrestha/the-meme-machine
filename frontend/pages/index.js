import AppNavBar from '../components/AppNavBar';
import styles from '../styles/landing.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.coverimg}>
        <img src="staticexplode.jpg"/>
        <img src="explodeline.svg"/>
        <div className="book" onClick={() => router.push("/recent")}>
          <div className="back"></div>
          <div className="page6">
            <img src="tothememes.jpg" style={{"width":"30vh"}}/>
          </div>
          <div className="page5"></div>
          <div className="page4"></div>
          <div className="page3"></div>
          <div className="page2"></div>
          <div className="page1"></div>
          <div className="front">
            <img src="star.png" className="bookimg" style={{"width":"15vh","margin-left":"5em"}}/>
            <h1 style={{"font-family":"Bangers"}}>The Meme Machine</h1>
            <br/><br/><br/><br/><br/>
            <span>Written by Adam & Asim</span><br/>
            <span>Illustrated by Jen</span>
          </div>
        </div>
      </div>
    </>
  )
}
