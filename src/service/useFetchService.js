import useFetch from "./useFetch";

const BASE_URL = "http://localhost:3000";

const useFetchService = (id, serviceName) => {
  const userData = useFetch(`${BASE_URL}/user/${id}`, serviceName);
  const userActivity = useFetch(`${BASE_URL}/user/${id}/activity`, serviceName);
  const userAverageSessions = useFetch(`${BASE_URL}/user/${id}/average-sessions`, serviceName);
  const userPerformance = useFetch(`${BASE_URL}/user/${id}/performance`, serviceName);

  return {
    userData,
    userActivity,
    userAverageSessions,
    userPerformance
  };
};

export default useFetchService;
