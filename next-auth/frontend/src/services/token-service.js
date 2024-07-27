import nookies from "nookies";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

// Token Adapter
// Manage access token through cookies or session storage, based on context and pages structure
export class TokenService {
  static save(accessToken, context = null) {
    if (context) {
      nookies.set(context, ACCESS_TOKEN_KEY, accessToken, {
        path: "/",
      }); // Server Side cookies
    } else {
      globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    }
  }

  static get(context = null) {
    if (context) {
      const cookies = nookies.get(context);

      return cookies[ACCESS_TOKEN_KEY] ?? "";
    }

    return globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY);
  }

  static remove(context = null) {
    if (context) {
      nookies.destroy(context, ACCESS_TOKEN_KEY);
    } else {
      globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
    }
  }
}
