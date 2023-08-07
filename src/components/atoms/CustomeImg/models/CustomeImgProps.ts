import { ImageResoursSizes } from 'src/models'

export interface CustomeImgProps {
    imageUrl: string,
    alt: string,
    classNameImg?: string,
    imageResoursSizes?: ImageResoursSizes[],
    imgZoom?: boolean,
}