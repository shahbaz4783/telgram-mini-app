import Link from 'next/link';
import { NAVIGATION_LINKS } from '../../lib/constants';

const Navigation = () => {
	return (
		<nav className='sticky bottom-2 m-auto flex justify-evenly py-2 gap-6 w-full backdrop-blur'>
			{NAVIGATION_LINKS.map((item) => (
				<Link key={item.href} href={item.href}>
					<div className='flex text-xs flex-col justify-center text-slate-300 gap-1 items-center'>
						{item.icon && <item.icon size={20} />}
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
