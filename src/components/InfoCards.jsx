import React from "react"
import { Link } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

export default function InfoCards() {
	const { data, setSelectedItem } = useStateContext()

	function handleClick(item) {
		setSelectedItem(item)
	}
	return (
		<div className="col-span-3 bg-primary rounded-box p-4 flex flex-col gap-4">
			{data.map((item) => {
				return (
					<Link to="/details" key={item._id}>
						<div className="card card-side bg-base-100 shadow-xl" onClick={() => handleClick(item)}>
							<figure>
								<img src={item.companyLogo} alt="Album" />
							</figure>
							<div className="card-body">
								<h2 className="card-title font-gold text-2xl">
									{item.name}
								</h2>
								<p>{item.details}</p>
								<div className="card-actions">
									<div className="badge badge-lg badge-primary">
										Domain: {item.domain}
									</div>
									<div className="badge badge-lg badge-primary">
										Valuation: {item.valuation}
									</div>
									<div className="badge badge-lg badge-primary">
										Revenue: {item.revenue}
									</div>
									<div className="badge badge-lg badge-primary">
										Age: {item.age}
									</div>
								</div>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}
