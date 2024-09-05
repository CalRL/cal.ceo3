import Image from "next/image";
import Navbar from "./components/navbar";
import { MainComponent } from "./components/MainComponent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex mt-[20vh] flex-col items-center justify-between">
        <MainComponent />
      </main>
    </div>
    
  );
}
