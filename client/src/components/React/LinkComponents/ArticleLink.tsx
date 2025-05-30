import { ArticleType, SelectedArticle } from "@/env"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { choose, discard, } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { motion } from "framer-motion"
import { memo } from "react"

interface ArticleProps {
    article: ArticleType,
    index: number
}

    const ArticleLink = memo(({ article, index }: ArticleProps) => {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { getArticle, display } = investigateState
    const { showGetArticlesModal } = display
    const { chosenArticles } = getArticle
    const dispatch = useDispatch()

    const { url, name, provider, image, description, datePublished, logo } = article;
    const isHilighted = chosenArticles.some(item => item.url === article.url)



    const forSummaryData = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo,
        title: article.name
    }

    const limitDescription = (string: string) => {

        if (string.length >= 111) {
            let newArr = string.split('')

            let count = 0

            let stringArr = []

            for (let i = 0; i < newArr.length; i++) {

                count++
                stringArr.push(newArr[i])

                if (count >= 95) {
                    break
                }
            }

            const newString = stringArr.join('')

            const presentation = newString + '...'

            return presentation
        } else {
            return string
        }
    }

    const mobileDescription = limitDescription(description)
    const fallbackImage = '/images/logos/fallback.jpg'
    const resizedImage = article.image.img ? article.image.img + '&w=300&p=0&c=7' : fallbackImage

    const chooseArticle = (article: ArticleType) => {


        const exists = chosenArticles.some((chosen => chosen.url === article.url))

        if (!exists && chosenArticles.length <= 2) {
            dispatch(choose(forSummaryData))

        } else if (exists) {
            const locatedAt = chosenArticles.findIndex((chosen => chosen.url === article.url))
            dispatch(discard(locatedAt))
        }



    };


    return (
        <motion.li
            onClick={() => { chooseArticle(article) }}
            key={article.url}
            className={`group cursor-pointer box-border list-none xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80 lg:min-w-72 lg:max-w-72 lg:min-h-72 lg:max-h-72 h-44 w-40 relative rounded-xl md:rounded-3xl text-white 
            md:opacity-85 md:hover:opacity-100 transition-all ease-in-out duration-200 overflow-y-hidden
            
            ${isHilighted && !showGetArticlesModal ? "shadow-blue-bottom bg-ebony" : "shadow-material bg-mirage"}`}
        >
            <div className='relative w-full m-0 p-0 lg:max-h-36 lg:min-h-36 min-h-20 max-h-20  overflow-hidden'>
                <div
                    style={{ backgroundImage: `url(${resizedImage})` }}
                    className='absolute inset-0 w-full h-full bg-cover bg-center opacity-40 rounded-t-xl md:rounded-t-3xl'
                ></div>
                <div className='relative z-10 p-4'>

                    <div className="flex flex-col lg:gap-y-6">
                        <h1 className='lg:text-lg xs:text-xs leading-6 text-white font-light tracking-tight font-serif'>
                            {name}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full mx-auto h-auto box-border pt-2">
                <div className="flex gap-4 items-center relative px-4">
                    <div>
                        <img
                            className="lg:h-8 lg:w-8 xs:h-6 xs:w-6"
                            src={logo}
                            alt=""
                        />
                    </div>

                    <div className='h-full text-sm xs:text-xs lg:text-lg font-serif text-white'>
                        {provider}
                    </div>
                </div>
                <div className={`h-full group mt-2 pt-2 ${isHilighted ? 'opacity-100' : ''}`}>
                    <blockquote className='relative px-4'>
                        <p className='lg:text-base xs:text-xs transition-colors duration-100 font-serif font-light xs:hidden md:block'>
                            {mobileDescription}
                        </p>
                        <p className='lg:text-base xs:text-xs transition-colors duration-100 font-serif font-light xs:block md:hidden'>
                            {mobileDescription}
                        </p>
                    </blockquote>
                </div>
            </div>
        </motion.li>
    );
});


export default ArticleLink;