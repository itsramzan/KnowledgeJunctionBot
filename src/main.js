import { config } from "dotenv";
import { Telegraf } from "telegraf";

config();

const bot = new Telegraf(process.env.BOT_TOKEN);

//! /start কমান্ড
bot.start((ctx) => {
  ctx.reply("🤖 স্বাগতম! আমি আপনার টেলিগ্রাম বট।");
});

//! /help কমান্ড
bot.help((ctx) => {
  ctx.reply("📌 কমান্ডসমূহ:\n/start - বট শুরু\n/help - সাহায্য");
});

//! সাধারণ টেক্সট মেসেজ
bot.on("text", (ctx) => {
  ctx.reply(`আপনি লিখেছেন: ${ctx.message.text}`);
});

//! বট চালু করা
bot.launch();

console.log("🚀 Bot is running...");
