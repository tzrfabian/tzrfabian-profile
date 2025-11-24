
export default function Footer() {
  return (
    <div className="relative z-10">
        <footer className="bg-slate-800 text-gray-400 py-5">
        <div className="max-w-5xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Fabian Tenzara</p>
        </div>
        </footer>        
    </div>
  )
}
