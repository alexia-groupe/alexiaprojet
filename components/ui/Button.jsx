import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-accent hover:bg-accent-hover text-white focus:ring-accent",
        secondary: "bg-white text-primary border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        dark: "bg-primary hover:bg-primary-light text-white focus:ring-primary",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
