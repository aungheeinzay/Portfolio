export default function Footer() {
    return (
        <footer className="w-full py-6 border-t border-white/10 text-sm text-gray-400">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p>© 2026 Aung Heein. All rights reserved.</p>
                <p className="flex items-center gap-1 justify-center">
                    Designed & Built by Aung Heein with
                    <span className="text-white font-medium">Next.js</span> &
                    <span className="text-white font-medium">Tailwind CSS</span>.
                </p>
            </div>
        </footer>
    );
}