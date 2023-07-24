import { FC } from "react";
import { PostsItemData } from "features/ListPage/types/types";

const PostsListItem: FC<PostsItemData> = ({ id, title, body }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default PostsListItem;
