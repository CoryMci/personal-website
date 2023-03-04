import { useEffect } from "react";
import { useState } from "react";

export default function Welcome() {
  const titles = ["Accountant", "Programmer", "Climber", "Backpacker"];
  const [title, setTitle] = useState(titles[0]);

  function nextTitle() {
    if (titles.indexOf(title) === titles.length - 1) {
      setTitle(titles[0]);
    } else {
      setTitle(titles[titles.indexOf(title) + 1]);
    }
  }

  useEffect(() => {
    let timeout;
    clearInterval(timeout);
    timeout = setInterval(() => {
      nextTitle();
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, [title]);

  return (
    <div className="min-h-[90vh] flex flex-col justify-center pl-4">
      <div className="text-4xl md:text-6xl sm:text-3xl sm:text-bold uppercase tracking-wider">
        Cory McIver
      </div>
      <div className="flex text-2xl flex-col md:flex-row md:text-3xl sm:text-xl sm:text-bold tracking-wide">
        <span className="line-through pr-2">Web Developer</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
