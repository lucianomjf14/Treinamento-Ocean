export function Welcome() {
  return (
    <div className="rick-morty-container">
      <h1 className="title">Rick and Morty</h1>
      
      <div className="cards-container">
        <div className="character-card">
          <div className="character-image">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
          </div>
          <div className="character-info">
            <h3>Rick Sanchez</h3>
            <p className="species">Human</p>
            <span className="status alive">Alive</span>
          </div>
        </div>

        <div className="character-card">
          <div className="character-image">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
          </div>
          <div className="character-info">
            <h3>Morty Smith</h3>
            <p className="species">Human</p>
            <span className="status alive">Alive</span>
          </div>
        </div>

        <div className="character-card">
          <div className="character-image">
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="Summer Smith" />
          </div>
          <div className="character-info">
            <h3>Summer Smith</h3>
            <p className="species">Human</p>
            <span className="status alive">Alive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
