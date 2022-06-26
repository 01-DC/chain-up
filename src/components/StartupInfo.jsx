import React from "react"
import ReactPlayer from "react-player"
import { useStateContext } from "../contexts/ContextProvider"

export default function StartupInfo() {
	const { selectedItem } = useStateContext()

	return (
		<div>
			<div className="grid grid-flow-row lg:grid-cols-2 gap-4">
				<div className="aspect-video">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						width="100%"
						height="100%"
					/>
				</div>

				<div className="card bg-primary text-primary-content">
					<div className="card-body">
						<h2 className="card-title font-gold text-3xl font-bold">
							{selectedItem.name}
						</h2>
						<p>{selectedItem.details}</p>
					</div>
				</div>
			</div>
			<div className="bg-neutral p-4 my-4 rounded-box flex justify-evenly">
				<div className="p-4 rounded-full bg-accent text-white">
					Domain: {selectedItem.domain}
				</div>
				<div className="p-4 rounded-full bg-accent text-white">
					Valuation: {selectedItem.valuation}
				</div>
				<div className="p-4 rounded-full bg-accent text-white">
					Revenue: {selectedItem.revenue}
				</div>
				<div className="p-4 rounded-full bg-accent text-white">
					Age: {selectedItem.age}
				</div>
			</div>
			<div className="my-4 bg-black rounded-box py-4 px-5 flex gap-4">
				<div className="basis-1/2">
					<h3 className="font-gold text-2xl text-center font-bold underline mb-2">
						Subscription Perks
					</h3>
					<ol className="list-decimal list-inside font-medium text-lg mb-4">
						<li>Exclusive updates directly from the founders.</li>
						<li>Access to monthly financial reports</li>
						<li>
							Access to join exclusive live sessions and events
						</li>
						<li>
							Access to interact with the community of Polygon
							supporters
						</li>
						<li>Exclusive Polygon NFT Giveaways</li>
					</ol>
				</div>
				<div className="basis-1/2 bg-secondary card card-compact shadow-xl text-white">
					<figure>
						<img src="" alt="Shoes" />
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">Subsribe Now!</h2>
						<p>
							Subscribe to this startup and avail all the
							mentioned perks all the while supporting in it's
							growth and making an investment.
						</p>
						<div className="card-actions mt-2">
							<button className="btn btn-wide btn-primary">
								Subscribe!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
