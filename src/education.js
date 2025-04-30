// Educational tools: tutorials and simulations

export function getTutorials() {
  return [
    {
      id: 1,
      title: 'Introduction to AI Hedge Fund',
      content: 'This tutorial covers the basics of the AI Hedge Fund Clone project and how to use it.',
    },
    {
      id: 2,
      title: 'Building Trading Strategies',
      content: 'Learn how to create and test trading strategies using the platform.',
    },
  ];
}

export function runSimulation(strategyCode) {
  // Placeholder for running a simulation of a trading strategy
  console.log('Running simulation for strategy:', strategyCode);
  return {
    success: true,
    message: 'Simulation completed (placeholder)',
    results: [],
  };
}
