import React from "react";
import "../App.css";
import CreateLinks from "../components/createLinks";
import LinkList from "../components/linkList";
import { allLinkData } from "../network/network.js";
import { useState, useEffect } from "react";

const LinksContainer = () => {

  const [linkData, setLinkData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await allLinkData();
      setLinkData(data.data);
    };

    fetchData();
  }, []);

  console.log(linkData)
  if(!linkData) return "fetching data....."

  return (
    <div className="links-background">
      <div className="links-container">
        <div>
          <h1>CREATE NEW LINK 🔗 </h1>
          <p>Create, short, and manage your links</p>
        </div>
        <CreateLinks/>
        <LinkList data={linkData}/>
      </div>
    </div>
  );
};

export default LinksContainer;


