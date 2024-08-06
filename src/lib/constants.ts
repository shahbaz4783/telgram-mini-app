import {
	ChartNoAxesColumn,
	ClipboardList,
	House,
	WalletMinimal,
} from 'lucide-react';

export const NAVIGATION_LINKS = [
	{
		title: 'Home',
		href: '/miniapp',
		icon: House,
	},
	{
		title: 'Tasks',
		href: '/miniapp/tasks',
		icon: ClipboardList,
	},
	{
		title: 'Stats',
		href: '/miniapp/stats',
		icon: ChartNoAxesColumn,
	},
	{
		title: 'Wallet',
		href: '/miniapp/wallet',
		icon: WalletMinimal,
	},
];
