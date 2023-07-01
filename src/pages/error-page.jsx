import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="coming-soon">
      {/* <img src="https://raw.githubusercontent.com/DaniBoie/web-mag/main/src/assets/Soli%20Logo.png" alt="Soli Collective Logo" /> */}
      {/* <div class="logo"></div>
      <div class="blob"><></></div> */}
      <b class="text">ERROR 404</b>

    </div>
  );
}