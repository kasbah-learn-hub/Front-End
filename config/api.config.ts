import axios from "axios";

// api url
const baseUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

// configure base URL using axios
export const api = axios.create({
  baseURL: baseUrl,
});
