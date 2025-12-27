
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ id, title, imageSrc, width, height, description, linkLabel, linkHref }) {
    return (
        <div id={id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <Image
                src={imageSrc}
                alt={title}
                width={width}
                height={height}
                className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h3>
            <p className="text-gray-600 mb-4 text-center">
                {description}
            </p>
            <Link href={linkHref} className="text-blue-600 font-medium hover:underline">
                {linkLabel}
            </Link>
        </div>
    );
}
