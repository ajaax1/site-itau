import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import Seta from '@/assets/arrow-down.svg';
import Person from '@/assets/icon-user.svg';
import Search from '@/assets/icon-search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [icone, setIcone] = useState(faBars);
    const [showNav, setShowNav] = useState('h-0');
    const toggleNav = () => {
        setIcone(icone === faBars ? faTimes : faBars);
        setShowNav(showNav === 'h-0' ? 'h-36' : 'h-0');
    };

    return (
        <header className={`flex flex-col items-center w-full bg-amber-600 justify-center text-white`}>
            <div className='max-w-[1400px] w-full flex-col h-full '>
                <div className=' w-full h-20 bg-amber-600 flex justify-between items-center pl-10'>
                    <nav className='flex h-full items-center gap-10'>
                        <Image src={Logo} alt='logo' />
                        <ul className='hidden xl3:flex h-full items-center gap-10'>
                            <li className='flex items-center gap-2 hover-rotate cursor-pointer'>
                                <span>Para Você</span>
                                <Image className='arrow h-2 w-2' src={Seta} alt='seta' />
                            </li>
                            <li className='flex items-center gap-2 hover-rotate cursor-pointer'>
                                <span>Para Empresas</span>
                                <Image className='arrow h-2 w-2' src={Seta} alt='seta' />
                            </li>
                            <li className='flex items-center gap-2 hover-rotate cursor-pointer'>
                                <span>Serviços</span>
                                <Image className='arrow h-2 w-2' src={Seta} alt='seta' />
                            </li>
                            <li className='flex items-center gap-2 hover-rotate cursor-pointer'>
                                <span>Ajuda</span>
                                <Image className='arrow h-2 w-2' src={Seta} alt='seta' />
                            </li>
                        </ul>
                    </nav>
                    <div className='hidden xl3:flex h-full gap-3'>
                        <div className='h-full flex items-center gap-2 transition ease-in-out hover:scale-105 cursor-pointer'>
                            <Image src={Search} alt='search' />
                            <span>Buscar</span>
                        </div>
                        <div className='flex w-36 bg-blue-800 h-full items-center gap-2 justify-center cursor-pointer'>
                            <Image src={Person} alt='person' />
                            <span>Acessar conta</span>
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={toggleNav} icon={icone} className='xl3:hidden block pr-10 size-6 cursor-pointer' />
                </div>
                <nav className={`max-w-[1400px] w-full transition-height duration-300 xl3:hidden ease-in-out bg-amber-600 ${showNav} overflow-hidden flex justify-center items-center`}>
                    <ul className='h-full w-full flex flex-col items-center justify-center p-1'>
                        <li>
                            <span>Para Você</span>
                        </li>
                        <li>
                            <span>Para Empresas</span>
                        </li>
                        <li>
                            <span>Serviços</span>
                        </li>
                        <li>
                            <span>Ajuda</span>
                        </li>
                        <li>
                            <span>Buscar</span>
                        </li>
                        <li>
                            <span>Acessar conta</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
