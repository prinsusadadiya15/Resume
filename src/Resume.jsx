import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { educationdetail, resumedetail } from './Resumedata'

const Resume = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            <div className='bg-[#e6dace] pt-[270px] pb-[90px]'>
                <div className=' text-[30px] font-bold text-center  '>
                    <li className='list-[square] list-inside text-[blue] text-[35px]'><span className='text-black'>Resume</span></li>
                </div>
                <div className="container-small pt-[90px]">
                    <div className='flex items-center justify-between'>
                        <p className='text-[30px] font-bold'>Exprience</p>
                        <button className='mt-3 px-4 py-2 btn1'>DOWNLOAD CV</button>
                    </div>

                    {/* box  */}
                    {
                        resumedetail.map((v, i) => {

                            return (


                                <div className="box1 bg-white h-[350px] w-[670px] mt-15 shadow-lg shadow-black">
                                    <div className="flex">
                                        <div>
                                            <p className='text-[25px] font-bold text-[blue] ps-5 pt-[80px]'>{v.title}</p>
                                            <p className='ps-5 text-[15px]'>{v.position}</p>
                                            <p className='text-[10px] ps-5'>{v.clocation}</p>
                                            <p className='text-[10px] ps-5'>{v.clocation}</p>
                                        </div>

                                        <div className="ps-5 pt-[130px] w-[55%] ms-[50px]">
                                            <p>{v.resumeinfo}</p>

                                            <p>{v.resinfo}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }

                    {/* eduction  */}
                    <div className='text-[30px] font-bold container-small pt-[90px]'>Education</div>

                    {/* box  */}

                    {
                        educationdetail.map((v, i) => {
                           return( <div className="box1 bg-white h-[350px] w-[670px] mt-15 shadow-lg shadow-black">
                                <div className="flex">
                                    <div>
                                        <p className='text-[25px] font-bold text-[blue] ps-5 pt-[80px]'>{v.clgtitle}</p>
                                        <p className='ps-5 text-[15px]'>{v.universatyname}</p>
                                        <p className='text-[10px] ps-5'>{v.degree}</p>
                                        <p className='text-[10px] ps-5'>{v.universatylocation}</p>
                                    </div>

                                    <div className="ps-5 pt-[130px] w-[55%] ms-[50px]">
                                        <p>{v.uniinfo}</p>

                                        <p>{v.universatyinfo}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                        )
                    }


                    {/* last box  */}
                    <div className="box1 bg-white h-[470px] w-[670px] mt-15 shadow-lg shadow-black">
                        <p className='text-[25px] font-bold ps-5 pt-[45px]'>
                            Professional skillset</p>

                        <div className="flex w-[70%]">
                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>Entrepreneurial Mindset</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>Teamwork & Collaboration</span></li>
                            </div>

                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>Go-to-Market Planning</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>Digital Analytics</span></li>
                            </div>
                        </div>

                        <p className='text-[25px] font-bold ps-5 pt-[90px]'>
                            Languages</p>
                        <div className="flex w-[70%]">
                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>English (native)</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>Spanish (proficient)</span></li>
                            </div>

                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[30px] ps-5'><span className='text-black text-[13px]'>French (proficient)</span></li>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            {/* footer  */}
            <Footer />
        </>
    )
}

export default Resume
