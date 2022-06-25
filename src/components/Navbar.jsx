import React from "react"

import { AiOutlinePlus } from "react-icons/ai"

export default function Navbar() {
	return (
		<div className="navbar bg-primary mb-4 py-4">
			<div className="container mx-auto">
				<div className="flex-1">
					<h1 className="font-gold font-bold text-4xl text-white">
						STARTUP CHAIN
					</h1>
				</div>
				<div className="flex-none">
					<button className="btn btn-secondary text-base">
						<AiOutlinePlus
							style={{ fontSize: "20px", marginRight: "8px" }}
						/>{" "}
						Add Your Startup
					</button>
				</div>
			</div>
		</div>
	)
}
