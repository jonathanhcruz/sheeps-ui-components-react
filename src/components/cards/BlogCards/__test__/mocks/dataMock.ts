import { BlogCardsProps } from '../../models/BlogCardsProps'

export const firstConfigData: BlogCardsProps = {
    imageUrl: 'www.image.com',
    imageDescription: 'image description',
    title: 'title',
    description: 'description',
    imageResoursSizes: [
        {
            size: 'small',
            url: 'www.image.com/small'
        },
        {
            size: 'big',
            url: 'www.image.com/big'
        }
    ]
}