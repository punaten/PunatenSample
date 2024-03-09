import { useState } from 'react';

// アコーディオンコンポーネント
export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
            {isOpen && <div>{children}</div>}
        </div>
    );
}
