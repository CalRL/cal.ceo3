"use client";
import * as React from "react";
import "@/app/App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { json } from "stream/consumers";
import Image from "next/image";

const url = "https://api.lanyard.rest/v1/users/242276511028084738";

export const MainComponent: React.FC = () => {
  const [discordStatus, setDiscordStatus] = React.useState("offline");

  // Client-side fetch on component mount and periodically
  React.useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            "Cache-Control": "no-cache", // Prevent caching
          },
        });
        const data = await response.json();
        setDiscordStatus(data.data.discord_status || "offline");
      } catch (error) {
        console.error("Error fetching Discord information", error);
        setDiscordStatus("offline"); // Fallback to offline in case of error
      }
    };

    fetchDiscordStatus();
  }, []); // Empty dependency array ensures this runs once on mount

  const color = getColor(discordStatus);
  return (
    <div className="main flex-nowrap mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl">
      <div className="mt-[5%] h-full ">
        <div className="flex justify-center md:justify-start">
          <Grid
            templateAreas={`"avatar name pronouns"
                                "avatar status status"`}
            h="128px"
            w="300px"
            className="main-grid"
          >
            <GridItem
              area={"avatar"}
              className="items-center avatar"
              display="inline-block"
              justifyContent={"center"}
              marginRight="10%"
            >
              <img
                className={`rounded-full border-4 avatar
                  border-slate-600`}
                width="96px"
                height="96px"
                src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
                alt="Discord Avatar"
                style={{ borderColor: color }}
              />
            </GridItem>
            <GridItem
              area={"name"}
              className="text-5x1 mt-[15%]"
              fontWeight="bold"
            >
              Cal
            </GridItem>
            <GridItem
              area={"pronouns"}
              className="text-2x1 pronouns-text"
              marginTop="25%"
              marginLeft="-10%"
              fontWeight={700}
            >
              he/him
            </GridItem>
            <GridItem
              area={"status"}
              className=" flex text-4xl items-center space-x-2 font-semibold mt-[-20%]"
              justifyContent="start"
            >
              <FaCircle className="inline-block" style={{ color }} size={28} />
              <div style={{ color }}>
                {discordStatus.charAt(0).toUpperCase() + discordStatus.slice(1)}
              </div>
            </GridItem>
          </Grid>
        </div>
        <div className="text-3x1 text-coloring w-[95%] lg:block lg:w-full lg:text-start text-center items-center lg:content-normal">
          software developer; student; full-stack;
        </div>
        <div className="text-paragraph text-coloring margin-top-10 lg:w-full lg:text-start text-center flex justify-center lg:block lg:justify-start">
          <p className="sm:w-full w-[70%]">
            hi! I&#39;m cal! I&#39;m a software developer and student from the
            united kingdom. I&#39;m mostly interested in making minecraft addons
            right now, but I&#39;m also doing full-stack web development.
          </p>
        </div>
      </div>
    </div>
  );
};

// Get color based on the status
const getColor = (discordStatus: string) => {
  switch (discordStatus.toLowerCase()) {
    case "online":
      return "#43b581"; // Green for online
    case "idle":
      return "#faa61a"; // Yellow for idle
    case "dnd": // Do not disturb
      return "#f04747"; // Red for DND
    default:
      return "#747f8d"; // Grey for offline or unknown
  }
};
