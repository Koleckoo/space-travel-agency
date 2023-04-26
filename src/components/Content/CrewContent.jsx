import './CrewContent.scss'
import data from '../../assets/data.json'
import { useState } from 'react'

export default function CrewContent () {

    const [crew, setCrew] = useState(data.crew['0'])

    return (
        <section className='crew__container'>
            <div className='crew__col'>
                <div className="crew__header">
                    <span>02</span>MEET YOUR CREW
                </div>
                <div className='crew__info'>
                    <h4>{(crew.role).toUpperCase()}</h4>
                    <h2>{(crew.name).toUpperCase()}</h2>
                    <p>{crew.bio}</p>
                </div>
                <div className='crew__btns'>
                    <button onClick={() => setCrew(data.crew['0'])} className= {crew.role === "Commander" ? 'btn btn-active' : "btn"}></button>
                    <button onClick={() => setCrew(data.crew['1'])} className= {crew.role === "Mission Specialist" ? 'btn btn-active' : "btn"}></button>
                    <button onClick={() => setCrew(data.crew['2'])} className= {crew.role === "Pilot" ? 'btn btn-active' : "btn"}></button>
                    <button onClick={() => setCrew(data.crew['3'])} className= {crew.role === "Flight Engineer" ? 'btn btn-active' : "btn"}></button>
                </div>
                
            </div>
            <div className='crew__col'>
                <div className='crew__image'>
                    <img src={crew.images.png} alt="" />
                </div>
            </div>
        </section>
    )

}