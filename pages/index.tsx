import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "../components/Sasamba";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Home = () => {
  const canvasRef = React.useRef(null);

  // React.useEffect(() => {
  //   const ctx = canvasRef.current?.getContext("2d");

  //   const handleResize = () => {
  //     ctx.canvas.height = window.innerHeight;
  //     ctx.canvas.width = window.innerWidth;
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="w-full h-screen">
      {/* @ts-ignore */}
      <Canvas colorManagement shadowMap>
        <CameraController />
        <fog attach="fog" args={["white", 0, 40]} />
        <ambientLight intensity={0.3} />
        <directionalLight
          intensity={2.5}
          position={[-6, 4, 5]}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <React.Suspense fallback={null}>
          <Model />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Home;

const CameraController = () => {
  const { camera, gl } = useThree();
  React.useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
