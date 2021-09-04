import React from "react";
import { NavLink } from "react-router-dom";

const NxRoomItem = ({ roomId, roomName, iconSeed, randomNum }) => {
  const getRandomTime = () => {
    const ts = 1598198850624 - randomNum;

    return new Date(ts).toLocaleTimeString().slice(0, -6);
  };
  return (
    <NavLink
      style={{
        textDecoration: "none",
      }}
      to={`/rooms/${roomId}`}
    >
      <div className="sidebar__body d-flex align-items-center  p-10">
        <img
          src={`https://avatars.dicebear.com/api/bottts/${iconSeed}.svg`}
          className="img-fluid rounded-circle"
          alt="rounded circle"
          width="40px"
        />
        <div className="d-flex w-full justify-content-between p-10">
          <span style={{ textTransform: "capitalize" }}>
            <strong>{roomName}</strong>
          </span>
          <span>{getRandomTime()}</span>
        </div>
      </div>
      <hr />
    </NavLink>
  );
};

export default NxRoomItem;
