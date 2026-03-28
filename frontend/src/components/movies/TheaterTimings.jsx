import { useState } from "react";
import dayjs from "dayjs";

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
              className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${
                isSelected
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
        theater showtimes
      </div>
    </>
  );
};

export default TheaterTimings;