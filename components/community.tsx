import Link from 'next/link'

export default function CommunitySection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="section-title">
                        Community Driven
                    </h2>
                    <p className="section-subtitle"> Where viral predictions become real markets. Every engagement unlocks on-chain opportunities for our community.</p>
                </div>
                <div className="mx-auto section-content flex max-w-lg justify-center gap-3">
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/1.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/2.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/3.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/4.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/5.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                    <Link href="https://github.com/meschacirung" target="_blank" title="Méschac Irung" className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                        <img alt="John Doe" src="https://randomuser.me/api/portraits/men/6.jpg" loading="lazy" width={120} height={120} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
