import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 'hero', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
    const [active, setActive] = useState('hero');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full flex items-center py-5 px-6 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent'
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <a
                    href="#hero"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('hero');
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                        M
                    </div>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ml-2">
                        MUKESH &nbsp;
                        
                    </p>
                </a>

                <ul className="list-none hidden sm:flex flex-row gap-8">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.id ? 'text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'text-gray-400'
                                } hover:text-white text-[16px] font-medium cursor-pointer transition-all duration-300 px-1`}
                            onClick={() => setActive(link.id)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="cursor-pointer text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div
                        className={`${!toggle ? 'hidden' : 'flex'
                            } p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`font-medium cursor-pointer text-[16px] ${active === link.id ? 'text-white text-gradient' : 'text-gray-400'
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.id);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
