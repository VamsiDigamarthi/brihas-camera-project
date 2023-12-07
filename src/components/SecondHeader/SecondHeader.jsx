import React, { useState } from "react";
import "./SecondHeader.css";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const distict = [
  {
    name: "All",
  },
  {
    name: "ADILABAD",
  },
  {
    name: "KAMAREDDY",
  },
  {
    name: "MEDAK",
  },
  {
    name: "PEDDAPALLI",
  },
];

const assembly = [
  {
    dist: "All",
  },
  {
    dist: "ADILABAD",
    subDist: ["All", "Adilabad", "Boath(ST)"],
  },
  {
    dist: "KAMAREDDY",
    subDist: ["All", "Jukkal(SC)", "Yellareddy", "Kamareddy"],
  },
  {
    dist: "MEDAK",
    subDist: ["All", "Narsapur", "Medak"],
  },
  {
    dist: "PEDDAPALLI",
    subDist: ["All", "Ramagundam", "Manthani", "Peddapalle"],
  },
];

const SecondHeader = ({ videoFilterFun }) => {
  const [dis, setDis] = useState("");

  const [mode, setMode] = useState("");

  const [selectedAssemblyModeValue, setSelectedAssemblyModeValue] =
    useState("All");

  const distictChange = (e) => {
    setDis(e.target.value);
  };

  const selectedMode = (e) => {
    setMode(e.target.value);
  };

  const selectedAssemblyMode = (e) => {
    setSelectedAssemblyModeValue(e.target.value);
  };

  //   console.log(dis);

  var selectedAssembly = ["All"];

  const constituencies = assembly.filter((each) => each.dist === dis);
  //   console.log(constituencies);

  if (constituencies[0]?.dist === "All") {
    selectedAssembly = ["All"];
  } else {
    selectedAssembly = constituencies[0]?.subDist;
  }
  //   console.log(dis);

  //   console.log(mode);

  //   console.log(selectedAssemblyModeValue);

  const sendDataToVideoFilter = () => {
    videoFilterFun({ dis, mode, selectedAssemblyModeValue });
  };

  return (
    <div className="secondheader-main">
      <select className="selected-drop" value={dis} onChange={distictChange}>
        <option disabled selected hidden>
          Please select distict
        </option>
        {distict.map((each, index) => (
          <option key={index}>{each.name}</option>
        ))}
      </select>
      <select
        className="selected-drop"
        value={selectedAssemblyModeValue}
        onChange={selectedAssemblyMode}
      >
        <option disabled selected>
          Please select assembly
        </option>
        {selectedAssembly?.map((each, index) => (
          <option key={index}>{each}</option>
        ))}
      </select>
      <select className="selected-drop" value={mode} onChange={selectedMode}>
        <option disabled selected>
          Please select stream
        </option>
        <option>All</option>
        <option>Online</option>
        <option>Offline</option>
      </select>
      <div className="apply-btn">
        <button onClick={sendDataToVideoFilter}>Apply</button>
      </div>
      <div className="two-input-with-icon">
        <input type="text" placeholder="AC No" />
        <input type="text" placeholder="PC No" />
        <div>
          <BiSearchAlt2 />
        </div>
      </div>
      <div className="tile-buttons-main">
        <button>Tile</button>
        <Link to="/multi">
          <button>Multi</button>
        </Link>
        <button>Rewind</button>
      </div>
    </div>
  );
};

export default SecondHeader;
