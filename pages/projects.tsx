import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { ProjectItem } from "@/components/ProjectItem";

const About: NextPage = () => {
  return (
    <>
      <Page title="Projects">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectItem
            title="Fault Tolerant Control of a Hexacopter with a faulty motor"
            image="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          />
          <ProjectItem title="Project" />
        </div>
      </Page>
    </>
  );
};

export default About;
