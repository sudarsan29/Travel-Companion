import { useEffect, useState } from "react";
import axios from "axios";

const OPENCAGE_API_KEY = "4bbcc369b04942e79032e6e131cad431"; 

export default function LocationDisplay() {
  const [location, setLocation] = useState("Fetching...");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setLocation(`Latitude: ${lat.toFixed(5)}, Longitude: ${lon.toFixed(5)}`);

          try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${OPENCAGE_API_KEY}`);
            const result = response.data.results[0];

            if (result) {
              const { city, town, village, postcode, state, country } = result.components;

              setAddress(`${city || town || village}, ${state} - ${postcode}, ${country}`);
            } else {
              setAddress("Address not found");
            }
          } catch (err) {
            console.error("Geocoding error:", err.message);
            setAddress("Error fetching address");
          }
        },
        (err) => {
          console.error("Geolocation Error:", err.message);
          setLocation(`Error: ${err.message}`);
        }
      );
    } else {
      setLocation("Geolocation not supported.");
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold text-lg mb-1">📍 Your Location</h2>
      <p>{location}</p>
      {address && (
        <p className="text-gray-600 mt-2">📌 {address}</p>
      )}
    </div>
  );
}
