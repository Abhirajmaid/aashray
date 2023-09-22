import React from "react";
import RoomiesSinglesCard from "../common/page-componets/RoomiesSinglesCard";

const RoomieSingleList = ({ roomieSingles }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {roomieSingles?.map(({ id, attributes }) => (
        <RoomiesSinglesCard key={id} {...attributes} />
      ))}
    </div>
  );
};

export default RoomieSingleList;
