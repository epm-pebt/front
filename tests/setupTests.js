class IntersectionObserver {
    constructor(callback) {
        this.callback = callback;
    }

    observe() {
        // Simulate intersection observer callback
        this.callback([{ isIntersecting: true }]);
    }

    unobserve() {
        return null;
    }

    disconnect() {
        return null;
    }
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
});
