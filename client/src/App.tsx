import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Home />
      <div>
        <section id="prediction" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Predicción de orbita</h1>
        </section>
      </div>
    </>
  );
}