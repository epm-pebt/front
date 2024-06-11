import { useState, useCallback } from 'react';

const useAnimation = () => {
    const [onAnimation, setOnAnimation] = useState(false);

    const activateAnimation = useCallback(() => {
        setOnAnimation(true);
    }, []);

    const backToHome = useCallback(() => {
        setOnAnimation(false);
    }, []);

    return { onAnimation, activateAnimation, backToHome };
};

export default useAnimation;
