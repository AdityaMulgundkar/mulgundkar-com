import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { ProjectItem } from "@/components/ProjectItem";
import Script from "next/script";

const About: NextPage = () => {
  return (
    <>
      <Page title="Projects" description="Some of the recent work I've done.">
        <Script
          type="module"
          src="https://unpkg.com/@material-tailwind/html@latest/scripts/tooltip.js"
          async
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-24">
          <ProjectItem
            title="Embedded system based Fault Tolerant Control and Autonomous Navigation of a UAV"
            description="Designed and developed several drones that can detect motor faults (using fault analysis) and reallocate actuator outputs (using an adaptive controller) to stabilize the drone within a few milliseconds."
            image="/hexa-frame-web.jpg"
            tags={["PX4", "UAV", "Python", "ROS", "Gazebo"]}
            fit="contain"
          />
          <ProjectItem
            title="Design, fabrication & analysis of a magnetostrictive test-bed running in a lower-earth orbit"
            description="Designed a payload for ISRO’s Polar Satellite Launch Vehicle (PSLV).
            Test-bed studies Terfenol-D material's intrinsic shape transformation effect, in outer space."
            tags={["Space Tech"]}
            image="https://nis.readthedocs.io/en/latest/_images/NIS_Logo.jpeg"
            fit="contain"
          />
          <ProjectItem
            title="Created NuGet package for OpenCV and OpenCV contrib (under GSoC 2021)"
            description="Created an OpenCV package on Nuget & brought support for automated deployment to it.
            The NuGet package updates every time the core OpenCV project has an update."
            image="https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png"
            tags={["OpenCV"]}
            fit="contain"
          />
          <ProjectItem
            title="Valorant++ Companion App"
            description="Game companion app that shows relevant game data and statistics.
            Gained 10k users organically, only released 1 version (at launch), yet one of the most famous/ most downloaded Valorant apps on the Play Store"
            image="/valorant.jpg"
            tags={["Flutter"]}
            fit="cover"
            pos="top"
          />
          <ProjectItem
            title="Network Function Virtualization orchestration for on-premise vCPE (B.Tech Project)"
            description="Implemented NFV to benchmark WAN on Customer Premise Equipment.
            Successfully implemented RFC 3031, RFC 3035, RFC 3036."
            image="https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg"
            tags={["Flutter"]}
            fit="contain"
          />
          <ProjectItem
            title="Network Function Virtualization orchestration for on-premise vCPE (B.Tech Project)"
            description="Implemented NFV to benchmark WAN on Customer Premise Equipment.
            Successfully implemented RFC 3031, RFC 3035, RFC 3036."
            image="https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg"
            tags={["Flutter"]}
            fit="contain"
          />
          <ProjectItem
            title="Flutter plug-in providing (a few) basic bindings to OpenCV-4.x. OpenCV methods implemented without the Core packages."
            image="https://raw.githubusercontent.com/AdityaMulgundkar/flutter_opencv/master/flutter_opencv.png"
            tags={["Flutter", "OpenCV"]}
            fit="contain"
          />
          <ProjectItem
            title="A Flutter plugin for changing the Home Screen, Lock Screen (or both) Wallpaper on Android devices.            "
            image="https://i.imgur.com/pWgGxs5.png"
            tags={["Flutter", "Android"]}
            fit="cover"
          />
        </div>
      </Page>
    </>
  );
};

export default About;
