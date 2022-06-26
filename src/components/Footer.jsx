import React from "react"

export default function Footer() {
	return (
		<footer class="bg-neutral text-neutral-content mt-4">
			<div className="container mx-auto footer py-10">
				<div>
					<span class="footer-title">Services</span>
					<a class="link link-hover">Branding</a>
					<a class="link link-hover">Design</a>
					<a class="link link-hover">Marketing</a>
					<a class="link link-hover">Advertisement</a>
				</div>
				<div>
					<span class="footer-title">Company</span>
					<a class="link link-hover">About us</a>
					<a class="link link-hover">Contact</a>
					<a class="link link-hover">Jobs</a>
					<a class="link link-hover">Press kit</a>
				</div>
				<div>
					<span class="footer-title">Legal</span>
					<a class="link link-hover">Terms of use</a>
					<a class="link link-hover">Privacy policy</a>
					<a class="link link-hover">Cookie policy</a>
				</div>
			</div>
		</footer>
	)
}
