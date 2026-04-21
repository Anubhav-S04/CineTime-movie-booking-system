import React from "react";
import { useParams } from "react-router-dom";
import { allMovies } from "../utils/constants"; // adjust path if needed
import TheaterTimings from "../components/movies/TheaterTimings";

const MovieDetails = () => {
  const { id } = useParams();

  // Find movie based on ID
  const movie = allMovies.find((m) => m.id === id);

  // Safety check
  if (!movie) {
    return (
      <div className="text-center text-xl mt-10">
        Movie not found
      </div>
    );
  }

  return (
    <>
      {/* MovieDetails Section */}
      <div
        className="relative text-white font-sans px-4 py-10"
        style={{
          backgroundImage: `url(${movie.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Poster */}
          <div>
            <img
              src={movie.img}
              alt={movie.title}
              className="rounded-xl w-52 shadow-xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col flex-1">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                <span className="text-pink-500 font-bold">
                  ★ {movie.rating}
                </span>
                <span className="text-gray-200">
                  {movie.votes} Votes
                </span>
                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                  Rate now
                </button>
              </div>
            </div>

            {/* Format + Language */}
            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie.format?.join(", ")}
              </span>

              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie.languages?.join(", ")}
              </span>
            </div>

            {/* Meta */}
            <p className="text-sm text-gray-300 mb-4">
              {movie.duration} • {movie.genre?.join(", ")} •{" "}
              {movie.age} • {movie.releaseDate}
            </p>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-2">About the movie</h2>
              <p className="text-sm text-gray-50 leading-relaxed mb-4">
                {movie.description}
              </p>
            </div>
          </div>

          {/* Share Button */}
          <div className="absolute top-0 right-0 cursor-pointer">
            <button className="bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77l-7.13-4.21c.05-.25.09-.51.09-.78s-.03-.53-.09-.78l7.04-4.15c.54.5 1.25.81 2.05.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 
                1.34-3 3c0 .27.04.52.09.78L8.91 9.03C8.38 8.52 7.67 8.21 6.87 8.21c-1.66 0-3 
                1.34-3 3s1.34 3 3 3c.8 0 1.52-.31 2.05-.81l7.12 4.2c-.05.24-.08.49-.08.75 
                0 1.65 1.35 3 3 3s3-1.35 3-3-1.34-3-3-3z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Filters + Timings */}
      <div className="flex flex-col gap-2.5 max-w-screen-xl mx-auto py-3 my-4">

        {/* Filters */}
        <div className="text-sm flex flex-wrap gap-2.5">
          {[
            "2D",
            "3D",
            "Wheelchair-friendly",
            "Premium Seats",
            "Recliner",
            "IMAX",
            "4DX",
            "LASER",
            "Dolby Atmos",
          ].map((item, index) => (
            <div
              key={index}
              className="border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="border border-gray-200"></div>

        {/* Seat status */}
        <div className="bg-gray-200 flex gap-5 text-gray-600 p-2 px-7">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <small className="font-semibold text-gray-500">Available</small>
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <small className="font-semibold text-gray-500">Filling fast</small>
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            <small className="font-semibold text-gray-500">Almost full</small>
          </span>
        </div>

        {/* Theater timings */}
        <TheaterTimings />
      </div>
    </>
  );
};

export default MovieDetails;