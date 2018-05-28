import React from 'react';
import './Home.css'

export default class Home extends React.Component {
    render () {
        return (
            <div className='home'>

                    <div className='home1'>1</div>
                    <div className='home2'>
                        <div className='home21'>
                            <div><img className='imag21' src='http://www.servprovirginiabeach.com/FranchiseContent/NewsPhotos/8241-c8f1af5a-d0c8-421a-9f67-bb1e1b2478de.jpg'/></div>
                            <div className='beforeafter'>
                                <h3>Air Duct Cleaning</h3>
                                <p>We use A HEPA filtrated vacuum to brush and vacuum out each vent, cold air return and main lines</p>
                            </div>
                        </div>
                        <div className='home22'>
                            <div><img className='imag22' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYbkSwBaNR2Lw5qxiEq06EkT0WuRQo0pC3sGRo-cu5DV8RGZl'/></div>
                            <div className='beforeafter2'>  <p>Our UV systems emit very powerful ultraviolet rays that sterlize the air on a microscopic level. They operate continuously, purifying your indoor air 24 hours a day</p></div>
                        </div>
                        <div className='home23'>
                            <div><img className='imag23' src='https://www.servicemaster-ncr.com/wp-content/uploads/2015/12/ServiceMaster-Mold-Removal-1.jpg'/></div>
                            <div className='beforeafter3'> <p>Mold can create an indoor environment that can be hazardous to its occupants. A simple mold inspection can help identify the source of the problem, and we inform you about the right steps to take</p></div>
                        </div>


                    </div>
                    <div className='home3'>3</div>

            </div>
        )
    }
}
