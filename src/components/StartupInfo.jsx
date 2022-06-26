import React from "react"
import ReactPlayer from "react-player"
import { useStateContext } from "../contexts/ContextProvider"
import { SubscribeForm } from "."

export default function StartupInfo() {
	const { selectedItem } = useStateContext()

	return (
		<div>
			<div className="grid grid-flow-row lg:grid-cols-2 gap-4">
				<div className="aspect-video">
					<ReactPlayer
						url={selectedItem.pitchVideo}
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
						<p>{selectedItem.description}</p>
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
						{selectedItem.perksList
							.split(",")
							.map((item, index) => {
								return <li key={index}>{item.trim()}</li>
							})}
					</ol>
				</div>
				<div className="basis-1/2 bg-secondary card card-compact shadow-xl text-white">
					<figure>
						<img
							className=""
							src={selectedItem.companyLogo}
							alt="Logo"
						/>
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">Subscribe Now!</h2>
						<p>
							Subscribe to this startup and avail all the
							mentioned perks all the while supporting in it's
							growth and making an investment.
						</p>
						<div className="card-actions mt-2">
							<label
								for="my-modal-3"
								className="btn modal-button btn-primary">
								Subscribe!
							</label>
						</div>
						<input
							type="checkbox"
							id="my-modal-3"
							className="modal-toggle"
						/>
						<div className="modal">
							<div className="modal-box relative">
								<label
									for="my-modal-3"
									className="btn btn-sm btn-circle absolute right-2 top-2">
									✕
								</label>
								<SubscribeForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
