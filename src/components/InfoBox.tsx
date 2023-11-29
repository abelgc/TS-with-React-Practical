import { ReactNode } from "react";

type InfoBoxProps = {
    mode: "hint" | "warning" | "error";
    severity: "low" | "medium" | "high";
    children: ReactNode;

}
export function InfoBox({ mode, children }: InfoBoxProps) {
    if (mode === "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>);
    }
    if (mode === "warning") {
        return (
            <aside className={`infobox infobox-warning warning--{severity}`}>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>);
    }
    return (
        <div>
            <h1>InfoBox</h1>
        </div>
    );
}
