import React from "react";
import Letter from "./components/Letter";

function AppButton() {

  return (
    <>
     <div>
     <h1 className="h1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
    
     <Letter className="title" letter="T" textColor="#4ec4ff" paddingBottom="10px" fontWeight="bold"/>
        <Letter letter="r"  />
        <Letter letter="o"  />
        <Letter letter="m"  />
        <Letter letter="p"  />
        <Letter letter="8"  paddingLeft="15px" />
        <Letter letter="6"  />
      </h1>
    </div>
    </>
  );
}

export default AppButton;
