import { lazy, Suspense } from 'react';
import Counter from './Counter';
import MyErrorBoundary from './ErrorBoundary';

const AnotherComponent = lazy(() => import('./AnotherComponent'));

function ErrorFallback({ error }) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.toString()}</pre>
		</div>
	);
}

const Home = () => {
	const handleError = (error, info) => {
		console.log({ error, info });
	};
	return (
		<div>
			<h1>Home</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<AnotherComponent />
			</Suspense>
			<MyErrorBoundary FallbackComp={ErrorFallback} onError={handleError}>
				<Counter />
			</MyErrorBoundary>
		</div>
	);
};

export default Home;
