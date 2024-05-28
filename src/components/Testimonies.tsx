import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Prinafsika",
    date: "March 3, 2024",
    text1:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    text2: "It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    image: "/images/kue-1.jpg",
    rating: 4,
  },
  {
    name: "Uhuy",
    date: "March 3, 2024",
    text1:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    text2: "It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    image: "/images/kue-1.jpg",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex items-center justify-center my-10">
        <hr className="flex-grow border-white" />
        <h2 className="px-4 text-3xl text-slate-100 font-bold tracking-tight leading-none uppercase">Testimonial</h2>
        <hr className="flex-grow border-white" />
      </div>
      <div className="max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8 relative">
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-slate-100 rounded-full">
          &lt;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-slate-100 rounded-full">
          &gt;
        </button>
        <AnimatePresence mode="wait">
          {testimonials.map(
            (testimonial, index) =>
              index === current && (
                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-pink-300 p-10 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Image className="w-10 h-10 me-4 rounded-full" src={testimonial.image} alt={testimonial.name} width={40} height={40} />
                    <div className="font-medium dark:text-white">
                      <p>{testimonial.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1 space-x-1 pb-2 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-300" : "text-gray-300"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    {/* <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Nice!</h3> */}
                  </div>
                  <footer className="mb-5 text-sm text-slate-100 dark:text-gray-400">
                    <p>
                      Reviewed in the Indonesia on <span>{testimonial.date}</span>
                    </p>
                  </footer>
                  <p className="mb-2 text-slate-100">{testimonial.text1}</p>
                  <p className="mb-3 text-slate-100">{testimonial.text2}</p>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TestimonialSlider;
