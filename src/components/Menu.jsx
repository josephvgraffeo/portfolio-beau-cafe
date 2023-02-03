import {useState} from "react";
import "./menu.css"

export default function Menu() {
    const [coffees, setCoffees] = useState();
    const [message, setMessage] = useState("Welcome to the Beau Café!");
    const getCoffees = (temperature) => {
      setMessage("Loading...")
      fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then(res => res.json())
      .then(setCoffees)
      .catch(alert)
    }
    
    return (
    <article>
      <div>
        <button onClick={() => getCoffees("hot")}>Hot Coffees</button>
        <button onClick={() => getCoffees("iced")}>Iced Coffees</button>
      </div>
      {!coffees
      ? <h2>{message}</h2>
      : <section className="coffee-container">
          {coffees.map(coffee => (
          <div key={coffee.id} className="coffee-card">
            <img src={coffee.image} alt={coffee.title} />
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
          </div>))}
      </section>
      };
    </article>
    );
}