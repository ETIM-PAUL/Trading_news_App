import React from "react";
import { data } from "../../utils/data";

const Commodity = ({ ...props }) => {
  const commodities = data.filter(
    (commodity) => commodity.type === props.commodities
  );

  return (
    <div
      style={{
        display: "flex",
        gridAutoRows: 0,
        gridTemplateColumns: "repeat(auto-fit,minmax(340px, 1fr))",
        gridTemplateRows: "100%",
        position: "relative",
      }}
    >
      {props.activeFilter === props.commodities &&
        commodities.map(({ name, src, price, change }) => (
          <button className="commodity flex-btn">
            <span className="">
              <img class=" commodity-symbol" src={src} alt="" width={35} />
            </span>
            <div className="commodity-details">
              <span className="commodity-name">{name}</span>
              <div className="flex">
                <span className="commodity-price">{price}</span>
                <span className="commodity-exchange">USD</span>
                <span className="commodity-price red">{change}%</span>
              </div>
            </div>
          </button>
        ))}
    </div>
  );
};

export default Commodity;
