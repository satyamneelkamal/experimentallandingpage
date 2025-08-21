import { MessageSquareQuote, Users, TrendingUp, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: MessageSquareQuote,
            title: "Quote & Tag",
            description: "Quote any tweet with your prediction and tag @betthis",
            example: "@betthis ETH will hit $4K by December"
        },
        {
            number: "02", 
            icon: Users,
            title: "Community Engages",
            description: "Community votes and shares, building your Red Pill score",
            example: "Votes = 1pt • Quotes = 3pts • Market triggers at 100+ points"
        },
        {
            number: "03",
            icon: TrendingUp,
            title: "Trade Live Market",
            description: "Smart contract deploys on Solana automatically",
            example: "Stake USDC/SOL • Winners split the pot minus 2% fee"
        }
    ]

    return (
        <section className="py-16 md:py-32 relative overflow-hidden">
            {/* Background decoration using CSS variables */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-muted/30"></div>
            
            <div className="mx-auto max-w-7xl px-6 relative">
                <div className="text-center space-y-6 mb-20">
                    <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-2 text-sm font-medium border border-accent/30">
                        <TrendingUp className="size-4" />
                        How It Works
                    </div>
                    <h2 className="section-title">
                        From Tweet to Trade
                    </h2>
                    <p className="section-subtitle text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                        Transform viral predictions into real markets in three simple steps. 
                        Community engagement automatically triggers profitable opportunities.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-3 relative section-content">
                    {/* Enhanced connecting elements using CSS variables */}
                    <div className="hidden lg:flex absolute top-32 left-0 right-0 items-center justify-between px-32">
                        <div className="flex items-center flex-1">
                            <div className="flex-1 h-px bg-border relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent animate-pulse"></div>
                            </div>
                            <ArrowRight className="text-primary size-5 mx-4 animate-bounce" />
                        </div>
                        <div className="flex items-center flex-1">
                            <div className="flex-1 h-px bg-border relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60 animate-pulse"></div>
                            </div>
                            <ArrowRight className="text-primary size-5 mx-4 animate-bounce" style={{animationDelay: '0.5s'}} />
                        </div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Enhanced step card using CSS variables */}
                            <div className="bg-card backdrop-blur-sm rounded-2xl border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/95">
                                {/* Enhanced step number badge */}
                                <div className="flex justify-center mb-8">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-primary/20 rounded-full blur group-hover:bg-primary/30 transition-all"></div>
                                        <div className="relative bg-primary text-primary-foreground rounded-full size-20 flex items-center justify-center text-2xl font-bold shadow-md">
                                            {step.number}
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-accent rounded-2xl size-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                                        <step.icon className="size-10 text-accent-foreground" />
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-muted-foreground text-center mb-6 leading-relaxed">{step.description}</p>
                                
                                {/* Enhanced example box */}
                                <div className="bg-muted rounded-xl p-4 border border-border">
                                    <div className="text-sm text-muted-foreground font-mono text-center leading-relaxed">
                                        {step.example}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile connecting arrow */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden flex justify-center mt-8">
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-8 bg-border"></div>
                                        <ArrowRight className="text-primary size-5 rotate-90 animate-bounce" style={{animationDelay: `${index * 0.2}s`}} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Enhanced call to action using CSS variables */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-3 text-lg font-medium bg-accent/20 backdrop-blur-sm rounded-full px-8 py-4 border border-accent/30 shadow-md hover:shadow-lg hover:bg-accent/30 transition-all duration-300 hover:scale-105">
                        <div className="bg-primary rounded-full p-2">
                            <TrendingUp className="size-5 text-primary-foreground" />
                        </div>
                        <span className="text-foreground font-semibold">
                            Ready to turn your predictions into profits?
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}