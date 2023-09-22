import React from "react";
import RoomieFlatCard from "../common/page-componets/RoomieFlatCard";

const RoomieFlatList = ({ roomieFlats }) => {
  return (
    <div>
      {roomieFlats?.map(({ id, attributes }) => (
        <RoomieFlatCard key={id} {...attributes} />
      ))}
    </div>
  );
};

export default RoomieFlatList;
