import { useEffect } from "react";
import { useState } from "react";

export default function Welcome() {
  const titles = [
    "Accountant",
    "Programmer",
    "Climber",
    "Surfer",
    "Backpacker",
  ];
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
    <div className="min-h-[90vh] flex flex-col justify-center">
      <div className="text-6xl uppercase tracking-wider">Cory McIver</div>
      <div className="text-3xl tracking-wide">
        <span className="line-through pr-2">Web Developer</span>
        {title}
      </div>
    </div>
  );
}
