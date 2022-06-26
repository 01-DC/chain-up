import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import { useStateContext } from "./contexts/ContextProvider"
import {
	Navbar,
	Filters,
	InfoCards,
	SearchBox,
	StartupInfo,
	AddNewStartup,
	NotFound,
	Footer,
} from "./components"

function App() {
	const { setData } = useStateContext()

	async function getAllData() {
		let url = "http://localhost:5000/api/todos"

		let response = await fetch(url, {
			mode: "cors",
		})
		let data = await response.json()
		setData(data)
		console.log(data)
	}

	useEffect(() => {
		getAllData()
	}, [])

	return (
		<div className="">
			<Navbar />
			<div className="my-4 container mx-auto">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<SearchBox />
								<div className="lg:grid lg:grid-cols-4 gap-4">
									<Filters />
									<InfoCards />
								</div>
							</>
						}
					/>
					<Route path="/details" element={<StartupInfo />} />
					<Route path="/new" element={<AddNewStartup />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
