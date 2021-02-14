import React from 'react';
import AppNavBar from '../components/AppNavBar';
import { db } from '../plugins/firebase';
import MemeList from '../components/MemeList';

export default function Home() {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    // TODO CHANGE TO GET TOP MEMES
    db.ref("memes").orderByChild('comments').on("value", snapshot => {
        let m = [];
        snapshot.forEach((snap) => {m.unshift(snap.val());});
        setMemes(m);
        console.log(m);
    })}, [])

  return (
    <>
      <AppNavBar/>
      <MemeList memes={memes}/>
    </>
  )
}
