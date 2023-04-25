import './DestinationContent.scss'
import data from '../../assets/data.json'
import { useState } from 'react'

export default function DestinationContent () {
    const [destination, setDestination] = useState(data.destinations['0'])

    return (
        <section className='destination__container'>
            <div className="destination__header"><span>01</span>PICK YOUR DESTINATION</div>
            <div className="destination__image">
                <img src={destination.images.png} alt="" />
            </div>
            <div className="destination__btns">
                <button onClick={() => setDestination(data.destinations['0'])} className={destination.name === 'Moon' ? 'active' : ""}>MOON</button>
                <button onClick={() => setDestination(data.destinations['1'])} className={destination.name === 'Mars' ? 'active' : ""}>MARS</button>
                <button onClick={() => setDestination(data.destinations['2'])} className={destination.name === 'Europa' ? 'active' : ""}>EUROPA</button>
                <button onClick={() => setDestination(data.destinations['3'])} className={destination.name === 'Titan' ? 'active' : ""}>TITAN</button>
            </div>
            <div className="destination__info">
                <h2>{(destination.name).toUpperCase()}</h2>
                <p>{destination.description}</p>
            </div>
            <div className="destination__stats">
                <div className="destination__stats-distance">
                    <h4>AVG. DISTANCE</h4>
                    <h3>{(destination.distance).toUpperCase()}</h3>
                </div>
                <div className="destination__stats-travel">
                    <h4>EST. TRAVEL TIME</h4>
                    <h3>{(destination.travel).toUpperCase()}</h3>
                </div>
            </div>
        </section>
    )

}