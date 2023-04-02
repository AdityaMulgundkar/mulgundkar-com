interface LogoTooltipURLProps {
  tag?: string;
  description?: string;
  src?: string;
}
export const LogoTooltipURL: React.FC<LogoTooltipURLProps> = ({
  children,
  tag,
  description = tag || "",
  src,
}) => (
  <div className="relative flex flex-col items-center group">
    <img
      className="col-span-2 max-h-4 w-full object-contain lg:col-span-1 fill-cyan-500 hover:fill-cyan-700"
      src={src
      }
      alt={tag}
      width="158"
      height="48"
    />
    <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
      <span className="relative z-50 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
        {description}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>
);