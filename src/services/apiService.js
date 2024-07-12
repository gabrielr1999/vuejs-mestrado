import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = (page = 1) => {
  return axios.get(`${API_URL}/character?page=${page}`);
};

export const getLocations = (page = 1) => {
  return axios.get(`${API_URL}/location?page=${page}`);
};