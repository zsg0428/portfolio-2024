import React from "react";
import Typed from "typed.js";

export const TextAnimation = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
               'I am a Full-stack/Frontend Devloper',
                'Skilled in React',
                'Skilled in NextJS',
                'Skilled in NodeJS',
                'Skilled in JavaScript',
                'Skilled in TypeScript',
                'Skilled in Tailwind',
            ],
            typeSpeed: 20,
            backSpeed: 20,
            loop:true,
            smartBackspace: true
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return <div className='mt-7'>
        <span className="text-yellow mb-5 text-xl text-center md:text-start" ref={el}></span>
    </div>
}
