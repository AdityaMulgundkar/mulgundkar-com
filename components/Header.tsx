import { useRouter } from "next/router";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";
import { useState } from "react";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="py-8 flex justify-between items-center">
      <Link href="/">
        <a className="font-bold">
          {siteConfig.avatar ? (
            <span className="flex">
              <Image
                className="rounded-md"
                src={siteConfig.avatar}
                width={48}
                height={48}
                alt={siteConfig.siteName}
                priority
              />
            </span>
          ) : (
            siteConfig.siteName
          )}
        </a>
      </Link>

      <div className="flex items-center justify-between py-8">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div
              className={cx(
                isNavOpen ? "showMenuNav" : "hideMenuNav",
                "bg-gray-100 dark:bg-gray-900",
              )}
            >
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {siteConfig.nav.map((item, index) => {
                  const isActive = item.href === pathname;
                  return (
                    <li key={index}>
                      <Link href={item.href}>
                        <a
                          aria-current={isActive ? "page" : undefined}
                          target={item.href.length > 20 ? "_blank" : undefined}
                          className={cx(
                            "text-gray-500 hover:text-gray-900",
                            "dark:text-gray-400 dark:hover:text-gray-300"
                          )}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            {siteConfig.nav.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <Link href={item.href}>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      target={item.href.length > 20 ? "_blank" : undefined}
                      className={cx(
                        "text-gray-500 hover:text-gray-900",
                        "dark:text-gray-400 dark:hover:text-gray-300"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
      {}
    </header>
  );
};
