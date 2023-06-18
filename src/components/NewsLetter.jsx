const NewsLetter = () => {
	return (
		<section className="mx-auto max-w-7xl px-2 py-14">
			<div className="relative overflow-hidden rounded-2xl bg-black/70 bg-opacity-25  bg-[url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-fixed bg-top px-4 py-14 bg-blend-multiply md:px-8">
				<div className="relative z-10 mx-auto max-w-xl sm:text-center">
					<div className="space-y-3">
						<h3 className="font-cursive text-3xl font-bold text-white">
							Subscribe to our newsletter
						</h3>
						<p className="leading-relaxed text-blue-100">
							Stay up to date with the roadmap progress, announcements and
							exclusive discounts feel free to sign up with your email.
						</p>
					</div>
					<div className="mt-6">
						<form
							onSubmit={(e) => e.preventDefault()}
							className="flex items-center justify-center rounded-lg bg-white p-1 sm:mx-auto sm:max-w-md">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-2 text-gray-500 outline-none"
							/>
							<button className="rounded-lg bg-black p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-gray-900  sm:px-4">
								Subscribe
							</button>
						</form>
						<p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
							No spam ever, we are care about the protection of your data. Read
							our <a className="underline"> Privacy Policy </a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
