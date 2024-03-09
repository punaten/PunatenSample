import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Form, Link, json, redirect, useLoaderData } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "検索" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates, updates.q);
  return redirect(`/search?q=${updates.q}`);
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  // Implement your data loading logic herea
  // const cookie = request.headers.get("Cookie");

  // parse the search params for `?q=`
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";

  // console.log(cookie, query, url)

  // const bread = params.breed ?? "";
  // console.log(bread);

  const response = await fetch(`https://dog.ceo/api/breed/${query.toLowerCase()}/images/random`);
  const data = await response.json();
  return json(data);
}

interface DogLoaderData {
  message: string;
  status: string;
}

export default function Index() {
  const data = useLoaderData<typeof loader>() as DogLoaderData;
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Form method="post">
        <label>
          Search:
          <input type="text" name="q" placeholder="例: shiba" />
        </label>
        <button type="submit">Search</button>
      </Form>
      <div>
            <img src={data.message} alt="random dog" />
            <h1>{data.message}</h1>
            <p>{data.status}</p>
            <div>
                <Link to={"."}>再検索</Link>
            </div>
            <div>
                <Link to="/">Go back</Link>
            </div>
        </div>
    </div>
  );
}