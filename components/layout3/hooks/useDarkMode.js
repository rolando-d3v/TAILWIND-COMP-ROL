import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const cambioDark = () => {
    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html").classList.add("dark");
      setToggle(true);
    } else {
      let htmlx = document.querySelector("html").classList;
      if (localStorage.theme == "dark") {
        htmlx.remove("dark");
        localStorage.setItem("theme", "ligth");
        htmlx.add("ligth");
        setToggle(false);
      } else if (localStorage.theme == "ligth") {
        htmlx.remove("ligth");
        localStorage.setItem("theme", "dark");
        htmlx.add("dark");
        setToggle(true);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      setToggle(true);
    }
  }, []);

  return { toggle, cambioDark };
};
