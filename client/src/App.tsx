import Stars from "./components/Stars/Stars";

export default function App() {
  return (
    <>
      <Stars />
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="observatory-skyless.svg"
          alt="Observatorio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10">

        </div>
      </div>
    </>
  );
}