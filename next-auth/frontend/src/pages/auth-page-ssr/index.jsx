import React from "react";
import { TokenService } from "../../services";

export async function getServerSideProps(context) {
  return {
    props: {
      token: TokenService.get(context),
    },
  };
}

export default function AuthPageSSR(props) {
  console.log(props);

  return (
    <div>
      <h1>Auth Page SSR</h1>
    </div>
  );
}
