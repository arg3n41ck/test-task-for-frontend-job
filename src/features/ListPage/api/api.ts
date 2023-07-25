import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchListPostsOptions {
  page?: number;
  pageSize?: number;
  searchText?: string;
}

const URL = "https://jsonplaceholder.typicode.com";

export const fetchListPosts = createAsyncThunk(
  "posts/get",
  async (options: FetchListPostsOptions = {}, { rejectWithValue }) => {
    try {
      const { page = 1, pageSize = 10, searchText = "" } = options;

      const response = await axios.get(`${URL}/posts`, {
        params: {
          _limit: pageSize,
          _page: page,
          q: searchText,
        },
      });

      return {
        data: response.data,
        totalPages: Math.ceil(response.headers["x-total-count"] / pageSize),
      };
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);
