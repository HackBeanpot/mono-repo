/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

// const BASEURL = 'https://airtable.hackbeanpot.com';
const BASEURL = 'https://api.airtable.com/v0';


interface AirtableData {
  data: any[];
  isLoading: boolean;
}

export const useAirtableApi = (
  baseID: string,
  tableName: string,
  isDev = true
): AirtableData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `${BASEURL}/${baseID}/${tableName}${
      isDev ? '?isDev=true' : ''
    }`;
    try {
      fetch(url, {
        headers: {
        Authorization: 'Bearer patnyuxsXyirsirCe.0cf4f2d67769fa3e183127ba0995f2bff9817f12378e88a18465f99edc3bf3f7'
      },
  })
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
  }, [baseID, tableName]);

  return { data, isLoading };
};

export const useAirtableApiWithPagination = (
  baseID: string,
  tableName: string
): AirtableData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${BASEURL}/${baseID}/${tableName}`;
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
  }, [baseID, tableName]);
  return { data, isLoading };
};
