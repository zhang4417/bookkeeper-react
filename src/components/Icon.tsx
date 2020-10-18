import React from 'react'
import "style/icon.scss"
require('icons/money.svg')
require('icons/tag.svg')
require('icons/statistics.svg')

function Icon(props: any) {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon