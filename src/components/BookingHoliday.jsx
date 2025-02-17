import React from "react";

const BookingHoliday = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //TODO
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold text-defined-orange p-4 text-center">
          Book Your Perfect Holiday Plan Today!
        </h1>

        {/* Background Section */}
        <div
          style={{ backgroundImage: `url(/images/book-form.png)` }}
          className="relative bg-cover bg-center bg-no-repeat w-full h-[20rem] md:h-[4rem] flex items-center justify-center md:justify-between"
        >
          {/* Overlay (for visibility improvement) */}
          <div className="absolute inset-0 bg-defined-green opacity-50"></div>

          {/* Form Wrapper (Responsive Behavior) */}
          <div className="relative z-10 p-6 w-full flex flex-col gap-4 md:flex-row">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4 md:flex-row justify-center"
            >
              <input
                type="text"
                placeholder="Name"
                className="md:w-[20%] w-full p-2  rounded"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="md:w-[20%] w-full p-2  rounded"
              />
              <input
                type="text"
                placeholder="Number of Guests"
                className="md:w-[20%] w-full p-2  rounded"
              />
              <input
                type="text"
                placeholder="Date"
                className="md:w-[20%] w-full p-2  rounded"
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
