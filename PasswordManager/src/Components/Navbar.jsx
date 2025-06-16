import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex bg-black items-center justify-between p-5 rounded-md shadow-[0_4px_20px_#00f2ff40]'>
            <div className=" flex text-white logo ">
                <div className="flex justify-center items-center">
                    {/* Show on large screens */}
                    <h1
                        className="hidden md:inline-block font-cyber font-bold tracking-wide text-xl bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text text-transparent"
                        style={{ fontFamily: 'Orbitron' }}
                    >
                        Cipherly
                    </h1>

                    {/* Show logo on small screens */}
                    <img
                        src="/favicon-32x32.png" // 🔁 change path if needed
                        alt="Logo"
                        className="inline-block md:hidden w-8 h-8"
                    />
                </div>

            </div>
            <ul>
                <li style={{ fontFamily: 'Share Tech Mono' }} className='flex font-medium text-lg text-white gap-7 '>
                    <Link  to="/" className="relative inline-block text-white hover:text-transparent hover:bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text after:block after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0" href='/' >Home</Link >
                    <Link to="/vault" className="relative inline-block text-white hover:text-transparent hover:bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text after:block after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0" href='#' >Vault</Link >
                    {/* <a className="relative inline-block text-white hover:text-transparent hover:bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text after:block after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0" href='#'>Settings</a > */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block"
                        title="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            className="transition-all duration-300 fill-white group-hover:fill-[url(#gh-gradient)]"
                        >
                            <defs>
                                <linearGradient id="gh-gradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="white" />
                                    <stop offset="50%" stopColor="#aefeff" />
                                    <stop offset="100%" stopColor="#00f2ff" />
                                </linearGradient>
                            </defs>
                            <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.11.82-.258.82-.577v-2.163c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.536-1.527.117-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 6.844c1.02.004 2.045.138 3.003.403 2.29-1.553 3.297-1.23 3.297-1.23.655 1.65.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.813 1.102.813 2.222v3.293c0 .322.218.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                </li>
            </ul>
        </nav>
    )
}

export default Navbar
