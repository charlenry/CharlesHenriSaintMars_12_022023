import useFetch from "./useFetch";

const BASE_URL = "http://localhost:3000";


/**
 * A function that takes two parameters, id and serviceName.
 * 
 * @function
 * @name useFetchService
 * @kind function
 * @param {number} id
 * @param {string} serviceName
 * @returns {{ 
 *  userData: { userId: number; userInfos: {}; todayScore: number; keyData: {}; hasError: boolean; errorType: string; isLoading: boolean; isMockedData: boolean; sessions: []; kind: {}; perfData: []; }; 
 *  userActivity: { userId: number; userInfos: {}; todayScore: number; keyData: {}; hasError: boolean; errorType: string; isLoading: boolean; isMockedData: boolean; sessions: []; kind: {}; perfData: []; }; 
 *  userAverageSessions: { userId: number; userInfos: {}; todayScore: number; keyData: {}; hasError: boolean; errorType: string; isLoading: boolean; isMockedData: boolean; sessions: []; kind: {}; perfData: []; }; 
 *  userPerformance: { userId: number; userInfos: {}; todayScore: number; keyData: {}; hasError: boolean; errorType: string; isLoading: boolean; isMockedData: boolean; sessions: []; kind: {}; perfData: []; }; 
 * }}
 */
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
