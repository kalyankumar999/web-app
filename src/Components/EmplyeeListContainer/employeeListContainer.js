import React, { useEffect, useState } from "react";
import "./styles.css";

const EmployeeListContainer = (props) => {
  const { dataSet } = props;

  const [filteredDataSet, setFilteredDataSet] = useState(dataSet?.data || []);

  useEffect(() => {
    if (dataSet?.data.length > 0) setFilteredDataSet(dataSet?.data);
  }, [dataSet]);

  const inputHandler = (event) => {
    if (event.target.value === "") {
      setFilteredDataSet(dataSet.data);
      return;
    }
    const filteredItem =
      dataSet &&
      dataSet?.data?.length > 0 &&
      dataSet?.data?.filter((item) =>
        item?.first_name
          ?.toLowerCase()
          .includes(event.target.value.toLowerCase())
      );

    setFilteredDataSet(filteredItem);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="secondDiv">
          <div className="inputDiv">
            <input type="text" placeholder="Search" onChange={inputHandler} />
          </div>
          <div className="imgContainer">
            {filteredDataSet &&
              filteredDataSet?.length > 0 &&
              filteredDataSet?.map((items) => (
                <div className="listItemContainer">
                  <div className="idDiv">{items?.id}</div>
                  <div className="listDiv">
                    <div className="imgDiv">
                      <img width="100%" height="100%" src={items?.avatar} />
                    </div>
                  </div>
                  <div className="firstName">{items?.first_name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListContainer;
