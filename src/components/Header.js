export default function Header() {
  return (
    <ul className="flex justify-end header uppercase text-lg tracking-widest font-thin">
      <li className="m-4 px-8 pb-8 hover:border-b-4 border-red-500">
        <a href="#home">Home</a>
      </li>
      <li className="m-4 px-8 pb-8 hover:border-b-4 border-red-500">
        <a href="#about">About</a>
      </li>
      <li className="m-4 px-8 pb-8 hover:border-b-4 border-red-500">
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
}
