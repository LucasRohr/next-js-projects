import React, { useState } from "react";
import { useRouter } from "next/router";
import { AuthService } from "../services";

const DEFAULT_LOGIN_DATA = {
  username: "omariosouto",
  password: "safepassword",
};

export default function HomeScreen() {
  // States
  const [loginData, setLoginDate] = useState(DEFAULT_LOGIN_DATA);

  // Hooks
  const router = useRouter();

  const handleChange = (event) => {
    setLoginDate((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const onLoginPress = async () => {
    const result = await AuthService.login(loginData);

    if (result) {
      router.push("/auth-page-ssr");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onLoginPress();
        }}
      >
        <input
          placeholder="Username"
          name="username"
          value={loginData.username}
          defaultValue={loginData.username}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={loginData.password}
          defaultValue={loginData.password}
          onChange={handleChange}
        />
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
