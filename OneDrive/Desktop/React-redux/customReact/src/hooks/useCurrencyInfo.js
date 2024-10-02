import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null); // Optional: For error handling
  const [loading, setLoading] = useState(true); // Optional: For loading state

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // Invoke res.json()
      .then((res) => {
        setData(res[currency]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setError(err);
        setLoading(false);
      });
  }, [currency]);

  // Optional: Log data when it changes
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return { data: null, error, loading: false };
  }

  return { data, loading };
}

export default useCurrencyInfo;
