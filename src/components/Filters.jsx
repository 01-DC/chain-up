import React from "react"

export default function Filters() {
	return (
		<div className="bg-primary p-4 rounded-box flex lg:flex-col justify-between lg:gap-4 lg:h-fit mb-4">
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Domain</div>
				<div class="collapse-content"></div>
			</div>
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Valuation</div>
				<div class="collapse-content"></div>
			</div>
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Revenue</div>
				<div class="collapse-content"></div>
			</div>
			<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
				<input type="checkbox" />
				<div class="collapse-title text-xl font-medium">Age</div>
				<div class="collapse-content"></div>
			</div>
		</div>
	)
}
