import React from 'react'
import styled from 'styled-components';


const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
    console.log(error);
}

const Svg = styled.svg`
    width:2em;
    height:2em;
`
type IconItem = {
    name: string,
}
function Icon(props: IconItem) {
    return (
        <Svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </Svg>
    )
}

export default Icon