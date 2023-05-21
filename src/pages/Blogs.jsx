import { Typography } from '@material-tailwind/react';
import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
	return (
		<main className="mx-auto max-w-7xl space-y-4 px-2 text-gray-100">
			<Helmet>
				<meta charSet="utf-8" />
				<title>The Jedi's Trunk | Blogs</title>
			</Helmet>
			<div className="mb-4 mt-6 rounded-xl border border-gray-800 bg-black  bg-opacity-70 py-10 text-center text-gray-100">
				<Typography variant="h3" className="font-cursive tracking-wide">
					Blogs
				</Typography>
			</div>

			<div className=" rounded-xl bg-gray-200 text-gray-900 shadow-xl">
				{/* Question */}
				<p className="rounded-t-xl border-b border-black bg-lime-600 p-4 font-cursive">
					What is an access token and refresh token? How do they work and where
					should we store them on the client-side?
				</p>
				{/* Answer */}
				<p className="p-4">
					Access Token is a credential which is found after successfully
					authenticating with server. It gives permission to access protected
					resources. It is typically a short-lived token. On the other hand,
					Refresh Token is a long-lived token, which is also found during the
					authentication process. It is used to get new access token when the
					current token expires.
					<br />
					Access tokens are typically stored in memory or local storage on the
					client-side. Storing them securely is important, and developers should
					avoid storing them in plain text or any other weak mechanism. Access
					tokens should not be accessible by others to prevent cross-site
					scripting (XSS) attacks.
					<br />
					Refresh tokens are more sensitive than access tokens, as they can be
					used to get new access tokens. It is recommended to store refresh
					tokens securely on the client-side, using mechanisms such as HTTP-only
					secure cookies or secure storage options. These storage should be more
					resistant to cross-site scripting attacks.
				</p>
			</div>

			<div className="rounded-xl bg-gray-200 text-gray-900 shadow-xl">
				{/* Question */}
				<p className="rounded-t-xl border-b border-black bg-lime-600 p-4 font-cursive">
					Compare SQL and NoSQL databases?
				</p>
				{/* Answer */}
				<p className="p-4">
					SQL is the short form of Structured Query Language and NoSQL is the
					short form of Not Only SQL or Non SQL.
					<br />
					SQL databases stores structured data based on a fixed schema. They use
					tables with rows and columns to store data. They use the SQL language
					for query and manipulate data. SQL databases are a good for
					applications that require complex relationships, transactions, and
					structured data.
					<br />
					NoSQL databases, on the other hand, do not rely on a fixed schema.
					They offer flexible data models. They can handle large-scale data and
					high traffic loads. NoSQL databases use different query languages
					based on their data model. They are suitable for applications that
					require high scalability and good for unstructured or semi-structured
					data and real-time analytics.
				</p>
			</div>

			<div className="rounded-xl bg-gray-200 text-gray-900 shadow-xl">
				{/* Question */}
				<p className="rounded-t-xl border-b border-black bg-lime-600 p-4 font-cursive">
					What is Express JS and Nest JS?
				</p>
				{/* Answer */}
				<p className="p-4">
					Express.js is a web application framework for Node.js which allows to
					build web applications and APIs. It provides a easy and flexible set
					of features for handling HTTP requests, defining routes, and
					implementing application logic. It is lightweight and famous for its
					simplicity and ease of use.
					<br />
					NestJS, on the other hand, is a full-featured framework, which uses
					TypeScript for building scalable and maintainable server-side
					applications. It is built on top of Express.js but provides additional
					features. It provides built-in support for routing, validation,
					caching, database integration, and more. NestJS adds more structure
					and features on top of Express.js, particularly for larger and more
					complex applications.
				</p>
			</div>

			<div className="rounded-xl bg-gray-200 text-gray-900 shadow-xl">
				{/* Question */}
				<p className="rounded-t-xl border-b border-black bg-lime-600 p-4 font-cursive">
					What is MongoDB aggregate and how does it work?
				</p>
				{/* Answer */}
				<p className="p-4">
					The aggregate function in MongoDB is used on collections to perform
					complex data aggregation operations. It allows to process and
					transform data. It works by processing data through a pipeline of
					stages, where each stage performs a specific operation on the data.
					Common stages are filtering, grouping, projecting, and sorting data.
					The data flows through the pipeline, and each stage modifies and
					transforms the data accordingly. The final stage produces the
					aggregated result, which is returned by the aggregate function.
				</p>
			</div>
		</main>
	);
};

export default Blogs;
