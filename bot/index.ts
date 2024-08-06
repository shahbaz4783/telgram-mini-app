import 'dotenv/config';
import { Telegraf } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
	throw new Error('BOT_TOKEN is not set in the environment variables.');
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
	const startPayload = ctx.startPayload;
	const user = ctx.message?.from;
	if (!user) {
		ctx.reply('Could not get user information');
		return;
	}

	const userName = user.username ? `@${user.username}` : user.first_name;

	ctx.replyWithMarkdown(`Hey ${userName}, welcome to test app`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Start Now', web_app: { url: 'https://google.com' } }],
				[{ text: 'Join Community', web_app: { url: 'https://google.com' } }],
			],
		},
	});
});

bot.launch();
