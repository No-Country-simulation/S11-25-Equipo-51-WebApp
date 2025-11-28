export function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

//hover:bg-gray-50 shadow-xl mx-4"
//hover:from-cyan-600 hover:to-teal-700 shadow-xl shadow-cyan-500/30
function CallToActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-4 focus-visible:ring-cyan-200 rounded-md w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white text-cyan-600 hover:bg-gray-50 shadow-xl  mx-4"
      >
      {children}
      <ArrowRightIcon />
    </button>
  );
}

export default CallToActionButton