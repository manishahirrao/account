export interface NewsArticle {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
}

export const latestNews: NewsArticle[] = [
    {
        title: "I got a surprising letter from HMRC about unpaid tax on overseas income — what should I do?",
        excerpt:
            "Receiving a letter from HMRC suggesting you may have unpaid tax on overseas income can be alarming. Here's what you need to know and how to respond.",
        slug: "overseas-income",
        date: "2026-02-10",
    },
    {
        title: "ChatGPT and Your Business in 2026: Useful Tool or Risky Shortcut?",
        excerpt:
            "Artificial intelligence tools like ChatGPT are becoming increasingly common in the day-to-day operations of small businesses. Many business owners are finding creative ways to use them.",
        slug: "chatgpt-and-your-business",
        date: "2026-02-05",
    },
    {
        title: '"I\'m Spinning Plates" — The Real Cost of Doing Everything Yourself (And How to Get Your Time Back)',
        excerpt:
            "If you run a service business, there's a good chance your week looks something like this: juggling client work, admin, invoicing, and everything in between.",
        slug: "doing-everything-yourself",
        date: "2026-01-28",
    },
];
