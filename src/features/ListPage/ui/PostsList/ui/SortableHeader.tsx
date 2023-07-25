import { FC } from "react";
import ChevronIcon from "shared/assets/icons/ChevronIcon";
import { ChevronIconBlock } from "./styles";

interface SortableTableHeaderProps {
  columnName: string;
  sortFunction: () => void;
}

const SortableTableHeader: FC<SortableTableHeaderProps> = ({
  columnName,
  sortFunction,
}) => {
  return (
    <th onClick={sortFunction}>
      {columnName}
      <ChevronIconBlock>
        <ChevronIcon />
      </ChevronIconBlock>
    </th>
  );
};

export default SortableTableHeader;
