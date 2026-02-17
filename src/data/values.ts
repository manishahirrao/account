import {
    Heart,
    Shield,
    Eye,
    Smile,
    Zap,
    Target,
    type LucideIcon,
} from "lucide-react";

export interface Value {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const companyValues: Value[] = [
    {
        icon: Heart,
        title: "WE CARE",
        description:
            "About you, your business, our team, our business, the local community and the environment. We always strive to do our best, to improve that best and to go the extra mile.",
    },
    {
        icon: Shield,
        title: "Honesty and integrity",
        description: "We do what we say we will do. Simple.",
    },
    {
        icon: Eye,
        title: "Attention to detail",
        description: "Something you should expect from your accountant!",
    },
    {
        icon: Smile,
        title: "Friendly and approachable",
        description:
            "We want you to feel at ease and well looked after – no such thing as a silly question.",
    },
    {
        icon: Zap,
        title: "Proactive and responsive",
        description:
            "We understand how important communication is to you, and will always respond to you quickly.",
    },
    {
        icon: Target,
        title: "Keeping it simple",
        description:
            "We take a no-jargon approach and aim to help you understand the numbers that really matter in your business.",
    },
];
