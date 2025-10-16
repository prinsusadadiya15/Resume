import React from 'react'
import Navbar from './Navbar'
import MyImg from '../img/myimg.JPG'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <div className='bg-[#e6dace] sm:w-[45%] w-[100%] sm:h-[800px] mt-2 relative'>
                    <div className=" sm:w-[120%] h-[600px] sm:absolute right-[-510px] top-[100px] sm:flex pt-[90px]">
                        <div className='sm:w-[45%] sm:h-[100%] pt-[20px] sm:pt-[0px] '>
                            <div className='h-[90%] mx-[30px] sm:mx-[0px] pt-[10px] bg-[#f4ece6] flex flex-col items-center justify-between shadow-[-4px_0_10px_rgba(0,0,0,0.3)]'>
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

                            <div className='h-[10%] mx-[30px] sm:mx-[0px] bg-white flex justify-center'>
                                <div className='flex items-center justify-between w-[60%] mt-3 '>
                                    <a href='#'><p><FontAwesomeIcon icon={faFacebook} className='icons cursor-pointer text-[black] hover:text-[#0000ffcf]' /></p></a>
                                    <a href='https://github.com/prinsusadadiya15'><p> <FontAwesomeIcon icon={faGithub} className='icons cursor-pointer text-[black]' /></p></a>
                                     <a href="https://www.linkedin.com/in/prins-usadadiya-056553351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p><FontAwesomeIcon icon={faLinkedin} className='icons cursor-pointer text-[black] hover:text-[#0000ffcf]' /></p></a>
                                     <a href="https://www.instagram.com/_.prins.__1506/?igsh=aGhzNWt5YzRsM2gy#"> <p><FontAwesomeIcon icon={faInstagram} className='icons cursor-pointer text-[black] hover:text-[#E1306C]' /></p></a>
                                </div>
                            </div>
                        </div>

                        <div className='sm:w-[55%] w-[100%] sm:h-[100%] bg-[#e6dace] sm:bg-[white] text-[80px] sm:ms-6 px-[30px] px-[0px] pb-[50px] sm:pb-[0px]  mt-5 font-bold text-[black]'>Hello <br />
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
                                <p className='text-[15px] pt-12 font-light'>I am Information and technology student.I consider my self a
                                    responsible and orderly person.I am looking foward for my first
                                    work experience.</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-light'>To be a professional and to utilize my skill and knowledge to
                                    full fill the requirement of the organization in customer
                                    service.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='sm:pt-[0px] pt-[530px]'>
                <Footer />
            </div>
        </>
    )
}

export default About
