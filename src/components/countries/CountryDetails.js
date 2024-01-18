import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CountryDetails({theme}) {
    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { name } = useParams(); // Use useParams to get the name
 // Use useEffect to fetch the data from https://restcountries.com/v3.1/name/{name}
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((data) => {
            setCountry(data[0]);
            setIsLoading(false);
        });
    }, [name]);

    console.log(country);

    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        <Link to="/all" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to All Countries</Link> {/* Add this line */}

        {country && <div className={`rounded-md  grid grid-cols-2 gap-12 my-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="shadow-md p-4">
                <img className="w-full h-auto" src={country.flags["png"]} alt={country.name.common} />
            </div>
            <div className={`rounded-md  p-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                <h2 className="text-3xl font-bold">{country.name.common}</h2>
                <p className="py-2"><strong>Official Name:</strong> {country.name.official}</p>
                <p className="py-2"><strong>Region:</strong> {country.region}</p>
                <p className="py-2"><strong>Subregion:</strong> {country.subregion}</p>
                <p className="py-2"><strong>Capital:</strong> {country.capital[0]}</p>
                <p className="py-2"><strong>Population:</strong> {country.population}</p>
                <p className="py-2"><strong>Area:</strong> {country.area} km²</p>
                <p className="py-2"><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
                <p className="py-2"><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>

                <p className="py-4">
                    <strong>Borders:</strong>
                    {country.borders && country.borders.length > 0 ? country.borders.join(', ') : 'No borders'}
                </p>
            </div>
        </div> }
    </div>
  );
}

export default CountryDetails;