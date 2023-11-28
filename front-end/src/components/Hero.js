import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";



const Hero = () => {
  return (
    <section
  className="relative bg-hero bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-8 lg:flex lg:h-screen lg:items-center lg:px-12"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl creamText">
        Let us find your

        <strong className="block font-extrabold blueText">
          Forever Home.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed blueText">
         We are here to provide you the best of the best
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link to="/register"
          
          className="block w-full rounded bgBlue px-12 py-3 text-sm font-medium creamText shadow hover:text-orange-50 hover:underline focus:outline-none focus:ring  sm:w-auto"
        >
          Register
        </Link>

        <Link
          to="/login"
          className="block w-full rounded bgCream px-12 py-3 text-sm font-medium blueText shadow hover:text-sky-900 hover:underline focus:outline-none focus:ring  sm:w-auto"
        >
          Log in
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero