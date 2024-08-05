import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.start((ctx) => {
	const startPayload = ctx.startPayload;
	const user = ctx.message.from;
	const userName = user.username ? `@${user.username}` : user.first_name;

	ctx.replyWithMarkdown(`Hey ${userName} welcome to test app`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Start Now', web_app: { url: 'https://google.com' } }],
				[{ text: 'Join Community', web_app: { url: 'https://google.com' } }],
			],
		},
	});
});

bot.launch();
