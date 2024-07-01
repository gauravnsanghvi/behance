import { useState } from "react";
import Projects from "../Filter/Projects.js";
import Assets from "../Filter/Assets.js";
import Images from "../Filter/Images.js";
import People from "../Filter/People.js";
import TuneIcon from '@mui/icons-material/Tune';
import WestIcon from '@mui/icons-material/West';

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const sections = ["Projects", "Assets", "Images", "People"];
    const [sectionName, setSectionName] = useState(sections[0]);

    function sectionRender(sectionName) {
        switch (sectionName) {
            case "Projects":
                return <Projects />;
            case "Assets":
                return <Assets />;
            case "Images":
                return <Images />;
            case "People":
                return <People />;
            default:
                return <div><h1>Error</h1></div>;
        }
    }

    function handleSection(section) {
        setSectionName(section);
    }

    function handleSidebar() {
        setToggleSidebar(!toggleSidebar);
    }

    return (
        <div className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${toggleSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="mt-2 flex justify-between items-center">
                <span onClick={handleSidebar} className="ml-1 cursor-pointer">
                    <TuneIcon fontSize="small" />
                    <button className="p-2 m-1 border-none bg-transparent text-lg font-bold">Filter</button>
                </span>
                <button className="p-2 m-1 border-none bg-transparent text-lg font-bold cursor-pointer" onClick={handleSidebar}>
                    <WestIcon fontSize="small" />
                </button>
            </div>
            <div className="flex flex-col p-2 gap-2">
                {sections.map((section) => (
                    <button
                        key={section}
                        className={`w-full h-10 px-4 font-semibold border border-gray-300 rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 ${section === sectionName ? 'bg-gray-200' : ''}`}
                        onClick={() => handleSection(section)}
                    >
                        {section}
                    </button>
                ))}
            </div>
            <div className="flex flex-col p-2">
                {sectionRender(sectionName)}
            </div>
        </div>
    );
};

export default Sidebar;
