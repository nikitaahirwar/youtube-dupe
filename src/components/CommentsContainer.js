import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Nikita Ahirwar",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Nikita Ahirwar",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [
      {
        name: "Nikita Ahirwar",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [],
      },
      {
        name: "Nikita Ahirwar",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [
          {
            name: "Nikita Ahirwar",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [],
          },
          {
            name: "Nikita Ahirwar",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [
              {
                name: "Nikita Ahirwar",
                text: "Lorem ipsum color sit amet, consecteur adip",
                replies: [
                  {
                    name: "Nikita Ahirwar",
                    text: "Lorem ipsum color sit amet, consecteur adip",
                    replies: [],
                  },
                ],
              },
              {
                name: "Nikita Ahirwar",
                text: "Lorem ipsum color sit amet, consecteur adip",
                replies: [],
              },
            ],
          },
          {
            name: "Nikita Ahirwar",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Nikita Ahirwar",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Nikita Ahirwar",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Nikita Ahirwar",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Nikita Ahirwar",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="md:m-5 p-1 md:p-2">
      <h1 className="font-bold md:text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
