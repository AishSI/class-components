import { Gallery } from '@/app/layout/gallery';
import { SearchBar } from '@/app/layout/search-bar';
import { useLocalStorage } from '@/features/restore-search/hooks';

export const Main = (): React.ReactNode => {
  const [searchText, setSearchText] = useLocalStorage();

  const handleFind = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <>
      <SearchBar onSearch={handleFind} />
      <Gallery findText={searchText} />
    </>
  );
};
