import axios, { AxiosInstance } from 'axios';
import { ICocktailsListModel } from './models';

const API_KEY = 1;
const API_BASE_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('An error occurred:', error);
    return Promise.reject(error);
  }
);

export const searchCocktailByName = async (name: string) => {
  const response = await axiosInstance.get(`/search.php?s=${name}`);
  return response.data;
};

export const listCocktailsByFirstLetter = async (
  letter: string
): Promise<ICocktailsListModel> => {
  const response = await axiosInstance.get(`/search.php?f=${letter}`);
  return response.data;
};

export const searchIngredientByName = async (name: string) => {
  const response = await axiosInstance.get(`/search.php?i=${name}`);
  return response.data;
};

export const lookupCocktailById = async (id: string) => {
  const response = await axiosInstance.get(`/lookup.php?i=${id}`);
  return response.data;
};

export const lookupIngredientById = async (id: string) => {
  const response = await axiosInstance.get(`/lookup.php?iid=${id}`);
  return response.data;
};

export const lookupRandomCocktail = async () => {
  const response = await axiosInstance.get('/random.php');
  return response.data;
};

export const getListOfCategories = async () => {
  const response = await axiosInstance.get('/list.php?c=list');
  return response.data;
};

export const getListOfGlasses = async () => {
  const response = await axiosInstance.get('/list.php?g=list');
  return response.data;
};

export const getListOfIngredients = async () => {
  const response = await axiosInstance.get('/list.php?i=list');
  return response.data;
};

export const getListOfAcloholicDrinks = async () => {
  const response = await axiosInstance.get('/list.php?a=list');
  return response.data;
};
