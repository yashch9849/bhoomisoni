import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "./FloatingHearts";
import RunawayButton from "./RunawayButton";
import SuccessPage from "./SuccessPage";

const ValentineInvite = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return <SuccessPage />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      
      {/* Decorative sparkles */}
      <Sparkles className="absolute top-10 left-10 w-8 h-8 text-sparkle animate-sparkle" />
      <Sparkles className="absolute top-20 right-16 w-6 h-6 text-sparkle animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-32 left-20 w-7 h-7 text-sparkle animate-sparkle" style={{ animationDelay: '1s' }} />

      <div className="text-center z-10 max-w-lg mx-auto">
        {/* Animated heart header */}
        <div className="flex justify-center mb-6">
          <Heart 
            className="w-20 h-20 sm:w-24 sm:h-24 text-heart-red fill-heart-red animate-pulse-love drop-shadow-lg" 
          />
        </div>

        {/* Main heading */}
        <h1 className="font-script text-5xl sm:text-7xl text-gradient-love mb-4">
          Hey Beautiful
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-foreground mb-8">
          I have a very important question for you...
        </p>

        {/* The question */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-border mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Will you be my
          </h2>
          <p className="font-script text-5xl sm:text-6xl text-gradient-love">
            Valentine?
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>🌹</span>
            <span>💕</span>
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
            "
            onClick={() => setAccepted(true)}
          >
            Yes! 💖
          </Button>

          <RunawayButton />
        </div>

        <p className="text-sm text-muted-foreground mt-8 italic">
          (Hint: There's only one right answer 😉)
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
