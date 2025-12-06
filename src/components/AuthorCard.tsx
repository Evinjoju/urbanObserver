// components/AuthorCard.tsx — Email Only (Clean & Professional)
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

interface Author {
  name: string;
  title: string;
  bio: string;
  photo: string;
  email: string;
  website?: string;
}

const AuthorCard: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
      <div className="md:flex">
        {/* Left: Text */}
        <div className="md:w-2/3 p-10 md:p-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-6">
            {author.name.toUpperCase()}
          </h1>

          {/* Email */}
          <div className="flex items-center gap-3 mb-8 text-red-600">
            <Mail size={28} />
            <a
              href={`mailto:${author.email}`}
              className="text-lg font-medium hover:underline transition"
            >
              {author.email}
            </a>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {author.bio}
          </p>

          {author.website && (
            <p className="text-red-600 font-medium">
              <Link href={author.website} className="underline hover:no-underline">
                {author.website.replace("https://", "")}
              </Link>
            </p>
          )}
        </div>

        {/* Right: Photo */}
        <div className="md:w-1/3 relative min-h-96 md:min-h-0">
          <Image
            src={author.photo}
            alt={`${author.name} – Financial Outlook Author`}
            fill
            priority
            className="object-cover rounded-full md:rounded-none md:rounded-r-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;