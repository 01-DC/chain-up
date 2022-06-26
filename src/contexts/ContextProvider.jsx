import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
	const [data, setData] = useState([])

	return (
		<StateContext.Provider
			value={{
				data,
				setData,
			}}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
