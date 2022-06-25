import React from "react"

import { AiOutlineSearch } from "react-icons/ai"

export default function SearchBox() {
	return (
		<div className="flex flex-row-reverse my-4">
			<div class="form-control">
				<div class="input-group">
					<input
						type="text"
						placeholder="Search…"
						class="input input-bordered"
					/>
					<button class="btn btn-secondary btn-square text-xl">
						<AiOutlineSearch />
					</button>
				</div>
			</div>
		</div>
	)
}
