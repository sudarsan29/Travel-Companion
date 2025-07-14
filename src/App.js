import LocationDisplay from "./Components/locationDisplay";
import CanvasMap from "./Components/canvasMap";
import NetworkStatus from "./Components/networkStatus";
import ScrollEndNotice from "./Components/scrollEnd";
import BackgroundLocationSaver from "./Components/backgroundSaver";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🧭 Travel Companion</h1>
      <div className="max-w-md mx-auto space-y-6">
        <LocationDisplay />
        <CanvasMap />
        <NetworkStatus />
        <ScrollEndNotice />
        <BackgroundLocationSaver />
      </div>
    </div>
  );
}

export default App;
