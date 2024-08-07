// app/api/route.ts
import { Bot, Context } from 'grammy';

const bot = new Bot<Context>(process.env.BOT_TOKEN!);

bot.on('message', (ctx) => {
	ctx.reply('Hello from Next.js bot!');
});

// Set the webhook URL
bot.api.setWebhook(`${process.env.NEXT_PUBLIC_URL}/api`);

export async function POST(req: Request) {
	const body = await req.json();
	await bot.handleUpdate(body);
	return new Response('OK', { status: 200 });
}

export async function GET() {
	return new Response(JSON.stringify({ status: 'Bot is running' }), {
		status: 200,
	});
}
