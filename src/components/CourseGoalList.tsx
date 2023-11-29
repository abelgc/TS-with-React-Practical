import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from "../App.tsx";
import { InfoBox } from './InfoBox.tsx';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {

    if(goals.length === 0) {
        return (
            <InfoBox mode="hint">
              You have no course goals yet. Start adding some!
            </InfoBox>
          );
    }
    let warningBox : ReactNode;

    if(goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
              You have more than three goals. Consider removing some. Be humble!
            </InfoBox>
          );
    }

    return (
        // root element
        <>
        {warningBox}
            <ul>
                {goals.map((item) => (
                    <li key={item.id}>
                        <CourseGoal id={item.id} title={item.title} onDelete={onDeleteGoal}>
                            <p>{item.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
}

