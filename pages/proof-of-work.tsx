import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { cx } from "@/lib/utils";
import { Proof } from "@/components/Proof";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const opts = {
  height: "490",
  width: "736",
  playerVars: {
    autoplay: 1,
  },
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page title="Proof of Work" description={<div>Appendix to my CV, a <a href='https://landing.jobs/blog/proof-of-work' target="_blank" rel="noreferrer">brief description of my work</a></div>}>
        <Proof firstItem={true}>
          <h2>
            Embedded system based Fault Tolerant Control and Autonomous Navigation of a UAV
          </h2>
          <YoutubeEmbed embedId="z1vDjloeLiw" />
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Designed and developed several drones that can detect motor faults (using fault analysis) and reallocate actuator outputs to stabilize the drone within a few milliseconds.
          </p>
          <img
            src="/EFTC-Diagram.jpg"
            alt="Hexa frame"
            className={cx(
              "w-full",
            )}
          />
        </Proof>
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
