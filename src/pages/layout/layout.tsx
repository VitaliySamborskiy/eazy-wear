import { Footer, Header, SvgSprite } from "../../components/components.tsx";

import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<SvgSprite />
		</>
	);
};

export { Layout };
