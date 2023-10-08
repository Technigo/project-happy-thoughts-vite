import React from 'react';

const CharacterCount = ({ inputValue }) => {
    const maxLength = 140;
    const remainingChars = maxLength - inputValue.length;
    const isOverLimit = remainingChars < 0;

    const counterStyle = {
        color: isOverLimit ? 'red' : 'black',
    };

    return (
        <div class="character-count">
            <div style={counterStyle}>
                {remainingChars}/{maxLength} characters remaining
            </div>
        </div>
    );
};

export default CharacterCount;
