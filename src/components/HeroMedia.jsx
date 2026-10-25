import { useEffect, useRef, useState } from 'react';
import posterImage from '../assets/pagina/hero.webp';
import { PlayPauseIcon } from './Icons.jsx';

// O vídeo é opcional: basta salvar `hero.mp4` (e, se quiser, `hero.webm`) em
// src/assets/pagina/. Sem o arquivo, a página usa apenas a imagem estática.
const videoModules = import.meta.glob('../assets/pagina/hero.{mp4,webm}', { eager: true, import: 'default' });
const videoSources = Object.entries(videoModules)
  .map(([path, url]) => ({ url, type: path.endsWith('.webm') ? 'video/webm' : 'video/mp4' }))
  // WebM primeiro: o navegador usa a primeira fonte que suporta.
  .sort((a, b) => Number(a.type === 'video/mp4') - Number(b.type === 'video/mp4'));

// Vídeo só em telas maiores, sem preferência por movimento reduzido e sem economia de dados.
function shouldPlayVideo() {
  if (videoSources.length === 0) return false;
  const wideScreen = window.matchMedia('(min-width: 761px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  return wideScreen && !reducedMotion && !saveData;
}

function HeroMedia() {
  const videoRef = useRef(null);
  const [useVideo, setUseVideo] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setUseVideo(shouldPlayVideo());
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="hero-media">
      <img className="hero-media-poster" src={posterImage} alt="" width="1284" height="928" fetchPriority="high" />
      {useVideo && (
        <>
          <video
            ref={videoRef}
            className="hero-media-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterImage}
            aria-hidden="true"
            onError={() => setUseVideo(false)}
          >
            {videoSources.map((source) => <source key={source.url} src={source.url} type={source.type} />)}
          </video>
          <button
            type="button"
            className="hero-media-toggle"
            onClick={togglePlayback}
            aria-label={playing ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo'}
          >
            <PlayPauseIcon playing={playing} />
          </button>
        </>
      )}
    </div>
  );
}

export default HeroMedia;
