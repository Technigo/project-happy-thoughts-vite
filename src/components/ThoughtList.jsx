
import { SingleThought } from "./SingleThought";
import "../index.css";

export const ThoughtList = ({ messageList }) => {
    return (
        <section className="message-list-wrapper">
            {messageList.map((singleThought) => (
                <SingleThought
                    key={singleThought._id}
                    singleThought={singleThought}
                />
            ))}
        </section>
    );
};

