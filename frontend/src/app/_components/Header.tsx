import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar/Sidebar.jsx";

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-24 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src={logoSrc} alt="Restaurant Logo" width={160} height={59} />
        </Link>
        <Sidebar />

        {/* <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
        {/* Add search functionality here if needed */}
      </div>
    </header>
  );
};

export default Header;
