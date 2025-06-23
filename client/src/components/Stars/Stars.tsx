import { useEffect } from 'react';
import { starField1, starField2, starField3 } from './constants/starsData';
import type { StarProps } from './interfaces/star';
import './stars.css';

export default function Stars() {

    const generateStars = (starField: StarProps) => {

        const stars = [];

        for (let i = 0; i < starField.totalStars; i++) {
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            stars.push(`${x}vw ${y}vh 0 white, ${x - 100}vw ${y}vh 0 white`);
        }
        const container = document.querySelector(starField.selector) as HTMLElement | null;
        container?.style.setProperty('--space-layer', stars.join(', '));
        container?.style.setProperty('--size', starField.size);
        container?.style.setProperty('--duration', starField.duration);
        container?.style.setProperty('--opacity', starField.opacity);
    };

    useEffect(() => {
        generateStars(starField1);
        generateStars(starField2);
        generateStars(starField3);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden">
            <div className="space space-1"></div>
            <div className="space space-2"></div>
            <div className="space space-3"></div>
        </div>
    );
}
