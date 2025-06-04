import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/" className="flex items-center gap-2">
                        <img src="/images/arrlogo.png" alt="logo" className="h-18 w-18 object-contain" />
                        ARR Dental Lab
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((img, ) => (
                        <a key={img.url} className="icon" target="_blank" href={img.url}>
                            <img
                                src={img.imgPath}
                                alt={img.name}
                                className="w-6 h-6 md:w-7 md:h-7"
                            />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center md:items-end">
                    <p className="text-center md:text-end">
                        &copy; {new Date().getFullYear()} ARR Dental Lab. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}
export default Footer
