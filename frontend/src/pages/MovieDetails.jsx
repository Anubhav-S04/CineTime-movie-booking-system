import React from 'react';
import m4 from '../assets/m4.avif';
const movie = {
    id: 4,
    title: "F1: The Movie",
    genre: ["Action", "Drama", "Sports"],
    rating: 9.5,
    votes: "6.8K",
    img: m4,
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    format: ["2D", "3D", "IMAX 3D"],
    age: "UA16+",
    duration: "2h 15m",
    releaseDate: "2024-09-15",
    description: "Experience the adrenaline-pumping world of Formula 1 racing like never before in 'F1: The Movie'. This high-octane film takes you behind the scenes of the most prestigious motorsport, showcasing the intense rivalries, cutting-edge technology, and the relentless pursuit of victory. Follow the journey of a talented young driver as he navigates the challenges of the racing circuit, battles fierce competitors, and strives to become a legend in the world of F1. With breathtaking visuals, heart-stopping action, and a gripping storyline, 'F1: The Movie' is a must-watch for racing enthusiasts and movie lovers alike."
}
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
                                <span className="text-gray-300">
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
                    <div></div>
                </div>
            </div>
        </>



    );
};

export default MovieDetails;