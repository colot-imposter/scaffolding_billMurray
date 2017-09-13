import React, {Component} from 'react';
import actors from '../data/actors.js'

class Section extends Component {
  render() {
    let fame = actors.map((actor) => {
      return (
        <section>
          <img src="https://fillmurray.com/300/300" alt="Bill Murray"/>
          <ul className="list-group">
            <li className="list-group-item" key={actor.id}>
              <li>
                <div>Name: {actor.name}
                </div>
              </li>
              <li>
                <div>Alias: {actor.also_known_as}</div>
              </li>
              <li>
                <div>Popularity (?/10): {actor.popularity}</div>
              </li>
              <li>
                <div>Birthday: {actor.birthday}
                </div>
              </li>

              <li>
                <div>Date of Death: {actor.deathday === null
                    ? "Still Alive"
                    : actor.deathday}
                </div>
              </li>
              <li>
                <div>Gender: {actor.gender === 1
                    ? "Female"
                    : "Male"}</div>
              </li>
              <p>Biography: {actor.biography}</p>
            </li>
          </ul>
        </section>
      )
    }
  )
  return (
        <div className="App">
          {fame}
        </div>
      );

  }
  }

  export default Section
