import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  console.log(title);
  return (
    <div className={`${size} menu-item`}>
      <div className= 'background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="sub-title">ALIŞVERİŞ YAP</span>
      </div>
    </div>
  );
};

export default MenuItem;
