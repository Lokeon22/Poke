import { ReactElement } from "react";

interface ChildrenProps {
  title: string;
  children?: ReactElement[];
}

export const PokeInfos = ({ title, children }: ChildrenProps) => {
  return (
    <div className="flex items-center justify-center flex-wrap text-center gap-2 sm:text-xl text-base">
      <strong className="text-blue-400">{title}</strong>
      {children}
    </div>
  );
};
