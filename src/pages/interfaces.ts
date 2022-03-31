export interface StateProps {
  currentPage: number;
  fetchPostsAfter: number; // new posts will fetch after 10 seconds
  maximumPages: number; // maximum pages to fetch
}
