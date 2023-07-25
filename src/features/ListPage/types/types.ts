export interface PostsItemData {
  id: number;
  title: string;
  body: string;
}

export interface PostsListState {
  posts: PostsItemData[];
  originalPosts: PostsItemData[];
  currentPage: number;
  totalPages: number;
  searchText: string;
  sortDirection: SortDirection;
}

export type SortDirection = "asc" | "desc";
