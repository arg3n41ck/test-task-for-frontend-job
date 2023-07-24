import { FC, ReactNode } from "react";
import { PaginationContainer } from "./styles";

interface PaginationContainerProps {
  children: ReactNode;
}

const Pagination: FC<PaginationContainerProps> = ({ children }) => {
  return <PaginationContainer>{children}</PaginationContainer>;
};

export default Pagination;
