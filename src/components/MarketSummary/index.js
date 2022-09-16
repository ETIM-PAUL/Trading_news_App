import React, { useState } from "react";
import "../../styles/market-summary.scss";
import { data } from "../../utils/data";
import Commodity from "./Commodity";
import FilterMarket from "./FilterMarket";
const MarketSummary = () => {
  const [activeFilter, setActiveFilter] = useState("Indices");
  const commodities = activeFilter;
  const [activeCommodity, setActiveCommodity] = useState("Indices");
  return (
    <div className="market-summary container">
      <div className="market-summary-container">
        <h2>Market Summary</h2>
      </div>
      <div className="filter-container">
        <FilterMarket
          value="Indices"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterMarket
          value="Stocks"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterMarket
          value="Crypto"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterMarket
          value="Forex"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterMarket
          value="Futures"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterMarket
          value="Bonds"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <Commodity commodities={commodities} activeFilter={activeFilter} />
    </div>
  );
};

export default MarketSummary;
