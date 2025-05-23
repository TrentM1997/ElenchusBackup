import { AnimatePresence, motion } from "framer-motion"
import FailedLoading from "../Articles/Failed/FailedLoading"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import NoContent from "../Articles/Failed/NoContent"
import Article from "../Articles/SuccessFull/Article"
import ArticleLoader from "../Loaders/ArticleLoader"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { read } = investigateState
  const { displayArticleContent, showContent } = investigateState.display
  const { articles, failedNotifications, currentStory, ContentStatus } = read
  const dispatch = useDispatch()


  useEffect(() => {


    if (articles || failedNotifications) {

      const scrapedURLs = articles?.map((item: any) => {
        return item.article_url
      })

      const failedURLs = failedNotifications?.map((item: any) => {
        return item.article_url
      })

      let urls = scrapedURLs.concat(failedURLs)

      if (urls) {
        dispatch(recordSources(urls))
      }
    }

  }, [displayArticleContent, articles, failedNotifications, ContentStatus])

  return (
    <ErrorBoundary>
      <div
        className="min-h-screen h-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset mx-auto border-white/10 xs:mt-10 xl:mt-12 relative"
      >
    
        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col
                 ">
          <AnimatePresence>
            <motion.div
              className="w-full min-h-screen mx-auto relative grow shrink-0">

              {ContentStatus === 'pending' && <ArticleLoader key='contentLoader' />}
              {articles && articles.length > 0 && articles?.map((articleData: any, index: number) =>
              (currentStory === index && <Article
                key={index}
                index={index}
                articleData={articleData}
              />)
              )}
              {ContentStatus === 'fulfilled' && articles.length < 1 &&  <NoContent key='noResults' />}
            </motion.div>
          </AnimatePresence>

        </main>
        {ContentStatus === 'fulfilled' && <FailedLoading />}
      </div>
    </ErrorBoundary>



  )
}
