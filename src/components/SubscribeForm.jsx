import React from "react"

import { FaEthereum } from "react-icons/fa"

export default function SubscribeForm() {
	return (
		<form className="mt-2 px-1" action={{}}>
			<div className="form-control">
				<label className="label">
					<span className="label-text text-white">Name</span>
				</label>
				<input
					type="text"
					placeholder="Name"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div className="form-control">
				<label className="label">
					<span className="label-text text-white">Description</span>
				</label>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div className="form-control">
				<label className="label">
					<span className="label-text text-white">Amount</span>
				</label>
				<input
					type="number"
					placeholder="Amount"
					class="input input-bordered w-full max-w-md"
				/>
			</div>
			<div className="form-control mt-6">
				<button type="submit" className="btn btn-accent text-lg">
					<FaEthereum
						style={{ fontSize: "20px", marginRight: "8px" }}
					/>
					Pay!
				</button>
			</div>
		</form>
	)
}
