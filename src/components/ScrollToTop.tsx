import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force instant scroll to top on route change
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Critical: prevents smooth scrolling interference
        });
        document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
