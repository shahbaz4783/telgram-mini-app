import GridPattern from '@/src/components/magicui/grid-pattern';
import Header from '@/src/components/shared/header';
import Navigation from '@/src/components/shared/navigation';
import { cn } from '@/src/lib/utils';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-svh lg:border flex items-start flex-col max-w-[480px] m-auto'>
			<Header />
			<div className='flex-grow p-2 w-full'>
				<GridPattern
					width={20}
					height={20}
					x={-1}
					y={-1}
					className={cn(
						'[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] '
					)}
				/>
				{children}
			</div>
			<Navigation />
		</div>
	);
};

export default layout;
