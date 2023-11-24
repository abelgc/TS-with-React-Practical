import { useState } from 'react';


import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {

    setGoals((existingGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Harcoded Title",
        description: "Harcoded Description",
      };
      return [...existingGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {

    setGoals(existingGoals => existingGoals.filter((goal) => goal.id !== id));


  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add a Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
