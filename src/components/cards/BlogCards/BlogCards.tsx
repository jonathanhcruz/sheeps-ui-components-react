import { BlogCardsProps } from './models/BlogCardsProps'
import './bloCards.scss'

// components
import { CustomImg } from 'src'

export const BlogCards = ({
    imageUrl,
    imageDescription,
    imgZoom,
    imageResoursSizes,
    title,
    description,
    linkJsx
}: BlogCardsProps) => {
    return (
       <section className='sh__blogcard'>
            <div className='sh__blogcard__container'>
                <div className='sh__blogcard__container__image '>
                    <CustomImg imageUrl={imageUrl} alt={imageDescription} imgZoom={imgZoom} imageResoursSizes={imageResoursSizes}/> 
                </div>
                <article className='sh__blogcard__container__description'>
                    <h4 className='title'>{title}</h4>
                    <p className='description'>{description}</p>
                    {linkJsx}
                </article>
            </div>
       </section>
    )
}

