import { FC, useEffect } from "react";
import { fetchListPosts } from "features/ListPage/api/api";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/redux";
import { List, Pagination, SearchInput } from "features/ListPage";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { extractPageFromUrl } from "shared/lib/utils/pagination";
import { useLocation } from "react-router-dom";
import { ListPageWidgetContainer } from "./styles";

const ListPageWidget: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.list);
  const debouncedSearchText = useDebounce<string>(searchText, 500);
  const page = extractPageFromUrl(location.search);

  useEffect(() => {
    dispatch(fetchListPosts({ searchText: debouncedSearchText, page }));
  }, [dispatch, debouncedSearchText, page]);

  return (
    <ListPageWidgetContainer>
      <SearchInput />

      <List />

      <Pagination />
    </ListPageWidgetContainer>
  );
};

export default ListPageWidget;
