import { Heart, Sparkles, Star } from "lucide-react";
import ConfettiHearts from "./ConfettiHearts";
import teddyBear from "@/assets/teddy-bear.png";
import roses from "@/assets/roses.png";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <ConfettiHearts />
      
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-sparkle animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 14 + Math.random() * 14,
              height: 14 + Math.random() * 14,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-sparkle fill-sparkle animate-sparkle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 8 + Math.random() * 10,
              height: 8 + Math.random() * 10,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-xl mx-auto">
        {/* Roses and teddy */}
        <div className="flex justify-center items-end gap-2 mb-6">
          <img 
            src={roses} 
            alt="Beautiful roses" 
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-xl animate-float-heart"
            style={{ animationDelay: '0.5s' }}
          />
          <img 
            src={teddyBear} 
            alt="Happy teddy bear" 
            className="w-28 h-28 sm:w-36 sm:h-36 object-contain animate-bounce-cute drop-shadow-xl"
          />
          <img 
            src={roses} 
            alt="Beautiful roses" 
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-xl animate-float-heart scale-x-[-1]"
          />
        </div>

        {/* Animated hearts row */}
        <div className="flex justify-center gap-3 mb-4">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 text-heart-red fill-heart-red animate-pulse-love" 
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <h1 className="font-script text-6xl sm:text-8xl text-gradient-love mb-2 animate-bounce-cute">
          Yaaay!
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          I knew you'd say yes! 💕
        </p>
        
        {/* Love letter card */}
        <div className="bg-card/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-heart-light/40 mb-6 relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 flex gap-1">
            <Heart className="w-3 h-3 text-heart-pink fill-heart-pink" />
            <Heart className="w-2 h-2 text-heart-light fill-heart-light" />
          </div>
          <div className="absolute top-4 right-4 flex gap-1">
            <Heart className="w-2 h-2 text-heart-light fill-heart-light" />
            <Heart className="w-3 h-3 text-heart-pink fill-heart-pink" />
          </div>
          
          <p className="font-script text-3xl sm:text-4xl text-gradient-love mb-4">
            My Dearest Bhoomi,
          </p>
          
          <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-3 text-left px-2">
            <p>
              You have no idea how happy you just made me! 🥹
            </p>
            <p>
              From the moment I saw you, I knew you were the one I wanted to spend forever with. 
              Your kindness, your beauty, your laughter — everything about you makes my heart overflow with love.
            </p>
            <p>
              I promise to choose you every single day, just like I do today. 
              To stand by you through every joy and every challenge. 
              To love you more deeply with each passing year.
            </p>
            <p>
              I promise to make this Valentine's Day unforgettable for you — 
              filled with love, surprises, and all the happiness you deserve! 💫
            </p>
            <p>
              Thank you for being the most amazing person in my life. 
              I'm so lucky to have you, and I fall more in love with you every single day.
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-heart-light/30">
            <p className="font-script text-2xl sm:text-3xl text-gradient-love">
              Forever & Always Yours,
            </p>
            <p className="text-foreground/70 mt-1 text-sm">
              
            </p>
            <div className="flex justify-center gap-2 mt-2 text-2xl">
              <span>�</span>
              <span>💗</span>
              <span>�</span>
            </div>
          </div>
        </div>

        {/* Big love declaration */}
        <div className="bg-love-gradient rounded-2xl p-5 sm:p-6 shadow-xl mb-6">
          <p className="font-script text-3xl sm:text-5xl text-white drop-shadow-md">
            I Love You, Bhoomi!
          </p>
          <p className="text-white/90 text-lg sm:text-xl mt-2 font-medium">
            My soon-to-be wife, my soulmate, my forever �✨
          </p>
        </div>

        {/* Emoji celebration */}
        <div className="flex justify-center gap-3 text-3xl sm:text-4xl mb-4">
          
          <span className="animate-bounce-cute" style={{ animationDelay: '0.1s' }}>💗</span>
          <span className="animate-bounce-cute" style={{ animationDelay: '0.2s' }}>✨</span>
          <span className="animate-bounce-cute" style={{ animationDelay: '0.3s' }}>🌹</span>
          <span className="animate-bounce-cute" style={{ animationDelay: '0.4s' }}>💕</span>
          
        </div>

        <p className="text-muted-foreground text-sm sm:text-base italic">
          Can't wait to hold your hand and make beautiful memories together 🤍
        </p>
      </div>

      {/* Bottom decorative hearts */}
      <div className="absolute bottom-6 flex gap-5">
        <Heart className="w-6 h-6 text-heart-light fill-heart-light animate-float-heart" />
        <Heart className="w-8 h-8 text-heart-pink fill-heart-pink animate-float-heart" style={{ animationDelay: '0.3s' }} />
        <Heart className="w-10 h-10 text-heart-red fill-heart-red animate-float-heart" style={{ animationDelay: '0.6s' }} />
        <Heart className="w-8 h-8 text-heart-pink fill-heart-pink animate-float-heart" style={{ animationDelay: '0.9s' }} />
        <Heart className="w-6 h-6 text-heart-light fill-heart-light animate-float-heart" style={{ animationDelay: '1.2s' }} />
      </div>
    </div>
  );
};

export default SuccessPage;
