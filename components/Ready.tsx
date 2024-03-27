const Ready = ({ numQuestions, handleClick }: any) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      {/* <Button dispatch={dispatch} status={start} */}
      <button className="btn btn-ui" onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
};

export default Ready;
