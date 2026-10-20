import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum color sit amet, consecteur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum color sit amet, consecteur adip",
                    replies: [],
                  },
                ],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum color sit amet, consecteur adip",
                replies: [],
              },
            ],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum color sit amet, consecteur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum color sit amet, consecteur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum color sit amet, consecteur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
