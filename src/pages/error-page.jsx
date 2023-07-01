import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div class="coming-soon">
        <div class="blob"><></></div>
        <b class="text">PAGE NOT FOUND</b>

      </div>
    </Link>
  );
}