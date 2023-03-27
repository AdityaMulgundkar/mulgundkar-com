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
import { LogoTooltip } from "@/components/LogoTooltip";
import { StackOdd } from "@/components/StackOdd";
import { StackEven } from "@/components/StackEven";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Stack"
        description="All the great apps and tools that make my life easier."
      >
        <div>
          <div className="bg-white dark:bg-black shadow sm:rounded-lg">
            <div className="border-t border-gray-200 dark:border-gray-700">
              <dl>
                <StackOdd tag="Category">
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                </StackOdd>
                <StackEven tag="Category">
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                  <LogoTooltip
                    tag="Python"
                  />
                </StackEven>
              </dl>
            </div>
          </div>
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
