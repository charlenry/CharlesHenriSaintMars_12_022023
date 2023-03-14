import useFetch from "./useFetch";

const BASE_URL = "http://localhost:3000/CharlesHenriSaintMars_12_022023/build";

const useFetchService = (id, serviceName) => {
  const userData = useFetch(`${BASE_URL}/user/${id}`, id, serviceName);
  const userActivity = useFetch(`${BASE_URL}/user/${id}/activity`, id, serviceName);
  const userAverageSessions = useFetch(`${BASE_URL}/user/${id}/average-sessions`, id, serviceName);
  const userPerformance = useFetch(`${BASE_URL}/user/${id}/performance`, id, serviceName);

  return {
    userData,
    userActivity,
    userAverageSessions,
    userPerformance
  };
};

export default useFetchService;
