import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pointer } from 'lucide-react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'li' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('li')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-orange-medium mix-blend-difference"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 1.5 : 1,
                    rotate: isHovering ? -15 : 0
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
                style={{ originX: 0, originY: 0 }}
            >
                <Pointer size={24} fill="currentColor" fillOpacity="0.5" strokeWidth={1.5} />
            </motion.div>
        </>
    );
};

export default CustomCursor;
