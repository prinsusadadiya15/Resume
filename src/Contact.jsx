import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Contact.css"

const Contact = () => {

  let [formdata, setFormdata] = useState({
    name: "",
    lname: "",
    email: "",
    sub: "",
    message: ""
  })

  let changeInput = () => {
    let olddata = { ...formdata }
    let name = event.target.name;
    let val = event.target.value;

    olddata[name] = val;

    setFormdata(olddata)

  }

  let send = (event) => {
    event.preventDefault();


    if (formdata.name === '' || formdata.lname === '' || formdata.email === '' || formdata.sub === '' ||formdata.message === '' )
    {
      alert("Some Data is not Found")
    }else
    {
      alert("You Internet Connection is lost")
    }
  
}


  return (
    <>
      <Navbar />
      <div className="container-fluid bg-[#E6DACE] pb-[100px]">
        <div className='flex justify-center items-center py-[70px]'>
          <li className='list-[square] text-[blue] text-[54px] pt-[100px]'></li>
          <span className='text-[38px] text-black font-bold pt-[100px]'>Let's talk</span>
        </div>
        <div className="container-small py-[70px] px-[40px] bg-white">
          <form action="" className='font-bold text-[14px]'>
            {/* Frist row */}
            <div className="flex flex-col sm:flex-row justify-between">
              <div className='sm:w-[45%] sm:ps-[20px]'>
                <label htmlFor="name">Frist Name*</label>
                <br />
                <br />
                <input type="text" className='input1 w-[100%]' name='name' value={formdata.name} onChange={changeInput} />
              </div>
              <div className='sm:w-[45%] pt-[20px] sm:pe-[20px] sm:py-[0px]'>
                <label htmlFor="lname">Last Name*</label>
                <br />
                <br />
                <input type="text" className='input1 w-[100%]' name="lname" value={formdata.lname} onChange={changeInput} />
              </div>
            </div>
            <br />
            {/* Other Rows */}
            <div className='sm:px-[20px]'>
              <label htmlFor="lname">Email*</label>
              <br />
              <br />
              <input type="Email" className='input1 w-[100%]' name="email" value={formdata.email} onChange={changeInput} />
            </div>
            <br />
            <div className='sm:px-[20px]'>
              <label htmlFor="lname">Subject*</label>
              <br />
              <br />
              <input type="text" className='input1 w-[100%]' name="sub" vlaue={formdata.sub} onChange={changeInput} />
            </div>
            <br />
            <div className='sm:px-[20px]'>
              <label htmlFor="lname">Message*</label>
              <br />
              <br />
              <textarea type="text" className='input1 w-[100%]' name="message" value={formdata.message} onChange={changeInput}>
              </textarea>
            </div>
            <br />
            <button className='btn1' onClick={send}>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
