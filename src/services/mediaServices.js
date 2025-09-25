import axios from "axios";

const SERVER_URL = "https://zakhar-show-api.vercel.app";

export const getAllMedia = () => {
  const url = `${SERVER_URL}/media`;
  return axios.get(url);
};

