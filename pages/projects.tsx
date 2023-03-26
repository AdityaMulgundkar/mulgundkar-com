import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { ProjectItem } from "@/components/ProjectItem";
import { cx } from "@/lib/utils";
import Script from "next/script";

const About: NextPage = () => {
  return (
    <>
      <Page title="Projects" description="Some of the recent work I've done.">
        <Script
          type="module"
          src="https://unpkg.com/@material-tailwind/html@latest/scripts/tooltip.js"
          async
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-24">
          <ProjectItem
            title="Embedded system based Fault Tolerant Control and Autonomous Navigation of a UAV"
            image="/hexa-frame-web.jpg"
            tags={["PX4", "UAV", "Python", "ROS", "Gazebo"]}
            shadow={false}
            fit="contain"
          />
          <ProjectItem
            title="Project"
            image="/photo-test.jpg"
            fit="cover"
          />
        </div>

        <header
          className={cx(
            "mb-8 pb-8 border-b",
            "border-gray-200",
            "dark:border-gray-700"
          )}
        >
          <h3 className="font-bold text-xl">Side Projects</h3>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectItem
            title="Valorant++ Companion App"
            image="/valorant.jpg"
            tags={["Flutter"]}
            fit="cover"
            pos="top"
          />
          <ProjectItem
            title="Project"

            image="/photo-test.jpg"
             />
        </div>
      </Page>
    </>
  );
};

export default About;
