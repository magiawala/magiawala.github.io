import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    placeholderClass?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, className, placeholderClass, ...props }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: "200px", // Start loading 200px before it enters viewport
                threshold: 0.1,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <video
            ref={videoRef}
            className={`${className} transition-opacity duration-700 ease-in-out ${isIntersecting ? "opacity-100" : "opacity-0"}`}
            src={isIntersecting ? src : undefined}
            {...props}
        />
    );
};

export default LazyVideo;
