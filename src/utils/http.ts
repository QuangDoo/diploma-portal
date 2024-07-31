import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const SERVICE = import.meta.env.VITE_SERVICE;

const http = async <TData>(
  endpoint: string,
  options = {} as RequestInit,
): Promise<ApiResponse<TData>> => {
  const url = `${BASE_URL}/${SERVICE}/api/${endpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      Origin: 'localhost:3000',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const responseBody = await response.json();

    if (!response.ok) {
      // Handle HTTP errors with specific response format
      const errorResponse = responseBody as ApiResponse<TData>;
      throw new Error(errorResponse.Message || 'Failed to fetch');
    }

    return responseBody as ApiResponse<TData>;
  } catch (error) {
    if (error instanceof Error) {
      // Handle fetch or JSON parsing errors
      console.error('fetch error :>> ', error.message);
      toast.error(error.message);
      throw error;
    }

    throw new Error('An unknown error occurred');
  }
};

export default http;
