import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setIsRunning(true);
    
    // Calculate new random position within bounds
    const maxX = 150;
    const maxY = 100;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setPosition({ x: newX, y: newY });
    
    setTimeout(() => setIsRunning(false), 300);
  };

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="lg"
      className={`
        relative px-10 py-6 text-xl font-semibold
        bg-secondary text-secondary-foreground
        border-2 border-muted-foreground/20
        rounded-full shadow-lg
        transition-all duration-300 ease-out
        hover:bg-secondary hover:scale-95
        ${isRunning ? 'animate-wiggle' : ''}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
    >
      No 😢
    </Button>
  );
};

export default RunawayButton;
