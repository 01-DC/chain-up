import React from "react"
import { Routes, Route } from "react-router-dom"

import {
	Navbar,
	Filters,
	InfoCards,
	SearchBox,
	StartupInfo,
  AddNewStartup,
  NotFound
} from "./components"

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
		</div>
	)
}

export default App
