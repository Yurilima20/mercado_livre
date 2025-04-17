import Link from "next/link";

const dados = {
  produtos: [
    {
      id: "1",
      titulo: "Smartphone Samsung A05s 46 128GB 6GB Camêra traseira",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      preco: "R$ 1.299,00",
      local: "São Paulo - SP",
      url: "smartphone-sansumg",
      fotos: [
        {
          id: "1",
          descricao:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
          url: "https://web.codans.com.br/mercado-livre/img/produtos/01/001.w",
        },
      ],
    },
  ],
};

export default function GaleriaProdutos() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dados.produtos.map((produto, indice) => (
            <Link key={indice} href={produto.url}>
              <div className="bg-white rounded-xl shadow hover:shadow-md transition">
                <img
                  src={produto.fotos[0].url}
                  alt={produto.fotos[0].descricao}
                  className="w-full h-48 object-center"
                />
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {produto.titulo}
                  </h3>
                  <p className="text-sm font-bold text-green-600 mb-1">
                    R${produto.preco}
                  </p>
                  <p className="text-sm text-gray-500">{produto.local}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
