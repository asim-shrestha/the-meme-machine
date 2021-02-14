import React from "react";
import {Navbar} from 'react-bootstrap';
import { useRouter } from 'next/router'

export const height = '34px'; 
const AppNavBar = () => {
  const router = useRouter();
  return (
    <>
      <Navbar id="appnavbar" style={{height: height}}>
        <h1 href="#home">⭐The Meme Machine</h1>
        <div className="navitems">
          <button onClick={() => router.push("/")}>recent</button>
          <button onClick={() => router.push("/top")}>top memes</button>
          <button onClick={() => router.push("/create")}>create</button>
        </div>
        <form>
          <input type="text" placeholder="Search"/>
        </form>
      </Navbar>
    </>
  );
};

export default AppNavBar;
