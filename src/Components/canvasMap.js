import { useEffect, useRef } from "react";

export default function CanvasMap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let drawing = false;

    const start = () => (drawing = true);
    const stop = () => (drawing = false);
    const draw = (e) => {
      if (!drawing) return;
      ctx.fillStyle = "rgba(30,144,255,0.6)";
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, 5, 0, Math.PI * 2);
      ctx.fill();
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mouseup", stop);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold text-lg mb-2">Draw Safe Zones</h2>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="border mx-auto bg-gray-100"
      ></canvas>
    </div>
  );
}
