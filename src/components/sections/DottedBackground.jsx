import {  useState } from 'react';

const DottedBackground = () => {
    const [dots] = useState(() => {
        const colors = [
            'text-orange-medium',
            'text-orange-deep',
            'text-neon-blue',
            'text-neon-purple',
            'text-green-400',
            'text-yellow-400'
        ];

        // Generate 50 random glowing dots
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 2}px`, // 2px to 5px dots
            animationDuration: `${Math.random() * 3 + 1.5}s`,
            animationDelay: `${Math.random() * 5}s`,
            colorClass: colors[Math.floor(Math.random() * colors.length)]
        }));
    });

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className={`absolute rounded-full bg-white animate-pulse opacity-100 ${dot.colorClass}`}
                    style={{
                        left: dot.left,
                        top: dot.top,
                        width: dot.size,
                        height: dot.size,
                        animationDuration: dot.animationDuration,
                        animationDelay: dot.animationDelay,
                        boxShadow: `0 0 15px 3px currentColor, 0 0 30px 6px currentColor`
                    }}
                />
            ))}
        </div>
    );
};

export default DottedBackground;
