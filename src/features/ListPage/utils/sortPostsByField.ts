import quickSortByField from "shared/lib/utils/quickSortByField";
import { PostsListState } from "../types/types";

export const sortPostsByField = (state: PostsListState, field: string) => {
  state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";

  const sortMultiplier = state.sortDirection === "asc" ? 1 : -1;

  state.posts = quickSortByField(state.posts, (a, b) => {
    if (field === "title") {
      return a.title.localeCompare(b.title) * sortMultiplier;
    }
    if (field === "description") {
      return a.body.localeCompare(b.body) * sortMultiplier;
    }
    if (field === "id") {
      return (a.id - b.id) * sortMultiplier;
    }
    return 0;
  });
};
