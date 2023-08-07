import { ImageResoursSizes } from 'src/models'

export interface BlogCardsProps {
    imageUrl: string,
    imageDescription: string,
    title: string,
    description: string,
    imgZoom?: boolean,
    imageResoursSizes?: ImageResoursSizes[],
    linkJsx?: JSX.Element
}