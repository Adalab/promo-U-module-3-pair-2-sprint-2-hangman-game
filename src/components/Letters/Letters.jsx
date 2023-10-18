import '../../styles/layout/Letters.scss'

function Letters ({lastLetter,handleLetter,userLetters,word}) {
 const handleInputLetter=(ev) => {
  ev.preventDefault()
  handleLetter(ev.target.value)}

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      return (
        <li key={index} className='letter'>
          {userLetters.includes(eachLetter) ? eachLetter : ''}
        </li>
      );
    });
  };
  const renderErrorLetters = () => {
    return userLetters
      .filter((eachLetter) => (word.includes(eachLetter) ? '' : eachLetter))
      .map((eachLetter, index) => (
        <li key={index} className='letter'>
          {eachLetter}
        </li>
      ));
  };
  

    return (
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInputLetter}
            />
          </form>
        </section>
    );
}

export default Letters;