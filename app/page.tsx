import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">Welcome to Next.js Website</h2>
        <div className="space-x-4">
          <Link href="/about" className="btn-primary">
            About Us
          </Link>
          <Link href="/blog" className="btn-secondary">
            View Blog
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {/* 特徴セクション */}
        <div className="card">
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p>Optimized for speed with Next.js static generation</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
          <p>Mobile-first approach with Tailwind CSS</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
          <p>Built with TypeScript and latest React features</p>
        </div>
      </section>
    </div>
  )
}

