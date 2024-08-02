import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, typingSpeed }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [text, typingSpeed]);

    return <span>{displayedText}</span>;
};

export default TypingAnimation;

// // Example usage:
// const MyComponent = () => {
//     return (
//         <div>
//             <p>Typing animation:</p>
//             <TypingAnimation text="Hello, World!" typingSpeed={100} />
//         </div>
//     );
// };

// export default MyComponent;
