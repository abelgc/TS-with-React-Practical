import { PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }
type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: (id: number) => void;
  id: number
}>;


export default function CourseGoal({ title, children, onDelete, id }: CourseGoalProps) {

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}