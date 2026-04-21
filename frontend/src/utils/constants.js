import banner1 from "../assets/banner1.avif";
import banner2 from "../assets/banner2.avif";
import banner3 from "../assets/banner3.avif";
import banner4 from "../assets/banner4.avif";
import m1 from "../assets/m1.avif";
import m2 from "../assets/m2.avif";
import m3 from "../assets/m3.avif";
import m4 from "../assets/m4.avif";
import m5 from "../assets/m5.avif";
import m6 from "../assets/m6.avif";
import m7 from "../assets/m7.avif";
import m8 from "../assets/m8.avif";
import m9 from "../assets/m9.avif";
import m10 from "../assets/m10.avif";
import m11 from "../assets/m11.avif";
import m12 from "../assets/m12.avif";
import e1 from "../assets/e1.avif";
import e2 from "../assets/e2.avif";
import e3 from "../assets/e3.avif";
import e4 from "../assets/e4.avif";
import e5 from "../assets/e5.avif";
import inox from "../assets/inox.avif";
import pvr from "../assets/pvr.avif";
import cinepolis from "../assets/cinepolis.avif";

export const languages = [
  "Hindi",
  "English",
  "English 7D",
  "Bengali",
  "Punjabi",
  "Tamil",
  "Japanese",
  "Telugu",
];

export const banners = [banner1, banner2, banner3, banner4];

export const movies = [
  {
    id: 1,
    title: "Dhurandhar The Revenge",
    genre: "Action/Thriller",
    rating: 9.4,
    votes: "554K",
    img: m1,
    promoted: true,
  },
  {
    id: 2,
    title: "Project Hail Mary",
    genre: "Action/Drama/Sci-fi",
    rating: 9,
    votes: "52.7K",
    img: m2,
    promoted: true,
  },
  {
    id: 3,
    title: "Dacoit",
    genre: "Action/Drama/Thriller/Romantic",
    rating: 7,
    votes: "91.1K",
    img: m3,
  },
  {
    id: 4,
    title: "The Drama",
    genre: "Comedy/Drama/Romantic",
    rating: 7.7,
    votes: "970",
    img: m4,
  },
  {
    id: 5,
    title: "The Super Mario Galaxy Movie",
    genre: "Adventure/Animation/Comedy",
    rating: 8.7,
    votes: "2.4K",
    img: m5,
  },
  //  {
  //     "id": 6,
  //     "title": "M3GAN 2.0",
  //     "genre": "Horror/Sci-Fi/Thriller",
  //     "rating": 8.4,
  //     "votes": "117",
  //     "img": m6
  //   },
  //   {
  //     "id": 7,
  //     "title": "Housefull 5",
  //     "genre": "Comedy/Thriller",
  //     "rating": 6.1,
  //     "votes": "56.3K",
  //     "img": m7
  //   },
  //   {
  //     "id": 8,
  //     "title": "Sitaare Zameen Par",
  //     "genre": "Comedy/Drama/Sports",
  //     "rating": 8.5,
  //     "votes": "39.6K",
  //     "img": m8
  //   },
  //   {
  //     "id": 9,
  //     "title": "Naruto the Movie: Ninja Clash in the Land of Snow",
  //     "genre": "Action/Adventure/Animation/Comedy",
  //     "rating": 9.6,
  //     "votes": "51",
  //     "img": m9
  //   },
  //   {
  //     "id": 10,
  //     "title": "28 Years Later",
  //     "genre": "Horror/Thriller",
  //     "rating": 7.9,
  //     "votes": "3.7K",
  //     "img": m10
  //   }
];

