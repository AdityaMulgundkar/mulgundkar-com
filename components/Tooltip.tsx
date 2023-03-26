import { cx } from "@/lib/utils";
import Script from "next/script";
import { Prose } from "./Prose";
// @ts-ignore
import { v4 } from "uuid";

interface TooltipProps {
  tag?: string;
}
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tag,
}) => (
  <div className="group mt-0 mb-4 mr-2 inline-flex flex-wrap items-center gap-3">
    <div className="relative flex flex-col items-center group">
      <span className="w-12 h-12 cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
      >
        {getSVG(String(tag))}
      </span>
      <div className="absolute bottom-6 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-50 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          {tag}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  </div>
);

function getSVG(tag: "" | String) {
  switch (tag) {
    case "Python":
      return (
        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
          className="fill-pink-500">
          <path d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369zM12.933 8.649c-0.562 0-1.018-0.461-1.018-1.030 0-0.572 0.455-1.037 1.018-1.037 0.56 0 1.018 0.465 1.018 1.037 0 0.57-0.457 1.030-1.018 1.030zM26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512zM19.033 23.794c0.562 0 1.018 0.461 1.018 1.030 0 0.572-0.456 1.037-1.018 1.037-0.56 0-1.018-0.465-1.018-1.037 0-0.57 0.457-1.030 1.018-1.030z"></path>
        </svg>
      );
    case "UAV":
      return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 512 512"
          className="fill-pink-500"
        >
          < g >
            <g>
              <path d="M396.8,281.6c-27.153,0-52.105,9.506-71.817,25.284l-9.25-9.25v-83.268l9.25-9.25
			c19.712,15.778,44.664,25.284,71.817,25.284c63.522,0,115.2-51.678,115.2-115.2S460.322,0,396.8,0S281.6,51.678,281.6,115.2
			c0,27.153,9.498,52.104,25.276,71.825l-9.242,9.242h-83.268l-9.25-9.242c15.787-19.721,25.284-44.672,25.284-71.825
			C230.4,51.678,178.722,0,115.2,0S0,51.678,0,115.2s51.678,115.2,115.2,115.2c27.153,0,52.104-9.506,71.817-25.276l9.25,9.242
			v83.268l-9.25,9.242c-19.712-15.77-44.663-25.276-71.817-25.276C51.678,281.6,0,333.278,0,396.8S51.678,512,115.2,512
			s115.2-51.678,115.2-115.2c0-27.153-9.498-52.105-25.276-71.825l9.242-9.242h83.268l9.25,9.242
			C291.098,344.695,281.6,369.647,281.6,396.8c0,63.522,51.678,115.2,115.2,115.2S512,460.322,512,396.8S460.322,281.6,396.8,281.6z
			 M115.2,486.4c-49.485,0-89.6-40.115-89.6-89.6s40.115-89.6,89.6-89.6c20.122,0,38.63,6.716,53.589,17.911l-58.505,58.505
			c-15.087-1.809-24.951-11.639-24.951-20.949c0-7.066-5.726-12.8-12.8-12.8c-7.074,0-12.8,5.734-12.8,12.8
			c0,22.579,21.205,46.933,55.467,46.933c17.869,0,29.867,11.034,29.867,21.333c0,7.066,5.726,12.8,12.8,12.8
			c7.074,0,12.8-5.734,12.8-12.8c0-16.213-10.982-33.297-29.833-41.66l46.054-46.054c11.196,14.95,17.911,33.459,17.911,53.581
			C204.8,446.285,164.685,486.4,115.2,486.4z M186.889,168.789l-58.505-58.505c1.809-15.087,11.631-24.951,20.949-24.951
			c7.074,0,12.8-5.734,12.8-12.8s-5.726-12.8-12.8-12.8c-22.571,0-46.933,21.205-46.933,55.467
			c0,17.869-11.025,29.867-21.333,29.867c-7.074,0-12.8,5.734-12.8,12.8c0,7.066,5.726,12.8,12.8,12.8
			c16.213,0,33.289-10.982,41.66-29.841l46.054,46.054c-14.95,11.204-33.459,17.92-53.581,17.92c-49.485,0-89.6-40.115-89.6-89.6
			s40.115-89.6,89.6-89.6s89.6,40.115,89.6,89.6C204.8,135.322,198.084,153.83,186.889,168.789z M290.133,290.133h-68.267v-68.267
			h68.267V290.133z M396.8,25.6c49.485,0,89.6,40.115,89.6,89.6s-40.115,89.6-89.6,89.6c-20.122,0-38.63-6.716-53.589-17.911
			l58.505-58.505c15.087,1.809,24.951,11.639,24.951,20.949c0,7.066,5.726,12.8,12.8,12.8c7.074,0,12.8-5.734,12.8-12.8
			c0-22.579-21.205-46.933-55.467-46.933c-17.869,0-29.867-11.034-29.867-21.333c0-7.066-5.726-12.8-12.8-12.8
			c-7.074,0-12.8,5.734-12.8,12.8c0,16.213,10.982,33.297,29.833,41.66l-46.054,46.054C313.916,153.83,307.2,135.322,307.2,115.2
			C307.2,65.715,347.315,25.6,396.8,25.6z M396.8,486.4c-49.485,0-89.6-40.115-89.6-89.6c0-20.122,6.716-38.63,17.911-53.589
			l58.505,58.505c-1.809,15.087-11.631,24.951-20.949,24.951c-7.074,0-12.8,5.734-12.8,12.8c0,7.066,5.726,12.8,12.8,12.8
			c22.571,0,46.933-21.205,46.933-55.467c0-17.869,11.025-29.867,21.333-29.867c7.074,0,12.8-5.734,12.8-12.8s-5.726-12.8-12.8-12.8
			c-16.213,0-33.289,10.982-41.66,29.841l-46.054-46.054c14.95-11.204,33.459-17.92,53.581-17.92c49.485,0,89.6,40.115,89.6,89.6
			S446.285,486.4,396.8,486.4z"/>
            </g>
          </g >
        </svg >

      );
    case "PX4":
    case "ROS":
      return (
        <svg
          id="svg2"
          version="1.1"
          viewBox="0 0 385.99219 102.04687"
          height="24px"
          width="24px"
          className="fill-pink-500"
        >
          <defs
            id="defs4">
            <clipPath
              id="clip1">
              <path
                id="path7"
                d="M 0.0585938,2 H 22 V 25 H 0.0585938 Z m 0,0"
              />
            </clipPath>
            <clipPath
              id="clip2">
              <path
                id="path10"
                d="M 0.0585938,40 H 22 V 64 H 0.0585938 Z m 0,0"
              />
            </clipPath>
            <clipPath
              id="clip3">
              <path
                id="path13"
                d="M 0.0585938,79 H 22 v 23 H 0.0585938 Z m 0,0"
              />
            </clipPath>
            <clipPath
              id="clip4">
              <path
                id="path16"
                d="m 220,0.894531 h 82 V 102.94141 h -82 z m 0,0"
              />
            </clipPath>
            <clipPath
              id="clip5">
              <path
                id="path19"
                d="m 316,0.894531 h 70.05078 V 102.94141 H 316 Z m 0,0"
              />
            </clipPath>
          </defs>
          <g
            id="surface839"
            transform="translate(-0.0585938,-0.894531)">
            <g
              id="g22"
              clipPath="url(#clip1)">
              <path
                id="path24"
                d="m 21.839844,13.492188 c 0,6.230468 -4.890625,11.285156 -10.917969,11.285156 C 4.890625,24.777344 0,19.722656 0,13.492188 0,7.257812 4.890625,2.207031 10.921875,2.207031 c 6.027344,0 10.917969,5.050781 10.917969,11.285157"
              />
            </g>
            <g
              id="g26"
              clipPath="url(#clip2)">
              <path
                id="path28"
                d="m 21.839844,51.949219 c 0,6.230469 -4.890625,11.285156 -10.917969,11.285156 C 4.890625,63.234375 0,58.179688 0,51.949219 0,45.714844 4.890625,40.664062 10.921875,40.664062 c 6.027344,0 10.917969,5.050782 10.917969,11.285157"
              />
            </g>
            <g
              id="g30"
              clipPath="url(#clip3)">
              <path
                id="path32"
                d="m 21.839844,90.40625 c 0,6.230469 -4.890625,11.28516 -10.917969,11.28516 C 4.890625,101.69141 0,96.636719 0,90.40625 0,84.175781 4.890625,79.121094 10.921875,79.121094 c 6.027344,0 10.917969,5.054687 10.917969,11.285156"
              />
            </g>
            <path
              id="path34"
              d="m 59.945312,51.949219 c 0,6.230469 -4.886718,11.285156 -10.917968,11.285156 -6.03125,0 -10.921875,-5.054687 -10.921875,-11.285156 0,-6.234375 4.890625,-11.285157 10.921875,-11.285157 6.03125,0 10.917968,5.050782 10.917968,11.285157"
            />
            <path
              id="path36"
              d="m 59.945312,13.492188 c 0,6.230468 -4.886718,11.285156 -10.917968,11.285156 -6.03125,0 -10.921875,-5.054688 -10.921875,-11.285156 0,-6.234376 4.890625,-11.285157 10.921875,-11.285157 6.03125,0 10.917968,5.050781 10.917968,11.285157"
            />
            <path
              id="path38"
              d="m 98.054688,51.949219 c 0,6.230469 -4.890626,11.285156 -10.921876,11.285156 -6.03125,0 -10.917968,-5.054687 -10.917968,-11.285156 0,-6.234375 4.886718,-11.285157 10.917968,-11.285157 6.03125,0 10.921876,5.050782 10.921876,11.285157"
            />
            <path
              id="path40"
              d="m 98.054688,13.492188 c 0,6.230468 -4.890626,11.285156 -10.921876,11.285156 -6.03125,0 -10.917968,-5.054688 -10.917968,-11.285156 0,-6.234376 4.886718,-11.285157 10.917968,-11.285157 6.03125,0 10.921876,5.050781 10.921876,11.285157"
            />
            <path
              id="path42"
              d="m 98.054688,90.40625 c 0,6.230469 -4.890626,11.28516 -10.921876,11.28516 -6.03125,0 -10.917968,-5.054691 -10.917968,-11.28516 0,-6.230469 4.886718,-11.285156 10.917968,-11.285156 6.03125,0 10.921876,5.054687 10.921876,11.285156"
            />
            <path
              id="path44"
              d="m 59.945312,90.40625 c 0,6.230469 -4.886718,11.28516 -10.917968,11.28516 -6.03125,0 -10.921875,-5.054691 -10.921875,-11.28516 0,-6.230469 4.890625,-11.285156 10.921875,-11.285156 6.03125,0 10.917968,5.054687 10.917968,11.285156"
            />
            <path
              id="path46"
              d="m 171.61328,16.453125 h -27.91797 v 31.816406 h 27.91797 c 9.57813,0 16.28125,-5.089843 16.28125,-15.835937 0,-10.324219 -6.56641,-15.980469 -16.28125,-15.980469 z M 181.32812,61 200.89453,101.44531 H 184.33984 L 165.31641,62.273438 h -21.6211 V 101.44531 H 129.60156 V 2.449219 h 42.01172 c 16.69531,0 30.78906,9.195312 30.78906,29.558593 0,15.839844 -8.07422,25.597657 -21.07422,28.992188"
            />
            <g
              id="g48"
              clipPath="url(#clip4)">
              <path
                id="path50"
                d="m 260.5625,15.746094 c -16.69531,0 -25.86328,14 -25.86328,36.203125 0,22.203125 9.16797,36.203125 25.86328,36.203125 16.83203,0 26,-14 26,-36.203125 0,-22.203125 -9.16797,-36.203125 -26,-36.203125 z m 0,87.253906 c -24.76563,0 -40.50391,-21.070312 -40.50391,-51.050781 0,-29.980469 15.73828,-51.054688 40.50391,-51.054688 24.90625,0 40.64062,21.074219 40.64062,51.054688 C 301.20312,81.929688 285.46875,103 260.5625,103"
              />
            </g>
            <g
              id="g52"
              clipPath="url(#clip5)">
              <path
                id="path54"
                d="m 350.60937,103 c -13.96093,0 -26,-6.222656 -34.07421,-15.980469 l 10.26171,-10.324219 c 6.4336,7.214844 15.875,11.738282 24.90625,11.738282 13.41016,0 19.83985,-4.808594 19.83985,-14.425782 0,-7.636718 -5.60938,-11.453124 -21.6211,-16.402343 -20.25,-6.222657 -29.96484,-11.457031 -29.96484,-29.132813 0,-17.113281 13.95703,-27.578125 31.60938,-27.578125 13,0 22.85156,4.953125 31.33593,13.4375 l -10.125,10.605469 c -6.02343,-6.363281 -12.86328,-9.476562 -22.30468,-9.476562 -11.22266,0 -16.01172,5.65625 -16.01172,12.304687 0,6.929687 4.3789,10.324219 20.9375,15.414063 18.88281,5.941406 30.65234,12.164062 30.65234,29.839843 C 386.05078,90.839844 375.10156,103 350.60937,103"
              />
            </g>
          </g>
        </svg>
      );
    case "Gazebo":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-pink-500">
          <path d="M9,15a1,1,0,1,0,1,1A1,1,0,0,0,9,15ZM2,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,2,14Zm20,0a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,22,14ZM17,7H13V5.72A2,2,0,0,0,14,4a2,2,0,0,0-4,0,2,2,0,0,0,1,1.72V7H7a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10A3,3,0,0,0,17,7ZM13.72,9l-.5,2H10.78l-.5-2ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10A1,1,0,0,1,7,9H8.22L9,12.24A1,1,0,0,0,10,13h4a1,1,0,0,0,1-.76L15.78,9H17a1,1,0,0,1,1,1Zm-3-4a1,1,0,1,0,1,1A1,1,0,0,0,15,15Z" />
          +</svg>
      );
    case "Flutter":
      return (
        <svg fill="#1C2033" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="fill-pink-500">
          <path d="M54.8762 29.7721L39.5042 45.3844L54.8762 61H37.3039L30.7163 54.3095L21.9284 45.3844L37.3039 29.7721H54.8762ZM37.3039 3L8.75 32L17.5379 40.9252L54.8762 3H37.3039Z" />
        </svg>
      );
    default:
      return <div></div>;
  }
  throw new Error("Function not implemented.");
}
