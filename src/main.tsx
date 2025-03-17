import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, MainPage } from "./pages/pages.tsx";
import { AppRouter } from "./enums/app-router.enum.ts";
import "./scss/varible.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <MainPage />,
				path: AppRouter.MAINPAGE,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
