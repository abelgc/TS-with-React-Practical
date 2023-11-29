import { ReactNode } from "react";


type InfoBoxHint = {
    mode: "hint";
    children: ReactNode;
};

type InfoBoxWarning = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
};

type InfoBoxProps = InfoBoxHint | InfoBoxWarning;


export function InfoBox(props: InfoBoxProps) {

    const { mode, children } = props;

    if (mode === "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>);
    }

    const { severity } = props;

    if (mode === "warning") {
        return (
            <aside className={`infobox infobox-warning warning--${severity}`}>
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
