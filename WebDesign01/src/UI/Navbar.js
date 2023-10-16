import Navlist from "../components/Navlist";

export default function Navbar() {
  return (
      <section className="text-white flex justify-between items-center px-10 pt-8">
        <img className="h-14" src="/logo.png" alt="" />
        <Navlist></Navlist>
      </section>
  );
}
