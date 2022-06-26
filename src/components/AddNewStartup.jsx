import React from "react"

export default function AddNewStartup() {
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			let res = await fetch("http://localhost:5000/api/todos", {
				method: "POST",
				body: JSON.stringify({
					name: e.target.name.value,
					details: e.target.details.value,
				}),
			})
			let resJson = await res.json()
			if (res.status === 200) {
				setMessage("User created successfully")
			} else {
				setMessage("Some error occured")
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="w-full">
			<div className="rounded-box bg-primary p-4 mt-4">
				<form action={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">
								Name of your startup
							</span>
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
						<label className="label">
							<span className="label-text text-white">
								URL of Logo image
							</span>
						</label>
						<input
							type="text"
							placeholder="Logo URL"
							name="companyLogo"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">
								Describe your startup and it's primary aim
							</span>
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
						<label className="label">
							<span className="label-text text-white">
								Describe the aims and primary products /
								services of your startup
							</span>
						</label>
						<textarea
							className="textarea textarea-bordered h-24 resize-none"
							placeholder="Long Description"
							name="description"
							required></textarea>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">
								Enter address of crypto wallet
							</span>
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
						<label className="label">
							<span className="label-text text-white">
								{
									"Exclusive subscription perks (comma separated list)"
								}
							</span>
						</label>
						<textarea
							className="textarea textarea-bordered h-20 resize-none"
							placeholder="List of perks"
							required></textarea>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text text-white">
								Video URL for your product / services
							</span>
						</label>
						<input
							type="text"
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
