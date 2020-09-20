import React from 'react'
import { render } from '@testing-library/react'
import './Style.css'
import pic from '../Images/ImagePankaj.jpg'


function Name()
{
    render()
    {
        return(
            <div class = "positioning">
                <div >
                    <img src = {pic} className = "circle-image"/>
                </div>

                <div className = "name">
                    <h1 className = "name-style">Pankaj Katkar</h1>
                </div>
            </div>
        )
    }
}

export default Name