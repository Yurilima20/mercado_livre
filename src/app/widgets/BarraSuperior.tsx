import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function BarraSuperior() {
  return (
    <div>
      <div className=" container mx-auto w-full px-6 py-2 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/download.png"
            alt="Mercado Livre"
            width={180}
            height={180}
          />
        </Link>

        {/* barra de pesquisa*/}
        <div className="border border-gray-200 bg-white flex items-center flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full px-4 py-2"
          />

          <button className=" text-gray-200 px-4 py-2">
            <Search size={24} />
          </button>
        </div>

        <button
          className="bg-purple-600  text-white
          px-4
          py-2
          rounded-full
          text-sm
          hover:bg-white"
        >
          Assine Meli+
        </button>
      </div>
    </div>
  );
}
