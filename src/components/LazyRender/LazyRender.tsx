import { ReactNode, useEffect, useRef, useState } from "react"

export interface LazyRenderProps {
    children: ReactNode;
    rootMargin?: string;
    triggerOnce?: boolean;
    minHeight?: number;
}

const LazyRender = ({
    children,
    rootMargin,
    triggerOnce = false,
    minHeight = 0
} : LazyRenderProps ) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsInView(true);
                    if(triggerOnce) observer.disconnect();
                } else if(!triggerOnce) {
                    setIsInView(false);
                }
            },
            { rootMargin }
        );

        if(ref.current) observer.observe(ref.current);

        return () => {
            if(ref.current) observer.disconnect();
        };
    }, [rootMargin, triggerOnce]);

    return <div ref={ref} className={minHeight > 0 ? `min-h-[${minHeight}px]` : ''}>
        { isInView && children }
    </div>
}

export default LazyRender;
