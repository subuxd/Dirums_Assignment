import React, { useState } from "react";
import data from "../constants/data.json";
const MegaMenu = () => {
  const [position, setPositon] = useState({ left: 0 });

  const handleMenuHover = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(rect);
    const top = rect.bottom + window.scrollY;
    console.log(window.innerWidth);
    const left = Math.min(rect.left, window.innerWidth - 1500);

    console.log(top, left);

    setPositon({ left: left });
  };

  return (
    <div>
      <div className="hidden w-[100vw] h-[100vh]  showNotResponisve">
        <span>
          I regret to inform you that the website is not yet optimized for
          mobile devices. Due to urgent tasks, I prioritized other aspects. For
          a better viewing experience, please check the site on a laptop or
          tablet. I appreciate your understanding.
        </span>
      </div>
      <div className="h-14 relative z-20  bg-[#cc8e51] flex flex-1 w-[100vw] flex-wrap  flex-shrink Responsivenss    text-white justify-center  gap-1 font-medium items-center">
        {data.map((parentData) => {
          if (parentData.parent !== null) return;
          return (
            <>
              <div className="relative group">
                <span
                  onMouseEnter={handleMenuHover}
                  className="hover:bg-white mb-1 w-[4vw]  h-14 hover:py-[16px]  text-lg px-[2vw] hover:text-[#cc8e51]"
                >
                  {parentData.name}
                </span>
                <div className="w-full">
                  <div
                    className="absolute  flex flex-col flex-wrap flex-grow-0 justify-start items-start  gap-1 h-[42vh] w-max  group-hover:visible text-black top-[42px] bg-white invisible p-8 right-[-158px] shadow-2xl"
                    style={{ left: `-${position.left}px` }}
                  >
                    {data.map((firstChild) => {
                      if (
                        firstChild?.parent?.parent === null &&
                        firstChild?.parent?.name === `${parentData.name}`
                      ) {
                        return (
                          <>
                            <div className="">
                              <div className="w-[10vw]">{firstChild.name}</div>
                              {data.map((secondChild) => {
                                if (
                                  secondChild?.parent?.name ===
                                  `${firstChild?.name}`
                                ) {
                                  return (
                                    <>
                                      <div className="text-sm mb-1 font-thin">
                                        {secondChild?.name}
                                      </div>
                                    </>
                                  );
                                }
                              })}
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
