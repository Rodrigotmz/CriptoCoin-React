import { useState } from 'react';
import './CriptoImg.css';

const CriptoImg = ({symbol, name}) =>{
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

    return(
        <>
            {
                iconSrc ? (
                    <img
                        src={iconSrc}
                        alt={symbol}
                        className='cripto-img'
                        onError={handleImageError}
                    />
                ) : (
                    <span className='cripto-placeholder'>{symbol} </span>
                )
            }
        </>
    );
}


export default CriptoImg;