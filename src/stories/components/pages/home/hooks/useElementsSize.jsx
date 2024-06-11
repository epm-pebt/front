import { useEffect, useState } from 'react';
import {
    CONTAINER_MAX_WIDTH,
    MIN_HEADER_HEIGHT,
    MIN_PAGE_TITLE_HEIGHT,
} from '../../../../constants';

const useElementsSize = (headerRef, titleRef) => {
    const [elementsSize, setElementsSize] = useState({
        headerHeight: MIN_HEADER_HEIGHT,
        headerWidth: CONTAINER_MAX_WIDTH,
        titleHeight: MIN_PAGE_TITLE_HEIGHT,
    });

    useEffect(() => {
        const updateElementsSize = () => {
            if (headerRef.current) {
                setElementsSize((prev) => ({
                    ...prev,
                    headerHeight: headerRef.current?.offsetHeight,
                    headerWidth: headerRef.current?.offsetWidth,
                }));
            }
            if (titleRef.current) {
                setElementsSize((prev) => ({
                    ...prev,
                    titleHeight: titleRef.current?.offsetHeight,
                }));
            }
        };
        window.addEventListener('resize', updateElementsSize);
        return () => {
            window.removeEventListener('resize', updateElementsSize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return elementsSize;
};

export default useElementsSize;
