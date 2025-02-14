import axios from "axios";
import { Planet } from "@interfaces/planet.interface";
import { PLANETS } from "@/constants";

const API_URL = "https://planets-17f2.onrender.com/planets";

export const getPlanets = async (): Promise<Planet[]> => {

  const results = await Promise.all(
    PLANETS.map((name) => axios.get(`${API_URL}/getPlanet?name=${name}`))
  );

  return results.map((res) => res.data);
};

export const getPlanetByName = async (name: string): Promise<Planet> => {
  const { data } = await axios.get(`${API_URL}/getPlanet?name=${name}`);
  return data;
};