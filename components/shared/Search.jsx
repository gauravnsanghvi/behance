import { useState, useEffect, useRef } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const FilterandSearch = ({ toggleSidebar, setToggleSidebar, onSearch }) => {
    const [sorthandle, setSorthandle] = useState(false);
    const sortOptions = ['Recommended', 'Curated', 'Most Appreciated', 'Most Viewed', 'Most Discussed', 'Most Recent'];
    const [title, setTitle] = useState(sortOptions[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const dropdownRef = useRef(null);

    const fetchData = async () => {
        try {
            let response;
            if (searchTerm !== '') {
                response = await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: {
                        query: searchTerm,
                        per_page: 40,
                        client_id: process.env.NEXT_PUBLIC_UNSPLASH_KEY
                    }
                });
            } else {
                response = await axios.get(`https://api.unsplash.com/photos`, {
                    params: {
                        per_page: 40,
                        client_id: process.env.NEXT_PUBLIC_UNSPLASH_KEY
                    }
                });
            }
            setSearchResults(response.data.results || response.data);
            onSearch(response.data.results || response.data);
        } catch (error) {
            console.error('Error fetching images from Unsplash:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, onSearch]);

    const handleSidebar = () => {
        setToggleSidebar((prev) => !prev);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const filteredSuggestions = sortOptions.filter(option => 
                option.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    return (
        <div className={toggleSidebar ? "ml-72 flex gap-2 items-center justify-end mt-1 p-4 shadow" : "flex gap-2 items-center justify-center mt-1 p-4 shadow"}>
            <div className="flex items-center justify-center w-20 h-12 text-black bg-white border border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer" onClick={handleSidebar}>
                <TuneIcon fontSize="small" />
                <button className="border-none bg-transparent text-black font-bold">Filter</button>
            </div>
            <div className="relative flex flex-1 items-center p-2 bg-gray-100 border border-gray-200 rounded-full focus-within:bg-white">
                <SearchIcon />
                <input 
                    type="text" 
                    placeholder="Search the Creative World at work" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-gray-100 text-black w-full h-5 border-none ml-2 focus-within:bg-white focus-within:outline-none" 
                />
                {/* <button onClick={fetchData} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
                    Search
                </button> */}
                {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                        {suggestions.map((suggestion, index) => (
                            <div 
                                key={index} 
                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex-none relative">
                <h3 className="absolute bg-white text-gray-800 text-xs -mt-3 ml-3 px-1">Sort</h3>
                <button onClick={() => setSorthandle((prev) => !prev)} className="flex items-center text-sm mt-1 dropbtn bg-white border border-gray-200 rounded-full px-3 py-2 focus:outline-none">
                    {title}<ArrowDropDownIcon fontSize="small" />
                </button>
                {sorthandle && (
                    <div ref={dropdownRef} className="absolute bg-white mt-1 min-w-[160px] max-w-full shadow z-10 overflow-auto max-h-60 rounded-md border border-gray-200">
                        {sortOptions.map((option) => (
                            <a key={option} className="block px-3 py-2 font-semibold text-black hover:text-blue-500 cursor-pointer" onClick={() => { setTitle(option); setSorthandle(false); }}>{option}</a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilterandSearch;
