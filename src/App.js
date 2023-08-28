import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter, ScrollRestoration } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Head />
				<Body />
				<ScrollRestoration />
			</>
		),
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "/search",
				element: <SearchResults />,
			},
			{
				path: "/watch",
				element: <WatchPage />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<div>
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
