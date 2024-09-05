import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <div>
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
    <div>
      <a
        target="_blank"
        href="https://www.spigotmc.org/resources/hubbly-1-20-6-1-21-1-the-only-hub-plugin-you-will-ever-need.117243/"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <img
            className="aspect-video w-full object-cover"
            src="/hubbly.png"
            alt="Hubbly logo"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Hubbly</div>
            <p className="text-gray-400 text-base text-center">
              All in one minecraft hub software. Extremely customizable, easy to
              use, and feature rich.
            </p>
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
            <div className="font-bold text-xl mb-2 text-center">
              Just Another Chat Room
            </div>
            <p className="text-gray-400 text-base text-center">
              A university assignment, working with networks, IO, and GUIs
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

function PlaytimeChat() {
  return (
    <div>
      <a
        target="_blank"
        href="https://www.spigotmc.org/resources/hubbly-1-20-6-1-21-1-the-only-hub-plugin-you-will-ever-need.117243/"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform transform scale-90 hover:scale-100 duration-200">
          <img
            className="aspect-video w-full object-cover"
            src="/velocity.png"
            alt="Velocity logo"
          />
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2 text-center text-nowrap">
              VelocityOnlineTime / PlaytimeChat
            </div>
            <p className="text-gray-400 text-base text-center">
              System to allow players to chat after a certain amount of time has
              passed.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
