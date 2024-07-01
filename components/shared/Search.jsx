import { useState, useEffect, useRef } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const FilterandSearch = ({ toggleSidebar, setToggleSidebar, cardTitles = [] }) => {
    const [sorthandle, setSorthandle] = useState(false);
    const sortOptions = ['Recommended', 'Curated', 'Most Appreciated', 'Most Viewed', 'Most Discussed', 'Most Recent'];
    const [title, setTitle] = useState(sortOptions[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSorthandle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setSorthandle((prev) => !prev);
    };

    const handleSidebar = () => {
        setToggleSidebar((prev) => !prev);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value) {
            const filteredSuggestions = cardTitles.filter(title => 
                title.toLowerCase().includes(value.toLowerCase())
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
            {!toggleSidebar && 
                <div className="flex items-center justify-center w-20 h-12 text-black bg-white border border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer" onClick={handleSidebar}>
                    <TuneIcon fontSize="small" />
                    <button className="border-none bg-transparent text-black font-bold">Filter</button>
                </div>
            }
            <div className="relative flex flex-1 items-center p-2 bg-gray-100 border border-gray-200 rounded-full focus-within:bg-white">
                <SearchIcon />
                <input 
                    type="text" 
                    placeholder="Search the Creative World at work" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-gray-100 text-black w-full h-5 border-none ml-2 focus-within:bg-white focus-within:outline-none" 
                />
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
                <button onClick={handleClick} className="flex items-center text-sm mt-1 dropbtn bg-white border border-gray-200 rounded-full px-3 py-2 focus:outline-none">
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
