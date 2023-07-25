import { createSlice } from "@reduxjs/toolkit";
import { fetchListPosts } from "../../api/api";
import { PostsListState } from "features/ListPage/types/types";
import { sortPostsByField } from "features/ListPage/utils/sortPostsByField";

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
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
      state.currentPage = 1;
    },

    sortPostsByTitle: (state: PostsListState) =>
      sortPostsByField(state, "title"),

    sortPostsByDescription: (state: PostsListState) =>
      sortPostsByField(state, "description"),

    sortPostsById: (state: PostsListState) => sortPostsByField(state, "id"),

    setPageNumber: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchListPosts.fulfilled, (state, { payload }) => {
      const { data, totalPages } = payload;
      state.posts = data;
      state.originalPosts = data;
      state.totalPages = totalPages;
    });
  },
});

export const {
  setSearchText,
  setPageNumber,
  sortPostsByTitle,
  sortPostsByDescription,
  sortPostsById,
} = postsSlice.actions;

export const { reducer: postsReducer } = postsSlice;
