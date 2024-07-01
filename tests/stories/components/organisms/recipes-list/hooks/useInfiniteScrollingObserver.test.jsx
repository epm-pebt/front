/* eslint-disable react/prop-types */
import { render, act } from '@testing-library/react';
import { useEffect } from 'react';
import { useInfiniteScrollingObserver } from 'src/stories/components/organisms/recipes-list/hooks/useInfiniteScrollingObserver';

const HookWrapper = ({
    endOfListRef,
    allPagesLoadedRef,
    status,
    fetchRecipesData,
}) => {
    useInfiniteScrollingObserver({
        endOfListRef,
        allPagesLoadedRef,
        status,
        fetchRecipesData,
    });
    useEffect(() => {}, []); // Dummy useEffect to trigger the hook
    return null;
};

describe('useInfiniteScrollingObserver', () => {
    let endOfListRef;
    let allPagesLoadedRef;
    let fetchRecipesData;
    let status;
    let mockIntersectionObserver;
    let observerInstance;

    beforeEach(() => {
        jest.clearAllMocks();
        endOfListRef = { current: document.createElement('div') };
        allPagesLoadedRef = { current: false };
        fetchRecipesData = jest.fn(() => Promise.resolve().finally(() => {}));
        status = 'succeeded';

        observerInstance = {
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
            trigger: (isIntersecting) => {
                if (observerInstance.callback) {
                    act(() => {
                        observerInstance.callback([{ isIntersecting }]);
                    });
                }
            },
            callback: null,
        };

        mockIntersectionObserver = jest.fn((callback) => {
            observerInstance.callback = callback;
            return observerInstance;
        });

        window.IntersectionObserver = mockIntersectionObserver;
    });

    afterEach(() => {
        delete window.IntersectionObserver;
    });

    it('should call fetchRecipesData when the end of the list is intersected', async () => {
        await act(async () => {
            render(
                <HookWrapper
                    endOfListRef={endOfListRef}
                    allPagesLoadedRef={allPagesLoadedRef}
                    status={status}
                    fetchRecipesData={fetchRecipesData}
                />
            );
        });

        await act(async () => {
            observerInstance.trigger(true);
        });

        expect(fetchRecipesData).toHaveBeenCalled();
    });

    it('should not call fetchRecipesData if all pages are loaded', async () => {
        allPagesLoadedRef.current = true;

        await act(async () => {
            render(
                <HookWrapper
                    endOfListRef={endOfListRef}
                    allPagesLoadedRef={allPagesLoadedRef}
                    status={status}
                    fetchRecipesData={fetchRecipesData}
                />
            );
        });

        await act(async () => {
            observerInstance.trigger(true);
        });

        expect(fetchRecipesData).not.toHaveBeenCalled();
    });
});
