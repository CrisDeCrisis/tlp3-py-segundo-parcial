import Navbar from "./components/Navbar/Navbar";
import Stars from "./components/Stars/Stars";
import Moon from "./components/Moon/Moon";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import Prediction from "./pages/Prediction";

export default function App() {
  return (
    <>
      <Stars />
      <Moon />
      <Navbar />
      <Home />
      <Prediction />
      <Metrics />
      <Credits />
    </>
  );
}