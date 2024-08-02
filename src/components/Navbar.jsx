import { useState, useRef, useEffect } from "react"
import { COMPANY_NAME, LOGO_IMG_1, LOGO_IMG_2, NAV_LINKS, NAVLINK_CONTACT_US } from "../constants"
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    const [isShow, setIsShow] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const ref = useRef(null);
    const handleShow = () => {
        setIsShow(!isShow);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offset = 90;
            setIsScroll(scrollPosition > offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`fixed z-50 w-full ${isScroll ? "bg-white text-black" : 'bg-transparent'}`}>
            <div className="w-full flex justify-between items-center border-none border-white px-5 sm:px-10 py-3">
                {/* logo and name */}
                <Link to="/" className="flex items-center gap-3 outline-none">
                    {/* logo */}
                    <div className="w-10 h-10">
                        <img src={LOGO_IMG_1} alt="harmonix" title="harmonix" className="w-full h-full rounded-full block dark:hidden" />
                        <img src={LOGO_IMG_2} alt="harmonix" title="harmonix" className="w-full h-full rounded-full hidden dark:block" />
                    </div>
                    <span className={`hidden lg:block text-gray-100 text-2xl tracking-widest font-semibold uppercase ${isScroll && 'text-gray-800'}`}>{COMPANY_NAME}</span>
                </Link>

                {/* navlink */}
                <div className="" ref={ref}>
                    <div className={`lg:hidden ${isScroll ? 'text-black' : 'text-white'}`} onClick={handleShow}>
                        {
                            isShow
                                ? <i className='bx bx-x text-3xl font-medium' ></i>
                                : <i className='bx bx-menu text-3xl font-medium'></i>
                        }
                    </div>
                    <div className={`lg:hidden absolute w-3/4 md:w-2/5 h-screen bg-white top-0 left-0 z-50 px-4 py-5 ${isShow ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className="w-full flex justify-start items-center gap-2 border-b border-gray-400 pb-5">
                            <div className="w-10 h-10">
                                <img src={LOGO_IMG_1} alt="harmonix" title="harmonix" className="w-full h-full rounded-full block dark:hidden" />
                                <img src={LOGO_IMG_2} alt="harmonix" title="harmonix" className="w-full h-full rounded-full hidden dark:block" />
                            </div>
                            <span className="text-gray-600 text-2xl font-semibold uppercase">{COMPANY_NAME}</span>
                        </div>
                        <div className="mt-5">
                            <ul className="flex flex-col items-center gap-3">
                                {
                                    NAV_LINKS.map((navlink, index) => {
                                        return (
                                            <li key={index} className="font-medium cursor-pointer">
                                                <NavLink to={navlink.path}>{navlink.text}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                                <li className="font-medium cursor-pointer py-2 px-4 bg-yellow-500 rounded-md text-black hover:bg-yellow-400 text-lg md:text-xl">
                                    <Link to={NAVLINK_CONTACT_US.path}>{NAVLINK_CONTACT_US.text}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center justify-evenly gap-5">
                            {
                                NAV_LINKS.map((navlink, index) => {
                                    return (
                                        <li key={index} className={`font-medium cursor-pointer ${isScroll ? 'text-black' : 'text-white'}`}>
                                            <NavLink to={navlink.path}>{navlink.text}</NavLink>
                                        </li>
                                    )
                                })
                            }
                            <li className="font-medium cursor-pointer py-2 px-4 bg-yellow-500 rounded-md text-black hover:bg-yellow-400">
                                <NavLink to={NAVLINK_CONTACT_US.path}>{NAVLINK_CONTACT_US.text}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar