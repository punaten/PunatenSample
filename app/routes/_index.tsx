import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import DogList from "~/components/DogList";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ display: 'flex', fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ flex: 1 }}>
        <DogList />
      </div>
      <div style={{ flex: 1 }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li><Link target="_blank" to="https://remix.run/tutorials/blog" rel="noreferrer">15m Quickstart Blog Tutorial</Link></li>
          <li><Link target="_blank" to="https://remix.run/tutorials/jokes" rel="noreferrer">Deep Dive Jokes App Tutorial</Link></li>
          <li><Link target="_blank" to="https://remix.run/docs" rel="noreferrer">Remix Docs</Link></li>
          <li><Link to="/random-dog">Dog</Link></li>
        </ul>
      </div>
    </div>
  );
}
