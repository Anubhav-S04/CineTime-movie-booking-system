import { languages } from "../../utils/constants";
const MovieFilters = () => {

    return (
        <div className="w-full md:w-1/4 p-4 space-y-6">
            <h2 className="text-2xl font-semibold">Filters</h2>
            <div className="bg-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Languages</span>
                    <button className="text-[#f7436a] hover:text-[#d12d50] pointer-cursor">Clear</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        languages.map((lang, i) => (

                            <span className="border border-gray-200 text-[#f74362] px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer">
                                {lang}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className="bg-white -mt-3 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Genres</span>
                    <button className="text-[#f7436a] hover:text-[#d12d50] pointer-cursor">Clear</button>
                </div>
            </div>
            <div className="bg-white -mt-3 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Format</span>
                    <button className="text-[#f7436a] hover:text-[#d12d50] pointer-cursor">Clear</button>
                </div>
            </div>
            <button className="w-full border cursor-pointer py-1 -mt-3 border-[#f7436a] text-[#f7436a] hover:bg-[#f7436a] hover:text-white transition-colors duration-300 rounded">
                Browse by cinemas
            </button>
        </div>
    );

}
export default MovieFilters;