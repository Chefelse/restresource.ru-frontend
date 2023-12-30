const api = import.meta.env.VITE_HTTP;

/**
 * Performs an HTTP request and parses the response as JSON.
 *
 * @param {RequestInfo} request - The request info or URL to fetch.
 * @return {Promise<T>} A promise that resolves with the parsed JSON.
 */
export async function http<T>(request: RequestInfo): Promise<T> {
  const response: Response = await fetch(request);

  let responseData: T;
  try {
    responseData = await response.json();
  } catch (ex) {
    throw new Error("Failed to parse the response body");
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return responseData;
}

/**
 * Performs an asynchronous HTTP GET request.
 *
 * @param {string} path - The URL path for the request.
 * @param {RequestInit} args - The initialization options.
 * @return {Promise<T>} A promise that resolves to the response.
 */
export async function get<T>(path: string, args: RequestInit = { method: "get" }): Promise<T> {
  return await http<T>(new Request(api + path, args));
}

/**
 * Sends an asynchronous HTTP POST request.
 *
 * @param {string} path - The URL path to send the request to
 * @param {any} body - The body of the request
 * @param {RequestInit} args - Optional arguments for the request
 * @return {Promise<T>} Promise object representing the response
 */
export async function post<T>(path: string, body: any, args: RequestInit = { method: "post", body: JSON.stringify(body) }): Promise<T> {
  return await http<T>(new Request(api + path, args));
}

/**
 * Sends a PUT request to the specified path with the given body.
 *
 * @param {string} path - The endpoint to send the request to.
 * @param {any} body - The data to be sent in the request body.
 * @param {RequestInit} [args] - Optional arguments for the request.
 * @return {Promise<T>} Promise object representing the response.
 */
export async function put<T>(path: string, body: any, args: RequestInit = { method: "put", body: JSON.stringify(body) }): Promise<T> {
  return await http<T>(new Request(api + path, args));
}
