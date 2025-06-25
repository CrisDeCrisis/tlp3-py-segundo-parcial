import { useEffect, useState } from 'react';
import './Moon.css';

export default function Moon() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;

            // Mejorar el cálculo para que sea más sensible al scroll manual
            let progress = Math.min(currentScroll / totalHeight, 1);

            // Ajustar la progresión para que sea más suave y perceptible
            progress = Math.pow(progress, 0.8); // Curva más suave

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const moonSize = 160 + (120 * scrollProgress);

    // Brillo que aumenta progresivamente con el scroll de forma continua
    const glowIntensity = 6 + (scrollProgress * 12);
    const glowOpacity = 0.6 + (scrollProgress * 0.2);

    return (
        <div
            className="moon-container moon-base-glow"
            style={{
                width: `${moonSize}px`,
                height: `${moonSize}px`,
                transform: `scale(${0.9 + scrollProgress * 0.2})`,
                filter: `drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${glowOpacity}))`,
            }}
        >
            <div className="relative w-full h-full">
                <img
                    src="/full-moon.png"
                    alt="Interactive Moon"
                    className="w-full h-full object-contain transition-all duration-500 ease-out"
                    style={{
                        opacity: 0.8 + (scrollProgress * 0.2),
                        filter: `saturate(${1 + scrollProgress * 0.15}) contrast(${1 + scrollProgress * 0.1})`,
                    }}
                />

                {/* Halo adicional que se intensifica progresivamente con el scroll */}
                <div
                    className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle, rgba(255, 255, 255, ${scrollProgress * 0.06}) 0%, 
                         rgba(255, 255, 255, ${scrollProgress * 0.03}) 50%, 
                         transparent 80%)`,
                        opacity: scrollProgress * 0.8,
                    }}
                />
            </div>
        </div>
    );
}
