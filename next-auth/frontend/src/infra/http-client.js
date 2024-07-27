import { API_CONSTANTS } from "../constants";

// Hexagonal architecture -> HTTP Adapter

export async function httpClient(url, options) {
  const response = await fetch(url, {
    ...options,
    body: options.body ? JSON.stringify(options.body) : null,
    headers: {
      "Content-Type": API_CONSTANTS.JSON_CONTENT_TYPE,
      ...options.headers,
    },
  });

  return await response.json();
}
