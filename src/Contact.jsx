import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Contact = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            <div className='bg-[#e6dace] pt-[150px] pb-[70px]'>
                <div className=' text-[30px] font-bold text-center pt-[60px] pb-[60px]'>
                    <li className='list-[square] list-inside text-[blue] text-[35px]'><span className='text-black '>Let's talk</span></li>
                </div>

                <div className="flex justify-center">
                    <div className='bg-white h-[600px] w-[600px] p-[60px] font-bold text-[13px] shadow-lg shadow-black'>
                        <label htmlFor="">First Name*</label>
                        <label htmlFor="" className='ms-[180px]' >Last Name*</label><br /><br /><br />

                        <input type="text" className='inp' required />
                        <input type="text" className='inp1' required /> <br />

                        <label htmlFor="" className='pt-[30px]'>Email*</label> <br /><br /><br />
                        <input type="text" className='inp ps-[250px]' required /> <br />

                        <label htmlFor="" className='pt-[30px]'>Subject*</label> <br /><br /><br />
                        <input type="text" className='inp ps-[250px]' required /><br />

                        <label htmlFor="" className='pt-[30px]'>Message*</label> <br /><br /><br /><br /><br />
                        <input type="text" className='inp ps-[250px]' required />

                        <button className='mt-3 px-8 py-2.5 btn1'>Send</button>
                    </div>
                </div>
            </div>

            {/* footer  */}
            <Footer />

        </>
    )
}

export default Contact
