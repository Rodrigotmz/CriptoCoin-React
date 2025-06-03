import { useState } from 'react';
import useIconVariants from '../../hooks/useIconVariants';
import './CriptoImg.css';

const CriptoImg = ({ symbol, name }) => {
    const {iconSrc, handleImageError} = useIconVariants(name, symbol)

    return (
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