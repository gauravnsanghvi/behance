import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FilterandSearch from "@/components/shared/Search";
import Sidebar from "@/components/shared/Sidebar";
import Card from "@/components/Home/Card";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [data, setData] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=40`
    );
    const data = await response.data;
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchResults) => {
    setData(searchResults);
  };

  return (
    <>
      <NavBar />
      <FilterandSearch
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        onSearch={handleSearch}
      />
      <div className={toggleSidebar ? "gallery expanded" : "gallery"}>
        {toggleSidebar && (
          <Sidebar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
        )}
        <div className="flex flex-wrap justify-center max-h-screen overflow-y-scroll">
          {data.length > 0 ? (
            data.map((d) => <Card key={d.id} data={d} />)
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
