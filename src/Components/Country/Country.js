import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: "50px", width: "80px"};
    const countryStyle = {border: "1px solid tomato",margin: "10px", padding: "10px"};
    const handleAddCountry = props.handleAddCountry;
    

    // console.log(props);
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style = {flagStyle} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick={() => handleAddCountry (props.country)}>Country Add</button>
        </div>
    );
};

export default Country;