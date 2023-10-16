const item = ["About us", "Profile", "Team", "Contact"];

export default function Navlist() {
  return (
    <div className="flex items-center">
      <ul className="flex">
        {item.map((i, index) => {
          return (
            <button key={index} className="px-3 md:px-6 text-xs hover:text-pink-300">
              {i}
            </button>
          );
        })}
      </ul>
      <button className="text-xs border-solid border-pink-200 border-t border-l border-r p-2 px-7 rounded-2xl hover:bg-gray-100 hover:border-gray-100 hover:text-black">
        Sign in
      </button>
    </div>
  );
}
