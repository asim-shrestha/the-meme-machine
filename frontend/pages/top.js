import React from 'react';
import AppNavBar from '../components/AppNavBar';
import { db } from '../plugins/firebase';
import MemeList from '../components/MemeList';
import AppFooter from '../components/AppFooter';
export default function Home() {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    db.ref("memes").orderByChild('comments').on("value", snapshot => {
        let m = [];
        snapshot.forEach((snap) => {m.unshift({...snap.val(), key: snap.key});});
        setMemes(m);
    })}, [])

  return (
    <>
      <AppNavBar/>
      <MemeList memes={memes}/>
      <AppFooter/>
    </>
  )
}
