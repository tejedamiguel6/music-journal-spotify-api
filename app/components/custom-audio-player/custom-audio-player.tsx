export default function CustomAudioPlayer({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-md p-4 flex flex-col gap-2 max-w-2xl w-full mx-auto">
      <p className="text-sm text-gray-300 truncate">{title}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 transition"
        >
          {isPlaying ? (
            <Pause className="text-white" />
          ) : (
            <Play className="text-white" />
          )}
        </button>
        <div className="flex-1 h-2 bg-gray-600 rounded-full">
          {/* Progress bar (expandable) */}
        </div>
        <Volume2 className="text-white" />
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
