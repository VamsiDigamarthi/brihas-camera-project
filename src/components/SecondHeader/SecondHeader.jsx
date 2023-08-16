import React from 'react'
import './SecondHeader.css'
import {Link} from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'

const distict = [
    {
        name : "All"
    },
    {
        name : "Hyderbad"
    },
    {
        name : "Medchal Malkajigiri"
    },
    {
        name : "Rangareddy"
    }
]

const assembly = [
    {
        name : "All"
    },
    {
        name : "Court-Hall-1"
    },
    {
        name : "Court-Hall-2"
    },
    {
        name : "Court-Hall-3"
    }

]

const SecondHeader = () => {
  return (
    <div className='secondheader-main'>
         <select className='selected-drop'>
            <option disabled selected >
                Please select distict
            </option>
            {distict.map((each, index) => (
                <option key={index}>{each.name}</option>
            ))}
        </select>
        <select className='selected-drop'>
            <option disabled selected >
                Please select assembly
            </option>
            {assembly.map((each, index) => (
                <option key={index}>{each.name}</option>
            ))}
        </select>
        <select className='selected-drop'>
            <option disabled selected >
                Please select stream
            </option>
            <option>All</option>
            <option>Online</option>
            <option>Offline</option>
        </select>
        <div className='apply-btn'>
            <button>Apply</button>
        </div>
        <div className='two-input-with-icon'>
            <input type='text' placeholder='AC No' />
            <input type='text' placeholder='PC No' />
            <div>
                 <BiSearchAlt2 />
            </div>
        </div>
        <div className='tile-buttons-main' >
            <button>Tile</button>
            <Link to="/multi">
                <button>Multi</button>
            </Link>
            <button>Rewind</button>
        </div>
    </div>
  )
}

export default SecondHeader