import useSWR from 'swr';
import { getEconomic, getMigrant, getPopulation } from "../API/Api";

export const usePopulation = () => {
  const { data, isLoading } = useSWR("/api/population", getPopulation);

  return { data, isLoading };
};

export const useEconomics = () => {
  const { data, isLoading } = useSWR("/api/economics", getEconomic);

  return { data, isLoading };
};

export const useMigrant = () => {
  const { data, isLoading } = useSWR("/api/migrant", getMigrant);

  return { data, isLoading };
};
