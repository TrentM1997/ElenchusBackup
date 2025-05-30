import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step2Help } from "@/helpInfo/help"
import { getPerspective, getExpertise } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Step2({ containerWidth }: any) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov } = investigateState
  const { expertise, perspective } = pov
  const dispatch = useDispatch()

  const getPOV = (e: React.MouseEvent<HTMLDivElement>) => {

    const targetDiv = e.target as HTMLDivElement
    dispatch(getPerspective(targetDiv.getAttribute('data-set')))
  }

  const assignKnowledge = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.target as HTMLDivElement;
    dispatch(getExpertise(divTarget.getAttribute('data-set')))
  }

  const opinions: string[] = [
    "Agree",
    "Disagree",
    "Neutral"
  ]

  const expertiseArray: string[] = [
    "New to the Topic",
    "Familiar",
    "Area of Expertise"
  ]

  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='xs:w-full snap-center snap-always
    text-center mx-auto xs:h-full box-border flex xs:px-2 basis-full'>
      <div
        className="min-w-full lg:h-full content-center mx-auto box-border flex flex-col justify-center my-auto md:px-0">
        <div className="w-full h-auto border-b border-white/10 mb-4">
          <header className="w-full h-auto mx-auto mb-1 2xl:mb-2 flex sm:gap-x-8 xs:gap-x-0 items-center">
            <h1 className="text-white 2xl:text-3xl md:text-2xl sm:text-xl xs:text-md font-light tracking-tight text-left w-2/3 sm:w-auto">
              What's your angle of approach?
            </h1>
            <div className="w-fit self-center">
              <HelpButton info={Step2Help} />

            </div>
          </header>
        </div>

        <div className="w-full flex items-center sm:h-52 md:h-full">

          <div className="flex w-fit mx-auto xs:gap-x-16 xl:gap-x-16 2xl:gap-x-36 box-border">
            <div
              className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto"
            >
              <header className="w-full">
                <h1 className="2xl:text-2xl xl:text-xl md:text-sm md:text-left text-xs  font-light tracking tight text-slate-400 mb-2">Your Perspective</h1>
              </header>
              {opinions.map((opinion) => (
                <div
                  className="relative"
                  key={opinion}
                >
                  <div
                    className={`bg-white xl:text-lg lg:text-[0.8rem] text-[0.6rem] sm:text-sm tracking-tight
              rounded-lg xl:w-60 xl:h-16 lg:w-[12rem] md:w-[12rem] md:h-12 sm:w-40 sm:h-11 w-28 h-9
               cursor-pointer md:hover:bg-white/20 md:hover:text-white transition-all duration-200 ease-in-out
                flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3
                ${perspective === null && 'text-black'}
                ${perspective !== null && perspective === opinion && 'text-black'}
                ${perspective !== null && perspective !== opinion && 'text-zinc-500'}
                `}
                    data-set={opinion}
                    onClick={(e) => getPOV(e)}
                  >
                    {opinion}
                    <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                      {opinion === perspective ? <Lottie className="box-content absolute right-0 translate-x-0.5 xl:translate-x-1.5"
                        animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                        : (
                          <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-black/40 box-content rounded-full  absolute xs:right-1"></div>

                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto">
              <header className="w-full">
                <h1 className="2xl:text-2xl xl:text-xl md:text-sm md:text-left text-xs font-light tracking tight text-slate-400 mb-2">Prior Knowledge</h1>
              </header>
              {expertiseArray.map((item) => (
                <div
                  key={item}
                  className="relative"
                >
                  <div
        className={`bg-white xl:text-lg lg:text-[0.8rem] text-[0.6rem] sm:text-sm tracking-tight
          rounded-lg xl:w-60 xl:h-16 lg:w-[12rem] md:w-[12rem] md:h-12 sm:w-40 sm:h-11 w-28 h-9
           cursor-pointer md:hover:bg-white/20 md:hover:text-white transition-all duration-200 ease-in-out
            flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3
            ${expertise === null && 'text-black'}
            ${expertise !== null && expertise === item && 'text-black'}
            ${expertise !== null && expertise !== item && 'text-zinc-500'}
            `}
                    data-set={item}
                    onClick={(e) => { assignKnowledge(e) }}
                  >{item}
                    <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                      {item === expertise ? <Lottie className="box-content absolute right-0 translate-x-0.5 xl:translate-x-1.5" animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                        <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-black/40 box-content rounded-full  absolute xs:right-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}