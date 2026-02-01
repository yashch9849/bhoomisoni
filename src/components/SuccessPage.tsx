import { Heart, Sparkles } from "lucide-react";
import ConfettiHearts from "./ConfettiHearts";
import teddyBear from "@/assets/teddy-bear.png";

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
        <div className="flex justify-center gap-4 mb-4">
          <Heart 
            className="w-10 h-10 text-heart-red fill-heart-red animate-pulse-love" 
            style={{ animationDelay: '0s' }}
          />
          <Heart 
            className="w-14 h-14 text-heart-pink fill-heart-pink animate-pulse-love" 
            style={{ animationDelay: '0.2s' }}
          />
          <Heart 
            className="w-10 h-10 text-heart-red fill-heart-red animate-pulse-love" 
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        {/* Teddy bear celebrating */}
        <div className="flex justify-center mb-4">
          <img 
            src={teddyBear} 
            alt="Happy teddy bear" 
            className="w-28 h-28 sm:w-36 sm:h-36 object-contain animate-wiggle drop-shadow-xl"
          />
        </div>

        <h1 className="font-script text-6xl sm:text-8xl text-gradient-love mb-4 animate-bounce-cute">
          Yaaay!
        </h1>
        
        <p className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          I knew you'd say yes, Bhoomi! 💕
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
          You just made me the happiest person in the whole world! 
          Can't wait to spend Valentine's Day with you! 🌹
        </p>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-heart-light/30 max-w-sm mx-auto mb-6">
          <p className="font-script text-3xl sm:text-4xl text-gradient-love">
            I love you so much,
          </p>
          <p className="font-script text-4xl sm:text-5xl text-gradient-love mt-1">
            Bhoomi! 💗
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3 text-3xl sm:text-4xl">
            <span className="animate-bounce-cute">🥰</span>
            <span className="animate-bounce-cute" style={{ animationDelay: '0.1s' }}>💗</span>
            <span className="animate-bounce-cute" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="animate-bounce-cute" style={{ animationDelay: '0.3s' }}>💕</span>
            <span className="animate-bounce-cute" style={{ animationDelay: '0.4s' }}>🦋</span>
          </div>
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
