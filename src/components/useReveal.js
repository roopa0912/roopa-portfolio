import { useRef, useEffect, useState} from 'react';

function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15}
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return { ref, visible};
}

export default useReveal;
