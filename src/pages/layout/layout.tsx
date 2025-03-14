import { SvgSprite } from "../../components/components.tsx";

import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Outlet />
			<SvgSprite />
		</>
	);
};

export { Layout };
