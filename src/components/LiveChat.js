import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomStringGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomStringGenerator(7),
          message: randomStringGenerator(20),
        }),
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[550px] ml-2 p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Nikita",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
        className=" p-2 ml-2 border border-black"
      >
        <input
          className="w-[450px] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
