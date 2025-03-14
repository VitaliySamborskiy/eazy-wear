import React from "react";

import type { Icon } from "./type/types.ts";

const IconElement: React.FC<Icon> = svgData => {
	return (
		<svg
			className={svgData?.style}
			width={svgData?.width}
			height={svgData?.height}
			fill={svgData?.color}>
			<use xlinkHref={`#${svgData.name}`}></use>
		</svg>
	);
};

export { IconElement };
