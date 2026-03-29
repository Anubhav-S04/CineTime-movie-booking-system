import { useState } from "react";
import dayjs from "dayjs";
import { theatres } from "../../utils/constants";

const TheaterTimings = () => {
  const today = dayjs();

  const [selectedDate, setSelectedDate] = useState(today);

  const formattedDate = selectedDate.format("DD-MM-YY");

  const next7Days = Array.from({ length: 7 }, (_, i) =>
    today.add(i, "day")
  );

  return (
    <>
      <hr className=" border-gray-200" />

      <div className="flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2">
        {next7Days.map((date, i) => {
          const isSelected = selectedDate.isSame(date, "day");

          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${isSelected
                  ? "bg-black text-white font-semibold"
                  : "text-black hover:bg-gray-100"
                }`}
            >
              <span className="text-sm font-bold">
                {date.format("D")}
              </span>

              <span className="text-xs">
                {date.format("ddd")}
              </span>

              <span className="text-[10px]">
                {date.format("MMM").toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
      <div className="space-y-8 px-4 mb-10">
  {theatres.map((theatre, i) => (
    <div key={i}>
      
      {/* Theatre Info */}
      <div className="flex items-start gap-3 mb-2">
        <img
          src={theatre.img}
          alt="logo"
          className="w-8 h-8 object-contain"
        />

        <div>
          <p className="font-semibold">{theatre.name}</p>
          <p className="text-sm text-gray-500">
            Allows Cancellation
          </p>
        </div>
      </div>

      {/* Timings */}
      <div className="flex flex-wrap gap-3 ml-11">
        {theatre.timings.map((slot, i) => (
          <button
            key={i}
            className="border border-green-400 px-12 py-2 flex flex-col items-center justify-center rounded-[16px] text-sm hover:bg-gray-100 cursor-pointer"
          >
            <span className="font-semibold">{slot.time}</span>
           <span className="text-[10px] text-gray-500"> {slot.label}</span>
          </button>
        ))}
      </div>

    </div>
  ))}
</div>
    </>
  );
};

export default TheaterTimings;