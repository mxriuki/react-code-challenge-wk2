import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, handleClick, dischargeBot}) {
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (<BotCard bot={bot} key={bot.id} handleClick={handleClick} dischargeBot={dischargeBot}/>))}

      
      </div>
    </div>
  );
}

export default BotCollection;
