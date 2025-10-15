import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { pr1 } from './Projectdata'

const Project = () => {

    return (
        <>

            {/* navbar  */}
            <Navbar />

            {/* Projects  */}

            <div className='bg-[#e6dace] pt-[170px] pb-[80px]'>
                <div className=' text-[30px] font-bold text-center mt-[90px] '>
                    <li className='list-[square] list-inside text-[blue] text-[35px]'><span className='text-black '>Projects</span></li>
                </div>

                <p className='text-center px-[20px] pt-[50px] pb-[50px]'>Crafting dynamic, responsive, and scalable website using the MERN stack. <br /> I focus on building seamless user experiences backed by efficient, secure, and modern backend systems.</p>

                {/* box  */}

                {pr1.map((v, i) => {
                    return (<>
                        <div className="flex justify-center pt-[65px]">
                            <div className='sm:w-[750px] h-[560px] sm:h-[400px] flex'>
                                <div className='bg-white  w-[60%] h-[100%] pb-[30px] shadow-lg shadow-black '>
                                    <div className='bg-blue-600 h-[50px] w-[10px] mt-[50px]'></div>
                                    <div className="flex">
                                        <p className='text-[20px] text-[blue] font-bold ps-8 title'>{v.title}</p>
                                    </div>
                                    <p className='font-bold text-[13px] ps-[33px] title-1'>{v.role}</p>

                                    <p className='ps-4 w-[90%] pt-2.5'>{v.detail}</p>
                                </div>
                                <div className='bg-gray-300 w-[40%] h-[100%] overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    <img src={v.url} alt="" className='w-[100%]' />
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>


            {/* footer  */}
            <Footer />
        </>
    )
}

export default Project
