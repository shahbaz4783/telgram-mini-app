import { bot } from '@/src/lib/bot';
import { webhookCallback } from 'grammy';

export const POST = webhookCallback(bot, 'std/http');
