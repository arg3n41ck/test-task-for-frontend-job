import { FC, ReactNode } from "react";
import { InputContainer } from "./styles";

interface InputContainerProps {
  children: ReactNode;
}

const SearchInputContainer: FC<InputContainerProps> = ({ children }) => {
  return <InputContainer>{children}</InputContainer>;
};

export default SearchInputContainer;
