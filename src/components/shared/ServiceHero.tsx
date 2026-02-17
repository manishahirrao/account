import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface ServiceHeroProps {
    title: string;
    breadcrumbs: { label: string; href?: string }[];
}

export function ServiceHero({ title, breadcrumbs }: ServiceHeroProps) {
    return (
        <section className="relative bg-[var(--sage-forest)] py-16 md:py-20">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--sage-forest)] to-[#0d2a23]" />

            <div className="relative container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {title}
                </h1>
                <div className="flex justify-center">
                    <Breadcrumb items={breadcrumbs} />
                </div>
            </div>
        </section>
    );
}
