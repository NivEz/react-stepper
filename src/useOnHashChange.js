import {useEffect} from "react";

export const useOnHashChange = (hash, handler) => {
    useEffect(() => {
        window.addEventListener('hashchange', handler);

        return () => {
            window.removeEventListener('hashchange', handler);
        }
    }, [hash, handler])
};