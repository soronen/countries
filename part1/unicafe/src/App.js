import { useState } from 'react';

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text='Good: ' value={clicks.good}></StatisticLine>
      <StatisticLine text='Bad: ' value={clicks.bad}></StatisticLine>
      <StatisticLine text='Neutral: ' value={clicks.neutral}></StatisticLine>
      <p>All: {clicks.good + clicks.neutral + clicks.bad}</p>
      <p>Average: {(clicks.good - clicks.bad) / total}</p>
      <p>Positive: {clicks.good / total} %</p>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };

  return (
    <div>
      <Button handleClick={handleGoodClick} text={'good'}></Button>
      <Button handleClick={handleNeutralClick} text={'neutral'}></Button>
      <Button handleClick={handleBadClick} text={'bad'}></Button>
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
