"use client";

import Image from "next/image";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-40 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Cookies Kualitas Tinggi dan Harga Terjangkau</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Cocok untuk semua kebutuhan, mulai dari kue, roti, makanan, hingga minuman.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-500 hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Order Now
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Me
            </a>
          </div>
          <div className="hidden lg:mt-20 lg:col-span-5 lg:flex">
            <Image src="/images/cookies-piring.jpg" alt="mockup" width={700} height={500} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="h-full lg:p-10">
        <div className="flex items-center justify-center my-10">
          <hr className="flex-grow border-zinc-800" />
          <h2 className="px-4 text-3xl text-zinc-800 font-bold tracking-tight leading-none uppercase">Menjual Berbagai macam kue dan makanan</h2>
          <hr className="flex-grow border-zinc-800" />
        </div>

        <div className="carousel w-full rounded-lg py-5 pb-10">
          <div id="slide1" className="carousel-item relative">
            <Image src="/images/kue-1.jpg" width={700} height={500} alt="slider" />
          </div>
          <div id="slide2" className="carousel-item relative">
            <Image src="/images/kue-3.jpg" width={700} height={500} alt="slider" />
          </div>
          <div id="slide3" className="carousel-item relative">
            <Image src="/images/kue-2.jpg" width={700} height={500} alt="slider" />
          </div>
          <div id="slide4" className="carousel-item relative">
            <Image src="/images/kue-1.jpg" width={700} height={500} alt="slider" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card card-compact bg-pink-300 shadow-xl">
              <figure>
                <Image src="/images/dummy-1.jpeg" alt="Shoes" width={400} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold antialiased text-xl">Tiramisu</h2>
                <p>Kue dengan balutan rasa manis tiramisu</p>
                <Rating />
              </div>
            </div>
            <div className="card card-compact bg-pink-300 shadow-xl">
              <figure>
                <Image src="/images/dummy-2.jpeg" alt="Shoes" width={400} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold antialiased text-xl">Strawberry</h2>
                <p>Kue yang terdiri dari buah strawberry</p>
                <Rating />
              </div>
            </div>
            <div className="card card-compact bg-pink-300 shadow-xl">
              <figure>
                <Image src="/images/dummy-3.jpeg" alt="Shoes" width={400} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold antialiased text-xl">Ovaltine</h2>
                <p>Kue yang terdiri dari selai manis ovaltine</p>
                <Rating />
              </div>
            </div>
            <div className="card card-compact bg-pink-300 shadow-xl">
              <figure>
                <Image src="/images/dummy-4.jpeg" alt="Shoes" width={400} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold antialiased text-xl">Kacang</h2>
                <p>Kue yang terdiri dari baluran kacang</p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary pb-10">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="text-3xl text-center text-white font-bold py-10 tracking-tight leading-none uppercase">
            FAQ
            <hr className="border-2 border-white m-3" />
          </h2>
        </div>

        <div className="flex flex-col items-center px-5">
          <div className="collapse collapse-arrow bg-white max-w-screen-lg text-center">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-5 py-5">
          <div className="collapse collapse-arrow bg-white max-w-screen-lg text-center">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-5">
          <div className="collapse collapse-arrow bg-white max-w-screen-lg text-center">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
