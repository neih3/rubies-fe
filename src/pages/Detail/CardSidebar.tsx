import { HTMLProps } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}

const CardSidebar = ({ children, title, className }: Props) => {
  return (
    <div className={`border border-gray-200 rounded ${className}`}>
      <h3 className="font-bold uppercase border-b-2 border-gray-200 w-full text-center py-2.5 text-base">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default CardSidebar;
