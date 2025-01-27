import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Music.css';
import songCover1 from '../songs/gary_moore.jfif';
import audio1 from '../songs/Parisienne_Walkways.mp3';
import songCover2 from '../songs/let_down.jfif';
import audio2 from '../songs/Let_Down.mp3';
import songCover3 from '../songs/madd.jfif';
import audio3 from '../songs/Other_Side.mp3';
import songCover4 from '../songs/cancer.jfif';
import audio4 from '../songs/Cancer.mp3';
import songCover5 from '../songs/french_movie.jfif';
import audio5 from '../songs/French_Movie.mp3';
import songCover6 from '../songs/in_limbo.jfif';
import audio6 from '../songs/In_Limbo.mp3';
import songCover7 from '../songs/sweet_love.jfif';
import audio7 from '../songs/Sweet_Love.mp3';
import songCover8 from '../songs/tim_burkley.jfif';
import audio8 from '../songs/Song_to_the Siren - Take 7.mp3';
import songCover9 from '../songs/20201203.jfif';
import audio9 from '../songs/20201203.mp3';
import songCover10 from '../songs/futura.jfif';
import audio10 from '../songs/Futura_Free.mp3';
import songCover11 from '../songs/maroon5.jfif';
import audio11 from '../songs/To_her.mp3';
import songCover12 from '../songs/fear.jfif';
import audio12 from '../songs/Fear, Sex.mp3';
import songCover13 from '../songs/1.jfif';
import audio13 from '../songs/1.mp3';
import songCover14 from '../songs/2.jfif';
import audio14 from '../songs/2.mp3';
import songCover15 from '../songs/3.jfif';
import audio15 from '../songs/3.mp3';
import songCover16 from '../songs/drake.jfif';
import audio16 from '../songs/not_you.mp3';
import songCover17 from '../songs/ugly.jfif';
import audio17 from '../songs/ugly.mp3';
import songCover18 from '../songs/ooz.jfif';
import audio18 from '../songs/ooz.mp3';
import songCover19 from '../songs/whaleshark.jfif';
import audio19 from '../songs/whaleshark.mp3';
import songCover20 from '../songs/livresse.jfif';
import audio20 from '../songs/livresse.mp3';
import songCover21 from '../songs/najat.jfif';
import audio21 from '../songs/najat.mp3';

