import { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    function getNetworkStatus() {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

      if (!navigator.onLine) {
        return "Offline";
      }

      if (connection) {
        return `${connection.effectiveType}`;
      } else {
        return "Online";
      }
    }

    const updateStatus = () => {
      const current = getNetworkStatus();
      setStatus(current);

      if (current === "Offline") {
        alert("You are offline!");
      } else if (current.includes("2g")) {
        alert("You're on a very slow network (2G)");
      }
    };

    updateStatus(); // initial check

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold text-lg mb-1">Network Status</h2>
      <p>{status}</p>
    </div>
  );
}
