import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://mulgundkar.com",
  siteName: "Aditya Mulgundkar",
  siteDescription:
    "Personal website and blog.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects"},
    { label: "Publications", href: "/publications"},
    { label: "CV", href: "/cv"},
    { label: "Stack", href: "/stack"},
    { label: "Bookmarks", href: "https://xplus1.notion.site/9bda5f73cfc6495d85d16b22af460c4a?v=29f5e160e3354a8f9859595cd9a87e3c"},
  ],
  social: {
    github: "https://github.com/AdityaMulgundkar",
    twitter: "https://twitter.com/adityam1995",
    linkedin: "https://www.linkedin.com/in/AdityaMulgundkar/",
  },
};
export default siteConfig;
