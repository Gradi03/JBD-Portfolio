import React from 'react';
import { motion } from 'framer-motion';



function Home() {
  // this will help users to scroll to the next section which is about us
  // const scrollToAbout = () => {
  //   const nextSection = document.getElementById('about'); 
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div id='home'>
      {/* Google Font Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-36 bg-white">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Decorative background shapes */}
          {/* <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-gray-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span> */}

          {/* Content Section */}
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
            <motion.h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to <span className="text-transparent bg-clip-text bg-blue-600">JBD Enterprise</span> & <span className="text-transparent bg-clip-text bg-blue-600">JBD Drum Academy</span>

            </motion.h1>
            <motion.p
              className="mt-8 text-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
               If you can hold a stick, we can make it work. Let's unlock your drumming potential! Dive into a world where drumming isn’t just a skill—it’s an exhilarating journey of expression and discipline.

Unlock your drumming potential, embrace the art of sound, and become part of a supportive, music-driven community. It’s time to discover just how powerful your inner drummer can be.

            </motion.p>
            <motion.div
              className="mt-10 w-full flex max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* <button
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={scrollToAbout}
              >
                Get Started
              </button> */}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex flex-1 lg:w-1/2 relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            {/* My image */}
            <img
              src="/images/perfoming3.jpeg" 
              alt="Hero image"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover max-h-96 w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
