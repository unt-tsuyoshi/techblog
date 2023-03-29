import { createSlice } from '@reduxjs/toolkit';

const paginateBlogs = (blogs, pages) => {
  const startIndex = pages * 6;
  const endIndex = startIndex + 6;
  const displayed = blogs.slice(startIndex, endIndex);
  return displayed;
};

const editBlogArray = (blog) => ({
  id: blog.id,
  url: blog.hasOwnProperty('organization_url_name')
    ? blog.url
    : `/blog/${blog.id}`,
  blog_category: blog.hasOwnProperty('organization_url_name')
    ? 'qiita'
    : 'techblog',
  blog_name: blog.hasOwnProperty('organization_url_name')
    ? 'Qiita'
    : 'techblog',
  title: blog.title,
  created_at: blog.hasOwnProperty('organization_url_name')
    ? blog.created_at
    : blog.publishedAt,
});

const initialState = {
  blogs: [],
  filteredBlogs: [],
  displayedBlogs: [],
  pages: 0,
  selectedCategory: 'all',
  maxPage: 0,
};

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.maxPage - 1 === state.pages) return;
      state.pages += 1;
      state.displayedBlogs = paginateBlogs(state.filteredBlogs, state.pages);
    },
    decrement: (state) => {
      if (state.pages === 0) return;
      state.pages -= 1;
      state.displayedBlogs = paginateBlogs(state.filteredBlogs, state.pages);
    },
    initBlogs: (state, action) => {
      state.blogs = action.payload.map(editBlogArray);
      state.filteredBlogs = state.blogs;
      state.displayedBlogs = paginateBlogs(state.blogs, state.pages);
    },
    calcMaxPage: (state) => {
      state.maxPage =
        Math.floor(state.filteredBlogs.length / 6) +
        (state.filteredBlogs.length % 6 === 0 ? 0 : 1);
    },
    filterBlogs: (state) => {
      if (state.selectedCategory === 'all') {
        state.filteredBlogs = state.blogs;
        state.pages = 0;
        state.displayedBlogs = paginateBlogs(state.filteredBlogs, state.pages);
        return;
      }
      state.filteredBlogs = state.blogs.filter((blog) =>
        state.selectedCategory.includes(blog.blog_category)
      );
      state.pages = 0;
      state.displayedBlogs = paginateBlogs(state.filteredBlogs, state.pages);
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  initBlogs,
  calcMaxPage,
  filterBlogs,
  toggleCategory,
} = blogsSlice.actions;

export default blogsSlice.reducer;
