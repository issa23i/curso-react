

const Input = ({ input, setInput }) => {
  const inputChange = (text) => {
    setInput(text.target.value);
  };
  console.log(input);
  return <input value={input} onChange={inputChange} />;
};

export default Input;
