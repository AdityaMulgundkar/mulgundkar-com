import { cx } from "@/lib/utils";
import Script from "next/script";
import { Prose } from "./Prose";
// @ts-ignore
import { v4 } from "uuid";
import { Button } from "@material-tailwind/react";
import { Tooltip } from "./Tooltip";
import Image from "next/image";

interface ProjectItemProps {
  emoji?: string;
  title?: string;
  tags?: string[];
  image?:
  | "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
  | string;
  shadow?: true | boolean;
  id?: 0 | number;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  pos?: "center" | "top" | "bottom";
}
const myid = v4();

function RandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  emoji,
  title,
  tags,
  image = "/photo-test.jpg",
  shadow = true,
  id = RandomNumber(),
  fit = "cover",
  pos = "center",
}) => (
  <div className="rounded-xl bg-clip-border shadow-lg">
    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40">
      <img
        src={image}
        alt={title}
        className={cx(
          `object-${fit}`,
          `object-${pos}`,
          "w-full h-48 rounded-t-xl",
        )}
      />
      <div
        className={cx(
          shadow
            ? "to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
            : ""
        )}
      />
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
