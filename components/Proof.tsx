import { cx } from "@/lib/utils";
import { Prose } from "./Prose";

interface ProofProps {
  firstItem?: boolean | false;
  title?: string | "Some Title";
  category?: string | "Some Title";
}
export const Proof: React.FC<ProofProps> = ({
  firstItem,
  title,
  category,
  children,
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
          Category:{" "}
          <span className="font-thin">
            {category}
          </span>
        </h4>
        {children}
      </Prose>
    </div>
  );
};
