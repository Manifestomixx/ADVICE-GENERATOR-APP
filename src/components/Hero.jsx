import React, { useEffect, useState } from 'react'
import icon from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-desktop.svg"

const Hero = () => {
  const [data,setData] = useState([]);
  const [isShadow, setIsShadow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRequest = async ()=>{
    if (isLoading) return;
    setIsLoading(true);
    setIsShadow(true);

    try {
      const req = await fetch("https://api.adviceslip.com/advice");
      const res = await req.json();
      console.log(res);
      setData(res.slip);
      toggleshadow();
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsLoading(false);
      setTimeout(()=> setIsShadow(false), 200);
    }
  };
  const toggleshadow = ()=>{
    setIsShadow(!isShadow);
  };
console.log(data);


  useEffect(()=>{
    fetchRequest();
  },[])
  return (
    <>
    <main className='bg'>
        <section className='container'>
          <div className='box p-4 rounded-3 h-100 position-relative '>
            <p className='head mb-3'>ADVICE #{data.id} </p>
            <p className='text-white text-center text p-2'>“{data.advice}”</p>
            <div className=' mb-3 w-100'>
                <img src={divider} alt="" className='w-100' />
            </div>
        </div>
        <div className={`dice position-absolute start-50 translate-middle ${isShadow ? 'shadowed' : ''}${isLoading ? 'disabled' : ''}`} role='button' onClick={fetchRequest}>
            <img src={icon} alt="dice-button" />
        </div>
        </section>
    </main>
    </>
  )
}

export default Hero