import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                            <p><FontAwesomeIcon icon={faFacebook} className='icons' /></p>
                            <p> <FontAwesomeIcon icon={faTwitter} className='icons' /></p>
                            <p><FontAwesomeIcon icon={faLinkedin} className='icons' /></p>
                            <p><FontAwesomeIcon icon={faInstagram} className='icons' /></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
