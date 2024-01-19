import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function AllCountries({theme}) {
    const [countries, setCountries] = useState([]);
    const [continentFilter, setContinentFilter] = useState("");
    const [currencyFilter, setCurrencyFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }, []);

    const filteredCountries = countries.filter((country) => {
        return (continentFilter === '' || country.region === continentFilter) &&
        (currencyFilter === '' || (country.currencies && Object.keys(country.currencies).includes(currencyFilter))) &&
        (languageFilter === '' || (country.languages && Object.values(country.languages).includes(languageFilter))) &&
        (searchTerm === '' || country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
    });


    return (
        <div className="container mx-auto p-4 sm:p-32">
            <h1 className="text-2xl font-bold mb-4  py-4">All Countries</h1>
            < div className="flex flex-wrap gap-4 my-4">
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search by country"
                        className={`shadow-md p-5 bg-p-5 rounded-lg pl-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <select className={`rounded-lg shadow-md p-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} onChange={(e) => setContinentFilter(e.target.value)}>
                    <option value="">Filter by Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select className={`rounded-lg shadow-md p-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} onChange={(e) => setCurrencyFilter(e.target.value)}>
                    <option value="">Filter by Currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                    <option value="NZD">NZD</option>
                    <option value="CNY">CNY</option>
                    <option value="JPY">JPY</option>
                    <option value="RUB">RUB</option>
                    <option value="INR">INR</option>
                </select>
                <select className={`rounded-lg shadow-md p-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} value={languageFilter} onChange={e => setLanguageFilter(e.target.value)}>
                    <option value="">Filter by Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4">
                {filteredCountries.map((country, index) => (
                    <Link to={`/country/${country.name.common}`} key={index}> {/* Add Link here */}

                        <div className={`shadow-md p-4 sm:h-64 md:h-64 lg:h-400 overflow-y rounded-lg  hover:bg-indigo-100 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`} key={index}>
                            <img className="w-full h-auto" src={country.flags.png} alt={country.name.common} />
                            <h2 className="text-xl font-semibold mt-2">{country.name.common}</h2>
                            <h3 className="text-base mt-1">{country.capital}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AllCountries;