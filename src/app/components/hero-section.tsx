import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
    return (
    <main className="container mx-auto px-4 pt-12 pb-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col gap-6 mb-10 md:mb-0">
        <h1 className="text-7xl md:text-8xl font-bold leading-none">
            SPIDER-
            <br />
            MAN
        </h1>
        <div className="relative h-20">
            <Image
            src="/public/images/spider_man_miles_morales_title_card___png_by_pngsandassets_de7ncqp-fullview.png"
            alt="Miles Morales"
            width={400}
            height={80}
            className="object-contain"
            />
        </div>

        <p className="text-neutral-300 max-w-xl">
            Na mais nova aventura do universo de Marvel&apos;s Spider-Man, o adolescente Miles Morales está se adaptando a
            um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man. Mas quando uma
            violenta disputa de forças ameaça destruir sua vizinhança, o aspirante a herói percebe que com grandes poderes
            também vêm grandes responsabilidades. Para salvar a Nova York da Marvel, Miles deve reconhecer e assumir o
            título de Spider-Man.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <Link
            href="/preorder"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm transition-colors text-center"
            >
            PRE-ORDER NOW
            </Link>
            <Link
            href="/teaser"
            className="border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-sm transition-colors text-center"
            >
            WATCH THE TEASER
            </Link>
        </div>

        <div className="flex items-center gap-6 pt-8">
            <Image src="/public/images/icons8-playstation-30.png" alt="PlayStation" width={40} height={40} />
            <Image src="/public/images/icons8-marvel-48.png" alt="Marvel" width={80} height={30} />
        </div>
        </div>

        <div className="md:w-1/2 relative">
        <Image
            src="/public/images/icons8-miles-morales-50.png"
            alt="Miles Morales Spider-Man"
            width={700}
            height={700}
            className="object-contain"
        />
        </div>
    </main>
    )
}
