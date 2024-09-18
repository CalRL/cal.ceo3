"use client";
import "../globals.css";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";

var stars = [];

export default function Starfield() {
  // Create a ref for an HTMLDivElement
  const mountRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement

  useEffect(() => {
    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Append the renderer to the div via the ref
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement); // TypeScript now knows mountRef is a div
    }

    // Create a simple cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube for some animation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup function when component unmounts
    return () => {
      window.removeEventListener("resize", onWindowResize);

      // Clean up the renderer DOM element
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div>
      <style jsx global>
        {`
          body {
            background: black;
          }
        `}
      </style>
      {/* This div will contain the Three.js scene */}
      <div className="starfield" ref={mountRef}></div>
    </div>
  );
}
