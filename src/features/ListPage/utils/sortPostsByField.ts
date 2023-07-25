import quickSortByField from "shared/lib/utils/quickSortByField";
import { PostsListState } from "../types/types";

export const sortPostsByField = (state: PostsListState, field: string) => {
  state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
  state.posts = quickSortByField(state.posts, (a, b) => {
    if (field === "title") {
      return (
        a.title.localeCompare(b.title) *
        (state.sortDirection === "asc" ? 1 : -1)
      );
    } else if (field === "description") {
      return (
        a.body.localeCompare(b.body) * (state.sortDirection === "asc" ? 1 : -1)
      );
    } else if (field === "id") {
      return (a.id - b.id) * (state.sortDirection === "asc" ? 1 : -1);
    } else {
      return 0;
    }
  });
};
