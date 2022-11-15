import axios from "axios";
const KEY = "AIzaSyAZbVstYLc_Btzr5s_0qys5LyaRBWM4weI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
