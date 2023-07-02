import './game.scss';
import { useCallback, useEffect, useRef } from "react";

export default function Game() {

  let canvasRef = useRef(null);

  let ballX = useRef(0);
  let ballY = useRef(0);

  const draw = useCallback((pen, frameCount) => {
    pen.clearRect(0, 0, pen.canvas.width, pen.canvas.height);

    pen.beginPath();
    pen.arc(ballX.current, ballY.current, 10, 0, Math.PI * 2);
    pen.fillStyle = "#0095DD";
    pen.fill();
    pen.closePath();

    ballX.current += .2;
    ballY.current -= .2;

  }, []);


  useEffect(() => {
    // const canvas = document.getElementById("canvas");
    const canvas = canvasRef.current;
    const pen = canvas.getContext("2d");

    ballX.current = canvas.width / 2;
    ballY.current = canvas.height - 30;

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(pen, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw])


  return (
    <canvas id="canvas" ref={canvasRef}></canvas>
  );
}

