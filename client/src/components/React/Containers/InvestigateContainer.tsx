import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import HeroContainer from "./HeroContainer";
import Notes from "../Investigate/Notes/Notes";
import SelectArticles from "../LinkComponents/SelectLinks";
import Content from "./Content";
import PanelContainer from "./PanelContainer";
import BlueSkyPosts from "../BlueSky/BlueSkyPosts";
import { AppDispatch } from "@/ReduxToolKit/store";
import InputOptions from "../Investigate/Steps/InputOptions";
import { ScrollUp } from "../AppRouting/ScrollToTop";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";
import ErrMessage from "../ErrorMessages/ErrMessage";

export default function InvestigateContainer() {
  const dispatch = useDispatch<AppDispatch>()
  const investigateState = useSelector((state: RootState) => state.investigation)
  const signingOut = useSelector((state: RootState) => state.auth.signOut)
  const { notes, help, search } = investigateState
  const { showContent, showBlueSkySearch } = investigateState.display
  const { articleOptions } = search
  const { gettingHelp } = help
  const { takingNotes } = notes
  const [notePosition, setNotePosition] = useState({ x: 12, y: 250 })
  const [constraints, setConstraints] = useState(null)
  const containerRef = useRef(null)
  const notesRef = useRef(null)

  function handleDragConstraints() {
    const constraintsRect = containerRef.current.getBoundingClientRect();
    const notesRect = notesRef.current.getBoundingClientRect();
    setConstraints({
      top: 0,
      left: 0,
      right: constraintsRect.width - notesRect.width,
      bottom: constraintsRect.height - notesRect.height
    })
  }


  useEffect(() => {



    if (containerRef.current && notesRef.current) {

      handleDragConstraints()
    }
  }, [])

  useEffect(() => {

    ScrollUp();

    return () => {
      dispatch({ type: 'clear' })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={`max-w-full sm:max-w-dvw md:w-full shrink-0 flex flex-col grow transition-opacity duration-200 ease-in-out h-full mx-auto justify-center
         items-center relative box-border min-h-svh
         ${signingOut || gettingHelp ? 'opacity-80 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>

      {showBlueSkySearch === null && <InputOptions />}
      <ErrorBoundary fallback={<ErrMessage message={"Error from component: <HeroContainer/>"} />}>
        {showBlueSkySearch === false && <HeroContainer
          key={'HeroContainer'}
        />}
      </ErrorBoundary>

      {showBlueSkySearch && <BlueSkyPosts context={'investigate'} />}
      <div className="w-full h-full grow mx-auto xl:mt-6">
        <ErrorBoundary fallback={<ErrMessage message={"Error from component: <Content/>"} />}>
          <Content />
        </ErrorBoundary>

      </div>
      <ErrorBoundary fallback={<ErrMessage message={"Error from component: <SelectArticles/>"} />}>
        <AnimatePresence>
          {articleOptions && articleOptions.length > 0 &&
            <SelectArticles />
          }
        </AnimatePresence>
      </ErrorBoundary>

      <AnimatePresence >
        {showContent && <PanelContainer />}
      </AnimatePresence>
      <AnimatePresence>
        {takingNotes &&
          <Notes
            notesRef={notesRef}
            constraints={constraints}
            notePosition={notePosition}
            setNotePosition={setNotePosition}
          />
        }
      </AnimatePresence>
    </section>
  )
}