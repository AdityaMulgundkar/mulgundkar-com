import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://mulgundkar.com",
  siteName: "Aditya Mulgundkar",
  siteDescription:
    "Personal website and blog.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/AdityaMulgundkar",
    twitter: "https://twitter.com/adityam1995",
    linkedin: "https://www.linkedin.com/in/AdityaMulgundkar/",
  },
};
export default siteConfig;
