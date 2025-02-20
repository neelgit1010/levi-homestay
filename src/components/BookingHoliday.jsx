import { useState } from "react";

const BookingHoliday = () => {
  const [formValues, setFormValues] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if(!formValues.name || !formValues.mobile || !formValues.guests || !formValues.date) {
      alert("Please fill all the fields");
      return;
    }

    if(formValues.date.length !== 10) {
      alert("Please enter a valid date");
      return;
    }

    if(Number(formValues.date.split("-")[0]) < 2025) {
      alert("Please enter a valid date");
      return;
    }

    const dest = "+918920907973";

    const message = `*Name:* ${formValues.name}%0A
*Phone:* ${formValues.mobile}%0A
*Number of Guests:* ${formValues.guests}%0A
*Date:* ${formValues.date}%0A`

    const url = `https://api.whatsapp.com/send?phone=${dest}&text=${message}`;
    window.open(url, "_blank").focus();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="md:w-[90%]">
        <h1 className="text-3xl font-bold text-defined-orange p-4 text-center">
          Book Your Perfect Holiday Plan Today!
        </h1>

        <div
          style={{ backgroundImage: `url(/images/book-form.png)` }}
          className="relative bg-cover bg-center bg-no-repeat w-full h-[20rem] md:h-[8rem] flex items-center justify-center md:justify-between"
        >

          <div className="absolute inset-0 bg-defined-green opacity-50"></div>


          <div className="relative z-10 p-8 w-full flex flex-col gap-4 md:flex-row">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 w-full md:flex-row justify-center"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="md:w-[20%] w-full p-2  rounded"
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                className="md:w-[20%] w-full p-2  rounded"
                onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
              />
              <input
                type="number"
                placeholder="Number of Guests"
                name="guests"
                className="md:w-[20%] w-full p-2  rounded"
                onChange={(e) => setFormValues({ ...formValues, guests: e.target.value })}
              />
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="md:w-[20%] w-full p-2  rounded"
                onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
              />
              <button
                type="submit"
                className="md:w-[20%] w-full p-2 rounded bg-defined-orange text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHoliday;
