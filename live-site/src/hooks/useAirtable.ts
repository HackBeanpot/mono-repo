/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

const BASEURL = 'https://airtable.hackbeanpot.com';

interface AirtableData {
  data: any[];
  isLoading: boolean;
}

export const useAirtableApi = (
  baseName: string,
  tableName: string
): AirtableData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `${BASEURL}/${baseName}/${tableName}`;
    try {
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((responseJson) => {
          setIsLoading(false);
          setData(responseJson.records);
        });
    } catch (err) {
      setIsLoading(false);
    }
  }, [baseName, tableName]);

  return { data, isLoading };
};

export const useAirtableApiWithPagination = (
  baseName: string,
  tableName: string
): AirtableData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${BASEURL}/${baseName}/${tableName}`;
    let offset = '';
    const records: any[] = [];
    const getData = async (): Promise<void> => {
      do {
        const urlWithOffset = new URL(url);
        urlWithOffset.searchParams.append('offset', offset);
        const responseData = await fetch(urlWithOffset.toString());
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
    }
  }, [baseName, tableName]);

  return { data, isLoading };
};
