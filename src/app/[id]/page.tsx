import BarraSuperior from "../widgets/BarraSuperior";
import MenuNavegacao from "../widgets/MenuNavegacao";

const dados = {
  produto: {
    id: "1",
    titulo: "teste tesst ets",
    descricao: "teste",
    preco: "R$ 1190.00",
    local: "Df- teste ",
    url: "teste ",
    fotos: [
      {
        id: "1",
        descricao: "teste teste teste teste",
        url: "teste",
      },
    ],
  },
};

type Props = {
  params: {
    id: string;
  };
};

export default function Detalhes({ params }: Props) {
  const { id } = params;
  const produto = dados.produto;
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <MenuNavegacao />
      </header>

      <main className="text-black">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 ">
            <div className="grid grid-cols-3 gap-2">
              {produto.fotos.map((foto, i) => {
                const primeiroItem = i == 0 ? "col-span-2 row-span-2" : "";
                return (
                  <div className={primeiroItem} key={i}>
                    <img
                      key={i}
                      src={foto.url}
                      alt={`Imagem ${i + 2}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* detalhes do produto*/}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {produto.titulo}
                </h1>
                <p className="text-3xl text-green-300 font-bold mb-4">
                  {produto.preco}
                </p>
                <p className="text-gray-700 mb-4">{produto.descricao}</p>
                <p className="text-sm text-gray-500">{produto.local}</p>
              </div>

              <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
