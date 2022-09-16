import React from "react";

const FilterMarket = ({ ...props }) => {
  const changeFilter = () => {
    props.setActiveFilter(props.value);
  };
  return (
    <button
      className={
        props.activeFilter !== props.value
          ? "filter-btn"
          : "filter-btn active-filter"
      }
      onClick={() => changeFilter()}
    >
      <span className="filter-value">{props.value}</span>
    </button>
  );
};

export default FilterMarket;
