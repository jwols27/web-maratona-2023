import { useEffect, useState, useRef, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) =>
            setIsOnScreen(entry.isIntersecting)
        );
    }, []);

    useEffect(() => {
        if (!ref.current) return;
        observerRef.current?.observe(ref?.current);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [ref]);

    return isOnScreen;
}
