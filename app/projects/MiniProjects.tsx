import * as React from "react";
import "@/app/App.css";
import Image from "next/image";
import { RenderIcon } from "../components/Icons";

export default function MiniProjects() {
  return (
    <div className="h-full ">
      <div className="text-2xl text-white items-center flex">Mini projects</div>
      <div className="items-center flex">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <MobMoverProject />
          <InfiniteFireworkProject />
        </div>
      </div>
    </div>
  );
}

function MobMoverProject() {
  return (
    <div className="">
      <a target="_blank" href="https://github.com/CalRL/XJZ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <Image
            className="aspect-video w-full object-scale-down object-top"
            src="/zombie.webp"
            alt="Picture of a baby zombie"
            width={512}
            height={512}
          />
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2 text-center">
              MobMover
            </div>
            <p className="text-gray-400 text-base text-center">
              Simple plugin to right click to store mobs, then right click again
              to move them.
            </p>
            <div className="text-white flex items-center pt-2 space-x-4">
              <RenderIcon name="java" size={36} link={false} />
              <RenderIcon name="papermc" size={24} link={false} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function InfiniteFireworkProject() {
  return (
    <div className="">
      <a target="_blank" href="https://github.com/CalRL/InfiniteFirework">
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <Image
            className="aspect-video w-full object-scale-down object-top"
            src="/firework.webp"
            alt="Picture of a baby zombie"
            width={512}
            height={512}
          />
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2 text-center">
              InfiniteFirework
            </div>
            <p className="text-gray-400 text-base text-center">
              This plug-in adds a rocket that doesn't get consumed when used if
              the player is flying with an elytra.
            </p>
            <div className="text-white flex items-center pt-2 space-x-4">
              <RenderIcon name="java" size={36} link={false} />
              <RenderIcon name="spigot" size={24} link={false} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
