const CustomerFormCard = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //TODO
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div>
        <div
          style={{ backgroundImage: `url(/images/cust-form.png)` }}
          className="relative bg-cover bg-center bg-no-repeat w-full h-[30rem] flex items-center justify-center md:justify-between"
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
                className=" w-full p-2  rounded opacity-90"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className=" w-full p-2  rounded"
              />
              <div className="flex items-center justify-center gap-4 w-full">
                <input
                  type="text"
                  placeholder="Checkin Date"
                  className="w-1/2 p-2  rounded"
                />
                <input
                  type="text"
                  placeholder="Checkout Date"
                  className="w-1/2 p-2  rounded"
                />
              </div>
              <input
                type="text"
                placeholder="No of Guests"
                className="w-full p-2  rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                cols="30"
                rows="3"
                className=" w-full p-2  rounded"
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
    </div>
  );
};

export default CustomerFormCard;