export const allMovies = [
  {
    id: "1",
    title: "Dhurandhar: The Revenge",
    genre: ["Action", "Thriller", "Spy"],
    rating: 9.4,
    votes: "554K",
    img: m1,
    promoted: true,
    languages: ["Hindi", "English", "Tamil", "Telugu"],
    format: ["2D", "3D", "IMAX"],
    age: "A",
    duration: "3h 49m",
    releaseDate: "2026-03-19",
    description: "‘Dhurandhar: The Revenge’ is a high-intensity spy action thriller that follows an undercover Indian intelligence agent operating deep inside Karachi’s criminal and political underworld. As he rises through the ranks under a false identity, he faces betrayal, shifting loyalties, and dangerous enemies while pursuing revenge tied to real geopolitical conflicts. Packed with brutal action, emotional depth, and a large-scale narrative, the film explores power, survival, and the cost of vengeance."
  },
  {
    id: "2",
    title: "Project Hail Mary",
    genre: ["Action", "Drama", "Sci-fi"],
    rating: 9,
    votes: "52.7K",
    img: m2,
    promoted: true,
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    format: ["2D", "IMAX"],
    age: "UA13+",
    duration: "2h 40m",
    releaseDate: "2026-06-10",
    description: "A lone astronaut wakes up on a mission to save humanity with no memory of how he got there."
  },
  {
    id: "3",
    title: "Dacoit",
    genre: ["Action", "Drama", "Thriller", "Romantic"],
    rating: 7,
    votes: "91.1K",
    img: m3,
    languages: ["English", "Hindi", "Telugu", "Tamil"],
    format: ["2D"],
    age: "UA13+",
    duration: "2h 30m",
    releaseDate: "2026-04-02",
    description: "A rugged outlaw's life turns complicated when love and revenge collide."
  },
  {
    id: "4",
    title: "The Drama",
    genre: ["Comedy", "Drama", "Romantic"],
    rating: 7.7,
    votes: "970",
    img: m4,
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    format: ["2D"],
    age: "U",
    duration: "2h 10m",
    releaseDate: "2026-02-14",
    description: "A lighthearted romantic comedy filled with emotional twists and humor."
  },
  {
    id: "5",
    title: "The Super Mario Galaxy Movie",
    genre: ["Adventure", "Animation", "Comedy"],
    rating: 8.7,
    votes: "2.4K",
    img: m5,
    languages: ["English"],
    format: ["2D", "3D"],
    age: "U",
    duration: "1h 50m",
    releaseDate: "2026-07-01",
    description: "Mario embarks on a cosmic adventure to save galaxies from chaos."
  },
  {
    id: "6",
    title: "Lee Cronin's The Mummy",
    genre: ["Horror", "Psychological", "Thriller"],
    rating: 8,
    votes: "6.4K",
    img: m6,
    languages: ["English", "Hindi"],
    format: ["2D", "IMAX"],
    age: "UA13+",
    duration: "2h 5m",
    releaseDate: "2026-10-31",
    description: "An ancient curse awakens something terrifying beneath the sands."
  },
  {
    id: "7",
    title: "Vijaynagarer Hirey (Kakababu)",
    genre: ["Adventure", "Mystery", "Thriller"],
    rating: 7.9,
    votes: "4.3K",
    img: m7,
    languages: ["Bengali", "Hindi"],
    format: ["2D"],
    age: "U",
    duration: "2h 20m",
    releaseDate: "2026-01-20",
    description: "A mystery adventure following Kakababu on a thrilling expedition."
  },
  {
    id: "8",
    title: "Bhooth Bangla",
    genre: ["Comedy", "Horror", "Thriller"],
    rating: 8.1,
    votes: "30.6K",
    img: m8,
    languages: ["Hindi"],
    format: ["2D"],
    age: "U",
    duration: "2h",
    releaseDate: "2026-05-05",
    description: "A haunted house comedy that blends scares with laughs."
  },
  {
    id: "9",
    title: "Korpoor",
    genre: ["Action", "Adventure", "Animation", "Comedy"],
    rating: 8,
    votes: "1K",
    img: m9,
    languages: ["Bengali", "Hindi"],
    format: ["2D"],
    age: "UA",
    duration: "1h 45m",
    releaseDate: "2026-03-01",
    description: "An animated adventure full of action and humor."
  },
  {
    id: "10",
    title: "Michael",
    genre: ["Biography", "Musical", "Drama"],
    rating: 8.2,
    votes: "112K",
    img: m10,
    languages: ["English"],
    format: ["2D", "IMAX"],
    age: "UA",
    duration: "2h 50m",
    releaseDate: "2026-08-29",
    description: "The life and legacy of a global music icon."
  }
];

