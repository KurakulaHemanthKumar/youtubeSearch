import axios from "axios";
const KEY = "AIzaSyAdLtgxKjxQik9WIHrhAeFGu2LXp-yO3mw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY
  },
  headers: {}
});