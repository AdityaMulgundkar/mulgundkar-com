import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight, Tag } from "react-feather";
import { cx, slugify } from "@/lib/utils";
import { formatDate } from "@/lib/formatDate";
import { Prose } from "@/components/Prose";
import { PublicationItem } from "@/components/PublicationItem";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page title="Publications">
        <ul
          className={cx(
            "divide-y -my-8",
            "divide-gray-200",
            "dark:divide-gray-700"
          )}
        >
          <PublicationItem
            title="Fault Tolerant Control using Dynamic Control Reallocation on a Hexacopter in outdoor test flights"
            date="2023-09-23"
            authors="Aditya Mulgundkar, Mayank Singh, Prudhvi Raj Turlapati, Deepak Gangadharan, Harikumar Kandath"
            doi="https://doi.org"
            tags={[
              "Fault-tolerant control",
              "Control allocation",
              "PX4",
              "ROS",
            ]}
          />
          <PublicationItem
            title="Fault Detection and Isolation on a Hexacopter UAV using a Two-stage classification method"
            date="2023-08-18"
            authors="Mayank Singh, Aditya Mulgundkar, Munjaal Bhatt, Prudhvi Raj Turlapati, Deepak Gangadharan, Harikumar Kandath"
            doi="https://doi.org"
            tags={[
              "Fault detection and isolation",
              "Fault Classification",
              "PX4",
            ]}
          />
          <PublicationItem
            title="A data-driven approach to detect actuator faults in multirotor UAV"
            date="2023-01-18"
            authors="Mayank Singh, Aditya Mulgundkar, Deepak Gangadharan, Harikumar Kandath"
            doi="https://doi.org"
            tags={[
              "Fault detection",
            ]}
          />
        </ul>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
