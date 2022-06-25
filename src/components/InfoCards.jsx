import React from "react"

export default function InfoCards() {
	return (
		<div class="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://api.lorem.space/image/album?w=300&h=200"
					alt="Album"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">New album is released!</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">Fashion</div>
					<div class="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	)
}
