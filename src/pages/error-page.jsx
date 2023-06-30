import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div class="coming-soon">
      <b>COMING SOON</b>
    </div>
  );
}