import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
export default function Navbar() {
  const navList = ["Plans", "Pricing", "About Us"];
  return (
    <nav className="w-full bg-white shadow-sm py-3">
      <div className="max-w-4xl md:mx-auto mx-3 flex justify-between items-baseline">
        <Link href="/">
          <h1 className="font-extrabold text-xl">
            <span className="text-red-600">R</span>edBrains.
          </h1>
        </Link>
        <ul className="flex gap-x-4 text-sm ">
          <div className="hidden md:flex gap-x-4">
            {navList.map((v, idx) => {
              return (
                <Link key={idx} href={v.replace(" ", "").toLowerCase()}>
                  <li>{v}</li>
                </Link>
              );
            })}
          </div>
          <Link href="https://github.com/Red-Brains">
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </Link>
          <Link href="https://youtube.com/@red-brains">
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
