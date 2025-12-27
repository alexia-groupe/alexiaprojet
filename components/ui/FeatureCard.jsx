import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({ title, description, imageSrc, href, delay = 0 }) {
    return (
        <Link
            href={href}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 block"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Découvrir
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {description}
                </p>
                <div className="mt-4 flex items-center text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
