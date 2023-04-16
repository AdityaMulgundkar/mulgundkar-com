import { cx } from "@/lib/utils";
import { useRef } from "react";
import { Prose } from "./Prose";

interface ProofProps {
  firstItem?: boolean | false;
  title?: string | "Some Title";
  category?: string | "Some Title";
  url?: string | "";
}
export const Proof: React.FC<ProofProps> = ({
  firstItem,
  title,
  category,
  children,
  url = "",
}) => {
  return (
    <div
      className={cx(
        "max-w-none prose prose-a:text-pink-600 dark:prose-invert",
        `${
          firstItem
            ? ""
            : "mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        }`
      )}
    >
      <Prose>
        <h2>{title}</h2>
        <h4 className="font-light">
          Category: <span className="font-thin">{category}</span>
        </h4>
        {children}
        {url != "" && (
          <a href={url} className="flex justify-end align-end" target="_blank" rel="noreferrer">
            <button
              className={cx(
                "block w-64 select-none rounded-lg py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md transition-all",
                "bg-pink-600 text-gray-50",
                "hover:bg-pink-500"
                // "dark:bg-pink-800 dark:text-gray-50"
              )}
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </a>
        )}
      </Prose>
    </div>
  );
};