export const events = [
  {
    title: "COMEDY SHOWS",
    subtitle: "205+ Events",
    img: e1,
  },
  {
    title: "AMUSEMENT PARK",
    subtitle: "20+ Events",
    img: e2,
  },
  {
    title: "THEATRE SHOWS",
    subtitle: "80+ Events",
    img: e3,
  },
  {
    title: "KIDS",
    subtitle: "25+ Events",
    img: e4,
  },
  {
    title: "ADVENTURE & FUN",
    subtitle: "10+ Events",
    img: e5,
  },
];

export const theatres = [
  {
    name: "INOX Quest Mall, Ballygunge, Kolkata",
    distance: "2.0 km",
    cancellation: "Allows cancellation",
    img: inox,
    timings: [
      { time: "10:15 AM", label: "RECLINERS" },
      { time: "2:00 PM", label: "RECLINERS" },
      { time: "6:45 PM", label: "RECLINERS", highlight: true },
      { time: "11:35 PM", label: "RECLINERS" },
      { time: "7:45 PM", label: "RECLINERS" },
      { time: "12:35 PM", label: "RECLINERS" }
    ],
  },
  {
    name: "INOX Forum Mall, Elgin Road, Kolkata",
    distance: "3.3 km",
    cancellation: "Allows cancellation",
    img: inox,
    timings: [
      { time: "1:15 PM", label: "RECLINERS" },
      { time: "4:30 PM", label: "RECLINERS" },
    ],
  },
  {
    name: "PVR Manisquare, Manisqare Mall, Kolkata",
    distance: "1.5 km",
    cancellation: "Non-cancellable",
    img: pvr,
    timings: [
      { time: "10:30 AM", label: "PVR PXL" },
      { time: "1:45 PM", label: "PVR PXL" },
      { time: "5:15 PM", label: "PVR PXL" },
      { time: "11:25 PM", label: "PVR PXL", highlight: true },
    ],
  },
  {
    name: "INOX South City Mall, South City Mall, Kolkata",
    distance: "3.5 km",
    cancellation: "Allows cancellation",
    img: inox,
    timings: [
      { time: "12:00 PM", label: "LASER" },
      { time: "3:30 PM", label: "LASER" },
      { time: "6:50 PM", label: "LASER", highlight: true },
      { time: "11:25 PM", label: "LASER" },
    ],
  },
  {
    name: "Cinepolis Acropolis Mall, Rajdanga Road, Kolkata",
    distance: "1.8 km",
    cancellation: "Non-cancellable",
    img: cinepolis, // Make sure you have: `import cinepolis from "../assets/cinepolis.png"`
    timings: [
      { time: "08:10 PM", label: "DOLBY 7.1" },
      { time: "11:30 PM", label: "DOLBY 7.1" },
    ],
  },
];

export const ordersData = [
  {
    id: "TCAKJAB",
    title: "Sinners",
    format: "2D",
    datetime: "Tue, 29 Apr 2025 | 9:45 PM",
    cinema: "PVR: Mani Square Mall, Kolkata",
    quantity: 5,
    seats: "PE-P9,P10,P11,P12,P13",
    bookingTime: "Apr 29 2025 07:46PM",
    paymentMethod: "Credit/Debit Card",
    poster: m11,
    total: 607.10,
    ticket: 495.00,
    fee: 112.10
  },
  {
    id: "XYCKAJS",
    title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
    format: "2D",
    datetime: "Sat, 26 Apr 2025 | 2:45 PM",
    cinema: "Miraj Cinemas: Newtown, Kolkata",
    quantity: 3,
    seats: "PE-P9,P10,P11,P12,P13",
    bookingTime: "Apr 25 2025 04:00PM",
    paymentMethod: "Credit/Debit Card",
    poster: m12,
    total: 607.10,
    ticket: 495.00,
    fee: 112.10
  }
];

export const filters = ["2D", "3D", "Wheelchair Friendly", "Premium Seats", "Recliners", "IMAX", "PVR PXL", "4DX", "Laser", "Dolby Atmos"];

export const tabs = ["Profile", "Your Orders"];

export const countryCodes = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "Bangladesh", code: "BD", dial_code: "+880" },
  { name: "Nepal", code: "NP", dial_code: "+977" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Thailand", code: "TH", dial_code: "+66" },
  { name: "Indonesia", code: "ID", dial_code: "+62" },
  { name: "Malaysia", code: "MY", dial_code: "+60" },
  // Add more if needed
];
