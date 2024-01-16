import './game.scss';

import { useCallback, useEffect, useRef } from "react";

export default function Game() {

  let canvasRef = useRef(null);

  let ballX = useRef(0);
  let ballY = useRef(0);

  let vectorX = useRef(.2);
  let vectorY = useRef(.2);

  const ballRadius = 10;

  const paddleHeight = 10;
  const paddleWidth = 75;

  let paddleX = useRef(0);

  let leftPressed = useRef(false);
  let rightPressed = useRef(false);

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e: any) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed.current = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed.current = true;
    }
  }

  function keyUpHandler(e: any) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed.current = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed.current = false;
    }
  }

  const draw = useCallback((pen: any, frameCount: number) => {
    pen.clearRect(0, 0, (canvasRef.current as HTMLCanvasElement | null)!.width, (canvasRef.current as HTMLCanvasElement | null)!.height);
    // Draw paddle
    pen.beginPath()
    pen.rect(paddleX.current, (canvasRef.current as HTMLCanvasElement | null)!.height - paddleHeight, paddleWidth, paddleHeight);
    pen.fillStyle = "rgba(255, 255, 255, .3)";
    pen.fill();
    pen.closePath();

    if (rightPressed.current) {
      paddleX.current += .5;
    } else if (leftPressed.current) {
      paddleX.current -= .5;
    }


    // Draw Ball
    pen.beginPath();
    pen.arc(ballX.current, ballY.current, ballRadius, 0, Math.PI * 2);
    pen.fillStyle = "rgba(255, 255, 255, .3)";
    pen.fill();
    pen.closePath();

    // Ball Wall Collision
    if (ballX.current + vectorX.current < ballRadius || ballX.current + vectorX.current > (canvasRef.current as HTMLCanvasElement | null)!.width - ballRadius) {
      vectorX.current *= -1;
    }

    if (ballY.current + vectorY.current < ballRadius || ballY.current + vectorY.current > (canvasRef.current as HTMLCanvasElement | null)!.height - ballRadius) {
      vectorY.current *= -1;
    }


    ballX.current += vectorX.current;
    ballY.current += vectorY.current;

  }, []);


  useEffect(() => {
    // const canvas = document.getElementById("canvas");
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    const pen = canvas?.getContext("2d");

    ballX.current = canvas!.width / 2;
    ballY.current = canvas!.height - 30;

    paddleX.current = (canvas!.width - paddleWidth) / 2;

    let frameCount = 0;
    let animationFrameId: number;

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

