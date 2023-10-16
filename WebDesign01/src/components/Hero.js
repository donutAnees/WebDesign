import GradientBorder from "../UI/GradientBorder";
import Navbar from "../UI/Navbar";
import BottomPanel from "./BottomPanel";
import HeroLeftPanel from "./HeroLeftPanel";
import HeroRightPanel from "./HeroRightPanel";

export default function Hero() {
  return (
    <div className="pt-14 pb-14">
      <div className="bg-white bg-opacity-20 rounded-3xl max-w-6xl mx-auto h-auto">
        <GradientBorder />
        <Navbar />
        <div className="flex md:flex-row flex-col">
          <HeroLeftPanel />
          <HeroRightPanel />
        </div>
        <BottomPanel />
      </div>
    </div>
  );
}
