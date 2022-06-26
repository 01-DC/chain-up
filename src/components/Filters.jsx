import React from "react"

export default function Filters() {
	return (
		<div className="bg-primary p-4 rounded-box flex lg:flex-col justify-between lg:gap-4 lg:h-fit mb-4">
			<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">Domain</div>
				<div className="collapse-content"></div>
			</div>
			<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">
					Valuation
				</div>
				<div className="collapse-content"></div>
			</div>
			<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">
					Revenue
				</div>
				<div className="collapse-content"></div>
			</div>
			<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div className="collapse-title text-xl font-medium">Age</div>
				<div className="collapse-content"></div>
			</div>
		</div>
	)
}
