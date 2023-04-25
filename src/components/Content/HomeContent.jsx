import { Link } from 'react-router-dom'
import './HomeContent.scss'

export default function HomeContent () {


    return (
        <section className='home__container'>
            <div className="home__text">
                <h5 className=''>SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className=''>SPACE</h1>
                <p className=''>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p> 
            </div>
            <Link className="home__button" to='/destination'><button>EXPLORE</button></Link>
            
            
            
        </section>
    )
}