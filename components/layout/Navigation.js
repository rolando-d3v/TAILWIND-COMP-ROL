import Link from "next/link";
import {
  FaIndent,
  FaOutdent,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";

export const navList = [
  { icon: <FaPenSquare />, href: "/formulario", menu: "Formulario" },
  { icon: <FaSearch />, href: "/busqueda", menu: "Busqueda" },
  { icon: <FaTable />, href: "/tabla", menu: "Tabla" },
];

export const linksDerecho = [
  { icon: <FaIndent />, href: "/", menu: "Perfil" },
  { icon: <FaSignOutAlt />, href: "/tabla", menu: "Salir" },
];

export default function Nav(props) {
  return (
    <nav className="w-full fixed  bg-blue-200 max-h-16 ">
      <div className="md:hidden">
        {props.toggleState ? (
          <FaOutdent className="sidebar__close" onClick={props.toggle} />
        ) : (
          <FaIndent className="sidebar__close" onClick={props.toggle} />
        )}
      </div>

      <ul className="flex justify-between px-4 py-3">
        {/* <!-- NAV IZQUIERDO -->  */}
        <ul className="flex items-center space-x-4">
          <Link href="/home">
            <a className="nav-link text-blue-600 font-bold text-lg no-underline">
              <img
                className="w-8 h-8 mx-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/600px-Mangekyou_Sharingan_Kakashi.svg.png"
                alt="logo"
              />
              Home
            </a>
          </Link>

          <ul className="flex-row items-center space-x-4  hidden md:flex">
            {navList.map((nav, i) => (
              <li key={i}>
                <Link href={nav.href}>
                  <a className="nav-link no-underline focus:text-red-600  hover:text-gray-600">
                    <span className="mr-1"> {nav.icon} </span>
                    {nav.menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
        {/* <!-- NAV DERECHO -->  */}
        <ul className=" flex-row justify-between space-x-4 items-center hidden md:flex ">
          {linksDerecho.map((nav, i) => (
            <li key={i} className="">
              <Link href={nav.href}>
                <a className="nav-link border px-4 rounded-xl hover:border-blue-700 focus:bg-blue-600 focus:border-blue-900 focus:text-white">
                  <span className="mr-1"> {nav.icon} </span>
                  {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
