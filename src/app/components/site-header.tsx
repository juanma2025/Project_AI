import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
    return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
        <Link href="/">
            <Image
            src="/public/images/pngimg.com - spider_man_PNG63.png"
            alt="Spider-Man logo"
            width={40}
            height={40}
            className="hover:opacity-80 transition-opacity"
            />
        </Link>

        <nav className="hidden md:flex gap-8">
            <Link href="/" className="font-medium hover:text-red-500 transition-colors">
            HOME
            </Link>
            <Link href="/story" className="font-medium hover:text-red-500 transition-colors">
            STORY
            </Link>
            <Link href="/wallpapers" className="font-medium hover:text-red-500 transition-colors">
            WALLPAPERS
            </Link>
            <Link href="/beyourself" className="font-medium text-red-500">
            #BEYOURSELF
            </Link>
        </nav>
        </div>

        <div className="flex items-center gap-6">
        <Link href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
            <Image src="/public/images/icons8-facebook-48.png" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
            <Image src="/public/images/icons8-instagram-logo-48.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://youtube.com" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
            <Image src="/public/images/icons8-youtube-50.png" alt="YouTube" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
            <Image src="/public/images/icons8-twitter-50.png" alt="Twitter" width={24} height={24} />
        </Link>
        </div>
    </header>
    )
}
