import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-400 h-screen">
        <Sidebar />
      </div>
    </>
  );
}
