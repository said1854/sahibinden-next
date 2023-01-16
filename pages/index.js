import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-200 h-screen">
        <Sidebar />
      </div>
    </>
  );
}

export default Home;