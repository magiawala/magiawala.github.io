// Google Analytics utility functions for tracking page views and engagement

declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
        dataLayer?: unknown[];
    }
}

/**
 * Track a page view with custom parameters
 * @param path - The page path (e.g., "/verizon", "/hp")
 * @param title - The page title
 */
export const trackPageView = (path: string, title: string) => {
    if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-VQCBZGQD6G', {
            page_path: path,
            page_title: title,
        });

        // Also send as a custom event for better tracking
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: title,
            page_location: window.location.href,
        });
    }
};

/**
 * Track time spent on a page
 * @param pageName - The name of the page
 * @param timeInSeconds - Time spent in seconds
 */
export const trackPageTime = (pageName: string, timeInSeconds: number) => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_engagement', {
            page_name: pageName,
            engagement_time_seconds: timeInSeconds,
            engagement_time_minutes: Math.round(timeInSeconds / 60 * 10) / 10, // rounded to 1 decimal
        });
    }
};

/**
 * Track scroll depth on a page
 * @param pageName - The name of the page
 * @param scrollPercentage - How far the user scrolled (0-100)
 */
export const trackScrollDepth = (pageName: string, scrollPercentage: number) => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'scroll_depth', {
            page_name: pageName,
            scroll_percentage: scrollPercentage,
        });
    }
};

/**
 * Track custom events (e.g., clicking on project cards, resume downloads)
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, unknown>
) => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
    }
};
