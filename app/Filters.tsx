"use client";

import React, { useState, useEffect } from "react";
import { mockData } from "@/api/mockData";

export const Filters = ({ filter }) => {
  const [checked, setChecked] = useState({
    all: false,
    direct: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  });

  const { all, direct, oneStop, twoStops, threeStops } = checked;

  const handleAllChange = (event) => {
    const { checked } = event.target;

    const newChecked = {
      all: checked,
      direct: checked,
      oneStop: checked,
      twoStops: checked,
      threeStops: checked,
    };

    setChecked(newChecked);
    filter(checked);
  };

  const handleRestChange = (event) => {
    const { name, checked } = event.target;

    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }));
  };

  const filterData = () => {
    const filteredData = mockData.filter((ticket) => {});

    return filteredData;
  };

  useEffect(() => {
    const res = filterData();
    console.log("--res--", res);
  }, []);

  return (
    <div className="bg-[#FFFFFF]">
      <div>Количество пересадок</div>
      <div>
        <input
          name="all"
          onChange={handleAllChange}
          checked={all}
          type="checkbox"
        />
        <label>Все</label>
      </div>
      <div>
        <input
          name="direct"
          onChange={handleRestChange}
          checked={direct}
          type="checkbox"
        />
        <label>Без пересадок</label>
      </div>
      <div>
        <input
          name="oneStop"
          onChange={handleRestChange}
          checked={oneStop}
          type="checkbox"
        />
        <label>1 пересадка</label>
      </div>
      <div>
        <input
          name="twoStops"
          onChange={handleRestChange}
          checked={twoStops}
          type="checkbox"
        />
        <label>2 пересадки</label>
      </div>
      <div>
        <input
          name="threeStops"
          onChange={handleRestChange}
          checked={threeStops}
          type="checkbox"
        />
        <label>3 пересадки</label>
      </div>
    </div>
  );
};
