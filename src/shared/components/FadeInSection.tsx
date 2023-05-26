import React from 'react';
import '../styles/fade-in.css';

interface IFadeInSectionProps {
    children: React.ReactNode;
}

export const FadeInSection: React.FC<IFadeInSectionProps> = ({ children }) => {
    const domRef = React.useRef<HTMLDivElement>(null);

    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (!domRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            if (!domRef.current) return;

            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-in-div${isVisible ? ' is-visible' : ''}`}
        >
            {children}
        </div>
    );
};
