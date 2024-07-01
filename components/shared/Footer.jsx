import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
    const languages = ['English', 'Spanish', 'Portuguese', 'Dutch', 'Chinese', 'Hindi', 'Japanese'];
    const [language, setLanguage] = useState(languages[0]);

    return (
        <div className='bg-black text-white min-h-screen flex flex-col'>
            <div className='flex-10 flex border-b border-gray-500'>
                <div className='flex-8 ml-2'>
                    <h1 className="text-6xl font-bold mr-4">Behance</h1>
                </div>
                <div className='flex-1 text-lg cursor-pointer ml-4'>
                    <h3 className="text-4xl font-bold">Built For Creatives</h3>
                    <p className="hover:underline">Find Inspiration</p>
                    <p className="hover:underline">Get Hired</p>
                    <p className="hover:underline">Sell Creative Assets</p>
                    <p className="hover:underline">Sell Freelance Services</p>
                </div>
                <div className='flex-1 text-lg cursor-pointer'>
                    <h3 className="text-4xl font-bold">Find Talent</h3>
                    <p className="hover:underline">Post a Job</p>
                    <p className="hover:underline">All Featured Freelance Designers</p>
                    <p className="hover:underline">Graphic Designers</p>
                    <p className="hover:underline">Photographers</p>
                    <p className="hover:underline">Video Editors</p>
                    <p className="hover:underline">Web Designers</p>
                    <p className="hover:underline">Illustrators</p>
                </div>
                <div className='flex-1 text-lg cursor-pointer'>
                    <h3 className="text-4xl font-bold">Behance</h3>
                    <p className="hover:underline">About Behance</p>
                    <p className="hover:underline">Adobe Portfolio</p>
                    <p className="hover:underline">Download the App</p>
                    <p className="hover:underline">Blog</p>
                    <p className="hover:underline">Careers</p>
                    <p className="hover:underline">Help Center</p>
                    <p className="hover:underline">Contact Us</p>
                </div>
                <div className='flex-1 text-lg cursor-pointer'>
                    <h3 className="text-4xl font-bold">Social</h3>
                    <p className="hover:underline">Facebook</p>
                    <p className="hover:underline">Instagram</p>
                    <p className="hover:underline">Twitter</p>
                    <p className="hover:underline">LinkedIn</p>
                    <p className="hover:underline">Pinterest</p>
                </div>
            </div>
            <div className='flex-1 flex justify-between items-center p-2'>
                <div className='flex gap-5 items-center'>
                    <p>Adobe</p>
                    <p>© 2024 Adobe Inc. All rights reserved.</p>
                </div>
                <div>
                    <div className='flex justify-evenly gap-2 items-center'>
                        <div className="relative inline-block">
                            <button className="border-none bg-transparent text-white">{language}<ExpandMoreIcon fontSize="small" /></button>
                            <div className="hidden absolute bg-black bottom-5 min-w-[90px] shadow-md z-10 group-hover:block">
                                {languages.length > 0 && languages.map((option) => (
                                    <a key={option} className="block" onClick={() => setLanguage(option)}>{option}</a>
                                ))}
                            </div>
                        </div>
                        <p className="hover:underline cursor-pointer">TOU</p>
                        <p className="hover:underline cursor-pointer">Privacy</p>
                        <p className="hover:underline cursor-pointer">Community</p>
                        <p className="hover:underline cursor-pointer">Do not sell or share my personal information</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
