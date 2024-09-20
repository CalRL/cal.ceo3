import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/navbar";
import { RenderIcon } from "../components/Icons";
import {
  SiTypescript,
  SiNextdotjs,
  SiCsharp,
  SiMicrosoftazure,
  SiTailwindcss,
  SiChakraui,
  SiSpigotmc,
} from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaReact } from "react-icons/fa6";

export default function About() {
  return (
    <div className="h-full xl:overflow-hidden">
      <Navbar />
      <div>
        <Main />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="mx-auto lg:max-w-4xl max-w-sm">
        <div className="pt-8 pb-2 mt-10 text-6xl text-white">Me</div>
        <div className="text-white pb-16 text-3xl">Hi 👋, I&#39;m cal</div>
        <div className="text-white text-wrap text-xl space-y-8 2xl:text-xl">
          <div className="">
            I&#39;m a computer science student at York St John University,
            aspiring to go to University College London for my masters degree.
          </div>
          <div>
            Other than university, I&#39;m always focused on improving my
            TypeScript and Java skills. I also play video games, such as
            minecraft, league of legends and overwatch.
          </div>
          <div>
            I&#39;m currently working on several projects right now, including
            my plugin Hubbly, and working as a developer on a project with over
            800 users.
          </div>
          <div className="">
            <div className="text-white text-5xl 2xl:text-5xl pt-8">Skills</div>
            <div className="2xl:text-2xl text-lg 2xl:pb-4 text-center lg:scale-100 scale-75">
              <div className="mx-auto max-w-4xl 2xl:pt-4">
                <div>Web</div>
                <WebGrid />
              </div>
              <div className="pt-4">
                <div>Other</div>
                <SkillsGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebGrid() {
  return (
    <div className="grid grid-flow-col auto-cols-max justify-between mx-auto w-full max-w-lg py-6 px-6">
      <RenderIcon name="typescript" size={36} />
      <RenderIcon name="tailwind" size={36} />
      <RenderIcon name="nextjs" size={36} />
      <RenderIcon name="react" size={36} />
      <RenderIcon name="chakra" size={36} />
      {/*<RenderIcon name="nodejs" size={36} />*/}
    </div>
  );
}

function SkillsGrid() {
  return (
    <div className="grid grid-flow-col auto-cols-max justify-between mx-auto w-full max-w-lg py-6 px-6">
      <RenderIcon name="csharp" size={36} />
      <RenderIcon name="java" size={36} />
      <RenderIcon name="spigot" size={36} />
      <RenderIcon name="velocity" size={36} />
      <RenderIcon name="python" size={36} />
      <RenderIcon name="azure" size={36} />
    </div>
  );
}
