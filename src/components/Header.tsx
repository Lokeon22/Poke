import { Link } from "react-router-dom";
import { ArrowLeft, GithubLogo } from "phosphor-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4">
      <Link to="/">
        <ArrowLeft
          size={26}
          className="text-blue-400 cursor-pointer hover:text-blue-500 hover:transition-all hover:ease-in"
        />
      </Link>
      <a href="https://github.com/Lokeon22" target="_blank">
        <GithubLogo
          size={22}
          className="text-slate-100 hover:opacity-80 hover:transition-all hover:ease-in"
        />
      </a>
    </header>
  );
};
