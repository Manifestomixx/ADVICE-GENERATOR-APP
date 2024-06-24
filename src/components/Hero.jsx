import React, { useEffect, useState } from 'react'
import icon from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-mobile.svg"

const Hero = () => {
  const [data,setData] = useState([]);
  const fetchRequest = async ()=>{
    try {
      const req = await fetch("https://api.adviceslip.com/advice");
      const res = await req.json();
      console.log(res);
      setData(res.slip)
    } catch (error) {
      console.log(error.message);
    }
  };
console.log(data);
  useEffect(()=>{
    fetchRequest();
  },[])
  return (
    <>
    <main className='bg'>
        <section className='container'>
          <div className='box p-5 rounded-3 position-relative '>
            <p className='head'>ADVICE #{data.id} </p>
            <p className='text-white text-center w-100 text'>“{data.advice}”</p>
            <div className='d-flex w-100'>
                <img src={divider} alt="" className='w-100' />
            </div>
        </div>
        <div className='dice position-absolute start-50 translate-middle ' role='button' onClick={fetchRequest}>
            <img src={icon} alt="" />
        </div>
        </section>
    </main>
    </>
  )
}

export default Hero