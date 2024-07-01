import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Card = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                    className="w-full h-64 object-cover cursor-pointer"
                    src={data.urls.regular}
                    alt="card-image"
                    onClick={toggleModal}
                />
                <div className="bg-white p-4 flex justify-between items-center">
                    <div className="text-info">
                        <p className="text-lg font-bold capitalize hover:underline">{data.alt_description}</p>
                        <p className="text-sm text-gray-600 hover:underline">{data.user.username}</p>
                    </div>
                    <div className="text-icons flex items-center space-x-2">
                        <p className="flex items-center bg-transparent text-none">
                            <ThumbUpAltIcon fontSize="small" /> {data.likes}
                        </p>
                        <p className="flex items-center bg-transparent text-none">
                            <RemoveRedEyeIcon fontSize="small" /> {data.views}
                        </p>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="modal-content bg-white rounded-lg overflow-hidden max-w-4xl w-full">
                            <span className="absolute top-0 right-0 m-4 cursor-pointer text-gray-800" onClick={toggleModal}>X</span>
                            <img className="w-full" src={data.urls.regular} alt="modal-content" />
                            <div className="p-4">
                                <p className="text-lg font-bold capitalize">{data.alt_description}</p>
                                <p className="text-sm text-gray-600">{data.user.username}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
