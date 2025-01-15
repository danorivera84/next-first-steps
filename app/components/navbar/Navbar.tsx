import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "Acerca de" },
  { path: "/pricing", text: "Precios" },
  { path: "/contact", text: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center ">
        <HomeIcon className="size-5 mr-1" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((navitem) => (
        <ActiveLink key={navitem.path} {...navitem} />
      ))}
    </nav>
  );
};
