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

import React from "react";

// Define the possible icon names as a TypeScript type
type IconName =
  | "typescript"
  | "tailwind"
  | "nextjs"
  | "react"
  | "chakra"
  | "nodejs"
  | "java"
  | "csharp"
  | "azure"
  | "spigot"
  | "papermc"
  | "velocity"
  | "python";
// Main Icons function that logs a message
export default function Icons(): void {
  console.log("You're not meant to be using this function...");
}

// Generic function to return the correct icon
export function getIcon(name: IconName, size: number): JSX.Element | null {
  const icons: { [key in IconName]: JSX.Element } = {
    typescript: <SiTypescript size={size} />,
    tailwind: <SiTailwindcss size={size} />,
    nextjs: <SiNextdotjs size={size} />,
    react: <FaReact size={size} />,
    chakra: <SiChakraui size={size} />,
    nodejs: <FaNodeJs size={size} />,
    java: <FaJava size={size} />,
    csharp: <SiCsharp size={size} />,
    azure: <SiMicrosoftazure size={size} />,
    spigot: <SiSpigotmc size={size} />,
    python: <FaPython size={size} />,
    papermc: <IconPaperMC size={size} />,
    velocity: <IconVelocity size={size} />,
  };

  return icons[name] || null;
}

// Define the mapping of icons to URLs for their respective technologies
const hrefMap: { [key in IconName]: string } = {
  typescript: "https://www.typescriptlang.org/",
  tailwind: "https://tailwindcss.com/",
  nextjs: "https://nextjs.org/",
  react: "https://react.dev/",
  chakra: "https://v2.chakra-ui.com/",
  nodejs: "https://nodejs.org/en",
  java: "https://www.java.com/",
  csharp: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  azure: "https://azure.microsoft.com/en-us/",
  spigot: "https://www.spigotmc.org/",
  python: "https://www.python.org/",
  papermc: "https://papermc.io/",
  velocity: "https://www.velocitypowered.com/",
};

// Type definition for the props expected in the RenderIcon component
interface RenderIconProps {
  name: IconName;
  size: number;
  link?: boolean;
}

// Usage example for rendering an icon with a URL
export function RenderIcon({
  name,
  size,
  link,
}: RenderIconProps): JSX.Element | null {
  const icon = getIcon(name, size);

  if (!icon) return null;
  if (link == false) {
    return icon;
  }
  return (
    <a
      href={hrefMap[name]}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transform duration-[250ms]"
    >
      {icon}
    </a>
  );
}

export function IconVelocity({ size }: { size: number }): JSX.Element | null {
  return (
    <div className="text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 34 34"
        width={size}
        height={size}
      >
        <g fill="#fff" clipPath="url(#velocity_svg__a)">
          <path d="m15.949 15.137-4.22-5.758a.925.925 0 0 0-.93-.36l-6.731 1.36a.927.927 0 0 0-.625.458L.116 16.852a.924.924 0 0 0 .063.994l4.23 5.775a.926.926 0 0 0 .93.36l6.711-1.355a.925.925 0 0 0 .624-.46l3.339-6.032a.926.926 0 0 0-.064-.997m-4.64 5.791a.746.746 0 0 1-1.044-.16l-2.42-3.297a1.248 1.248 0 0 0-1.248-.484l-4.103.83a.748.748 0 0 1-.3-1.466l4.449-.9a1.249 1.249 0 0 0 .844-.617l2.232-4.032a.748.748 0 0 1 1.37.154.747.747 0 0 1-.063.568L8.97 15.25a1.249 1.249 0 0 0 .085 1.34l2.42 3.295a.748.748 0 0 1-.164 1.043M30.01 16.182a.767.767 0 1 0 0-1.534.767.767 0 0 0 0 1.534"></path>
          <path d="M33.276 17.716H19.403a.767.767 0 0 1 0-1.534h8.29a.768.768 0 0 0 0-1.535h-5.479a.767.767 0 1 1 0-1.534h8.3a.768.768 0 0 0 0-1.535H13.34l2.608 3.56a.925.925 0 0 1 .064.994l-3.339 6.032a.919.919 0 0 1-.109.156H29.13a.767.767 0 1 0 0-1.534h-4.177a.768.768 0 1 1 0-1.535h8.323a.769.769 0 1 0 0-1.535"></path>
        </g>
        <defs>
          <clipPath id="velocity_svg__a">
            <path fill="#fff" d="M0 0h34v34H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function IconPaperMC({ size }: { size: number }): JSX.Element | null {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <path
          fill="#fff"
          d="M23.987 1.004 20.56 21.576a.858.858 0 0 1-.844.71.921.921 0 0 1-.322-.068l-6.067-2.477-3.24 3.95a.83.83 0 0 1-.657.309.763.763 0 0 1-.295-.054.854.854 0 0 1-.562-.803V18.47L20.143 4.286 5.827 16.674l-5.29-2.17A.848.848 0 0 1 0 13.768a.865.865 0 0 1 .429-.79L22.715.12a.83.83 0 0 1 .428-.12.853.853 0 0 1 .844 1.004"
        ></path>
      </svg>
    </div>
  );
}
