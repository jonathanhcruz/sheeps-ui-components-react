import { CustomeImgProps } from './models/CustomeImgProps'

import './customeImg.scss'

export const CustomeImg = ({
    imageUrl,
    alt,
    classNameImg,
    imageResoursSizes = [],
    imgZoom
}: CustomeImgProps) => {
    const fullClassName = `${classNameImg} ${imgZoom && 'zoom-img'}`

    return (
        <picture className='sh-customeImage' data-testid='sh-customeImage'>
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