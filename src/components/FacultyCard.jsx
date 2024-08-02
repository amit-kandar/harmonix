import React, { useState } from "react";
import { Link } from "react-router-dom";

const FacultyCard = ({ data }) => {
    const [isHover, setIsHover] = useState(false);
    const {
        name,
        position,
        department,
        researchInterests,
        email,
        office,
        phoneNumber,
        address,
        imageUrl,
        yearsOfExperience,
        about,
    } = data;

    return (
        <div className="relative max-w-xl min-w-80 rounded-md overflow-hidden border bg-white mx-8 cursor-pointer"
            onMouseEnter={() => { setIsHover(true) }}
            onMouseLeave={() => { setIsHover(false) }}
        >
            <img className="w-full h-60" src={imageUrl} alt={name} />
            <div className="px-6 py-4">
                <h1 className="font-bold text-2xl mb-2">{name}</h1>
                <div className="w-full flex justify-between items-end">
                    <div>
                        <p className="text-gray-700 text-lg font-medium">{position}</p>
                        <p className="text-gray-700 text-base">{department}</p>
                    </div>
                    <p className="text-gray-700 text-base">exp: {yearsOfExperience} yrs</p>
                </div>
                <div className="mt-3">
                    <span className="text-gray-900 text-base font-medium rounded-xl">Research Interests:</span>
                    <div className="whitespace-nowrap mt-2 flex flex-wrap gap-3">
                        {
                            researchInterests.map((item, index) => (
                                <span key={index} className="px-2 py-1 bg-yellow-500 text-black font-medium rounded-full text-xs">{item}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`absolute h-full w-full py-10 px-7 bottom-0 left-0 bg-black/30 backdrop-blur-sm transform transition duration-300 ${isHover ? 'translate-y-0' : 'translate-y-full'}`}>
                <p className="text-base font-medium text-start text-yellow-500">{about}</p>
                <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-3"
                        onClick={() => { window.location = `mailto:${email}` }}
                    >
                        <i className='bx bx-envelope text-2xl text-yellow-400' ></i>
                        <span className="text-base text-black font-medium">{email}</span>
                    </div>
                    <Link to={`tel:${phoneNumber}`} className="flex items-center gap-3">
                        <i className='bx bx-phone text-2xl text-yellow-400' ></i>
                        <span className="text-base text-black font-medium">{phoneNumber}</span>
                    </Link>
                    <Link to={`https://www.google.com/maps/search/${address}`} className="flex items-center gap-3">
                        <i className='bx bx-map text-2xl text-yellow-400'></i>
                        <span className="text-base text-black font-medium">{office}, {address}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FacultyCard;
