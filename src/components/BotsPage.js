import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = 'http://localhost:8001/bots';

function BotsPage() {
  const [bots, setBots] = useState([]);
  
  useEffect(() => fetch(API).then(res => res.json()).then(setBots), []);

  function enlistBot(clickedBot, enlist=true){
   
    setBots(bots.map((bot) => bot.id === clickedBot.id ? {...bot, enlisted: enlist} : bot));
    
  }
  function dischargeBot(dischargedBot) {
    setBots(bots.filter(bot => bot.id !== dischargedBot.id))
  }
  return (
    <div>
      <YourBotArmy bots={bots.filter((bot) => bot.enlisted)} handleClick={bot => enlistBot(bot, false)} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} handleClick={enlistBot} dischargeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
