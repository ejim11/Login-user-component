import React from "react";
import InfoItem from "../InfoItem/InfoItem";

const InfoList = (props) => {
  let content;

  console.log(props.item);

  // FUNCTIONS
  content = props.item.map((item) => (
    <InfoItem key={item.id} id={item.id} name={item.username} age={item.age} />
  ));

  // RETURN
  return <div>{content}</div>;
};

export default InfoList;
