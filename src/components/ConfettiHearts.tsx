import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface ConfettiHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const ConfettiHearts = () => {
  const [hearts, setHearts] = useState<ConfettiHeart[]>([]);

  useEffect(() => {
    const colors = [
      "text-heart-pink fill-heart-pink",
      "text-heart-red fill-heart-red",
      "text-heart-light fill-heart-light",
      "text-primary fill-primary",
      "text-accent fill-accent",
    ];

    const newHearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 12 + Math.random() * 28,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className={`absolute animate-confetti ${heart.color}`}
          style={{
            left: `${heart.left}%`,
            top: "-50px",
            width: heart.size,
            height: heart.size,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiHearts;
