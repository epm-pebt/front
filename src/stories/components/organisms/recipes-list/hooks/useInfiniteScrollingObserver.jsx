import { useEffect, useState } from 'react';

export const useInfiniteScrollingObserver = ({
    endOfListRef,
    allPagesLoadedRef,
    status,
    fetchRecipesData,
}) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const marker = endOfListRef.current;
        const isLastPage = allPagesLoadedRef.current;
        if (!marker || isLastPage) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        !isLastPage &&
                        status !== 'loading' &&
                        !isFetching
                    ) {
                        console.log('Fetching more data...');
                        setIsFetching(true);
                        fetchRecipesData().finally(() => {
                            console.log('Fetch complete');
                            setIsFetching(false);
                        });
                    }
                });
            },
            { threshold: 1.0 }
        );

        observer.observe(marker);

        return () => {
            if (marker) {
                observer.unobserve(marker);
            }
            observer.disconnect();
        };
    }, [fetchRecipesData, status, allPagesLoadedRef, endOfListRef, isFetching]);
};
