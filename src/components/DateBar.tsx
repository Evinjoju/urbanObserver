// components/DateBar.tsx
"use client";

const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formatted = date
    .toLocaleDateString("en-US", options)
    .replace(/\./g, "")
    .toUpperCase()
    .replace(/(\w{3})\s(\w{3})\s(\d{1,2}),\s(\d{4})/, "$1, $2 $3, $4");

  return formatted;
};

const DateBar = () => {

  const today = getCurrentDate();

  return (
    <div className="hidden sm:flex w-full border-b border-white text-xs text-white px-6 py-2 justify-between items-center bg-black relative">
      <span className="tracking-widest">{today}</span>
      <div className="flex items-center gap-4 tracking-widest">
         <a href="/terms" className="hover:text-red-600 transition-colors duration-200">
          TERMS & CONDITIONS
        </a>
        <a href="/privacy" className="hover:text-red-600 transition-colors duration-200">
          PRIVACY POLICY
        </a>
        <a href="/about" className="hover:text-red-600 transition-colors duration-200">
          ABOUT
        </a>
        
      </div>

    </div>
  );
};

export default DateBar;