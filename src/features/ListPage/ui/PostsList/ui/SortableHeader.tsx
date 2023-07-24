import { FC } from "react";
import ChevronIcon from "shared/assets/icons/ChevronIcon";
import { SortDirection } from "features/ListPage/types/types";
import { ChevronIconBlock } from "./styles";

interface SortableTableHeaderProps {
  columnName: string;
  sortFunction: () => void;
  sortDirection: SortDirection;
}

const SortableTableHeader: FC<SortableTableHeaderProps> = ({
  columnName,
  sortFunction,
  sortDirection,
}) => {
  return (
    <th onClick={sortFunction}>
      {columnName}
      <ChevronIconBlock className={sortDirection === "desc" ? "flipped" : ""}>
        <ChevronIcon />
      </ChevronIconBlock>
    </th>
  );
};

export default SortableTableHeader;
