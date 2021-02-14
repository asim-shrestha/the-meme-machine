import AppNavBar from '../components/AppNavBar';
import MemeCard from '../components/MemeCard';
import MemeList from '../components/MemeList';
import styles from '../styles/landing.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <AppNavBar/>
      <div className={styles.coverimg}>
        <img src="staticexplode.jpg"/>
        <img src="explodeline.svg"/>
        <div class="book" onClick={() => router.push("/recent")}>
          <div class="back"></div>
          <div class="page6">
            <img src="tothememes.jpg" style={{"width":"30vh"}}/>
          </div>
          <div class="page5"></div>
          <div class="page4"></div>
          <div class="page3"></div>
          <div class="page2"></div>
          <div class="page1"></div>
          <div class="front">
            <img src="star.png" class="bookimg" style={{"width":"15vh","margin-left":"5em"}}/>
            <h1 style={{"font-family":"Bangers"}}>The Meme Machine</h1>
            <br/><br/><br/><br/><br/>
            <span>written by adam and asim</span><br/>
            <span>illustrated by jen</span>
          </div>
        </div>
      </div>
    </>
  )
}
