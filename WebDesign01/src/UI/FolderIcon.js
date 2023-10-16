const icons = [
  { text: "Mobile App Design" },
  { text: "Games" },
  { text: "Marketing" },
  { text: "Search Engine OPT" },
  { text: "Software Development for Business" },
];

export default function FolderIcon() {
  return (
    <div className="flex flex-wrap md:max-w-sm px-10 pt-14">
      {icons.map((i, index) => (
        <div
          className={'border border-white cursor-pointer text-white hover:bg-orange-200 hover:text-black hover:border-transparent my-2.5 mx-1.5 px-5 rounded-lg text-sm py-1.5 font-thin'}
          key={index}
        >
          {i.text}
        </div>
      ))}
    </div>
  );
}
