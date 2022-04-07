import tw from "tailwind-styled-components";

export const Radio = ({ title = "Funk" }) => {
  return (
    <Wrapper>
      <CheckBoxWrapper>
        <Input type="checkbox" />
      </CheckBoxWrapper>
      <label className="">{title}</label>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  ml-8
  text-inherit
  text-lg
  mb-4
  flex
  items-center  
`;
const CheckBoxWrapper = tw.div`
  items-center
  relative
  mr-6  
`;

const Input = tw.input`
  mr-2
  w-5
  h-5
  absolute
  top-2/4
  left-2/4
  -translate-x-2/4 
  -translate-y-2/4
  z-10
  hover:shadow-lg
`;
