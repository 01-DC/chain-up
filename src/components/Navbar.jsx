import React from "react"

import { IoIosArrowDown } from "react-icons/io"

export default function Navbar() {
	return (
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<a class="btn btn-ghost normal-case text-xl">Chain-UP</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal p-0">
					<li>
						<a>Item 1</a>
					</li>
					<li tabindex="0">
						<a>
							Parent
							<IoIosArrowDown />
						</a>
						<ul class="p-2 bg-base-100">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
