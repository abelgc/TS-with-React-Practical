import { useState } from 'react';


import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList.tsx';
import AddNewGoal from './components/AddNewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {

    setGoals((existingGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
      <AddNewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
