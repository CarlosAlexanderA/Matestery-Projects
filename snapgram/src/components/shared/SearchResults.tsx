import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type searchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};
export default function SearchResults({
  isSearchFetching,
  searchedPosts,
}: searchResultsProps) {
  console.log(searchedPosts);

  if (isSearchFetching) return <Loader />;
  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
}
