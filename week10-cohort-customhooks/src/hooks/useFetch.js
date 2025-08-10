import { useEffect, useState } from "react";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchDetails = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [url]);

  return { finalData, loading };
}
