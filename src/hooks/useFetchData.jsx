import { useEffect, useState } from 'react';

export default function useFetchData(apiFunc, params = []) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const res = await apiFunc(...params);
      setData(res);
    } catch (err) {
      setError(`에러가 발생! ${e}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [loading, error, data];
}
