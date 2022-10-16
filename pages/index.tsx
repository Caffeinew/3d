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
      
      <Canvas shadows>
        <CameraController />
        <ambientLight intensity={0.3} />
        <directionalLight
         castShadow
         position={[-6.3, 4.4, 5.1]}
         intensity={2}
         shadow-mapSize-width={1024}
         shadow-mapSize-height={1024}
     
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
