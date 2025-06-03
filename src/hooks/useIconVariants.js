import { useState } from 'react';
const useIconVariants = (name, symbol) => {
    const url = `${import.meta.env.VITE_API_ICONS}assets/icons/`;
    
    const variants = [
        `${symbol.toLowerCase()}2@2x.png`,
        `${symbol.toLowerCase()}@2x.png`,
        `${name.toLowerCase()}2@2x.png`,
        `${name.toLowerCase()}@2x.png`,
    ];
    const [iconIndex, setIconIndex] = useState(0);
    const [iconSrc, setIconSrc] = useState(url + variants[0]);
    const handleImageError = () => {
        if (iconIndex < variants.length - 1) {
            const nextIndex = iconIndex + 1;
            setIconSrc(url + variants[nextIndex]);
            setIconIndex(nextIndex);
        } else {
            setIconSrc(null);
        }
    };
    return { iconSrc, handleImageError }
};

export default useIconVariants;