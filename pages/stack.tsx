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
      <Page
        title="Stack"
        description="All the great apps and tools that make my life easier."
      >
        <div>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Category 1</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <div className="mx-auto mt-0 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                      <div className="relative flex flex-col items-center group">
                        <img
                          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-cyan-500 hover:fill-cyan-700"
                          src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                          alt="Transistor"
                          width="158"
                          height="48"
                        />
                        <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                          <span className="relative z-50 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
                          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                        </div>
                      </div>
                      <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                        alt="Reform"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                        alt="Tuple"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                        alt="SavvyCal"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                        alt="Statamic"
                        width="158"
                        height="48"
                      />
                    </div>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Category 2</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <div className="mx-auto mt-0 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                      <div className="relative flex flex-col items-center group">
                        <img
                          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-cyan-500 hover:fill-cyan-700"
                          src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                          alt="Transistor"
                          width="158"
                          height="48"
                        />
                        <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                          <span className="relative z-50 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
                          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                        </div>
                      </div>
                      <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                        alt="Reform"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                        alt="Tuple"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                        alt="SavvyCal"
                        width="158"
                        height="48"
                      />
                      <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                        alt="Statamic"
                        width="158"
                        height="48"
                      />
                    </div>
                  </dd>
                </div>
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
