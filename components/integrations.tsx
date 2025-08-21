import { Gemini, Replit, GooglePaLM, MagicUI, VSCodium, MediaWiki } from '@/components/logos'
import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import Link from 'next/link'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                    <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                        <div className="space-y-6">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Built on the Solana Ecosystem</h2>
                            <p className="text-muted-foreground">Seamlessly integrated with leading wallets, oracles, and DeFi protocols for the best prediction market experience.</p>
                            <form
                                action=""
                                className="max-w-sm">
                                <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 before:absolute before:inset-0 before:rounded-[calc(var(--radius)+0.75rem)] before:p-[1px] before:bg-gradient-to-r before:from-primary/30 before:via-primary/60 before:to-primary/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10">
                                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                                    <input
                                        placeholder="Enter your email"
                                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                        type="email"
                                    />

                                    <div className="md:pr-1.5 lg:pr-0">
                                        <Button
                                            aria-label="submit"
                                            className="rounded-(--radius)">
                                            <span className="hidden md:block">Join Beta</span>
                                            <SendHorizonal
                                                className="relative mx-auto size-5 md:hidden"
                                                strokeWidth={2}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration
                                    icon={<Gemini />}
                                    name="Solana"
                                    description="High-speed, low-cost blockchain powering BetThis prediction markets."
                                />
                                <Integration
                                    icon={<Replit />}
                                    name="Ribbit Wallet"
                                    description="Seamless wallet integration for frictionless prediction participation."
                                />
                                <Integration
                                    icon={<GooglePaLM />}
                                    name="Twitter API"
                                    description="Real-time monitoring of tweets and engagement for market triggers."
                                />
                                <Integration
                                    icon={<MagicUI />}
                                    name="Supra Oracle"
                                    description="Decentralized oracle network for automated market resolution."
                                />
                                <Integration
                                    icon={<VSCodium />}
                                    name="Phantom"
                                    description="Popular Solana wallet with native BetThis integration support."
                                />
                                <Integration
                                    icon={<MediaWiki />}
                                    name="Helius"
                                    description="Solana RPC provider and API infrastructure for real-time data."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="group hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-sm hover:-translate-y-1">
            <div className="flex size-fit items-center justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{name}</h3>
                <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2 group-hover:text-foreground transition-colors duration-300">{description}</p>
            </div>
        </div>
    )
}
