import React, { useContext } from 'react'
import { UserRegister } from '../../providers/userRegister'

function Account() {
    const { state, dispatch } = useContext(UserRegister);

    const handleChange = (e) => {
        const { name, value } = e.target
        let dispatchName = ""
        if (name == "email") {
            dispatchName = "SET_EMAIL"
        }
        else if (name == "password") {
            dispatchName = "SET_PASSWORD"
        }
        dispatch({ type: dispatchName, payload: value });

    }
    return (
        <div className="flex flex-col">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Email
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={state.email || ""}
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Password
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={state.password || ""}
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
        </div>
    )
}

export default Account