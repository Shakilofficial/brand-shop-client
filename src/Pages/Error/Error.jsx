import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
	const { error } = useRouteError();
	return (
		<div className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center mx-auto mb-20">
				<div className="text-center">
					<img
						src="https://i.ibb.co/R4qh10C/undraw-Page-not-found-re-e9o6.png"
						alt=""
					/>
				</div>
				<div className="max-w-md text-center">
					<p className="text-2xl font-semibold mb-8">{error?.message}</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
					>
						Go Back to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
