export function LeftArrow() {
	return <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width="40" height="40" viewBox="0 0 65 65" fill="none" className="group">
		<circle strokeWidth="1.5px" cx="32.5" cy="32.5" r="32" stroke="white" className="group-hover:stroke-[#DA0400] transition-[stroke]" />
		<circle cx="32.5" cy="32.5" fill="#DA0400" r="32" className="transition-transform origin-center scale-0 group-hover:scale-100" />
		<path strokeWidth="1.5px" d="M18.4697 32.4697C18.1768 32.7626 18.1768 33.2374 18.4697 33.5303L23.2426 38.3033C23.5355 38.5962 24.0104 38.5962 24.3033 38.3033C24.5962 38.0104 24.5962 37.5355 24.3033 37.2426L20.0607 33L24.3033 28.7574C24.5962 28.4645 24.5962 27.9896 24.3033 27.6967C24.0104 27.4038 23.5355 27.4038 23.2426 27.6967L18.4697 32.4697ZM47 32.25L19 32.25L19 33.75L47 33.75L47 32.25Z" fill="white" />
	</svg>
}

export function RightArrow() {
	return <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width="40" height="40" viewBox="0 0 65 65" fill="none" className="group">
		<circle strokeWidth="1.5px" cx="32.5" cy="32.5" r="32" stroke="white" className="group-hover:stroke-[#DA0400] transition-[stroke]" />
		<circle cx="32.5" cy="32.5" fill="#DA0400" r="32" className="transition-transform origin-center scale-0 group-hover:scale-100" />
		<path className="group-hover:stroke-white" strokeWidth="1.5px" d="M47.5303 33.5303C47.8232 33.2374 47.8232 32.7626 47.5303 32.4697L42.7574 27.6967C42.4645 27.4038 41.9896 27.4038 41.6967 27.6967C41.4038 27.9896 41.4038 28.4645 41.6967 28.7574L45.9393 33L41.6967 37.2426C41.4038 37.5355 41.4038 38.0104 41.6967 38.3033C41.9896 38.5962 42.4645 38.5962 42.7574 38.3033L47.5303 33.5303ZM19 33.75L47 33.75L47 32.25L19 32.25L19 33.75Z" fill="white" />
	</svg>
}

/**
 * Horizontally scrolls into view the target element of a container.
 * @param {HTMLElement} container
 * @param {HTMLElement} target
 */
export function hrScrollIntoView(container, target) {
	const targetRect = target.getBoundingClientRect();
	const containerRect = container.getBoundingClientRect();

	// Scroll to the target position
	container.scrollTo({
		left: container.scrollLeft + targetRect.left - containerRect.left,
		behavior: "smooth",
	});
}

/**
 * Vertically scrolls into view the target element of a container.
 * @param {HTMLElement} container
 * @param {HTMLElement} target
 */
export function vrScrollIntoView(container, target) {
	const targetRect = target.getBoundingClientRect();
	const containerRect = container.getBoundingClientRect();

	// Scroll to the target position
	container.scrollTo({
		top: container.scrollTop + targetRect.top - containerRect.top,
		behavior: "smooth",
	});
}

/**
 * Maps a values to give a constrain.
 * @param {Number} number
 * @param {Number} inMin
 * @param {Number} inMax
 * @param {Number} outMin
 * @param {Number} outMax
 * @returns {Number}
 */
export function mapRange(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Takes a string and returns a ReactNode with each word wrapped in a span. Useful for text transitions.
 * @param {String} text
 * @returns ReactNode
 */
export function SplitText({ text, func = (i) => (0.6 + i * 0.1) }) {
	let txtArr = text.split(" ");
	return txtArr.map((val, i) => (
		<span
			key={i}
			style={{
				transitionDelay: `${func(i)}s`,
			}}
		>
			{val}
		</span>
	));
}


/**
 * Scrolls the image cards to the previous card;
 * @param {React.Ref} cardsScrollElm 
 * @param {React.Ref} currCardIndex 
 * @param {React.Ref} lastScrollTime Used for stopping click spamming
 * @param {Number} scrollCoolDownTime Used for stopping click spamming, higher the number the more cool down there is after each scroll
 */
export function scrollPrevious(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) {
	if (Date.now() - lastScrollTime.current > scrollCoolDownTime) {
		currCardIndex.current = currCardIndex.current == 0 ? Speaker_data.length - 1 : currCardIndex.current - 1;
		hrScrollIntoView(cardsScrollElm.current, cardsScrollElm.current.children[currCardIndex.current]);
		lastScrollTime.current = Date.now();
	}
}

/**
 * Scrolls the image cards to the next card;
 * @param {React.Ref} cardsScrollElm 
 * @param {React.Ref} currCardIndex 
 * @param {React.Ref} lastScrollTime Used for stopping click spamming
 * @param {Number} scrollCoolDownTime Used for stopping click spamming, higher the number the more cool down there is after each scroll
 */
export function scrollNext(cardsScrollElm, currCardIndex, lastScrollTime, scrollCoolDownTime, Speaker_data) {
	if (Date.now() - lastScrollTime.current > scrollCoolDownTime) {
		currCardIndex.current = currCardIndex.current == Speaker_data.length - 1 ? 0 : currCardIndex.current + 1;
		hrScrollIntoView(cardsScrollElm.current, cardsScrollElm.current.children[currCardIndex.current]);
		lastScrollTime.current = Date.now();
	}
}