import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';

interface Obstacle {
  id: number;
  x: number;
  type: 'refuse' | 'nutella';
}

export default function MiniGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [speed, setSpeed] = useState(3);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('nathanGameHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const funnyGameOverMessages = [
    "REFUSÉ ! Même en entretien, tu sautes moins haut que ça ! 😅",
    "Game Over ! T'as pas mangé assez de Nutella aujourd'hui ! 🍫",
    "REFUSÉ ! Retente ta chance, comme pour ton premier stage ! 💼",
    "Oups ! On dirait un bug en production... sauf que là c'est toi qui bug ! 🐛",
    "REFUSÉ ! T'inquiète, même React a des bugs parfois ! ⚛️",
    "Game Over ! Ton score ressemble à ton nombre d'heures de sommeil en période d'examens ! 😴",
    "REFUSÉ ! Mais t'es toujours accepté pour visiter mon portfolio ! 🎨",
  ];

  const [gameOverMessage, setGameOverMessage] = useState('');

  // Jump mechanic
  const jump = useCallback(() => {
    if (!isJumping && isPlaying && !gameOver) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  }, [isJumping, isPlaying, gameOver]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump]);

  // Start game
  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setSpeed(3);
  };

  // Game loop - spawn obstacles
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const spawnInterval = setInterval(() => {
      const newObstacle: Obstacle = {
        id: Date.now(),
        x: 100,
        type: Math.random() > 0.7 ? 'nutella' : 'refuse',
      };
      setObstacles(prev => [...prev, newObstacle]);
    }, 2000);

    return () => clearInterval(spawnInterval);
  }, [isPlaying, gameOver]);

  // Move obstacles and collision detection
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const gameLoop = setInterval(() => {
      setObstacles(prev => {
        const newObstacles = prev
          .map(obs => ({ ...obs, x: obs.x - speed }))
          .filter(obs => obs.x > -10);

        // Collision detection
        newObstacles.forEach(obs => {
          if (obs.x > 10 && obs.x < 20) {
            if (obs.type === 'refuse' && !isJumping) {
              // Hit obstacle - game over
              setGameOver(true);
              setIsPlaying(false);
              setGameOverMessage(
                funnyGameOverMessages[Math.floor(Math.random() * funnyGameOverMessages.length)]
              );
              if (score > highScore) {
                setHighScore(score);
                localStorage.setItem('nathanGameHighScore', score.toString());
              }
            } else if (obs.type === 'nutella' && !isJumping) {
              // Collected nutella - speed boost
              setSpeed(prev => Math.min(prev + 0.5, 12));
              setScore(prev => prev + 10);
              // Remove collected nutella
              setObstacles(o => o.filter(item => item.id !== obs.id));
            }
          }
        });

        return newObstacles;
      });

      // Increment score
      setScore(prev => prev + 1);
    }, 50);

    return () => clearInterval(gameLoop);
  }, [isPlaying, gameOver, speed, isJumping, score, highScore]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-[#00FFE0] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Mini-
            <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
              Game
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-8">
            Saute par-dessus les REFUSE et attrape le Nutella ! 🍫
          </p>

          {/* Game container */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Score display */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold text-white">
                Score: <span className="text-[#FFA800]">{score}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Trophy size={20} className="text-[#00FFE0]" />
                Meilleur: <span className="text-white font-bold">{highScore}</span>
              </div>
            </div>

            {/* Game area */}
            <div
              className="relative w-full h-[700px] bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl border-2 border-white/10 overflow-hidden cursor-pointer"
              onClick={jump}
            >
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFA800] to-[#00FFE0]" />

              {/* Player character */}
              <motion.div
                className="absolute bottom-20 left-16"
                animate={{
                  bottom: isJumping ? '280px' : '80px',
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Bonhomme bâton en dessous */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-40">
                  {/* Tête avec l'image PersoJeux.png */}
                  <div className="w-10 h-10 mx-auto mb-1 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src="/images/PersoJeux.png"
                      alt="Tête"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Corps */}
                  <div className="w-1 h-12 bg-white mx-auto" />
                  {/* Bras */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-1 bg-white" />
                  {/* Jambes */}
                  <div className="flex gap-2 justify-center mt-0">
                    <div className="w-1 h-12 bg-white transform -rotate-12 origin-top" />
                    <div className="w-1 h-12 bg-white transform rotate-12 origin-top" />
                  </div>
                </div>
                {/* Image du personnage - taille augmentée */}
                <img
                  src="/images/PersoJeux.png"
                  alt="Player"
                  className="w-40 h-40 object-contain relative z-10"
                />
              </motion.div>

              {/* Obstacles */}
              <AnimatePresence>
                {obstacles.map(obs => (
                  <motion.div
                    key={obs.id}
                    className="absolute bottom-20"
                    style={{
                      left: `${obs.x}%`,
                    }}
                    exit={{ opacity: 0 }}
                  >
                    {obs.type === 'refuse' ? (
                      <div className="flex flex-col items-center">
                        {/* Croix rouge */}
                        <div className="relative w-16 h-16 mb-1">
                          {/* Barre verticale de la croix */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-red-500 rounded-sm shadow-lg" />
                          {/* Barre horizontale de la croix */}
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-4 bg-red-500 rounded-sm shadow-lg" />
                        </div>
                        {/* Texte REFUSÉ en dessous */}
                        <div className="bg-red-600 px-2 py-1 rounded text-white font-bold text-xs whitespace-nowrap shadow-lg">
                          REFUSÉ
                        </div>
                      </div>
                    ) : (
                      <div className="w-12 h-16 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg border-4 border-amber-800 flex items-center justify-center shadow-lg">
                        <div className="text-2xl">🍫</div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Start screen */}
              {!isPlaying && !gameOver && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <h2 className="text-4xl font-bold text-white mb-4">
                      Prêt à jouer ?
                    </h2>
                    <p className="text-white/70 mb-8">
                      Appuie sur ESPACE ou clique pour sauter !
                    </p>
                    <button
                      onClick={startGame}
                      className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                      Commencer
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Game over screen */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center">
                  <motion.div
                    className="text-center max-w-md"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="text-6xl mb-4">💀</div>
                    <h2 className="text-4xl font-bold text-red-500 mb-4">
                      GAME OVER !
                    </h2>
                    <p className="text-xl text-white/90 mb-2 leading-relaxed">
                      {gameOverMessage}
                    </p>
                    <div className="text-3xl font-bold text-[#FFA800] mb-6">
                      Score: {score}
                    </div>
                    {score === highScore && score > 0 && (
                      <div className="text-[#00FFE0] mb-6 flex items-center justify-center gap-2">
                        <Trophy size={24} />
                        <span className="font-bold">Nouveau record !</span>
                      </div>
                    )}
                    <button
                      onClick={startGame}
                      className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                      Rejouer
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Instructions during play */}
              {isPlaying && !gameOver && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
                  ESPACE / ⬆️ / CLIC pour sauter
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-6 flex gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="relative w-10 h-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-10 bg-red-500 rounded-sm" />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-3 bg-red-500 rounded-sm" />
                  </div>
                  <div className="bg-red-600 px-1 rounded text-white font-bold text-[8px] mt-0.5">
                    REFUSÉ
                  </div>
                </div>
                <span className="text-white/70 text-sm">Obstacles à éviter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-10 bg-gradient-to-br from-amber-900 to-amber-700 rounded border-2 border-amber-800 flex items-center justify-center">
                  <span className="text-lg">🍫</span>
                </div>
                <span className="text-white/70 text-sm">Nutella = +10 pts + vitesse ⚡</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}