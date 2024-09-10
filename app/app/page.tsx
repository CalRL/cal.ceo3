import Image from "next/image";
import Navbar from "./components/navbar";
import { MainComponent } from "./components/MainComponent";

export default async function Home() {
  const url = "https://api.lanyard.rest/v1/users/242276511028084738";

  let discordStatus = "offline"; // Default value if there's an error

  try {
    const response = await fetch(url);
    const data = await response.json();
    discordStatus = data.data.discord_status || "offline"; // Fetch Discord status
  } catch (error) {
    console.error("Error fetching Discord information", error);
  }

  return (
    <div>
      <Navbar />
      <main className="flex mt-[20vh] flex-col items-center justify-between">
        {/* Pass discordStatus to MainComponent */}
        <MainComponent discordStatus={discordStatus} />
      </main>
    </div>
  );
}
