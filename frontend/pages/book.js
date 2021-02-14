
import React from "react";
import * as THREE from "three";
import AppNavBar from '../components/AppNavBar';

const Book = () => {
  const [scene, setScene] = React.useState();
  const [camera, setCamera] = React.useState();
  const [renderer, setRenderer] = React.useState();

  React.useState(() => {
    // Won't work on the server, ensure we run on the browser
    if (typeof window === 'undefined') {return;}
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }, []);

  return (
    <div/>
  )
}

export default Book;