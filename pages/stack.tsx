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
import { LogoTooltipURL } from "@/components/LogoTooltipURL";

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
                <StackOdd tag="Coding">
                  <LogoTooltip
                    tag="VS Code"
                  />
                  <LogoTooltip
                    tag="Github Copilot"
                  />
                  <LogoTooltipURL
                    tag="Linear"
                    src="https://asset.brandfetch.io/iduDa181eM/id0tTqetsg.svg"
                  />
                </StackOdd>
                <StackEven tag="OSX">
                  <LogoTooltipURL
                    tag="Raycast"
                    src="https://asset.brandfetch.io/idxxHV50Mm/id71SKI8GR.svg"
                  />
                  <LogoTooltip
                    tag="GitKraken"
                  />
                  <LogoTooltipURL
                    tag="Barrier"
                    src="https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.github.debauchee.barrier.png"
                  />
                  <LogoTooltip
                    tag="iTerm2"
                  />
                </StackEven>
                <StackOdd tag="Extensions">
                  <LogoTooltip
                    tag="Bitwarden"
                  />
                  <LogoTooltip
                    tag="Grammarly"
                  />
                </StackOdd>
                <StackEven tag="Web Tools">
                  <LogoTooltip
                    tag="Notion"
                  />
                  <LogoTooltip
                    tag="AirTable"
                  />
                  <LogoTooltipURL
                    tag="Miro"
                    src="https://asset.brandfetch.io/idAnDTFapY/idkwvxShC9.jpeg"
                  />
                  <LogoTooltip
                    tag="Figma"
                  />
                </StackEven>
                <StackOdd tag="Productivity">
                  <LogoTooltip
                    tag="Blinkist"
                  />
                  <LogoTooltipURL
                    tag="Substack"
                    src="https://asset.brandfetch.io/id_V6qzrDH/idcXnLQkqq.png"
                  />
                  <LogoTooltip
                    tag="Grammarly"
                  />
                  </StackOdd>
                <StackEven tag="Academic">
                  <LogoTooltipURL
                    tag="Overleaf"
                    src="https://asset.brandfetch.io/idtZzCB9A3/ido7H3x6Zc.png"
                  />
                  <LogoTooltipURL
                    tag="TurnItIn"
                    src="https://asset.brandfetch.io/idKaAfBKjS/idKK2OHDyt.jpeg"
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
