import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="coming-soon">
      <img src="../assets/Soli Logo.png" alt="Soli Collective Logo" />
      <b>COMING SOON</b>
      <div class="blob"><></></div>
    </div>
  );
}