import React from "react"

export default function AddNewStartup() {
	const handleSubmit = async (e) => {
		e.preventDefault()
		let resBody = JSON.stringify({
			name: e.target[0].value,
			domain: e.target[1].value,
			valuation: e.target[2].value,
			revenue: e.target[3].value,
			age: e.target[4].value,
			details: e.target[5].value,
			description: e.target[6].value,
			perksList: e.target[7].value,
			cryptoAddress: e.target[8].value,
			companyLogo: e.target[9].value,
			pitchVideo: e.target[10].value,
		})
		console.log(resBody)
		try {
			let res = await fetch("http://localhost:5000/api/todos", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: resBody,
			})
			let resJson = await res.json()
			if (res.status === 200) {
				console.log("Submitted successfully")
			} else {
				console.log("Some error occured")
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="w-full">
			<div className="rounded-box bg-primary p-4 mt-4">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label label-text text-white">
							Name of your startup
						</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							className="input input-bordered"
							maxLength={200}
							required
						/>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							Select the domain of your startup
						</label>
						<select
							className="select select-bordered"
							name="domain">
							<option>Web3</option>
							<option>Finance</option>
							<option>Education</option>
							<option>Healthcare</option>
							<option>Other</option>
						</select>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							Current Valuation
						</label>
						<input
							type="number"
							placeholder="In currency format"
							name="valuation"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							Current Revenue
						</label>
						<input
							type="number"
							placeholder="In currency format"
							name="revenue"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							When it started
						</label>
						<input
							type="date"
							name="age"
							className="input input-bordered"
							required
						/>
					</div>

					<div className="form-control">
						<label className="label label-text text-white">
							Describe your startup and it's primary aim
						</label>
						<input
							type="text"
							placeholder="Short Description"
							className="input input-bordered"
							name="details"
							maxLength={250}
							required
						/>
					</div>

					<div className="form-control">
						<label className="label label-text text-white">
							Describe the aims and primary products / services of
							your startup
						</label>
						<textarea
							className="textarea textarea-bordered h-24 resize-none"
							placeholder="Long Description"
							name="description"
							required></textarea>
					</div>

					<div className="form-control">
						<label className="label label-text text-white">
							{
								"Exclusive subscription perks (comma separated list)"
							}
						</label>
						<textarea
							className="textarea textarea-bordered h-20 resize-none"
							placeholder="List of perks"
							required></textarea>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							Enter address of crypto wallet
						</label>
						<input
							type="text"
							placeholder="Wallet address"
							className="input input-bordered"
							name="cryptoAddress"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							URL of Logo image
						</label>
						<input
							type="url"
							placeholder="Logo URL"
							name="companyLogo"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label label-text text-white">
							Video URL for your product / services
						</label>
						<input
							type="url"
							placeholder="Valid URL (only 1)"
							className="input input-bordered"
							name="pitchVideo"
						/>
					</div>
					<div className="form-control mt-6">
						<button type="submit" className="btn btn-secondary">
							Submit Details
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
