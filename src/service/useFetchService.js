import useFetch from "./useFetch";

/* URL base for the API server */
const BASE_URL = "http://localhost:3000";


/**
 * A function that takes one parameter: id.
 * 
 * @function
 * @name useFetchService
 * @kind function
 * @param {number} id - User ID
 * @returns { Object }
 */
const useFetchService = (id) => {
  const userData = useFetch(`${BASE_URL}/user/${id}`, id, 'mainInfo');
  const userActivity = useFetch(`${BASE_URL}/user/${id}/activity`, id, 'activity');
  const userAverageSessions = useFetch(`${BASE_URL}/user/${id}/average-sessions`, id, 'averageSessions');
  const userPerformance = useFetch(`${BASE_URL}/user/${id}/performance`, id, 'performance');

  return {
    userData,
    userActivity,
    userAverageSessions,
    userPerformance
  };
};

export default useFetchService;
