import React, { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./component/Folder";

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);

  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
};

export default App;
