import { cx } from "@/lib/utils";
import Script from "next/script";
import { Prose } from "./Prose";
// @ts-ignore
import { v4 } from "uuid";
import { Button } from "@material-tailwind/react";
import { Tooltip } from "./Tooltip";

interface ProjectItemProps {
  emoji?: string;
  title?: string;
  tags?: string[];
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
  tags,
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

      {tags?.map((tag, index) => {
        return (
          <Tooltip
          key={index}
          tag={tag}
        />
        );
      })}

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
