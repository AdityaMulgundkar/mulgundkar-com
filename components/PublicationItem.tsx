import { cx, slugify } from "@/lib/utils";
import Script from "next/script";
import { Prose } from "./Prose";
// @ts-ignore
import { v4 } from "uuid";
import { Button, Tooltip } from "@material-tailwind/react";
import { Tag } from "./Tag";
import Link from "next/link";
import { ArrowRight } from "react-feather";

interface PublicationItemProps {
  date?: string;
  title?: string;
  doi?: string;
  authors?: string;
  id?: 0 | number;
  tags?: string[];
}

export const PublicationItem: React.FC<PublicationItemProps> = ({
  date,
  children,
  authors,
  title,
  doi,
  tags,
}) => (
  <li className="py-8">
    <article>
      <time className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}>
        {date}
      </time>
      <h2 className="font-bold text-xl">
        <Link href={doi}>
          <a className="group inline-flex items-center gap-2 text-pink-600">
            {title}
          </a>
        </Link>
      </h2>
      {authors ? (
        <div className="mt-3">
          <Prose>
            <p>{authors}</p>
          </Prose>
        </div>
      ) : null}
      {tags ? (
        <ul className="mt-4 flex flex-wrap space-x-2">
          {tags.map((tag, index) => {
            return (
              <li key={index}>
                <Tag href={`/blog/tagged/${slugify(tag)}`}>{tag}</Tag>
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  </li>
);
