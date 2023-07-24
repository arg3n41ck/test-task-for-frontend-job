import { FC, ReactNode } from "react";
import { useAppSelector } from "shared/lib/hooks/redux";
import PostsListItem from "./PostsListItem";
import { PostsListTable } from "./styles";

interface PostsItemContainerProps {
  children: ReactNode;
}

const PostsList: FC<PostsItemContainerProps> = ({ children }) => {
  const sortedPosts = useAppSelector((state) => state.list.posts);

  return (
    <PostsListTable>
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>
        {sortedPosts.map((item) => (
          <PostsListItem
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
          />
        ))}
      </tbody>
    </PostsListTable>
  );
};

export default PostsList;
