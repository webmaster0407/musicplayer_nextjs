import tw from "tailwind-styled-components";
import { useState } from "react";
export const Radio = ({ title, searchTerm, setSearchTerm }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked(!checked);
    if (checked) {
      searchTerm = searchTerm.replace(title, "");
      searchTerm = searchTerm.replace(",,", ",");
      if (searchTerm[searchTerm.length - 1] == ",")
        searchTerm = searchTerm.substring(0, searchTerm.length - 1);
      if (searchTerm[0] == ",")
        searchTerm = searchTerm.substring(1, searchTerm.length);
      console.log(searchTerm);
      setSearchTerm(searchTerm);
    } else {
      if (searchTerm !== "") {
        setSearchTerm(searchTerm + "," + title);
      } else setSearchTerm(title);
    }
  };
  return (
    <div className="text-lg mb-3 flex items-center">
      <input type="checkbox" onClick={toggle} />
      <label className="ml-4">{title}</label>
    </div>
  );
};
