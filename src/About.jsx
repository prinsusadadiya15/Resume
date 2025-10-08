import React from 'react'
import Navbar from './Navbar'
import MyImg from '../img/myimg.JPG'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <div className='bg-[#e6dace] w-[45%] h-[900px] mt-5 relative'>
                    <div className=" w-[120%] h-[490px] absolute right-[-510px] top-[270px] flex">
                        <div className='w-[45%] h-[100%] '>
                            <div className='h-[90%] bg-[#f4ece6] flex flex-col items-center justify-evenly shadow-[-4px_0_10px_rgba(0,0,0,0.3)]'>
                                <div>
                                    <img src={MyImg} className='myimg' alt="" />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h2 className='fw-bold text-center'>Prins <br /> Usadadiaya </h2>
                                    <p className='name'></p>
                                </div>
                                <div>
                                    <p className='text-[20px]'>MERN Stack Developer</p>
                                </div>
                            </div>

                            <div className='h-[10%] bg-white flex justify-center'>
                                <div className='flex items-center justify-between w-[60%] mt-3 '>
                                    <p><FontAwesomeIcon icon={faFacebook} className='icons' /></p>
                                    <p> <FontAwesomeIcon icon={faTwitter} className='icons' /></p>
                                    <p><FontAwesomeIcon icon={faLinkedin} className='icons' /></p>
                                    <p><FontAwesomeIcon icon={faInstagram} className='icons' /></p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[55%] h-[100%] bg-[white] text-[80px] ms-6 mt-5 font-bold text-[black]'>Hello <br />
                            <p className='text-[25px] pt-3'>Here's Who I am & what I do</p>
                            <div className='text-[15px] mt-8'>
                                <Link to={'/resume'} >
                                    <button className='mt-3 px-4 py-2 btn1'>RESUME</button>
                                </Link>
                                <Link to={'/project'} >
                                    <button className='px-4 py-2 ms-3 btn2'>PROJECT</button>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[15px] pt-12 font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-light'>I’m a great place for you to tell a story and let your users know a little more about you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default About
