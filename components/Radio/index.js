import tw from "tailwind-styled-components";

export const Radio = ({ label = "Funk" }) => {
  return (
    <div>
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
};
