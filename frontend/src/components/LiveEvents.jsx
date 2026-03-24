import { events } from "../utils/constants";
const LiveEvents = () => {

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-6">The Best of Live Events</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
                {
                    events.map((event, i) => (
                        <div key={i} className="rounded-xl overflow-hidden relative group shadow-sm cursor pointer">
                            <img src={event.img} alt={event.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                            {/* <div className="p-4">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-gray-600 text-sm">{event.date}</p>
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
export default LiveEvents;