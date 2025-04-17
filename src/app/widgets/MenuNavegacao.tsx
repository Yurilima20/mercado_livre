import Link from "next/link";

export default function MenuNavegacao() {
  return (
    <div>
      <nav className="w-full ">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <ul className="flex justify-center gap-6">
            <li>
              <Link
                href="/categorias"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                href="/ofertas"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                href="/cupons"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Cupons
              </Link>
            </li>
            <li>
              <Link
                href="/supermercado"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Supermercado
              </Link>
            </li>
            <li>
              <Link
                href="/moda"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Moda
              </Link>
            </li>
            <li>
              <Link
                href="/mercadoplay"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Mercado Play
              </Link>
            </li>
            <li>
              <Link
                href="/vender"
                className="text-sm text-gray-700 hover:bg-yellow-500"
              >
                Vender
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
