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

            <div className='bg-[#e6dace] pt-[170px]'>
                <div className=' text-[30px] font-bold text-center mt-[90px] '>
                    <li className='list-[square] list-inside text-[blue] text-[35px]'><span className='text-black '>Projects</span></li>
                </div>

                <p className='text-center pt-[50px] pb-[50px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit <br /> Text”  or double click me to add your own content and make changes to the font. I’m a  <br /> great place for you to tell a story and let your users know a little more about you.</p>

                {/* box  */}

                {pr1.map((v, i) => {
                    return (<>
                        <div className="flex justify-center pt-[65px]">
                            <div className='w-[750px] h-[400px] flex'>
                                <div className='bg-white w-[60%] h-[100%] shadow-lg shadow-black '>
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
