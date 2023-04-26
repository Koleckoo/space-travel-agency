import './TechnologyContent.scss'
import data from'../../assets/data.json'
import { useState } from 'react'

export default function TechnologyContent () {

    const [technology, setTechnology] = useState(data.technology['0'])


    return (
    <section className='technology__container'>
        <div className="technology__header"><span>03</span>SPACE LAUNCH 101</div>
        <div className="technology__btns">
            <button onClick={() => setTechnology(data.technology['0'])} className={technology.name === 'Launch vehicle' ? 'tab tab-active' : 'tab'}>1</button>
            <button onClick={() => setTechnology(data.technology['1'])} className={technology.name === 'Spaceport' ? 'tab tab-active' : 'tab'}>2</button>
            <button onClick={() => setTechnology(data.technology['2'])} className={technology.name === 'Space capsule' ? 'tab tab-active' : 'tab'}>3</button>
        </div>
        <div className="technology__info">
            <h5>THE TERMINOLOGY...</h5>
            <h2>{(technology.name).toUpperCase()}</h2>
            <p>{technology.description}</p>
        </div>
        <div className="technology__image">
            <img className='technology__image-landscape' src={technology.images.landscape} alt="" />
            <img className='technology__image-portrait' src={technology.images.portrait} alt="" />
        </div>
    </section>
    )
}