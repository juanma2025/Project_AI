import { Search } from "lucide-react"

export function SearchButton() {
    return (
    <div className="fixed bottom-6 right-6 z-30">
        <button className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 hover:bg-neutral-200 transition-colors">
        <span>Explorar</span>
        <Search size={20} />
        </button>
    </div>
    )
}
