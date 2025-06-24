import Home from "./pages/Home";
import Metrics from "./pages/Metrics";

export default function App() {
  return (
    <>
      <Home />
      <Metrics />
      <div>
        <section id="prediction" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Predicción de orbita</h1>
        </section>
      </div>
    </>
  );
}