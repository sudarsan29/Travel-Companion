import { useEffect } from "react";

export default function BackgroundLocationSaver() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = {
              lat: pos.coords.latitude.toFixed(5),
              lon: pos.coords.longitude.toFixed(5),
              time: new Date().toLocaleTimeString(),
            };
            localStorage.setItem("lastLocation", JSON.stringify(coords));
            console.log("📌 Background saved:", coords);
          },
          (err) => {
            console.error("Background Geolocation Error:", err.message);
          }
        );
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return null; 
}
