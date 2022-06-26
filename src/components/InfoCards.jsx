import React from "react"
import { Link } from "react-router-dom"

export default function InfoCards() {
	return (
		<div className="col-span-3 bg-primary rounded-box p-4 flex flex-col gap-4">
			<Link to="/details">
				<div className="card card-side bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://api.lorem.space/image/album?w=300&h=200"
							alt="Album"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title font-gold text-2xl">
							New album is released!
						</h2>
						<p>Click the button to listen on Spotiwhy app.</p>
						<div className="card-actions">
							<div className="badge badge-lg badge-primary">
								Domain:
							</div>
							<div className="badge badge-lg badge-primary">
								Valuation:
							</div>
							<div className="badge badge-lg badge-primary">
								Revenue:
							</div>
							<div className="badge badge-lg badge-primary">
								Age:
							</div>
						</div>
					</div>
				</div>
			</Link>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://api.lorem.space/image/album?w=300&h=200"
						alt="Album"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title font-gold text-2xl">
						New album is released!
					</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className="card-actions">
						<div className="badge badge-lg badge-primary">
							Domain:
						</div>
						<div className="badge badge-lg badge-primary">
							Valuation:
						</div>
						<div className="badge badge-lg badge-primary">
							Revenue:
						</div>
						<div className="badge badge-lg badge-primary">Age:</div>
					</div>
				</div>
			</div>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://api.lorem.space/image/album?w=300&h=200"
						alt="Album"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title font-gold text-2xl">
						New album is released!
					</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className="card-actions">
						<div className="badge badge-lg badge-primary">
							Domain:
						</div>
						<div className="badge badge-lg badge-primary">
							Valuation:
						</div>
						<div className="badge badge-lg badge-primary">
							Revenue:
						</div>
						<div className="badge badge-lg badge-primary">Age:</div>
					</div>
				</div>
			</div>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://api.lorem.space/image/album?w=300&h=200"
						alt="Album"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title font-gold text-2xl">
						New album is released!
					</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className="card-actions">
						<div className="badge badge-lg badge-primary">
							Domain:
						</div>
						<div className="badge badge-lg badge-primary">
							Valuation:
						</div>
						<div className="badge badge-lg badge-primary">
							Revenue:
						</div>
						<div className="badge badge-lg badge-primary">Age:</div>
					</div>
				</div>
			</div>
		</div>
	)
}
