import { createSlice } from "@reduxjs/toolkit";
import { fetchListPosts } from "../../api/api";
import { PostsItemData, SortDirection } from "features/ListPage/types/types";
import quickSortByField from "shared/lib/utils/quickSortByField";

interface PostsListState {
  posts: PostsItemData[];
  originalPosts: PostsItemData[];
  currentPage: number;
  totalPages: number;
  searchText: string;
  sortDirection: SortDirection;
}

const initialState: PostsListState = {
  posts: [],
  originalPosts: [],
  currentPage: 1,
  totalPages: 1,
  searchText: "",
  sortDirection: "asc",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortPostsByTitle: (state) => {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      state.posts = quickSortByField(
        state.posts,
        (a, b) =>
          a.title.localeCompare(b.title) *
          (state.sortDirection === "asc" ? 1 : -1)
      );
    },

    sortPostsByDescription: (state) => {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      state.posts = quickSortByField(
        state.posts,
        (a, b) =>
          a.body.localeCompare(b.body) *
          (state.sortDirection === "asc" ? 1 : -1)
      );
    },

    sortPostsById: (state) => {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      state.posts = quickSortByField(
        state.posts,
        (a, b) => (a.id - b.id) * (state.sortDirection === "asc" ? 1 : -1)
      );
    },

    setSearchText: (state, { payload }) => {
      state.searchText = payload;
      state.currentPage = 1;
    },

    setPageNumber: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchListPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.data;
      state.originalPosts = payload.data;
      state.totalPages = payload.totalPages;
    });
  },
});

export const {
  sortPostsByTitle,
  sortPostsById,
  sortPostsByDescription,
  setSearchText,
  setPageNumber,
} = postsSlice.actions;
export const { reducer: postsReducer } = postsSlice;
