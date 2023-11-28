import React from "react";
import { PiPawPrintFill } from "react-icons/pi";


const About = () => {
  return (
    <div className="py-5 blueText">
      <h1 className="text-center pb-3">Welcome to PET-VET!</h1>
      <p className="pb-2">
        At PET-VET, we understand that your pet is a valued member of your
        family. Founded with a deep passion for animal welfare and a commitment
        to providing accessible and reliable veterinary care, we strive to make
        the process of caring for your pet as convenient and stress-free as
        possible.
      </p>

      <h3 className="pb-2">Our Mission</h3>
      <p className="pb-2">
        Our mission is to foster the well-being of pets and their owners by
        offering a seamless and user-friendly platform for booking veterinary
        appointments. We aim to bridge the gap between pet owners and
        veterinarians, ensuring that every pet receives the best possible care
        and attention.
      </p>

      <h3 className="pb-2">Our Vision</h3>
      <p className="pb-2">
        We envision a world where every pet has access to timely and
        high-quality veterinary care, regardless of geographical location or
        socioeconomic status. By leveraging the power of technology, we aim to
        revolutionize the way pet owners connect with veterinary professionals,
        making pet healthcare more accessible and efficient for all.
      </p>

      <h3 className="pb-2">Our Services</h3>
      <p className="pb-2">
        At PET-VET, we offer a comprehensive range of services, including online
        appointment booking, virtual consultations, and access to a network of
        trusted and experienced veterinarians. Our user-friendly platform is
        designed to simplify the process of finding the right veterinary care
        for your beloved companion.
      </p>

      <h3 className="pb-2">Why Choose Us?</h3>

      <ul className="pt-3 pb-2">
        <li className="flex flex-row my-2 mr-2">
          <PiPawPrintFill className="my-auto" />
          Convenient online booking system for hassle-free appointments
        </li>
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto" />
          Access to a diverse network of qualified and compassionate
          veterinarians
        </li>
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto" />
          Reliable and secure virtual consultation services for your pet's
          specific needs
        </li>
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto" />
          Commitment to providing personalized care and support for you and your
          pet
        </li>
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto" />A user-friendly interface that
          prioritizes simplicity and ease of use
        </li>
      </ul>

      <h3 className="pb-2">Get in Touch</h3>
      <p className="pb-2">
        Have questions or need assistance? Our dedicated customer support team
        is here to help. Feel free to reach out to us via PET-VET
        for any inquiries or feedback. We value your input and are continuously
        striving to improve our services for you and your furry companions.
        Thank you for choosing [Your Website Name] for your pet's healthcare
        needs. We look forward to helping you ensure the well-being and
        happiness of your cherished pet.
      </p>
    </div>
  );
};

export default About;
