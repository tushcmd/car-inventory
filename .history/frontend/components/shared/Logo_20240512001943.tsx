
import { Car } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => {
	return (
		<Link href='/' className="flex items-center gap-1 component-focus rounded-md">
			<Car   className="w-5 h-5 fill-current" />
			<h1 className="inline-flex flex-col gap-0 leading-none font-medium">
				<p>Car Inventory</p>
			</h1>
		</Link>
	);
};

export default Logo;