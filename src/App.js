import React, { useState } from 'react';
import Wheel from './wheel.png';

import things from './things';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


function App() {

    const [activity, setActivity] = useState(null);
    const [thePickedSomething, setThePickedSomething] = useState(false);

    return (
        <div className="w-screen flex items-center justify-center mt-40 flex-col">
            <h1 className="text-6xl">
                Lockdown Roulette
            </h1>
            {
                !thePickedSomething &&
                <div className="flex items-center justify-center lex-col">
                    <img
                        className="w-2/5"
                        src={Wheel}
                        alt="wheel"
                    />
                    {
                        activity &&
                        <span className="absolute p-6 bg-red-500 rounded-full">
                        {activity}
                    </span>
                    }

                </div>
            }
            {
                !thePickedSomething && !activity &&
                <button
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                    onClick={() => {
                        setActivity(
                            things[getRandomIntInclusive(0, 99)]
                        );
                    }}
                >
                    SPIN
                </button>
            }
            {
                !thePickedSomething && activity &&
                    <div className="flex items-center justify-center lex-col">
                        <button
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mr-5"
                            onClick={() => {
                                setActivity(
                                    things[getRandomIntInclusive(0, 99)]
                                );
                            }}
                        >
                            Fuck No
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mr-5"
                            onClick={() => {
                                setActivity(
                                    things[getRandomIntInclusive(0, 99)]
                                );
                            }}
                        >
                            Maybe Later
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                            onClick={() => setThePickedSomething(true)}
                        >
                            Fuck Yeah
                        </button>
                    </div>
            }
            {
                thePickedSomething &&
                <h1 className="text-4xl mt-10 p-5 rounded-full bg-yellow-300 text-center">
                    {activity}
                </h1>
            }
        </div>
    );
}

export default App;
