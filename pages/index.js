import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FilterandSearch from "@/components/shared/Search";
import Sidebar from "@/components/shared/Sidebar";
import Card from "@/components/Home/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [data, setData] = useState([])

  const fetchData = async() => {
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=VDgdeNCbCcqgeHCgEKhM1h29TLdxhPDXLokXSVOL970&per_page=40`)
      const data = await response.data
      setData(data)
  }


    useEffect(() =>{
        fetchData()
    }, [])
  return (
    <>
      <NavBar />
      <FilterandSearch  toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>      
      <div className={toggleSidebar?"gallery expanded":"gallery"}>
      {toggleSidebar && <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}
        <div className="cards">
          {data.length > 0 && (
            data.map((d) => <Card data={d}/>)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
