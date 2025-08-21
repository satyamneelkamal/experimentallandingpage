export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">BetThis by the Numbers</h2>
                    <p className="text-muted-foreground">From viral tweets to on-chain markets - see how our community is transforming social engagement into predictive intelligence.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 md:gap-8">
                    <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-center space-y-4 cursor-pointer">
                        <div className="text-5xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">250+</div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Markets Created</p>
                    </div>
                    <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-center space-y-4 cursor-pointer">
                        <div className="text-5xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">$50K+</div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Total Volume Traded</p>
                    </div>
                    <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-center space-y-4 cursor-pointer">
                        <div className="text-5xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">1,500+</div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Active Predictors</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
