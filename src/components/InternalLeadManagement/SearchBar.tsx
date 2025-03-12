import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, SearchContainer, SearchIcon, SearchInput } from './StyledComponents';


interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    filterCriteria: string;
    setFilterCriteria: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, filterCriteria, setFilterCriteria }) => (
    <SearchContainer>
        <SearchIcon icon={faSearch} />
        <SearchInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <Dropdown value={filterCriteria} onChange={(e) => setFilterCriteria(e.target.value)}>
            <option value="firstName">Name</option>
            <option value="submitted">Submitted</option>
            <option value="status">Status</option>
            <option value="country">Country</option>
        </Dropdown>
    </SearchContainer>
);

export default SearchBar;