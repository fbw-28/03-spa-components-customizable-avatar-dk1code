import React from "react";

import data from "./data.json";

import "./App.css"

import Avatar from "./Avatar";

// export default function App() {
//   return (
//     <div>
//       <h1>Customizable Avatar</h1>
//       {/* <Avatar size="xl" shape="circle" sizeText="200x200" /> */}
// <main className="main-container">
//         {data.map((item) => (
//           <Avatar size="item.size" shape="item.type" sizeText="item.sides" />
//         )}
//         </main>
//         </div>
//   );
// }

export default function App() {
  return (
    <div>
      <h1>Customizable Avatar</h1>

      <main className="main-container">
        {data.map((item) => (
          <Avatar size={item.size} shape={item.type} sizeText={item.sides} />
        ))}
      </main>
    </div>
  );
}
