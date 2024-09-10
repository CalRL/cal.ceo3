"use client";
import * as React from "react";
import "../App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
const url = "https://api.lanyard.rest/v1/users/242276511028084738";

type Props = {
  discordStatus: string;
};

export const MainComponent: React.FC<Props> = ({ discordStatus }) => {
  const color = getColor(discordStatus);
  return (
    <div className="main flex-nowrap">
      <div className="mt-[5%] w-[576px] h-full">
        <div className="">
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
                className="rounded-full border-4 avatar-border avatar"
                width="96px"
                height="96px"
                src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
                alt="Discord Avatar"
              ></img>
            </GridItem>
            <GridItem
              area={"name"}
              className="text-5x1 lg:mt-[15%]"
              fontWeight="bold"
            >
              Cal
            </GridItem>
            <GridItem
              area={"pronouns"}
              className="text-2x1 pronouns-text"
              marginTop="20%"
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
          <p className="lg:w-full w-[80%]">
            hi! I'm cal! I'm a software developer and student from the united
            kingdom. I'm mostly interested in making minecraft addons <br></br>
            right now, but I'm also doing full-stack web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const discordStatus = data.data.discord_status || "offline";

    return {
      props: {
        status: discordStatus,
      },
    };
  } catch (error) {
    console.error("Error fetching Discord information", error);
    return {
      props: {
        status: "offline", // Default status if there’s an error
      },
    };
  }
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
