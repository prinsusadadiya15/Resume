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
                        <a href="Prins_Usadadiya Resume.pdf"
                            download  className='mt-3 px-4 py-2 btn1'>DOWNLOAD CV</a>

                    </div>

                    {/* box  */}
                    {
                        resumedetail.map((v, i) => {

                            return (


                                <div className="box1 bg-white h-[350px] w-[670px] mt-15 shadow-lg shadow-black">
                                    <div className="flex">
                                        <div>
                                            <p className='text-[25px] font-bold text-[blue] ps-5 pt-[80px]'>{v.title}</p>
                                            <p className='ps-5 text-[15px]'><b>{v.position}</b></p>
                                            <p className='ps-5 text-[15px]'>{v.cname}</p>
                                            <p className='text-[10px] ps-5'>{v.duration}</p>
                                        </div>

                                        <div className="ps-5 pt-[130px] w-[65%] pe-[30px]">
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
                            return (<div className="box1 bg-white h-[350px] w-[670px] mt-15 shadow-lg shadow-black">
                                <div className="flex">
                                    <div>
                                        <p className='text-[25px] font-bold text-[blue] ps-5 pt-[80px]'>{v.clgtitle}</p>
                                        <p className='ps-5 text-[15px]'>{v.universatyname}</p>
                                        <p className='text-[10px] ps-5'>{v.degree}</p>
                                        <p className='text-[10px] ps-5'>{v.universatylocation}</p>
                                    </div>

                                    <div className="ps-2 pt-[130px] w-[45%] ms-[50px]">
                                        <p>{v.uniinfo}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                        )
                    }


                    {/* last box  */}
                    <div className="box1 bg-white h-[500px] w-[670px] mt-15 shadow-lg shadow-black">
                        <p className='text-[25px] font-bold ps-5 pt-[40px]'>
                            Skills</p>

                        <div className="flex w-[70%]">
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

                        <div className="flex w-[70%]">
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
                            <div className='flex'>
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
