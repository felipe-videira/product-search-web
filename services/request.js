import axios from 'axios';

export default async (
  path,
  method = 'GET',
  dataOrParams = null,
  options = {},
  baseUrl = process.env.NEXT_PUBLIC_API_HOST,
) => {
  try {
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
  } catch (err) {
    throw err.response ? err.response.data.error : err;
  }
};