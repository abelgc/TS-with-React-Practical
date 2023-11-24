import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {

    return (
        <ul>
            {goals.map((item) => (
                <li key={item.id}>
                    <CourseGoal id={item.id} title={item.title} onDelete={onDeleteGoal}>
                        <p>{item.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
}

