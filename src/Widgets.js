import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return <div className="widget__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className='widgets'>
            <div className="widget__header">
                <h2>Linked News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Malai React is back", "Top bews - 9099 readers")}
            {newsArticle("Tesla hits", "Top bews")}
            {newsArticle("Bitcoin breaks $22", "Cars & Auto")}
            {newsArticle("Papa tuts are great", "PAPA bews")}
            {newsArticle("Malai ennada panna pora", "therlaye pathukalam vidra")}
        </div>
    )
}

export default Widgets