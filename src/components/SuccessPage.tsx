import { Heart, Sparkles } from "lucide-react";
import ConfettiHearts from "./ConfettiHearts";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <ConfettiHearts />
      
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-sparkle animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 16 + Math.random() * 16,
              height: 16 + Math.random() * 16,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Animated hearts */}
        <div className="flex justify-center gap-4 mb-6">
          <Heart 
            className="w-12 h-12 text-heart-red fill-heart-red animate-pulse-love" 
            style={{ animationDelay: '0s' }}
          />
          <Heart 
            className="w-16 h-16 text-heart-pink fill-heart-pink animate-pulse-love" 
            style={{ animationDelay: '0.2s' }}
          />
          <Heart 
            className="w-12 h-12 text-heart-red fill-heart-red animate-pulse-love" 
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        <h1 className="font-script text-6xl sm:text-8xl text-gradient-love mb-6 animate-bounce-cute">
          Yaaay!
        </h1>
        
        <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          I knew you'd say yes! 💕
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          You just made me the happiest person in the world! 
          Can't wait to spend Valentine's Day with you! 🌹
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2 text-4xl animate-bounce-cute">
            <span>🥰</span>
            <span style={{ animationDelay: '0.1s' }}>💗</span>
            <span style={{ animationDelay: '0.2s' }}>✨</span>
            <span style={{ animationDelay: '0.3s' }}>💕</span>
            <span style={{ animationDelay: '0.4s' }}>🦋</span>
          </div>
          
          <p className="font-script text-3xl sm:text-4xl text-primary mt-4">
            I love you so much!
          </p>
        </div>
      </div>

      {/* Bottom decorative hearts */}
      <div className="absolute bottom-8 flex gap-6">
        <Heart className="w-8 h-8 text-heart-light fill-heart-light animate-float-heart" />
        <Heart className="w-10 h-10 text-heart-pink fill-heart-pink animate-float-heart" style={{ animationDelay: '0.5s' }} />
        <Heart className="w-8 h-8 text-heart-light fill-heart-light animate-float-heart" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default SuccessPage;
