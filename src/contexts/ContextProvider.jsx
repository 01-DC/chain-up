import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [selectedItem, setSelectedItem]= useState(null)
	return (
		<StateContext.Provider
			value={{
				data,
				setData,
				selectedItem,
				setSelectedItem,
			}}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
