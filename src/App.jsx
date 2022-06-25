import React from "react"
import { Routes, Route } from "react-router-dom"

import { Navbar, Filters, InfoCards, SearchBox, StartupInfo } from "./components"

function App() {
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
								<div className="grid grid-cols-4 gap-4">
									<div className="flex flex-col gap-4">
										<Filters />
									</div>
									<div className="col-span-3">
										<InfoCards />
									</div>
								</div>
							</>
						}
					/>
          <Route path="/polygon" element={<StartupInfo />}/>
				</Routes>
			</div>
		</div>
	)
}

export default App
