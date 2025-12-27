export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
    const alignment = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

    return (
        <div className={`mb-12 max-w-3xl ${alignment} ${className}`}>
            {subtitle && (
                <span className="block text-accent font-semibold tracking-wider uppercase text-sm mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {title}
            </h2>
        </div>
    );
}
