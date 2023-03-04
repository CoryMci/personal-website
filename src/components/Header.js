export default function Header() {
  return (
    <ul className="flex justify-center md:justify-end header uppercase text-lg tracking-widest">
      <li className="m-2 sm:m-4 md:px-8 pb-8 hover:border-b-4 hover:mb-1 border-red-500">
        <a href="#home">Home</a>
      </li>
      <li className="m-2 sm:m-4 md:px-8 pb-8 hover:border-b-4 hover:mb-1 border-red-500">
        <a href="#about">About</a>
      </li>
      <li className="m-2 sm:m-4 md:px-8 pb-8 hover:border-b-4 hover:mb-1 border-red-500">
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
}
