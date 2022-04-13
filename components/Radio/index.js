import tw from "tailwind-styled-components";
import { useState } from "react";
export const Radio = ({ title, setSearchTerm }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked(!checked);
    if (checked) setSearchTerm("");
    else setSearchTerm(title);
  };
  return (
    <div className="text-lg mb-1">
      <input type="checkbox" onClick={toggle} />
      <label className="ml-4">{title}</label>
    </div>
  );
};
