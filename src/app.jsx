import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">hello gsap</h1>
    </div>
  );
};
