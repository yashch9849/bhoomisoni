import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "./FloatingHearts";
import RunawayButton from "./RunawayButton";
import SuccessPage from "./SuccessPage";
import teddyBear from "@/assets/teddy-bear.png";

const ValentineInvite = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return <SuccessPage />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts />
      
      {/* Decorative sparkles */}
      <Sparkles className="absolute top-10 left-10 w-8 h-8 text-sparkle animate-sparkle" />
      <Sparkles className="absolute top-20 right-16 w-6 h-6 text-sparkle animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-32 left-20 w-7 h-7 text-sparkle animate-sparkle" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute top-1/4 right-8 w-5 h-5 text-sparkle animate-sparkle" style={{ animationDelay: '1.5s' }} />

      <div className="text-center z-10 max-w-lg mx-auto">
        {/* Cute teddy bear */}
        <div className="flex justify-center mb-4">
          <img 
            src={teddyBear} 
            alt="Cute teddy bear holding a heart" 
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-bounce-cute drop-shadow-xl"
          />
        </div>

        {/* Main heading with her name */}
        <h1 className="font-script text-5xl sm:text-7xl text-gradient-love mb-2">
          Hey Bhoomi
        </h1>
        
        <div className="flex justify-center gap-1 mb-4">
          <Heart className="w-4 h-4 text-heart-pink fill-heart-pink" />
          <Heart className="w-5 h-5 text-heart-red fill-heart-red animate-pulse-love" />
          <Heart className="w-4 h-4 text-heart-pink fill-heart-pink" />
        </div>

        <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-6">
          Every day, I choose you. Today, I want to ask you forever...
        </p>

        {/* The question card */}
        <div className="bg-card/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-heart-light/50 mb-8 relative overflow-hidden">
          {/* Decorative corner hearts */}
          <Heart className="absolute top-3 left-3 w-4 h-4 text-heart-light fill-heart-light opacity-60" />
          <Heart className="absolute top-3 right-3 w-4 h-4 text-heart-light fill-heart-light opacity-60" />
          <Heart className="absolute bottom-3 left-3 w-4 h-4 text-heart-light fill-heart-light opacity-60" />
          <Heart className="absolute bottom-3 right-3 w-4 h-4 text-heart-light fill-heart-light opacity-60" />
          
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
            Will you marry me and
          </h2>
          <p className="font-script text-5xl sm:text-6xl text-gradient-love leading-tight">
            be mine forever?
          </p>
          <div className="flex justify-center gap-2 mt-4 text-xl sm:text-2xl">
            <span>🌹</span>
            <span className="animate-pulse-love">💕</span>
            <span>✨</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <Button
            size="lg"
            className="
              px-12 py-7 text-xl font-bold
              bg-love-gradient text-primary-foreground
              rounded-full shadow-xl
              hover:scale-110 hover:shadow-2xl
              transition-all duration-300
              animate-bounce-cute
              border-2 border-white/20
            "
            onClick={() => setAccepted(true)}
          >
            I Do! �
          </Button>

          <RunawayButton />
        </div>

        <p className="text-sm text-muted-foreground mt-6 italic opacity-80">
          (I promise to choose you every single day �)
        </p>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-4 sm:bottom-8 flex gap-4 text-2xl sm:text-3xl">
        <span className="animate-bounce-cute">💗</span>
        <span className="animate-bounce-cute" style={{ animationDelay: '0.2s' }}>🦋</span>
        <span className="animate-bounce-cute" style={{ animationDelay: '0.4s' }}>💗</span>
      </div>
    </div>
  );
};

export default ValentineInvite;
