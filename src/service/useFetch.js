import { useEffect, useState } from "react";

const useFetch = (url, serviceName) => {
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

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (result === "can not get user") {
          setHasError(true);
          setErrorType("This user does not exist.");
          console.log("Error : This user does not exist.");
        } else if (serviceName === "mainInfo") {
          // setData(result.data);
          setUserId(result.data.id);
          setUserInfos(result.data.userInfos);
          setTodayScore(result.data.todayScore)
          setKeyData(result.data.keyData);
        } else if (serviceName === "activity") {
          setUserId(result.data.userId);
          setSessions(result.data.sessions);
        } else if (serviceName === "averageSessions") {
          setUserId(result.data.userId);
          setSessions(result.data.sessions);
        } else if (serviceName === "performance") {
          setUserId(result.data.userId);
          setKind(result.data.kind);
          setPerfData(result.data.data);
        }
      } catch (err) {
        setHasError(true);
        setErrorType(err.message);
        console.log("Error : ", err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, serviceName]);

  // console.log('Valeur de data from usefetch: ', data);

  if (serviceName === "mainInfo") {
    return {userId, userInfos, todayScore, keyData, hasError, errorType, isLoading};
  }

  if (serviceName === "activity") {
    return {userId, sessions, hasError, errorType, isLoading};
  }

  if (serviceName === "averageSessions") {
    return {userId, sessions, hasError, errorType, isLoading};
  }

  if (serviceName === "performance") {
    return {userId, kind, perfData, hasError, errorType, isLoading};
  }
  
}


export default useFetch;