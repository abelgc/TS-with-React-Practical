import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
  };

export default function AddNewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault(); //avoid sending http request

      const enteredGoal = goal.current!.value;
      const enteredSummary = summary.current!.value;
      
      if (enteredGoal.trim().length === 0 || enteredSummary.trim().length === 0) {
        return;
      }
      // reset the form with an inbuild method
      event.currentTarget.reset();
      
      onAddGoal(enteredGoal, enteredSummary);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input id="goal" type="text" ref= {goal} />
        </p>
        <p>
          <label htmlFor="summary">Short summary</label>
          <input id="summary" type="text" ref= {summary}/>
        </p>
        <p>
          <button>Add Goal</button>
        </p>
      </form>
    );
  }