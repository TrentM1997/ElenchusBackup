import HelpButton from "../../Buttons/HelpButtons/Question";
import { Step4Help } from "@/helpInfo/help";
import StepsEditor from "../../TipTap/StepsEditor";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import { getPremises } from "@/ReduxToolKit/Reducers/Investigate/UserPOV";

export default function Step4({ containerWidth }: any) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov } = investigateState
  const { premises } = pov

  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='max-w-full w-full 2xl:max-w-168 2xl:h-80
text-center mx-auto xs:h-full box-border flex xs:px-2 md:px-0 basis-full'>
      <div className="inline-block h-fit box-border mx-auto min-w-full max-w-full 2xl:h-full">
        <div className="flex flex-col items-center w-full 
       xs:px-0 relative lg:rounded-t-[3rem]">
          <div className="text-center relative z-10 w-full">
            <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 mb-2
           flex flex-row gap-x-4 sm:gap-x-8 xs:items-center  md:items-baseline">
              <div className="w-fit flex justify-items-start mb-2">
                <h1 className="2xl:text-3xl text-base tracking-tight font-light text-white">
                  {"(Optional)"} Underlying premises?
                </h1>
              </div>

              <div className="w-fit h-full justify-items-start mb-1 sm:mb-2 opacity-100">
                <HelpButton info={Step4Help} />
              </div>

            </div>
            <div className="w-full border-none h-44 sm:h-52 xl:h-72 2xl:max-w-168 text-md text-white bg-transparent focus:ring-1 focus:ring-white
     resize-none text-wrap flex justify-items-start">
              <StepsEditor context={premises} setterFunction={getPremises} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


