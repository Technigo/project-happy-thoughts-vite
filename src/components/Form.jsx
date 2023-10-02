//This will be the form component 

import "./styleForm.css"
import React, { useState } from "react";


export const Comment = ({ value, updateFormData, handleSubmit }) => {
    const userComment = (e) => updateFormData("comment", e.target.value);

    return (
        <div className="commentInput">
            <div className="commentContent">
                <h2>What's making you happy right now?</h2>
                <form onSubmit={handleSubmit}>

                    <input
                        className="commentBox"
                        type="text"
                        value={value}
                        onChange={userComment}
                        placeholder="Food makes me happy!"
                    />
                    <button>
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/emoji/48/heart-suit.png"
                            alt="heart-suit"
                        />
                        Send happy thought
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/emoji/48/heart-suit.png"
                            alt="heart-suit"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};
