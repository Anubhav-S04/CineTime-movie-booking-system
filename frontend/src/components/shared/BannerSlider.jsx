// Banner slider component
import Slider from "react-slick";
import {banners}  from "../../utils/constants";

const BannerSlider = () => {
    const settings = {
        centerMode: true,
        centerPadding: "400px",
        slidesToShow: 1,
        speed:800,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 4000,
        infinite: true



    };
    return(

        <div className="w-full bg-white py-6">
            <div className="mx-auto px-4">
                <Slider {...settings}>
                    {
                        banners.map((banner, i) => (
                            <div key={i} className="px-2">
                                <img src={banner} alt={`Banner ${banner.id}`} className="w-full h-[300px] rounded-xl object-cover" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
export default BannerSlider;