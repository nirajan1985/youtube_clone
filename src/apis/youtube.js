import axios from "axios";

const KEY = "AIzaSyAdJf2JmkJ5iWwJ65IDzXcPl6sjnN2S9fg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
