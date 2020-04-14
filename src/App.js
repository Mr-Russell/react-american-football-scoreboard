//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeTeam = 'Tigers'
  const awayTeam = 'Lions'

  const homeTD = event => {
    setHomeScore(homeScore + 7)
  }

  const awayTD = event => {
    setAwayScore(awayScore + 7)
  }

  const homeFG = event => {
    setHomeScore(homeScore +3)
  }

  const awayFG = event => {
    setAwayScore(awayScore +3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="away__score">{awayScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>
            <div className="home__score">{homeScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="awayButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="awayButtons__touchdown" onClick={awayTD}>{awayTeam} Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFG}>{awayTeam} Field Goal</button>
        </div>
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={homeTD}>{homeTeam} Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFG}>{homeTeam} Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
