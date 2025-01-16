"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function Testimonials() {
  return (
    <section id="testimonials" className='bg-white border-b    dark:border-gray-700 dark:bg-[#000000] dark:text-gray-200 text-[#1D1753]  py-[5%]'>
<div className='md:w-[95%] w-[90%] mx-auto'>
<h2 className="text-[#f25c34] text-2xl text-center">What Our Clients Say</h2>
<h1 className="font-semibold text-3xl md:text-4xl pt-3 text-center">Stories from our satisfied customers</h1>

<Swiper
  spaceBetween={30}
  loop={true}  // Infinite looping
  speed={1000}  // Smooth transition (in ms)
  autoplay={{
    delay: 2000,  // 2 seconds delay
    disableOnInteraction: false,  // Continue autoplay after interaction
  }}
  modules={[Autoplay]}  // Enable autoplay
  className="mt-8"
  breakpoints={{
    // When the screen width is 768px or less (mobile devices)
    768: {
      slidesPerView: 1,  // Show only 1 testimonial on mobile
    },
    // For larger screens (tablets, desktops, etc.)
    1024: {
      slidesPerView: 3,  // Show 3 testimonials on larger screens
    },
  }}
>
      <SwiperSlide className="bg-transparent shadow dark:bg-gray-900">
<div className=" p-6 flex flex-col">
     <h2 className="text-2xl font-semibold">Creative and Reliable!</h2>
<p className="text-sm">Johnbosco turned our ideas into a stunning, user-friendly website. Their creativity and attention to detail made a huge difference. Highly recommended!</p>
<h4 className="font-semibold pt-2">Daniel</h4>
<span className="text-gray-400">Business man</span>
</div>

      </SwiperSlide>
      <SwiperSlide className="bg-transparent shadow dark:bg-gray-900"><div className=" p-6 flex flex-col">
     <h2 className="text-2xl font-semibold">Professional and Efficient! </h2>
<p className="text-sm">Working with Izuchukwu was seamless. They delivered high-quality work on time and exceeded our expectations. </p>
<h4 className="font-semibold pt-2">MetroFund Team </h4>
<span className="text-gray-400">Team </span>
</div>

      </SwiperSlide>
      <SwiperSlide className="bg-transparent shadow dark:bg-gray-900"><div className=" p-6 flex flex-col">
     <h2 className="text-2xl font-semibold">Impactful Collaboration! </h2>
<p className="text-sm">Collaborating with him was an amazing experience, his technical skills and clear communication made the project seamless and efficient. </p>
<h4 className="font-semibold pt-2">Chinedu </h4>
<span className="text-gray-400">Frontend Developer </span>
</div></SwiperSlide>
      <SwiperSlide className="bg-transparent shadow dark:bg-gray-900"><div className=" p-6 flex flex-col">
     <h2 className="text-2xl font-semibold">Exceptional Communication! </h2>
<p className="text-sm">He kept us updated throughout the project and ensured every detail was perfect. We couldn’t be happier with the results. </p>
<h4 className="font-semibold pt-2">Isaac </h4>
<span className="text-gray-400">Enterprenuer </span>
</div></SwiperSlide>
    </Swiper>

    </div>
</section>
  );
}
