import React from "react";
import {Navbar} from 'react-bootstrap';

const AppNavBar = () => {
  return (
    <>
      <Navbar>
        <h1 href="#home">The Meme Machine</h1>
        <div class="navitems">
          <button href="#recent">recent</button>
          <button href="#top">top memes</button>
          <button href="#create">create</button>
        </div>
        <form inline>
          <input type="text" placeholder="Search"/>
        </form>
      </Navbar>
    </>
  );
};

export default AppNavBar;
