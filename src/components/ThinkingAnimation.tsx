import ReactLoading from 'react-loading';

const ThinkingAnimation: React.FC = () => {
  return (
    <div>
      <ReactLoading type="spin" color="#000" height={50} width={50} />
      <p>Thinking...</p>
    </div>
  );
};

export default ThinkingAnimation;
