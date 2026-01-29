import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackPageTime, trackScrollDepth } from '@/utils/analytics';

/**
 * Custom hook to track page analytics including:
 * - Page views on route changes
 * - Time spent on each page
 * - Scroll depth tracking
 * 
 * @param pageName - Human-readable name for the page (e.g., "Verizon Case Study")
 */
export const usePageAnalytics = (pageName: string) => {
    const location = useLocation();
    const startTimeRef = useRef<number>(Date.now());
    const maxScrollRef = useRef<number>(0);
    const scrollTrackedRef = useRef<Set<number>>(new Set());

    useEffect(() => {
        // Reset start time when page changes
        startTimeRef.current = Date.now();
        maxScrollRef.current = 0;
        scrollTrackedRef.current.clear();

        // Track page view
        trackPageView(location.pathname + location.hash, pageName);

        // Track scroll depth
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const scrollPercentage = scrollHeight > 0 ? Math.round((scrolled / scrollHeight) * 100) : 0;

            // Update max scroll
            if (scrollPercentage > maxScrollRef.current) {
                maxScrollRef.current = scrollPercentage;
            }

            // Track at 25%, 50%, 75%, and 100% milestones
            const milestones = [25, 50, 75, 100];
            milestones.forEach((milestone) => {
                if (
                    scrollPercentage >= milestone &&
                    !scrollTrackedRef.current.has(milestone)
                ) {
                    scrollTrackedRef.current.add(milestone);
                    trackScrollDepth(pageName, milestone);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function - track time spent when leaving page
        return () => {
            window.removeEventListener('scroll', handleScroll);

            const endTime = Date.now();
            const timeSpent = Math.round((endTime - startTimeRef.current) / 1000); // in seconds

            // Only track if user spent more than 1 second (to filter out bounces)
            if (timeSpent > 1) {
                trackPageTime(pageName, timeSpent);
            }
        };
    }, [location, pageName]);
};
