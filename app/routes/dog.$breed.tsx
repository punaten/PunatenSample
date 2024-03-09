import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { Link, json, useLoaderData } from '@remix-run/react';
interface DogLoaderData {
    message: string;
    status: string;
}
function Dog() {
    const data = useLoaderData<typeof loader>() as DogLoaderData;

    return (
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
    );
}

export default Dog;

export async function loader({
    params,
    // request,
}: LoaderFunctionArgs) {
    // Implement your data loading logic herea
    // const cookie = request.headers.get("Cookie");

    // parse the search params for `?q=`
    // const url = new URL(request.url);
    // const query = url.searchParams.get("q");

    // console.log(cookie, query, url)

    const bread = params.breed ?? "";
    console.log(bread);

    const response = await fetch(`https://dog.ceo/api/breed/${bread.toLowerCase()}/images/random`);
    const data = await response.json();
    return json(data);
}

export function action() {
    // Implement your action logic here
    // This function is optional and can be removed if not needed
}