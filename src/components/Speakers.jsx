"use client";

import {useRef, useEffect} from "react";
import cardBg from "../../public/backgrounds/speaker-card-bg.webp"
import {Speaker_data} from "@/data/SpeakersData.js";
import {hrScrollIntoView, SplitText, scrollNext, scrollPrevious, LeftArrow, RightArrow} from "./SpeakerCards/Support";
import cardsScrollLogic from "@/components/SpeakerCards/cardsScrollLogic";
import "@/components/SpeakerCards/speakerStyles.css";
import Image from "next/image";
export default function Speaker() {

    let currCardIndex = useRef(0);
    const leftScroll = useRef(null),
        cardsScrollElm = useRef(null),
        cardsParentElm = useRef(null),
        lastScrollTime = useRef(null),
        scrollCoolDownTime = 400, //in ms
        parentHasMouseOver = useRef(false);

    useEffect(() => {
        let timer = null,
            cardContElm = cardsScrollElm.current;

        function doScrollEvent() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                cardsScrollLogic(cardContElm, currCardIndex, leftScroll);
            }, 100);
        }

        //Detect scroll for the card container;
        cardContElm.addEventListener('scroll', doScrollEvent);
        //Do the necessary changes on first load;
        doScrollEvent();

        //Code for keyboard navigation, works when user has mouse over on the cards element.
        cardsParentElm.current.addEventListener('mouseover', () => {
            parentHasMouseOver.current = true;
        })
        cardsParentElm.current.addEventListener('mouseleave', () => {
            parentHasMouseOver.current = false;
        })

        window.onkeydown = (e) => {
            if (!parentHasMouseOver.current) {
                return false;
            }
            switch (e.key) {
                case 'ArrowLeft':
                    scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    break;
                case 'ArrowRight':
                case ' ':
                    scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    break;
            }
        };

    }, []);

    return <section className="my-8 w-full pr-0 p-20 lg:pr-0 max-md:p-10 max-sm:p-0 overflow-x-hidden">
        <h1 className="max-sm:p-10 text-5xl font-poppins font-thin leading-loose">Speakers</h1>
        <br/><br/>
        {/* Speaker cards start here */}
        <div className="flex flex-[0_0_auto] w-full h-[600px] max-md:flex-col-reverse max-md:h-[auto]"
             ref={cardsParentElm}>
            {/* Name and description container */}
            <div
                className="relative w-[30%] h-[100%] max-lg:w-[40%] max-md:w-[100%] max-md:mt-10 max-md:h-[600px] max-sm:h-[600px] max-sm:px-10">
                {/* This element prevents scrolling */}
                <div className="absolute w-full h-full z-20"></div>
                <div
                    className="w-full h-full flex flex-col scroll-snap-y scroll-snap-start hide-scrollbar overflow-hidden details-container"
                    ref={leftScroll}>
                    {Speaker_data.map((speaker, index) => {
                        return <div key={index + 50}
                                    className="flex-grow max-w-[100%] min-h-full flex flex-col justify-center max-md:justify-start">
                            <h2 className="font-poppins text-5xl font-extrabold leading-[100%] flex flex-col uppercase">
                                <SplitText text={speaker.name}/>
                            </h2>
                            <br/>
                            <div className="flex items-center ">
                                <p className="leading-[137.5%] font-poppins font-light">
                                    {speaker.description}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            {/*Image and navigation components*/}
            <div
                className="w-[70%] max-h-full flex flex-col gap-10 justify-end pl-5 max-lg:w-[60%] max-md:w-[100%] max-md:pl-0">
                {/*Image card container*/}
                <div
                    className="w-full flex items-end overflow-x-scroll overflow-y-hidden scroll-snap-x scroll-snap-start hide-scrollbar last-scroll-padd"
                    ref={cardsScrollElm}>
                    {
                        Speaker_data.map((speaker, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    hrScrollIntoView(cardsScrollElm.current, cardsScrollElm.current.children[index]);
                                }}
                                     className="flex-[0_0_auto] w-[380px] max-sm:w-[250px] aspect-[10/13] relative flex items-end justify-center select-none p-5 overflow-visible cards-container">
                                    <div
                                        className="flex justify-center w-full h-full relative sub-card-cont origin-bottom">
                                        <div
                                            className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[15px] card-bg-container">
                                            <Image src={cardBg} className="h-full" alt="Cards background"/>
                                        </div>
                                        <Image src={speaker.image} className="absolute bottom-0 min-w-[140%] select-none"
                                             alt={speaker.name}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Navigation */}
                <div className="flex gap-8 pl-[20px] items-center">
                    <a onClick={() => {
                        scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    }}><LeftArrow/></a>
                    <a onClick={() => {
                        scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data)
                    }}><RightArrow/></a>
                    <span className="h-[0.5px] w-[60%] max-sm:w-[50%] bg-white"></span>
                </div>
            </div>
        </div>
    </section>
}