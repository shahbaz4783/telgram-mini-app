import Link from 'next/link';
import { NAVIGATION_LINKS } from '../lib/constants';

const Navigation = () => {
	return (
		<nav className='sticky bottom-2 m-auto flex justify-evenly py-2 gap-6 w-full border-t-2 backdrop-blur'>
			{NAVIGATION_LINKS.map((item) => (
				<Link href={item.href}>
					<div className='flex flex-col justify-center gap-1 items-center'>
						{item.icon && <item.icon />}
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
