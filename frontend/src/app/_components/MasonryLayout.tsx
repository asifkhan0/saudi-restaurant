"use client";

import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  // "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/400x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/400x400",
  "https://via.placeholder.com/600x400",
];

const MasonryLayout: React.FC = () => {
const [isClient, setIsClient] = useState(false);

useEffect(() => {
    setIsClient(true);
}, []);

  if (!isClient) return null;

  return (
    <div style={{ padding: "20px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Masonry ${index}`}
              style={{
                width: "100%",
                display: "block",
                // borderRadius: "8px",
                border:"1px solid red"
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryLayout;
