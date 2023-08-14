import { ImageResoursSizes } from 'src/models'

export interface CustomImgProps {
    imageUrl: string,
    alt: string,
    classNameImg?: string,
    imageResoursSizes?: ImageResoursSizes[],
    imgZoom?: boolean,
}