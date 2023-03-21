import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (endpoint, job, page, num_pages) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "255df18efbmsh20d5c876487dba5p1ab12bjsn689ad00fcca2",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      query: job,
      page: page,
      num_pages: num_pages,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);

      // console.log(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error", error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
