// app/api/route.ts
import { Bot, Context } from 'grammy';

const bot = new Bot<Context>(process.env.BOT_TOKEN!);

bot.on('message', (ctx) => {
	ctx.reply('Hello from Next.js bot!');
});

// Set the webhook URL
bot.api
	.setWebhook(`${process.env.NEXT_PUBLIC_URL}/api`)
	.then(() => {
		console.log('Webhook set successfully');
	})
	.catch((error) => {
		console.error('Error setting webhook:', error);
	});

export async function POST(req: Request) {
	console.log('POST request received');
	const body = await req.json();
	console.log('Request body:', body);
	await bot.handleUpdate(body);
	return new Response('OK', { status: 200 });
}

export async function GET() {
	console.log('GET request received');
	return new Response(JSON.stringify({ status: 'Bot is running' }), {
		status: 200,
	});
}
