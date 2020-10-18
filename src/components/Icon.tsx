import React from 'react'
import "style/icon.scss"


const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
    console.log(error);
}

function Icon(props: any) {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon