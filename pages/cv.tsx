import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";

interface CVProps {
  posts: Array<MDXFrontMatter>;
}

const CV: NextPage<CVProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Curriculum Vitae"
        description={
          <>
            <p>
              Please fill the form below in order to download my CV. I will not
              store or use this data, it is only for validation and spam
              prevention.
            </p>
          </>
        }
      >
        {/* <form action="/api/form" method="post"> */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first"
                    className="block text-sm font-medium leading-6"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first"
                      id="first"
                      autoComplete="given-name"
                      required={true}
                      minLength={2}
                      maxLength={20}
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last"
                    className="block text-sm font-medium leading-6"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last"
                      id="last"
                      autoComplete="family-name"
                      required={true}
                      minLength={2}
                      maxLength={20}
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required={true}
                      minLength={2}
                      maxLength={50}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                      className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6">
                    Your Role
                  </legend>
                  <p className="mt-1 text-sm leading-6">
                    Why would you be interested in vieiwing my CV?
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="role"
                        type="radio"
                        value={"recruiter"}
                        defaultChecked={true}
                        className="h-4 w-4 border-gray-300 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6"
                      >
                        I'm a Recruiter
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="role"
                        type="radio"
                        value={"researcher"}
                        className="h-4 w-4 border-gray-300 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6"
                      >
                        I'm a Researcher
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="role"
                        type="radio"
                        value={"student"}
                        className="h-4 w-4 border-gray-300 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6"
                      >
                        I'm a Student
                      </label>
                    </div>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="rounded-md bg-pink-600 px-3 py-2 text-sm text-gray-100 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </form>
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

// Handles the submit event on form submit.
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault();

  // Get data from the form.
  const data = {
    first: event.currentTarget.first.value,
    last: event.currentTarget.last.value,
    email: event.currentTarget.email.value,
    role: event.currentTarget.role as any,
  };
  let a = document.createElement("a");
  a.href = "CV.pdf";
  a.download = "Aditya_M_" + ((Date.now() / 1000) | 0).toString() + "_CV.pdf";
  a.click();
  //   alert(`${data.first} ${data.last} ${data.email} ${data.role.value}`);
};

export default CV;
