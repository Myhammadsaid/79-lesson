import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import SingleRoute from "../../pages/single/SingleRoute";

const SearchSection = ({ data, setValue }) => {
  const navigate = useNavigate();

  const handleNavigateDetailPage = (id) => {
    navigate(`/products/${id}`);
    setValue("");
  };

  let searchItems = data?.map((val) => (
    <SingleRoute
      onClick={() => handleNavigateDetailPage(val.id)}
      className="search-product"
      key={val.id}
      image={val.images[0]}
      title={val.title}
    />
    // <div
    //   onClick={() => handleNavigateDetailPage(val.id)}
    //   className="search-product"
    //   key={val.id}
    // >
    //   <img
    //     style={{ objectFit: "contain" }}
    //     width={50}
    //     height={50}
    //     src={val.images[0]}
    //     alt="img"
    //   />
    //   <span>{val.title}</span>
    // </div>
  ));

  return <div className="header-search-modul">{searchItems}</div>;
};

export default memo(SearchSection);
