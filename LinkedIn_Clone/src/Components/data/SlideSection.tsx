export interface slide {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
}

// Define the arrays
export const slides: slide[] = [
  {
    id: 1,
    title: "Let the right people know you’re open to work",
    description:
      "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
    src: "https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own",
    alt: "Static Image 1",
  },

  {
    id: 2,
    title: "Conversations today could lead to opportunity tomorrow ",
    description:
      " Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
    src: "https://static.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5",
    alt: "Static Image 2",
  },

  {
    id: 3,
    title: "Stay up to date on your industry",
    description:
      " From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
    src: "https://static.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg",
    alt: "Static Image 3",
  },
];
