import { useState } from "react";

const CustomerFormCard = () => {
  const [formValues, setFormValues] = useState({});
 const handleFormSubmit = (e) => {
   e.preventDefault();
   if (
     !formValues.name ||
     !formValues.mobile ||
     !formValues.checkin ||
     !formValues.checkout ||
     !formValues.guests ||
     !formValues.message
   ) {
     alert("Please fill all the fields");
     return;
   }

   if (formValues.mobile.length !== 10) {
     alert("Please enter a valid mobile number");
     return;
   }

   if (formValues.checkin > formValues.checkout) {
     alert("Check-in date should be before check-out date");
     return;
   }

   const dest = "+918920907973";
   const message = `*Name:* ${formValues.name}%0A
  *Phone:* ${formValues.mobile}%0A
  *Check-in Date:* ${formValues.checkin}%0A
  *Check-out Date:* ${formValues.checkout}%0A
  *No. of Guests:* ${formValues.guests}%0A
  *Message:* ${formValues.message}`;

   // Check if user is on mobile
   const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
   const baseUrl = isMobile
     ? "https://api.whatsapp.com/send"
     : "https://web.whatsapp.com/send";

   const url = `${baseUrl}?phone=${dest}&text=${message}`;
   window.open(url, "_blank").focus();
 };


  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(/images/cust-form.png)` }}
        className="relative bg-cover bg-center bg-no-repeat "
      >
        <div className="absolute inset-0 bg-defined-green opacity-50"></div>

        <div className="relative z-10 p-6 w-full flex flex-col gap-4">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 justify-center items-center w-full opacity-80"
          >
            <input
              type="text"
              placeholder="Guest Name"
              name="name"
              className=" w-full p-2  rounded opacity-90"
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              className=" w-full p-2  rounded"
              onChange={(e) =>
                setFormValues({ ...formValues, mobile: e.target.value })
              }
            />
            <div className="flex items-center justify-center gap-4 w-full">
              <input
                type="date"
                placeholder="Checkin Date"
                name="checkin"
                className="w-1/2 p-2  rounded"
                onChange={(e) =>
                  setFormValues({ ...formValues, checkin: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Checkout Date"
                name="checkout"
                className="w-1/2 p-2  rounded"
                onChange={(e) =>
                  setFormValues({ ...formValues, checkout: e.target.value })
                }
              />
            </div>
            <input
              type="number"
              placeholder="No of Guests"
              name="guests"
              className="w-full p-2  rounded"
              onChange={(e) =>
                setFormValues({ ...formValues, guests: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Message"
              id="message"
              cols="30"
              rows="3"
              className=" w-full p-2  rounded max-h-24"
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 rounded bg-defined-green text-white"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerFormCard;
