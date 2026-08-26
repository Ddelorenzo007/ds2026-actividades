import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        setLoading(true);
        setError(null);

        // Espera de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error ${res.status}: No se pudieron cargar los datos.`);
        }

        const data = await res.json();
        setData(data);

      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, [url]);

  return { data, loading, error };
}