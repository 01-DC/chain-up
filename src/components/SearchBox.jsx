import React from "react"

import { AiOutlineSearch } from "react-icons/ai"

export default function SearchBox() {
	return (
		<div className="flex flex-row-reverse my-4">
			<div className="form-control">
				<div className="input-group">
					<input
						type="text"
						placeholder="Search…"
						className="input input-bordered"
					/>
					<button className="btn btn-secondary btn-square text-xl">
						<AiOutlineSearch />
					</button>
				</div>
			</div>
		</div>
	)
}
