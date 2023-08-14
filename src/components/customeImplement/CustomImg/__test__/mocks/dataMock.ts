import { CustomeImgProps } from '../../models/CustomImgProps'

export const firstConfigData: CustomeImgProps = {
    imageUrl: 'www.image.com',
    alt: 'description',
    classNameImg: 'classNameImg',
    imageResoursSizes:  [
        {
            size: 'small',
            url: 'www.image.com/small'
        },
        {
            size: 'big',
            url: 'www.image.com/big'
        }
    ],
    imgZoom: true,
}