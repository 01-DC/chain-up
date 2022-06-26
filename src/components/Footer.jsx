import React from "react"

import { AiOutlineStar } from "react-icons/ai"

export default function Footer() {
	return (
		<footer className="bg-neutral text-neutral-content mt-4">
			<div className="container mx-auto footer py-10">
				<div className="flex justify-between items-center w-full">
					<p>{"Made with <3 by DC and Niroj"}</p>
					<a href="https://github.com/01-DC/chain-up">
						<button class="btn gap-2">
							<AiOutlineStar style={{ fontSize: "24px" }} />
							Github
						</button>
					</a>
				</div>
			</div>
		</footer>
	)
}
