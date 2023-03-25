import { cx } from "@/lib/utils";
import Script from "next/script";
import { Prose } from "./Prose";
// @ts-ignore
import { v4 } from "uuid";
import { Button, Tooltip } from "@material-tailwind/react";

interface ProjectItemProps {
  emoji?: string;
  title?: string;
  image?:
    | "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
    | string;
  shadow?: true | boolean;
  id?: 0 | number;
}
const myid = v4();

function RandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  emoji,
  children,
  title,
  image,
  shadow = true,
  id = RandomNumber(),
}) => (
  <div className="rounded-xl bg-clip-border shadow-lg">
    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 rounded-t-xl"
      />
      <div
        className={cx(
          shadow
            ? "to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
            : ""
        )}
      />
      <button
        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      ></button>
    </div>
    <div className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal antialiased">
          {title}
        </h5>
      </div>
      <div className="group mt-0 mb-4 inline-flex flex-wrap items-center gap-3">
        <span
          data-ripple-light="true"
          data-tooltip-target={id}
          className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
            <path
              fillRule="evenodd"
              d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
              clipRule="evenodd"
            ></path>
            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
          </svg>
        </span>
        <div
          data-tooltip={id}
          className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
          data-tooltip-mount="opacity-100 scale-100"
          data-tooltip-unmount="opacity-0 scale-0 pointer-events-none"
          data-tooltip-transition="transition-all duration-200 origin-bottom"
        >
          {id}
        </div>
      </div>
      <button
        className={cx(
          "block w-full select-none rounded-lg py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md transition-all",
          "bg-gray-900 text-gray-50",
          "dark:bg-gray-800 dark:text-gray-50"
        )}
        type="button"
        data-ripple-light="true"
      >
        Read More
      </button>
    </div>
  </div>
);
