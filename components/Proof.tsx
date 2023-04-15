import { cx } from "@/lib/utils";
import { Prose } from "./Prose";

interface ProofProps {
  firstItem?: boolean | false;
}
export const Proof: React.FC<ProofProps> = ({ firstItem, children }) => {
  return (
    <div className={cx(
      "max-w-none prose prose-a:text-pink-600 dark:prose-invert",
      `${firstItem?"":"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"}`,
    )}>
      <Prose>
      {children}
      </Prose>
    </div>
  );
};
