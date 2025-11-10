import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 shadow-sm bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/alexia-groupe.png"
          alt="Logo Alexia Groupe"
          width={40}
          height={40}
          className="rounded"
        />
        <span className="font-semibold text-yellow-400 text-lg">
          Alexia Groupe
        </span>
      </div>

      <nav className="flex gap-6 text-sm text-gray-300">
        <Link href="#compta" className="hover:text-yellow-400 transition">
          Alexia Compta
        </Link>
        <Link href="#vtc" className="hover:text-yellow-400 transition">
          Alexia VTC
        </Link>
        <Link href="#multiservice" className="hover:text-yellow-400 transition">
          Alexia Multiservice
        </Link>
        <Link href="#contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
