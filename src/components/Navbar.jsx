import React from "react"

import { AiOutlinePlus } from "react-icons/ai"

export default function Navbar() {
	return (
		<div class="navbar bg-primary mb-4 py-4">
			<div className="container mx-auto">
				<div class="flex-1">
					<h1 className="font-gold font-bold text-3xl text-white">
						STARTUP CHAIN
					</h1>
				</div>
				<div class="flex-none">
					<button className="btn btn-secondary">
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
