import axios from "axios";

const URL = "https://api.pokemontcg.io/v1";

const API = axios.create({
  baseURL: URL,
})

export default API;
