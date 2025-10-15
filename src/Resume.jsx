import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { educationdetail, resumedetail } from './Resumedata'


const  Resume = () => {
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
                        <a href="Prins_Usadadiya Resume.pdf"
                            download  className='mt-3 px-4 py-2 btn1'>DOWNLOAD CV</a>

                    </div>

                    {/* box  */}
                    {
                        resumedetail.map((v, i) => {

                            return (


                                <div className="box1 bg-white sm:h-[350px] sm:w-[670px] mt-15 shadow-lg shadow-black">
                                    <div className="sm:flex py-[20px] sm:py-[0px]">
                                        <div>
                                            <p className='text-[25px] font-bold text-[blue] px-[20px] sm:ps-5 sm:pt-[80px]'>{v.title}</p>
                                            <p className='px-[20px] sm:ps-5 text-[15px]'><b>{v.position}</b></p>
                                            <p className='px-[20px] sm:ps-5 text-[15px]'>{v.cname}</p>
                                            <p className='text-[10px] px-[20px] sm:ps-5'>{v.duration}</p>
                                        </div>
                                        <div className="sm:ps-5 px-[20px] sm:pt-[130px] sm:w-[65%] sm:pe-[30px]">
                                            <p>{v.resumeinfo}</p>
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
                            return (<div className="box1 bg-white sm:h-[350px] sm:w-[670px] mt-15 shadow-lg shadow-black">
                                <div className="sm:flex py-[20px] sm:py-[0px]">
                                    <div>
                                        <p className='text-[25px] font-bold text-[blue] ps-[20px] sm:ps-5 sm:pt-[80px]'>{v.clgtitle}</p>
                                        <p className='ps-[20px] sm:ps-5 text-[15px]'>{v.universatyname}</p>
                                        <p className='text-[10px] ps-[20px] sm:ps-5'>{v.degree}</p>
                                        <p className='text-[10px] ps-[20px] sm:ps-5'>{v.universatylocation}</p>
                                    </div>

                                    <div className="px-[20px] sm:ps-2 sm:pt-[130px] sm:w-[45%] sm:ms-[50px]">
                                        <p>{v.uniinfo}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                        )
                    }


                    {/* last box  */}
                    <div className="box1 bg-white sm:h-[500px]  sm:w-[670px] mt-15 shadow-lg shadow-black pb-[30px]">
                        <p className='text-[25px] font-bold ps-5 pt-[40px] '>
                            Skills</p>

                        <div className="flex sm:w-[70%] flex-wrap">
                            <div>
                                <li className='list-[square] list-inside  text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>Html</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px]  ps-5 pt-[5px]'><span className='text-black text-[13px]'>CSS</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px]  ps-5 pt-[5px]'><span className='text-black text-[13px]'>Javascript</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[5px]'><span className='text-black text-[13px]'>Bootstrap</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[5px]'><span className='text-black text-[13px]'>TailwindCSS</span></li>
                            </div>

                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 '><span className='text-black text-[13px]'>React.JS</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[5px]'><span className='text-black text-[13px]'>Express.JS</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[5px]'><span className='text-black text-[13px]'>Node.JS</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[5px]'><span className='text-black text-[13px]'>MongoDb</span></li>
                            </div>
                        </div>


                        <br />
                        <p className='text-[25px] font-bold ps-5'>
                            Soft Skill</p>

                        <div className="flex w-[70%] flex-wrap">
                            <div>
                                <li className='list-[square] list-inside  text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>Communication Skills</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px]  ps-5 pt-[10px]'><span className='text-black text-[13px]'>Teamwork</span></li>
                            </div>

                            <div>
                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>Quick Learning</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5 pt-[10px]'><span className='text-black text-[13px]'>Time Management</span></li>
                            </div>
                        </div>

                        <p className='text-[25px] font-bold ps-5 pt-[20px]'>
                            Languages</p>
                        <div>
                            <div className='flex flex-wrap'>
                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>Gujrati (native)</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>Hindi</span></li>

                                <li className='list-[square] list-inside text-[blue] text-[15px] ps-5'><span className='text-black text-[13px]'>English</span></li>
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
