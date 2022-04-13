//Import Audiofiles
import soundfile1 from "./media/mp3/Devil-in-a-new-dress-kanye.mp3";
import soundfile2 from "./media/mp3/Lightsabe-Saviour-Yung-Lean.mp3";
import soundfile3 from "./media/mp3/Meet-the-Frownies-Mr.-Twin-sister.mp3";
import soundfile4 from "./media/mp3/Skelechairs-venetian-snares.mp3";
import soundfile5 from "./media/mp3/Time-Moves-Slow-bbng.mp3";
import soundfile6 from "./media/mp3/Unlimited-lucki.mp3";
import soundfile7 from "./media/mp3/Frontier Psychiatrist.mp3"
//Import Id
import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Devil In A New Dress",
      cover:
        "https://direct.rhapsody.com/imageserver/images/alb.156157512/500x500.jpg",
      artist: "Kanye",
      audio: soundfile1,
      color: ["#f12b46", "#d09735"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Lightsaber // Saviour",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/b/b0/Unknown_Death_2002_mixtape_by_Yung_Lean.jpg",
      artist: "Yung Lean",
      audio: soundfile2,
      color: ["#314651", "#adbcc9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Meet the Frownies",
      cover:
        "https://i.discogs.com/vlijsgY4vUiAiuHVQrvnHWtI0ngtTvao-2Fngj-Zavg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4NDAx/MjItMTQ2MDI1OTky/MC01NDUwLmpwZWc.jpeg",
      artist: "Mr. Twin Sister",
      audio: soundfile3,
      color: ["#ffffff", "#f0472c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Skelechairs",
      cover:
        "https://i.discogs.com/-deWwACdV-VKxTE5spnQUg6hVW5dbch7IWZ1ljkWx6Y/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDYz/Mi0xNjE2NzQ0NTEy/LTYwODEuanBlZw.jpeg",
      artist: "Venetian Snares",
      audio: soundfile4,
      color: ["#1e1811", "#bd1a27"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Time Moves Slow",
      cover:
        "https://t2.genius.com/unsafe/304x304/https%3A%2F%2Fimages.genius.com%2Fa131544b93fcb2c823503e573ecaae56.1000x1000x1.jpg",
      artist: "Bad Bad No Good",
      audio: soundfile5,
      color: ["#89dcfa", "#f2d9b0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Unlimited",
      cover:
        "https://t2.genius.com/unsafe/304x304/https%3A%2F%2Fimages.genius.com%2F2cb61d23c3b597fe67404f888dbc04df.1000x1000x1.png",
      artist: "Lucki",
      audio: soundfile6,
      color: ["#eeefea", "#264b6a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Frontier Psychiatrist",
      cover:
        "https://i1.sndcdn.com/artworks-YJGeDsQbUQAO-0-t500x500.jpg",
      artist: "The Avalanches",
      audio: soundfile7,
      color: ["#363454", "#f7a144"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
