import React from "react";
import { PiPawPrintFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="py-5 blueText">
      <h1 className="text-center pb-3">Contact Us</h1>
      <p className="pb-2">
        Have questions, feedback, or need assistance? We're here to help! Please
        feel free to get in touch with us using the contact information below.
        Our dedicated team is committed to providing you and your pet with the
        best possible support and assistance.
      </p>

      <h3 className="pb-2">Customer Support</h3>
      <p className="pb-2">
        For any general inquiries or assistance, please contact our customer
        support team at:
        <ul className="mt-2">
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Email: [Your Email Address]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Phone: [Your Phone Number]
          </li>
        </ul>
        Our customer support representatives are available [mention working
        hours] to assist you with any questions or concerns you may have.
      </p>

      <h3 className="pb-2">Technical Support</h3>
      <p className="pb-2">
        Encountering technical issues or difficulties with our platform? Our
        technical support team is here to help you resolve any issues. Please
        reach out to our technical support team at:
        <ul className="mt-2">
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Email: [Technical Support Email Address]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Phone: [Technical Support Phone Number]
          </li>
        </ul>
      </p>

      <h3 className="pb-2">Business Inquiries</h3>
      <p className="pb-2">
        For business-related inquiries, partnership opportunities, or media
        inquiries, please contact our business development team at:
        <ul className="mt-2">
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Email: [Business Inquiries Email Address]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Phone: [Business Inquiries Phone Number]
          </li>
        </ul>
      </p>

      <h3 className="pb-2">Visit Us</h3>
      <ul className="mt-2">
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto mx-2" />
          [Your Company Name]
        </li>
        <li className="flex flex-row my-2">
          <PiPawPrintFill className="my-auto mx-2" />
          [Your Company Address]
        </li>
      </ul>

      <h3 className="pb-2">Connect With Us</h3>

      <p className="pb-2">
        Stay updated with the latest news, updates, and pet care tips by
        following us on social media:
        <ul className="mt-2">
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Facebook: [Your Facebook Page URL]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Twitter: [Your Twitter Page URL]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            Instagram: [Your Instagram Page URL]
          </li>
          <li className="flex flex-row my-2">
            <PiPawPrintFill className="my-auto mx-2" />
            LinkedIn: [Your LinkedIn Page URL]
          </li>
        </ul>
        We value your feedback and are dedicated to providing you and your pet
        with the best possible experience. Thank you for choosing [Your Website
        Name] for your pet's healthcare needs.
      </p>
    </div>
  );
};

export default Contact;
