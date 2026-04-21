import React from 'react';
import m1 from '../assets/m1.avif';
import TheaterTimings from '../components/movies/TheaterTimings';
const movie = {
    id: 1,
    title: "Dhurandhar: The Revenge",
    genre: ["Action", "Thriller", "Spy"],
    rating: 9.4,
    votes: "554K",
    img: m1,
    languages: ["Hindi", "English", "Tamil", "Telugu"],
    format: ["2D", "3D", "IMAX"],
    age: "A",
    duration: "3h 49m",
    releaseDate: "2026-03-19",
    description: "‘Dhurandhar: The Revenge’ is a high-intensity spy action thriller that follows an undercover Indian intelligence agent operating deep inside Karachi’s criminal and political underworld. As he rises through the ranks under a false identity, he faces betrayal, shifting loyalties, and dangerous enemies while pursuing revenge tied to real geopolitical conflicts. Packed with brutal action, emotional depth, and a large-scale narrative, the film explores power, survival, and the cost of vengeance."
};
const MovieDetails = () => {
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
                {/* Overlay for darkness */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Actual Content */}
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

                    <div className="flex flex-col justify-start flex-1">
                        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

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
                        <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                                {movie.format.join(", ")}
                            </span>

                            <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                                {movie.languages.join(", ")}
                            </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                            {movie.duration} • {movie.genre.join(", ")} •{" "}
                            {movie.age} •{" "}
                            {movie.releaseDate}
                        </p>
                        <div>
                            <h2 className="text-xl font-bold mb-2">About the movie</h2>

                            <p className="text-sm text-gray-50 leading-relaxed mb-4">
                                {movie.description}
                            </p>
                        </div>
                    </div>


                    {/* Share Button */}
                    <div className="absolute top-0 right-0 cursor-pointer">
                        <button
                            className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2"
                        >
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
            <div className='  flex flex-col gap-2.5 max-w-screen-xl mx-auto  py-3 my-4'>
                <div className=' text-sm flex flex-row gap-2.5'>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>2D</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>3D</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>Wheelchair-friendly</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>Premium Seats</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>Recliner</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>IMAX</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>4DX</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>LASER</div>
                    <div className='border cursor-pointer hover:bg-gray-100 border-gray-300 p-1 px-6 rounded-[10px]'>Dolby Atmos</div>

                </div>
                <div className='border border-gray-200'></div>
                <div className='bg-gray-200 flex flex-row gap-5.5 text-gray-600 p-2 px-7'>
                   
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 mr-1 bg-green-400 rounded-full inline-block"></span>
                        <small className="font-semibold text-gray-500">Available</small>
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 mr-1 bg-yellow-400 rounded-full inline-block"></span>
                        <small className="font-semibold text-gray-500">Filling fast</small>
                    </span>

                    <span className="flex items-center gap-1 ">
                        <span className="w-2 h-2 mr-1 bg-red-400 rounded-full inline-block"></span>
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