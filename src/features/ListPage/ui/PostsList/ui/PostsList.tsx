import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  sortPostsByDescription,
  sortPostsById,
  sortPostsByTitle,
} from "features/ListPage/model/slices/postsSlice";
import { PostsList } from "entities/ListPage/PostsList";
import SortableTableHeader from "./SortableHeader";

const List: FC = () => {
  const dispatch = useDispatch();

  const sortById = () => {
    dispatch(sortPostsById());
  };

  const sortByTitle = () => {
    dispatch(sortPostsByTitle());
  };

  const sortByDescription = () => {
    dispatch(sortPostsByDescription());
  };

  return (
    <PostsList>
      <SortableTableHeader columnName="ID" sortFunction={sortById} />

      <SortableTableHeader columnName="Заголовок" sortFunction={sortByTitle} />

      <SortableTableHeader
        columnName="Описание"
        sortFunction={sortByDescription}
      />
    </PostsList>
  );
};

export default List;
