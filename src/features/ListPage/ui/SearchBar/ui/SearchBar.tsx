import { FC, ChangeEvent } from "react";
import { setSearchText } from "features/ListPage/model/slices/postsSlice";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/redux";
import { SearchInputContainer } from "entities/ListPage";
import SearchIcon from "shared/assets/icons/SearchIcon";

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.list);

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <SearchInputContainer>
      <input
        type="text"
        value={searchText}
        onChange={handleChangeSearchText}
        placeholder="Поиск"
      />

      <SearchIcon />
    </SearchInputContainer>
  );
};

export default SearchBar;
