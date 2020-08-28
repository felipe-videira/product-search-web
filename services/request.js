import axios from 'axios';

export default async (
  path,
  method = 'GET',
  dataOrParams = null,
  options = {},
  baseUrl = process.env.NEXT_PUBLIC_API_HOST,
) => {
  const { data: res } = await axios({
    method,
    url: baseUrl + path,
    data: method.toUpperCase() !== 'GET' && dataOrParams,
    params: dataOrParams,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return res;
};
