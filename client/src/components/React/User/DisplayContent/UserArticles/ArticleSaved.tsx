import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { limitArray } from "@/helpers/Presentation"
import Bookmark from "../../../Buttons/SaveButtons/SaveArticle"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function ArticleSaved({ article, index, }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const handleArticleSelection = () => {
        dispatch(readSavedArticle(article))
        navigate('/SavedArticle')
    }

    return (
             <li key={article.article_url} className="cursor-pointer">
  <a
    className="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2 items-center"
    href="#"
    title={article.title}>
    <div className="group"  onClick={handleArticleSelection}>
      <h3
       
        className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white/80 md:group-hover:text-white transition-all duration-200 ease-in-out">
        {article.title}
      </h3>
      <p className="text-zinc-400 text-xs mt-6">
        {article.authors ? article.authors[0] : 'Authors not available'} - <span> <time className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200" dateTime={article.pubDate}>{article.date_published}</time></span>
      </p>
         <p className="text-zinc-400 text-xs mt-6">
        Published by - <span className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200">{article.provider} </span>
      </p>
    </div>
    <img
      className="aspect-[16/9] w-4/5 rounded-3xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      width="560"
      height="380"
      src={article.image_url}
    />
  </a>
</li>
    )
}







