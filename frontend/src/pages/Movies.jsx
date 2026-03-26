import BannerSlider from "../components/shared/BannerSlider";
import MovieFilters from "../components/movies/MovieFilters";
import MovieList from "../components/movies/MovieList";
const Movies = () => {
  return (
    <div>
        <BannerSlider/>
        <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] md:px-[100px] pb-10 pt-8">
            <MovieFilters />
            <MovieList />
        </div>
    </div>

  )
}
export default Movies;