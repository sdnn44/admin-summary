import Image from "next/image";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Dashboard/>
    </>
  );
}
