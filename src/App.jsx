import React from "react"

import { AiOutlineSearch } from "react-icons/ai"

import { Navbar } from "./components"
function App() {
	return (
		<div className="">
			<Navbar />
			<div className="flex flex-row-reverse">
				<div class="form-control">
					<div class="input-group">
						<input
							type="text"
							placeholder="Search…"
							class="input input-bordered"
						/>
						<button class="btn btn-square text-xl">
							<AiOutlineSearch />
						</button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-3">
				<div className="">
					<div
						tabindex="0"
						class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<div class="collapse-title text-xl font-medium">
							Focus me to see content
						</div>
						<div class="collapse-content">
							<p>
								tabindex="0" attribute is necessary to make the
								div focusable
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-3">
					<div class="card lg:card-side bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://api.lorem.space/image/album?w=400&h=400"
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
				</div>
			</div>
		</div>
	)
}

export default App
