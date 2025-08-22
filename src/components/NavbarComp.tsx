'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../assets/css/Navbar.css'

const NavbarComp = () =>{
     useEffect(() => {
        // Pastikan kode berjalan di client side
        if (typeof window === 'undefined') return;

        // Handler functions untuk dropdown menus
        const handleSubMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const subMenu = btn.nextElementSibling as HTMLElement;
            if (subMenu && subMenu.classList.contains("sub-menu")) {
                if (subMenu.style.display === "none" || subMenu.style.display === "") {
                    subMenu.style.display = "block";
                } else {
                    subMenu.style.display = "none";
                }
            }
        };

        const handleMoreMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const moreMenu = btn.nextElementSibling as HTMLElement;
            if (moreMenu && moreMenu.classList.contains("more-menu")) {
                if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
                    moreMenu.style.display = "block";
                } else {
                    moreMenu.style.display = "none";
                }
            }
        };

        // Handler functions untuk responsive menu
        const handleMenuOpen = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.add("active");
        };

        const handleMenuClose = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.remove("active");
        };

        // Add event listeners
        const subBtns = document.querySelectorAll(".sub-btn");
        const moreBtns = document.querySelectorAll(".more-btn");
        const menuBtn = document.querySelector(".menu-btn");
        const closeBtn = document.querySelector(".close-btn");

        subBtns.forEach((btn) => {
            btn.addEventListener("click", handleSubMenuClick);
        });

        moreBtns.forEach((btn) => {
            btn.addEventListener("click", handleMoreMenuClick);
        });

        menuBtn?.addEventListener("click", handleMenuOpen);
        closeBtn?.addEventListener("click", handleMenuClose);

        // Cleanup function
        return () => {
            subBtns.forEach((btn) => {
                btn.removeEventListener("click", handleSubMenuClick);
            });
            moreBtns.forEach((btn) => {
                btn.removeEventListener("click", handleMoreMenuClick);
            });
            menuBtn?.removeEventListener("click", handleMenuOpen);
            closeBtn?.removeEventListener("click", handleMenuClose);
        };
    }, []);
    
    return(
        <>
        <header>
            <Link href="/">
                <Image 
                    className='logo-nav' 
                    src="/assets/images/logo/IYPO.png" 
                    alt="IYMO Logo" 
                    width={100} 
                    height={50}
                    priority
                />
            </Link>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/#about-section">About</Link>
                    </li>
                    {/* <li className='menu-item'><a href="/#category-main-section">Category</a></li> */}
                    {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
                    {/* <li className='menu-item'><a href="#main-category-section">Category</a></li> */}
                    <li className='menu-item'>
                        <Link href="https://drive.google.com/file/d/1JljliDQlURbFn5K1idLiEF_nU_fuxTTF/view?usp=sharing" 
                            target='_blank'
                            rel="noopener noreferrer">
                                Guide Book
                        </Link>
                    </li>
                    {/* <li className='menu-item'><a href="#contact-section-wrapper">Contact</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}

                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1XiQPYXktmf47cO6g1sZ9HfprPE6A-5Ok" target='_blank'>IYEO 2023</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Media Coverage <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1xtNRUdpRV1YpfkqCYINwnbG83y-La-bU/view?usp=sharing" target='_blank'>Press Release 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1Kf-TDvAVoVyKQCjkXfioeJAMS4bZZYAA/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <Link href="/after-event">List of Winner</Link>
                        {/* <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1meitaaKMwMl4AfWtJJiNssN-ixlTTLyS/view?usp=sharing" target='_blank'>List of Winner 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1OHHZIEE0Ge9gYCBDjHNZWtlT8_3LJYsw/view?usp=drive_link" target='_blank'>List of Winner 2024</a></li>
                        </ul> */}
                    </li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1OtPQULlba4DFS5OeiOUkLvSDELngdHpc?usp=sharing" target='_blank'>Curation 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1D1zF3ENJ8n9pHJ8b8pCZEFLVSpXxEhUk?usp=sharing" target='_blank'>Curation 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Certificate Supervisor <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1R-uwektOP-jM_sM68zUR9VRX2T4JHsX0?usp=sharing" 
                                    target='_blank'
                                    rel="noopener noreferrer">
                                        Certificate Supervisor 2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1YLM6im-6V7uJ_G6a379vHP4k7zA9nDnP?usp=sharing" 
                                    target='_blank'
                                    rel="noopener noreferrer">
                                        Certificate Supervisor 2024
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Gallery <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1UuGC30v3b9rhjYON-dP_1nz1NYdBrQhI?usp=sharing" 
                                    target='_blank'
                                    rel="noopener noreferrer">
                                        2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1iazwpyafH3P0Zx4j0CXwuQ2J6mfADvql?usp=sharing" 
                                    target='_blank'
                                    rel="noopener noreferrer">
                                        2024
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                    <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp