import { useState, useEffect } from 'react';

const BASEURL = 'https://airtable.hackbeanpot.com';

export const useAirtableApi = (baseName: string, tableName: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = new URL(`${BASEURL}/${baseName}/${tableName}`);
    try {
      fetch(url)
        .then((data) => data.json())
        .then((responseJson) => {
          setIsLoading(false);
          setData(responseJson.records);
        });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [baseName, tableName]);

  return { data, isLoading };
};

export const useAirtableApiWithPagination = (baseName, tableName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${BASEURL}/${baseName}/${tableName}`;
    let offset = '';
    const records = [];
    const getData = async () => {
      do {
        const urlWithOffset = new URL(url);
        urlWithOffset.searchParams.append('offset', offset);
        const responseData = await fetch(urlWithOffset);
        const responseJson = await responseData.json();
        records.push(...responseJson.records);
        offset = responseJson.offset;
      } while (offset);

      setIsLoading(false);
      setData(records);
    };

    try {
      getData();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, [baseName, tableName]);

  return { data, isLoading };
};
