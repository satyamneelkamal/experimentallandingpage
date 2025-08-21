'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'help-circle',
            question: 'How do I create a prediction market?',
            answer: 'Simply quote any tweet and tag @betthis with your prediction claim (e.g., "ETH will break $4K by August"). Our bot will reply with a YES/NO poll and start tracking engagement. When the Red Pill score reaches 100+ points, a smart contract automatically deploys on Solana.',
        },
        {
            id: 'item-2',
            icon: 'trending-up',
            question: 'What is the Red Pill score?',
            answer: 'The Red Pill score measures social proof by tracking poll votes, quote tweets, impressions, and likes. Each action has different point values - poll votes are worth 1pt each, quote tweets 3pts, impressions 0.01-0.05pts. Markets trigger at 100+ points.',
        },
        {
            id: 'item-3',
            icon: 'wallet',
            question: 'Which wallets are supported?',
            answer: 'BetThis supports Ribbit Wallet and Phantom for seamless Solana transactions. You can stake USDC or SOL on prediction outcomes with low fees and fast settlement times.',
        },
        {
            id: 'item-4',
            icon: 'coins',
            question: 'How do fees and payouts work?',
            answer: 'BetThis charges a 2% protocol fee on winning payouts. Winners receive their stake plus winnings from the losing side, minus fees. Early participants and creators can earn XP rewards and potential governance tokens.',
        },
        {
            id: 'item-5',
            icon: 'shield-check',
            question: 'How are markets resolved?',
            answer: 'Currently, markets are resolved manually by admins with multisig security. Future versions will integrate decentralized oracles like Supra for automated, trustless resolution based on verifiable data sources.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                New to prediction markets? Join our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    community Discord
                                </Link>
                                {' '}for help and updates.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
