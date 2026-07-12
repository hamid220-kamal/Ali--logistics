"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlassTorus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.5;

    // Renderer (WebGL canvas binding)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Geometry (Luxury Abstract Torus Knot)
    const geometry = new THREE.TorusKnotGeometry(1, 0.35, 120, 16);

    // Material (Frosted glass refraction physics)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xFAF9F5,
      roughness: 0.12,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 1.0,
      ior: 1.52,
      thickness: 2.2,
      transparent: true,
      opacity: 1.0,
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(1.4);
    scene.add(mesh);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe5d3b3, 1.0);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(0, 5, 2);
    scene.add(pointLight);

    // Mouse movement coordinates track
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop (Low velocity float & mouse tracking)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Organic continuous rotation
      mesh.rotation.x = elapsedTime * 0.12;
      mesh.rotation.y = elapsedTime * 0.18;

      // Parallax coordinate interpolation
      const targetX = mouseRef.current.x * 0.5;
      const targetY = mouseRef.current.y * 0.5;

      mesh.position.x += (targetX - mesh.position.x) * 0.05;
      mesh.position.y += (targetY - mesh.position.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Container Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Clean up WebGL assets on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center bg-transparent">
      <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
    </div>
  );
}
