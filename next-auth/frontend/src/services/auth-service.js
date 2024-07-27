import { httpClient } from "../infra";
import { TokenService } from "./token-service";

export class AuthService {
  static async login(userData) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;

    const result = await httpClient(url, {
      method: "POST",
      body: userData,
    });

    if (result.data) {
      TokenService.save(result.data.access_token);

      return result;
    }

    alert(result.error.message);
  }
}
