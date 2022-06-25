import React from "react"

export default function AddNewStartup() {
	return (
		<div class="w-full">
			<div class="border border-black rounded-box bg-primary p-4">
				<form action="">
					<div class="form-control">
						<label class="label">
							<span class="label-text text-white">
								Describe your startup and it's primary aim
							</span>
						</label>
						<input
							type="text"
							placeholder="Short Description"
							class="input input-bordered"
							maxLength={200}
							required
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-white">
								Describe the aims and primary products /
								services of your startup
							</span>
						</label>
						<textarea
							class="textarea textarea-bordered h-24 resize-none"
							placeholder="Long Description"
							required></textarea>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text text-white">
								{
									"Exclusive subscription perks (comma separated list)"
								}
							</span>
						</label>
						<textarea
							class="textarea textarea-bordered h-20 resize-none"
							placeholder="List of perks"
							required></textarea>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text text-white">
								Video URL for your product / services
							</span>
						</label>
						<input
							type="text"
							placeholder="Valid URL (only 1)"
							class="input input-bordered"
						/>
					</div>
					<div class="form-control mt-6">
						<button type="submit" class="btn btn-secondary">
							Submit Details
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
