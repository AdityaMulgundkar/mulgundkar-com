import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { ProjectItem } from "@/components/ProjectItem";
import { cx } from "@/lib/utils";
import Script from "next/script";

const About: NextPage = () => {
  return (
    <>
      <Page title="Projects">
        <Script
          type="module"
          src="https://unpkg.com/@material-tailwind/html@latest/scripts/tooltip.js"
          async
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-24">
          <ProjectItem
            title="Embedded system based Fault Tolerant Control and Autonomous Navigation of a UAV"
            image="hexa-frame-web.jpg"
            shadow={false}
          />
          <ProjectItem
            title="Project"
            image="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
            title="Fault Tolerant Control of a Hexacopter with a faulty motor"
            image="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          />
          <ProjectItem
            title="Project"
            image="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          />
        </div>
      </Page>
    </>
  );
};

export default About;
