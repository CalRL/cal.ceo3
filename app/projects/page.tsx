import Link from "next/link";
import "../App.css";
import Navbar from "../components/navbar";
import { RenderIcon } from "../components/Icons";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="items-center flex">
        <div className="items-center pt-16 pb-16 grid grid-cols-3">
          <HubblyProject />
          <JACRProject />
          <PlaytimeChat />
        </div>
      </div>
    </div>
  );
}

function HubblyProject() {
  return (
    <div className="">
      <a
        target="_blank"
        href="https://www.spigotmc.org/resources/hubbly-1-20-6-1-21-1-the-only-hub-plugin-you-will-ever-need.117243/"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <Image
            className="aspect-video w-full object-cover"
            src="/hubbly.png"
            alt="Hubbly logo"
          />
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2 text-center">
              Hubbly
            </div>
            <p className="text-gray-400 text-base text-center">
              All in one minecraft hub software. Extremely customizable, easy to
              use, and feature rich.
            </p>
            <div className="text-white flex items-center pt-2 space-x-4">
              <RenderIcon name="java" size={36} link={false} />
              <RenderIcon name="spigot" size={36} link={false} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function JACRProject() {
  return (
    <div>
      <a target="_blank" href="https://github.com/CalRL/JustAnotherChatRoom">
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <img
            className="aspect-video w-full object-cover"
            src="/github.jpg"
            alt="Github logo"
          />
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2 text-center">
              Just Another Chat Room
            </div>
            <p className="text-gray-400 text-base text-center">
              A university assignment, working with networks, IO, and GUIs
            </p>
            <div className="text-white flex items-center pt-2">
              <RenderIcon name="java" size={36} link={false} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function PlaytimeChat() {
  return (
    <div>
      <a target="_blank" href="https://github.com/calrl/velocitytimechat">
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <img
            className="aspect-video w-full object-cover"
            src="/velocity.png"
            alt="Velocity logo"
          />
          <div className="px-4 py-4">
            <div className="text-white font-bold text-xl mb-2 text-center text-nowrap">
              VelocityOnlineTime / PlaytimeChat
            </div>
            <p className="text-gray-400 text-base text-center">
              System to allow players to chat after a certain amount of time has
              passed.
            </p>
            <div className="text-white flex items-center pt-2 space-x-4">
              <RenderIcon name="java" size={36} link={false} />
              <RenderIcon name="velocity" size={36} link={false} />
              <RenderIcon name="papermc" size={24} link={false} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
