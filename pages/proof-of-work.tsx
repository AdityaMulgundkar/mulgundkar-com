import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { cx } from "@/lib/utils";
import { Proof } from "@/components/Proof";
import Link from "next/link";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const opts = {
  height: "490",
  width: "736",
  playerVars: {
    autoplay: 1,
  },
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Proof of Work"
        description={
          <div>
            Appendix to my CV, a{" "}
            <a
              href="https://landing.jobs/blog/proof-of-work"
              target="_blank"
              rel="noreferrer"
            >
              brief description of my work
            </a>
          </div>
        }
      >
        <Proof
          firstItem={true}
          title="Embedded system based Fault Tolerant Control and Autonomous
            Navigation of a UAV"
          category="MS Thesis, Robotics, Fault Tolerance in UAVs"
        >
          <YoutubeEmbed embedId="z1vDjloeLiw" />
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Designed and developed several drones that can detect motor faults
            (using fault analysis) and reallocate actuator outputs to stabilize
            the drone within a few milliseconds.
          </p>
          <img
            src="/EFTC-Diagram.jpg"
            alt="Hexa frame"
            className={cx("w-full")}
          />
        </Proof>
        <Proof
          title="Design, fabrication & analysis of a magnetostrictive test-bed running in a lower-earth orbit"
          category="Space Tech, Hobby Project, Robotics Test-bed"
          url="https://nis.readthedocs.io/"
        >
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Engineered a payload for ISRO&apos;s Polar Satellite Launch Vehicle
            (PSLV), expanding capabilities in satellite deployment. Conducted
            test-bed studies on Terfenol-D material&apos;s intrinsic shape
            transformation effect in outer space, advancing understanding of
            material properties under extreme conditions.
          </p>
          <img src="/nmimsedu.jpg" alt="Hexa frame" className={cx("w-full")} />
        </Proof>
        <Proof title="Open-Source" category="Flutter, OpenCV, PX4, Robotics">
          {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Creator and maintainer (BDFL) of several open-source projects.
          </p>
          <ul>
            <li>
              <a href="https://github.com/AdityaMulgundkar/DroneForce" target="_blank" rel="noreferrer">
                DroneForce
              </a>{" "}
              <br />
              Ardupilot based framework to write your custom controller and
              control a drone with ROS. You can read the usage tutorial on&nbsp;
              <Link href={`/blog/droneforce-usage`}>
                my blog.
              </Link>
            </li>
            <li>
              <a href="https://pub.dev/opencv" target="_blank" rel="noreferrer">Flutter OpenCV</a>
            </li>
            <li>
              <a href="https://pub.dev/wallpaper_manager" target="_blank" rel="noreferrer">Wallpaper Manager</a>
            </li>
          </ul>
        </Proof>
        <Proof title="Mobile Applications" category="Flutter, Android, iOS">
          {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Experienced in developing mobile applications using Flutter, React
            Native, and native Android. Work done under NDA, or on contract
            isn&apos;t listed here.
          </p>
          <ul>
            <li>
              <a href="https://play.google.com/store/apps/details?id=in.wedeasy.app" target="_blank" rel="noreferrer">
                WedEasy
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.chaos_apps.valorant_plus_plus" target="_blank" rel="noreferrer">
                Valorant++
              </a>{" "}
              (Personal Project)
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=in.scangrid.app" target="_blank" rel="noreferrer">
                ScanGrid
              </a>{" "}
              by VieTrove Solutions
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=co.soaron.untouched_flutter" target="_blank" rel="noreferrer">
                Untouched
              </a>{" "}
              by SoarOn
            </li>
          </ul>
        </Proof>
        <Proof
          title="Recent Websites"
          category="Responsive websites, landing pages, modern web apps, PWAs"
        >
          {/* <img src="/untouched.jpg" alt="Hexa frame" className={cx("w-64")} /> */}
          <p className="mb-4 block font-sans text-base font-light leading-relaxed antialiased">
            Experienced in developing websites using React, Next.js, Django,
            MySQL, MongoDB, PostgreSQL, GraphQL and PHP. Back-end dashboards,
            admin panels and internal websites aren&apos;t listed here.
          </p>
          <ul>
            <li>
              <a href="https://wedeasy.in" target="_blank" rel="noreferrer">WedEasy</a>
            </li>
            <li>
              <a href="https://www.guildcap.com/" target="_blank" rel="noreferrer">Guild Capital</a>
            </li>
            <li>
              <a href="https://www.atidiv.com/" target="_blank" rel="noreferrer">Atidiv</a>
            </li>
            <li>
              <a href="https://www.argylesp.com/" target="_blank" rel="noreferrer">ArgyleSP</a>
            </li>
            <li>
              <a href="https://www.blackwatch.io/" target="_blank" rel="noreferrer">BlackWatch Advisors</a>
            </li>
          </ul>
        </Proof>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
