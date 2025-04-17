import BarraSuperior from "./widgets/BarraSuperior";
import GaleriaProdutos from "./widgets/GaleriaProdutos";
import MenuNavegacao from "./widgets/MenuNavegacao";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <MenuNavegacao />
      </header>

      <main>
        <GaleriaProdutos />
      </main>
    </div>
  );
}
