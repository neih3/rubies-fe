import { HTMLProps } from "react";

interface Props {
  title?: string;
  active?: boolean;
  radius?: boolean;
  style?: React.CSSProperties | undefined;
  className?: HTMLProps<HTMLElement>["className"];
}

const Button = ({ title, active, radius, style, className }: Props) => {
  return (
    <div
      style={style}
      className={`${active && "bg-black text-white "}
        ${radius && "rounded-full"}
        ${className}
      text-black size-6 flex items-center justify-center rounded cursor-pointer border`}
    >
      {title}
    </div>
  );
};

export default Button;
