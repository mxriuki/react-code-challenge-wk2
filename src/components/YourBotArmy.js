import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, dischargeBot}) {
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={handleClick} dischargeBot={dischargeBot}/>)}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
