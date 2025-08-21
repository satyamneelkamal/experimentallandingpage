import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="section-title">Get Early Access</h2>
                    <p className="section-subtitle">Secure your spot for BetThis beta launch on Solana devnet. Be among the first to monetize social predictions.</p>

                    <form
                        action=""
                        className="mx-auto section-content max-w-sm">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
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
        </section>
    )
}
