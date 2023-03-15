import { useEffect, useState } from "react";
const {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance
} = require('../mocked_data/getLocalDataLib');


/**
 * A custom hook that is used to fetch data from a mocked data library.
 * 
 * @function
 * @name useFetch
 * @kind function
 * @param {string} url
 * @param {number} id
 * @param {string} serviceName
 * @returns {{ userId: number; userInfos: {}; todayScore: number; keyData: {}; hasError: boolean; errorType: string; isLoading: boolean; isMockedData: boolean; sessions: []; kind: {}; perfData: []; }}
 */
function useFetch(url, id, serviceName) {
  // const [data, setData] = useState([]);
  const [userId, setUserId] = useState();
  const [sessions, setSessions] = useState([]);
  const [userInfos, setUserInfos] = useState({});
  const [keyData, setKeyData] = useState({});
  const [todayScore, setTodayScore] = useState();
  const [kind, setKind] = useState({});
  const [perfData, setPerfData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState("No error");
  const [isLoading, setIsLoading] = useState(false);
  const [isMockedData, setIsMockedData] = useState(false);
  const uid = Number(id);

  useEffect(() => {
    if (!url)
      return;
    setIsLoading(true);

    async function fetchData() { 
      if (serviceName === "mainInfo") {
        if (getUserById(uid).length === 0) {
          setError("Error : No user data is available");
        } else {
          setUserId(Number(getUserById(uid)[0].id));
          setUserInfos(getUserById(uid)[0].userInfos);
          setTodayScore(getUserById(uid)[0].todayScore);
          setKeyData(getUserById(uid)[0].keyData);
          setIsMockedData(true);
        }
      } else if (serviceName === "activity") {
        if (getUserActivityById(uid).length === 0) {
          setError("Error : No user data is available for activity");
        } else {
          setUserId(Number(getUserActivityById(uid)[0].userId));
          setSessions(getUserActivityById(uid)[0].sessions);
          setIsMockedData(true);
        }
      } else if (serviceName === "averageSessions") {
        if (getUserAverageSession(uid).length === 0) {
          setError("Error : No user data is available for average sessions");
        } else {
          setUserId(Number(getUserAverageSession(uid)[0].userId));
          setSessions(getUserAverageSession(uid)[0].sessions);
          setIsMockedData(true);
        }
      } else if (serviceName === "performance") {
        if (getUserPerformance(uid).length === 0) {
          setError("Error : No user data is available for performance");
        } else {
          setUserId(Number(getUserPerformance(uid)[0].userId));
          setKind(getUserPerformance(uid)[0].kind);
          setPerfData(getUserPerformance(uid)[0].data);
          setIsMockedData(true);
        }
      }
      
      setIsLoading(false);
    }

    fetchData();
  }, [url, uid, serviceName]);


  /**
   * A function that is used to set the error state.
   * 
   * @function
   * @name setError
   * @kind function
   * @memberof useFetch
   * @param {string} errMessage
   * @returns {void}
   */
  function setError(errMessage) {
    setHasError(true);
    setErrorType("No user data is available");
    console.log(errMessage);
  }

  // console.log('Valeur de data from usefetch: ', data);
  // console.log('Valeur de isMockedData: ', isMockedData);

  if (serviceName === "mainInfo") {
    return { userId, userInfos, todayScore, keyData, hasError, errorType, isLoading, isMockedData };
  }

  if (serviceName === "activity") {
    return { userId, sessions, hasError, errorType, isLoading, isMockedData };
  }

  if (serviceName === "averageSessions") {
    return { userId, sessions, hasError, errorType, isLoading, isMockedData };
  }

  if (serviceName === "performance") {
    return { userId, kind, perfData, hasError, errorType, isLoading, isMockedData };
  }

}


export default useFetch;