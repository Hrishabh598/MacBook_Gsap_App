import { useRef} from 'react';

const Hero = () => {

    const videoRef   = useRef<HTMLVideoElement>(null);
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Pro" />
            </div>

            <video ref={videoRef} src='/videos/hero.mp4' autoPlay playsInline muted />

            <button>Buy</button>
            <p>Buy from $1599 or $122/month for 12 months</p>

        </section>
    )
}
export default Hero
