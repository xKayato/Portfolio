import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { MadeWithDyad } from "./made-with-dyad";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <MadeWithDyad />
    </div>
  );
};