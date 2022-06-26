import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { ContextProvider } from "./contexts/ContextProvider"
import "./index.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>
)
