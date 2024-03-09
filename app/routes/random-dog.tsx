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
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Dog;

export async function loader() {
    // Implement your data loading logic here
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return json(data);
}

export function action() {
    // Implement your action logic here
    // This function is optional and can be removed if not needed
}