import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className="container flex justify-between items-center pt-7">
                <div>
                    <p>© 2025 by Prins Usadadiya <br />
                        Powered and secured by..</p>
                </div>
                <div className="w-[34%] flex justify-between">
                    <div className='text-center'>
                        <p className='text[20px] font-bold'>Call</p>
                        <p className='text-[14px]'>+91 9510162453</p>
                    </div>
                    <div className='text-center'>
                        <p className='text[20px] font-bold'>Write</p>
                        <p className='text-[14px]'>prinsusadadiya210@gmail.com</p>
                    </div>
                    <div className='text-center '>
                        <p className='text[20px] font-bold'>Follow</p>
                        <div className='flex'>
                            <a href='https://www.facebook.com/'><p><FontAwesomeIcon icon={faFacebook} className='icons cursor-pointer text-[black] hover:text-[#0000ffcf]' /></p></a>
                            <a href='https://www.facebook.com/'><p> <FontAwesomeIcon icon={faGithub} className='icons cursor-pointer text-[black]' /></p></a>
                            <a href=""><p><FontAwesomeIcon icon={faLinkedin} className='icons cursor-pointer text-[black] hover:text-[#0000ffcf]'/></p></a>
                            <a href="https://www.instagram.com/_.prins.__1506/?igsh=aGhzNWt5YzRsM2gy#"> <p><FontAwesomeIcon icon={faInstagram} className='icons cursor-pointer text-[black] hover:text-[#E1306C]' /></p></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
