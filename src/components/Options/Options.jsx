function Options({ updateInput, word }) {
  const handleInput = (ev) => {
    updateInput(ev.target.value);
  };

  return (
    <div>
      <form>
        <label className="title" htmlFor="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autoFocus
          autoComplete="off"
          className="form__input"
          maxLength="15"
          type="text"
          id="word"
          name="word"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
export default Options;
