import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Aditya Mulgundkar"
        description={
          <>
            <p>
              Robotics Systems Engineer, Product Developer
            </p>
            <p>
              Helping engineers build adaptive, robust and fault-tolerant products.
              I love building things - especially hardware products that have some level of middleware interaction.
              Writing about Robotics, Product Dev, Flutter, and other things that I find interesting.
            </p>
          </>
        }
      >
        <PostList posts={posts} />
        <div className="mt-8">
          <Link href="/posts">
            <a className="group inline-flex items-center gap-2 text-pink-600">
              View more posts{" "}
              <ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
            </a>
          </Link>
        </div>
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
