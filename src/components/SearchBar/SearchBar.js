import { BiSearch } from "react-icons/bi";
import {
  SearchContainer,
  InputContainer,
  SearchInput,
  InputIcon,
} from "./Style";

const SearchBar = ({ searchHandler, searchText }) => {
  return (
    <>
      <SearchContainer>
        <InputContainer>
          <SearchInput
            type={"search"}
            placeholder="Find Your Country ..."
            value={searchText}
            onChange={(e) => searchHandler(e.target.value)}
          />
          <InputIcon>
            <BiSearch />
          </InputIcon>
        </InputContainer>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
