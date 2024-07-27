import { httpClient } from "../infra";

export class AuthService {
  static async login(userData) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;

    const result = await httpClient(url, {
      method: "POST",
      body: userData,
    });

    return result;
  }
}
