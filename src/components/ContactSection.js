import Banner from "./Banner";

export default function ContactSection() {
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      
      <Banner title={"Contact Us"} />
      <div className="max-w-6xl mx-auto px-4">
        {/* Map */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.794212572512!2d83.95687574101336!3d26.29743542657846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b53248562115%3A0xcf26bb1cd7634614!2sMajhauli%20Raj%2C%20Uttar%20Pradesh%20274506!5e0!3m2!1sen!2sin!4v1753097706026!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="w-full rounded-md border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Number"
                className="p-3 border rounded w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded h-40 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <i className="fa-solid fa-location-dot text-3xl text-blue-600"></i>
            <h2 className="text-lg font-semibold">Address</h2>
            <p className="text-gray-700">
              21, Ashoka Road
              <br />
              New Delhi-110001 (INDIA)
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <i className="fa-solid fa-envelope text-3xl text-blue-600"></i>
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-700">brijbhusan.singh@sansad.nic.in</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <i className="fa-solid fa-phone text-3xl text-blue-600"></i>
            <h2 className="text-lg font-semibold">Number</h2>
            <p className="text-gray-700">+91 (011) 23346289</p>
          </div>
        </div>
      </div>
    </section>
  );
}
