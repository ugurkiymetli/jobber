import ReactLoading from "react-loading";
interface LoadingString {
  text: string;
  emoji: string;
}
const ThinkingAnimation: React.FC = () => {
  const loadingStrings: LoadingString[] = [
    { text: "Thinking", emoji: "🤔" },
    { text: "Guessing", emoji: "🔮" },
    { text: "Wondering", emoji: "🤷‍♀️" },
    { text: "Deciding", emoji: "✅" },
    { text: "Considering", emoji: "🤔" },
    { text: "Doubting", emoji: "❓" },
    { text: "Puzzling", emoji: "🧩" },
    { text: "Contemplating", emoji: "🧐" },
    { text: "Speculating", emoji: "🤞" },
    { text: "Imagining", emoji: "🌈" },
    { text: "Planning", emoji: "📝" },
    { text: "Wandering", emoji: "🚶‍♂️" },
  ];

  function getRandomString(): string {
    const randomIndex = Math.floor(Math.random() * loadingStrings.length);
    const { text, emoji } = loadingStrings[randomIndex];
    return `${text} ${emoji}`;
  }

  const randomString = getRandomString();
  return (
    <div className="flex flex-col items-center">
      <ReactLoading
        type="spin"
        color="#ccc"
        className="mb-3"
        height={50}
        width={50}
      />
      <p>{randomString}</p>
    </div>
  );
};

export default ThinkingAnimation;
