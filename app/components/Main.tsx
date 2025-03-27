import { json, LoaderFunction, useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

// Define the type for the data returned by the loader
type LoaderData = {
  message: string;
  date: string;
};

// Loader function to fetch data for the component
export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    message: "Welcome to Remix!",
    date: new Date().toLocaleDateString(),
  });
};

// Main component
export default function Main() {
  // Use the loader data in the component
  const { message, date } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>{message}</h1>
      <p>Today's date is: {date}</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
