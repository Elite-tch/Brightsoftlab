import Image from 'next/image'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function About() {
  return (
<section id='about' className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753] pt-[5%]'>

<div data-aos="fade-right" className='flex gap-10 md:gap-16 w-[90%] md:w-[80%] mx-auto py-10 justify-center md:flex-row flex-col '>
<div>
<Image src='/logo1.png' alt='' width={350} height={350} className="w-[100%] md:h-[70%] h-[100%] rounded"/>    
</div>

<div data-aos="fade-up" className='md:w-[47%] flex flex-col  gap-2'>
<h2 className='text-[#f25c34] text-2xl'>Who I Am</h2>

 <p className='text-sm'>Results-driven Frontend Developer with 3+ years of experience building scalable web applications using modern technologies. Proven track record of delivering 15+ production-grade solutions including e-commerce platforms, business portals, and interactive company sites. Specialized in Next.js ecosystem with additional Web3 integration experience. Strong focus on performance optimization, user experience, and seamless client collaboration that drives business growth.</p>   
 <div className='flex gap-4 mt-4'>
      <a href="https://x.com/IzuchukwuJ99034?t=C0oDZva2STQieP_PRp08Gg&s=09 " target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
  <a href="https://github.com/Elite-tch " target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
      <a href="https://www.linkedin.com/in/izuchukwu-johnbosco-364657323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
      </a>
    </div>
</div>


</div>


</section>


  )


     }