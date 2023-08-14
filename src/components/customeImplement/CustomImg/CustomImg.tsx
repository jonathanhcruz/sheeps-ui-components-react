import { CustomImgProps } from './models/CustomImgProps'

import './customImg.scss'

export const CustomImg = ({
    imageUrl,
    alt,
    classNameImg,
    imageResoursSizes = [],
    imgZoom
}: CustomImgProps) => {
    const fullClassName = `${classNameImg} ${imgZoom && 'zoom-img'}`

    return (
        <picture className='sh-customImage' data-testid='sh-customImage'>
            {
                imageResoursSizes.map(({size, url}, index) => {
                    return (
                        <source sizes={`min-width:${size}`} srcSet={url} key={index} />
                    )
                })
            }
            <img src={imageUrl} alt={alt} className={fullClassName} />
        </picture>
    )
}