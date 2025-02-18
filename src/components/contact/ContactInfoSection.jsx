import {FaMobile, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import CustomerFormCard from "../cards/CustomerFormCard";

const ContactInfoSection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row gap-4 justify-center items-center p-6">
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        <div className="border border-defined-green rounded-md w-full md:p-8 p-2">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-3xl font-bold text-defined-blue">
              Contact Information
            </h1>
            <p className="text-sm text-[#777777]">
              For inquiries or bookings, feel free to reach out through our
              contact form or visit us directly. We’re here to assist you with
              any questions about{" "}
              <span className="text-defined-blue">Levi Homestay</span>. Connect
              with us today and let us make your stay exceptional!
            </p>
            <div className="text-base lg:text-sm text-defined-blue">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-defined-orange" />
                <span>+91 89209 07973</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMobile className="text-defined-orange" />
                <span>+91 7404943811, 76799 66855, 89209 07973</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-defined-orange" />
                <span>levihomestayslg@email.com</span>
              </div>
              <div className="flex gap-2 w-full xl:w-[80%]">
                <IoLocationSharp className="text-defined-orange text-xl" />
                <span>
                  Punjabi Para, Mission Compound, Shiv Mandir Rd. Siliguri, WB
                  734001
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.4667864584976!2d88.4333205!3d26.725386399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4415c197875e7%3A0xb069b8c0fcfa1289!2sLevi%20Home!5e1!3m2!1sen!2sin!4v1739612837939!5m2!1sen!2sin"
            loading="lazy"
            className="rounded-lg w-full h-[10rem] lg:h-[12rem]"
          ></iframe>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <CustomerFormCard />
      </div>
    </div>
  );
}

export default ContactInfoSection