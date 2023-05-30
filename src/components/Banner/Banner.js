import React, { useEffect, useState } from 'react';

const Banner = () => {
    const API_KEY = "b25a18b374dfe6f5760748f0e12f0895"

    const [inputCity, setInputCity] = useState("");
    const [data, setData] = useState();

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlChangeInput = (e) => {
        setInputCity(e.target.value)
    }

    const handleSearch = () => {
        fetchWeatherData(inputCity)
    }

    useEffect(() => {

        fetchWeatherData("Delhi")
    }, [])






    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/DYCS3G8/bg-image.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='mb-20 flex'>
                            <input type="text" value={inputCity} onChange={handlChangeInput} placeholder="Type here" className="input text-slate-500 font-semibold input-bordered w-full max-w-xs" />
                            <button onClick={handleSearch} className="btn btn-primary">Search</button>
                        </div>
                        <img src="https://openweathermap.org/img/wn/02d@2x.png" className='mx-auto' alt="" />
                        <h1 className="mb-5 text-5xl font-bold">{data?.name}</h1>
                        <p className="mb-5 text-2xl">{data?.main?.temp}°C</p>
                        <p className="mb-5">{data.weather[0].main}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;