const FifthPage = () => {
  const navigate = useNavigate();
  const songs = [
    {
      id: 1,
      title: "Parisienne Walkways",
      artist: "Gary Moore",
      cover: songCover1,
      audioFile: audio1  
    },
    {
      id: 2,
      title: "Let Down",
      artist: "Radiohead",
      cover: songCover2,
      audioFile: audio2  
    },
    {
      id: 3,
      title: "Other Side",
      artist: "Madd",
      cover: songCover3,
      audioFile: audio3  
    },
    {
      id: 4,
      title: "Cancer",
      artist: "My Chemical Romance",
      cover: songCover4,
      audioFile: audio4  
    },
    {
      id: 5,
      title: "French Movie",
      artist: "Bubble Tea And Cigarettes",
      cover: songCover5,
      audioFile: audio5  
    },
    {
      id: 6,
      title: "In Limbo",
      artist: "Radiohead",
      cover: songCover6,
      audioFile: audio6  
    },
    {
      id: 7,
      title: "Sweet Love",
      artist: "Issam",
      cover: songCover7,
      audioFile: audio7  
    },
    {
      id: 8,
      title: "Song To The Siren - Take 7",
      artist: "Tim Burkley",
      cover: songCover8,
      audioFile: audio8  
    },
    {
      id: 9,
      title: "20201203",
      artist: "Mac Demarco",
      cover: songCover9,
      audioFile: audio9  
    },
    {
      id: 10,
      title: "Futura Free",
      artist: "Frank Ocean",
      cover: songCover10,
      audioFile: audio10  
    },
    {
      id: 11,
      title: "To Her, with Love",
      artist: "Kara's Flowers",
      cover: songCover11,
      audioFile: audio11  
    },
    {
      id: 12,
      title: "Fear, Sex",
      artist: "Magdalena Bay",
      cover: songCover12,
      audioFile: audio12  
    },
    {
      id: 13,
      title: "Rico Sem Dinheiro",
      artist: "Evinha",
      cover: songCover13,
      audioFile: audio13  
    },
    {
      id: 14,
      title: "Outro Lugar",
      artist: "Toco",
      cover: songCover14,
      audioFile: audio14  
    },
    {
      id: 15,
      title: "Bahia Com H",
      artist: "Putumayo, NAY PORTTELA",
      cover: songCover15,
      audioFile: audio15  
    },
    {
      id: 16,
      title: "Not You Too",
      artist: "Drake, Chris Brown",
      cover: songCover16,
      audioFile: audio16  
    },
    {
      id: 17,
      title: "Uuugly",
      artist: "Drake",
      cover: songCover17,
      audioFile: audio17  
    },
    {
      id: 18,
      title: "The Ooz",
      artist: "King Krule",
      cover: songCover18,
      audioFile: audio18  
    },
    {
      id: 19,
      title: "Whaleshark",
      artist: "King Krule",
      cover: songCover19,
      audioFile: audio19  
    },
    {
      id: 20,
      title: "L'ivresse",
      artist: "Labess",
      cover: songCover20,
      audioFile: audio20  
    },
    {
      id: 21,
      title: "Bahlam Maak",
      artist: "Najat Al Saghira",
      cover: songCover21,
      audioFile: audio21  
    },
  ];

  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [loopingSongId, setLoopingSongId] = useState(null);
  const progressRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('ended', () => {
      if (!isLooping) {
        setIsPlaying(false);
        setCurrentlyPlaying(null);
        audio.currentTime = 0;
      }
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = isLooping;
    }
  }, [volume, isLooping]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current) return;
    
    const bounds = progressRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = x / width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const toggleLoop = (songId) => {
    if (loopingSongId === songId) {
      setIsLooping(false);
      setLoopingSongId(null);
    } else {
      setIsLooping(true);
      setLoopingSongId(songId);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handlePlay = (song) => {
    const audio = audioRef.current;

    if (currentlyPlaying === song.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      if (currentlyPlaying) {
        audio.pause();
      }
      
      audio.src = song.audioFile;
      audio.currentTime = 0;
      
      const handleMetadata = () => {
        setDuration(audio.duration);
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setCurrentlyPlaying(song.id);
          })
          .catch(console.error);
        audio.removeEventListener('loadedmetadata', handleMetadata);
      };
      
      audio.addEventListener('loadedmetadata', handleMetadata);
    }
  };

  return (
    <div className="fifth-page">
      <div className="playlist">
        <div className="songs-container">
          {songs.map((song) => (
            <div className="song-item" key={song.id}>
              <img src={song.cover} alt={`${song.title} Cover`} className="song-cover" />
              <div className="song-info">
                <h4 className="song-title">{song.title}</h4>
                <p className="song-artist">{song.artist}</p>
                {currentlyPlaying === song.id && (
                  <div className="audio-controls">
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
                        ref={progressRef}
                        onClick={handleProgressClick}
                      >
                        <div 
                          className="progress-fill" 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <div className="time-display">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                      <div className="volume-control">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="volume-slider"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="button-container">
                <button 
                  className={`play-button ${currentlyPlaying === song.id && isPlaying ? 'playing' : ''}`} 
                  onClick={() => handlePlay(song)}
                  aria-label={currentlyPlaying === song.id && isPlaying ? 'Pause' : 'Play'}
                />
                <button 
                  className={`loop-button ${loopingSongId === song.id ? 'active' : ''}`}
                  onClick={() => toggleLoop(song.id)}
                  aria-label={loopingSongId === song.id ? 'Disable Loop' : 'Enable Loop'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        className="back-arrow-button" 
        onClick={handleBack}
        aria-label="Go back to previous page"
      >
        <span className="arrow-icon">←</span>
      </button>
    </div>
  );
};

export default FifthPage;