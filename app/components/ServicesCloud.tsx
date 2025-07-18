export default function ServicesCloud() {
  return (
    <div>
      <div className="bg-gray-900">
        <p className="font-light text-sm opacity-40 mb-4 ">Services</p>
        <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg md:grid-cols-3 outline-[0.5px] outline outline-zinc-800">
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                Web Development
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                Custom websites & web applications
              </p>
            </div>
          </div>
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 2v2h3v16H4V4h3V2h2v2h6V2h2zm-2 4H9v2h6V6zm0 4H9v2h6v-2zm0 4H9v2h6v-2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                Mobile Apps
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                iOS & Android app development (soon)
              </p>
            </div>
          </div>
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                UI/UX Design
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                User interface & experience design
              </p>
            </div>
          </div>
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.5-1.1 2.1c-.1.2-.1.6-.1.9 0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2l.03-.12L8.1 13h7.4c.8 0 1.4-.4 1.8-1L21.7 4H5.2l-.9-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                E-commerce
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                Online stores & payment systems
              </p>
            </div>
          </div>
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                SEO & Marketing
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                Search optimization & digital marketing
              </p>
            </div>
          </div>
          <div className="bg-nav p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-3 opacity-60 hover:opacity-80 transition-opacity duration-300 flex justify-center">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 opacity-80">
                Maintenance
              </h3>
              <p className="text-gray-400 text-xs font-light opacity-60">
                Ongoing support & updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
