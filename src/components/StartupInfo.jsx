import React from "react"
import ReactPlayer from "react-player"

export default function StartupInfo() {
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
							Polygon
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Excepturi dolorem exercitationem beatae, earum
							iure cupiditate praesentium mollitia et omnis
							delectus nemo numquam maiores optio facilis
							temporibus quam aliquid necessitatibus quibusdam
							veritatis porro quia, reprehenderit expedita?
							Dolorum consequatur voluptate facere repudiandae
							rerum sit laboriosam repellat sint adipisci tempora,
							incidunt ducimus quo laudantium. Debitis provident
							dolorem, consequuntur architecto rerum quia tempora
							quasi magni reprehenderit ea, nihil voluptate neque
							quibusdam ad? Eaque, soluta sunt ad voluptate natus
							provident fugiat quam eveniet magni ex nulla
							sapiente placeat autem, suscipit perspiciatis! Modi
							enim sit nesciunt magni deserunt voluptates atque
							aliquid, impedit fuga. Fugiat, totam accusantium!
						</p>
					</div>
				</div>
			</div>
			<div className="bg-neutral p-4 my-4 rounded-box flex justify-evenly">
				<div className="p-4 rounded-full bg-accent text-white">
					Domain
				</div>
				<div className="p-4 rounded-full bg-accent text-white">
					Valuation
				</div>
				<div className="p-4 rounded-full bg-accent text-white">
					Revenue
				</div>
				<div className="p-4 rounded-full bg-accent text-white">Age</div>
			</div>
			<div className="my-4 bg-white rounded-box p-4 flex gap-4">
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
					<div class="card-body items-center text-center">
						<h2 class="card-title">Subsribe Now!</h2>
						<p>
							Subscribe to this startup and avail all the
							mentioned perks all the while supporting in it's
							growth and making an investment.
						</p>
						<div class="card-actions mt-2">
							<button class="btn btn-wide btn-primary">
								Subscribe!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
