export default function Footer() {
  return (
    <footer
      className="relative min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: "url('/assets/img/majhauli/majhauliraaj1.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 flex flex-col flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 flex-grow">
          {/* Contact Us */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              Contact Us
            </h5>
            <address className="not-italic mb-3">
              <i className="fa-solid fa-location-dot mr-2"></i>
              21, Ashoka Road New Delhi-110001 (INDIA)
            </address>
            <p className="mb-2">
              <i className="fa-solid fa-envelope mr-2"></i>
              brijbhusan.singh@sansad.nic.in
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-phone mr-2"></i>+91 (011) 23346289
            </p>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.facebook.com/brijbhushansharan/?fref=ts"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-facebook-f hover:text-blue-500"
                aria-label="Facebook"
              ></a>
              <a
                href="https://twitter.com/BrijbhushanMp"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-twitter hover:text-blue-400"
                aria-label="Twitter"
              ></a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-google-plus-g hover:text-red-500"
                aria-label="Google Plus"
              ></a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-linkedin-in hover:text-blue-700"
                aria-label="LinkedIn"
              ></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {[
                "HOME",
                "PERSONAL DETAILS",
                "MY VIEWS",
                "MEDIA",
                "SOCIAL & CULTURAL ACTIVITIES",
                "DTSE",
                "SPORTS",
                "GALLERY",
                "CONTACT US",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="javascript:void(0)"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Me */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">About Me</h5>
            <ul className="space-y-2">
              {[
                "HOME",
                "PERSONAL DETAILS",
                "MY VIEWS",
                "MEDIA",
                "SOCIAL & CULTURAL ACTIVITIES",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="javascript:void(0)"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h5 className="mb-5 text-white text-lg font-semibold">
              Subscribe For Newsletter
            </h5>
            <p className="mb-4 text-white/70">
              Subscribe newsletter to get updates..
            </p>
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-md px-3 py-2 text-gray-900 focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-[#f47217] px-4 rounded-r-md hover:bg-[#fc8430] transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <i className="fa-sharp fa-solid fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-4 text-sm text-white/70 text-center">
          <p>
            Copyright © 2025 Developed by{" "}
            <a href="#" className="text-blue-400 hover:underline">
              The SARUS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
