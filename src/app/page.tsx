import Nav from "../components/Nav";
import Masthead from "../components/Masthead";

export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <Masthead />
        <div className="container p-10">
          <h2>Home</h2>
        </div>
      </main>
    </>
  );
}
