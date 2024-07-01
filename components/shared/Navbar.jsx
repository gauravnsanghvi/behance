import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
    return (
        <div className="w-full flex justify-between shadow-sm">
            <div className="flex gap-5 items-center ml-2 text-sm font-bold">
                <h1 className="text-2xl py-2 hover:border-b-2 hover:border-black transition ease-in">Behance</h1>
                <h2 className="py-2 hover:border-b-2 hover:border-black transition ease-in">For You</h2>
                <h2 className="py-2 hover:border-b-2 hover:border-black transition ease-in">Discover</h2>
                <h2 className="py-2 hover:border-b-2 hover:border-black transition ease-in">Hire</h2>
                <h2 className="py-2 hover:border-b-2 hover:border-black transition ease-in">Assets</h2>
                <h2 className="py-2 hover:border-b-2 hover:border-black transition ease-in">Jobs</h2>
            </div>
            <div className="flex gap-2 items-center mr-2 justify-end font-bold">
                <span className="w-5"><NotificationsIcon fontSize='small'/></span>
                <button className="w-24 h-8 text-blue-600 bg-white border border-blue-200 rounded-full hover:bg-blue-50 transition ease-in">
                    Log In
                </button>
                <button className="w-24 h-8 text-white bg-blue-700 border border-blue-700 rounded-full hover:bg-blue-800 transition ease-in">
                    Sign Up
                </button>
                <span className="opacity-10 border-r-2 border-black h-full"></span>
                <button className="w-24 h-8 text-black bg-white border border-blue-200 rounded-full hover:bg-blue-50 transition ease-in">
                    Free Trial
                </button>
                <button className="font-semibold bg-white border-none">Adobe</button>
            </div>
        </div>
    );
}

export default NavBar;
