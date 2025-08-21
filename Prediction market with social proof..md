## **1\. Executive Summary**

**BetThis** is a social-driven, on-chain prediction market protocol built on **Solana**. It transforms viral tweets into real-money YES/NO prediction markets based on community engagement.

Here’s how it works: when users quote a tweet and tag `@betthis` with a claim (e.g., “ETH will break $4K by August”), a public poll is created. The system tracks quote tweets and poll votes in real time. Once a minimum **engagement score** is reached (e.g., 50 quotes or 1,000 votes), a smart contract on Solana automatically creates a prediction market where users can stake USDC on the outcome.

This creates a new way to monetize internet attention, hold public claims accountable, and turn social consensus into market opportunities.

The MVP will launch on Solana Devnet in 4 weeks and integrate **Ribbit Wallet** for frictionless prediction participation. Monetization is built-in via protocol fees (e.g., 2% per market), with optional token incentives (XP/Grass) for early participants, liquidity providers, and creators.

BetThis combines the virality of crypto Twitter with the economic logic of prediction markets, unlocking a new category of participatory forecasting at internet speed.

## **2\. Market Opportunity**

### **The Shift Toward Social-Driven Markets**

Twitter, especially crypto Twitter, has become the central arena for market narratives, price speculation, and public predictions. Yet, there is no infrastructure to convert these high-engagement discussions into actionable, onchain financial instruments.

**BetThis addresses this gap** by creating a direct pipeline from viral content to prediction markets. It introduces a way to capture both attention and conviction, allowing users to financially participate in the outcomes of the ideas and events they discuss online.

### **Timing and Relevance**

* The Solana ecosystem has matured, offering low-cost, high-speed infrastructure ideal for real-time consumer dApps.

* Prediction markets, such as Polymarket, have validated strong user demand for forecasting-based products.

* Speculation and meme-based engagement are now a dominant behavior in crypto communities.

* Influencers and creators are actively seeking new monetization channels and tools for audience engagement.

* Advances in wallet UX and oracle infrastructure make frictionless onboarding and resolution viable.

### **Market Size and Momentum**

* Polymarket has recorded over $200 million in total volume, despite operating in a regulatory gray area.

* Consumer speculation in memecoin and SocialFi ecosystems regularly surpasses billions in monthly trading volume.

* The forecast-based market category is expected to exceed $5 billion annually by 2026, especially as it expands beyond financial topics to broader internet culture and media events.

### **BetThis Positioning**

* Designed for native crypto users on Solana, where speed and cost matter for social applications

* Uniquely connects public discourse with financial incentives through automatic market creation

* Aligns with growing appetite for user-generated, attention-driven applications

* Targets an underserved intersection: public narrative \+ market accountability \+ creator economy

## **3\. How It Works**

BetThis converts viral tweets into onchain YES/NO prediction markets through a fully automated engagement-driven trigger system. The process starts when a user quotes a tweet with a prediction and tags `@betthis`. The system responds with a public poll, capturing the initial claim. A backend service tracks the tweet’s engagement score in real time using a combination of metrics—primarily the number of votes on the poll and the number of unique quote tweets or replies referencing the claim. Once the score crosses a predefined threshold (e.g., 1,000 votes or 50 quotes), the system automatically triggers a smart contract on Solana to deploy a live prediction market.

This market allows users to stake USDC on either YES or NO outcomes through an AMM-style contract. The interface is accessible via the BetThis frontend and supports wallet connections through Ribbit Wallet and other Solana-compatible wallets. The market remains open until a preset expiry time or event resolution. Once the outcome is known, the market is resolved through an oracle or manual admin push (for the MVP phase), and winning stakers can claim their payouts directly onchain.

Each step of the process—from poll creation to market deployment and payout—is automated or semi-automated, minimizing friction and enabling real-time responsiveness. This system ensures that only predictions with meaningful community engagement go onchain, preventing spam markets and concentrating liquidity on relevant, high-interest topics. The entire flow is designed to be lightweight, scalable, and social-native, turning public conversation into predictive infrastructure.

## **4\. Target Audience**

BetThis is built for a crypto-native, socially active audience that thrives on speculation, meme culture, and public discourse. The primary user segments include:

1. **Degens and Speculators**: These are active crypto Twitter users who regularly make bold claims, react to market movements, and engage in high-risk, high-reward behavior. They are familiar with staking, wallets, and quick decision-making, and will naturally gravitate toward turning their opinions into onchain positions.

2. **Influencers and Thought Leaders**: Creators, analysts, and meme accounts who drive engagement on Twitter and often make predictions without accountability. BetThis gives them a new tool to gamify their takes, engage their communities, and potentially monetize their reputation through prediction volumes, creator rewards, and market creation incentives.

3. **SocialFi and Meme Ecosystem Participants**: Users active in emerging SocialFi protocols, meme token trading, and tokenized clout economies. These users are accustomed to interacting with bots, tipping, and viral engagement formats and will be early adopters of a product that rewards attention and narrative control.

4. **Crypto Traders and Forecasters**: A more analytical audience interested in using prediction markets for sentiment analysis, market signals, and informational edge. They see value in crowdsourced forecasts and may use BetThis as a lightweight forecasting tool across a variety of domains—crypto prices, macro events, product launches, and more.

5. **Crypto Communities and DAOs**: BetThis offers a tool for DAOs or Telegram/X-based communities to formalize internal predictions, create external visibility for debates, and reward participants through onchain staking mechanics and potential token distributions.

The common thread across all segments is their familiarity with Twitter culture, interest in speculative outcomes, and comfort using wallets and dApps. BetThis is designed to engage them natively, requiring no onboarding friction beyond quoting a tweet and connecting a wallet when it's time to stake.

## **5\. Monetization Strategy**

BetThis monetizes by capturing a percentage of the value flow through its prediction markets and offering aligned incentives for liquidity providers, creators, and frequent participants. The primary revenue model is a **2% protocol fee** on the total value staked in each market, taken from the payout pool before distributions to winning users. This model scales directly with usage and market volume.

Over time, BetThis can introduce a **native token** ($BET or similar) with multiple utilities, including staking for market creation, governance voting on market policies, and earning a share of protocol revenues through fee redistribution. Early users, liquidity providers, and engaged predictors can earn this token as part of the growth incentive layer.

Additional monetization options include:

* **Sponsored or Featured Markets**: Protocols, creators, or communities can pay to launch verified or branded prediction markets tied to events like token launches, governance proposals, or product announcements.

* **Premium Tools and Insights**: Advanced users could pay for access to sentiment analytics, market dashboards, and reputation scores that aggregate prediction performance over time.

* **Creator and Referrer Kickbacks**: A percentage of protocol fees from a market can be directed back to the original tweet’s author or the quote initiator, encouraging wider adoption and viral growth.

* **Optional Subscriptions**: Long term, BetThis could layer in optional pro accounts or prediction leagues where users pay for participation in curated high-stakes markets or tournaments.

The core economic flywheel is designed around usage volume. As more markets are triggered by community engagement and more users stake on outcomes, protocol fee revenue grows. This revenue is partially recycled into liquidity incentives, creator payouts, and ecosystem growth, ensuring sustainable monetization aligned with user activity.

## **6\. Growth Strategy**

BetThis is designed with virality and user-driven growth at its core, leveraging existing Twitter behaviors to drive adoption with minimal friction. The product growth strategy focuses on activating social loops, incentivizing participation, and partnering with high-visibility accounts to reach early users.

1. **Native Virality via Twitter Mechanics**: The prediction creation flow is built entirely on top of quoting tweets. Every time a user starts a prediction by tagging `@betthis`, they are broadcasting it to their followers. As quote tweets and poll votes accumulate, the Red Pill score visibly increases, creating FOMO and social pressure that drives more engagement. This loop incentivizes users to create, share, and interact with predictions organically.

2. **Influencer and Creator Engagement**: A targeted onboarding campaign will reach out to meme accounts, crypto analysts, and large CT personalities who frequently post predictions or spicy takes. These creators can be offered token incentives, featured placement, or a share of the protocol fees from predictions initiated on their tweets. The goal is to make it easy and rewarding for them to plug into BetThis without needing to change their behavior.

3. **Incentivized Participation with XP and Leaderboards**: Users earn XP or "Grass" for taking actions like creating predictions, voting early, staking, or being on the winning side. Leaderboards track top predictors, meme lords, and forecasters, introducing social proof and competitiveness. Over time, this XP can be tied to token rewards, exclusive market access, or governance rights.

4. **Community Growth via Protocol Integrations**: BetThis will integrate directly with Ribbit Wallet, allowing wallet users to access predictions natively. Future integrations with Telegram bots and Lens/X clients can enable low-friction entry points for broader crypto-native communities.

5. **Low-Stakes, High-Engagement Launch Campaigns**: The MVP will initially launch with small demo markets seeded by the team or partnered creators. These will be free to interact with (faucet USDC/SOL) and used to demonstrate the experience during hackathons, grant programs, and early community growth phases.

6. **Ecosystem Grants and Cross-Promotions**: By launching on Solana, BetThis can access foundation grants, co-marketing support, and liquidity incentives to bootstrap growth. Future collaborations with meme projects, prediction DAOs, or other SocialFi apps can further drive traffic and credibility.

   ## **7\. Key Metrics to Track**

To measure progress and optimize growth, BetThis will track the following core metrics:

1. **Number of Markets Created:** Tracks how many prediction markets have been launched from viral tweets. This reflects product adoption and engagement.

2. **Total Prediction Volume (USD):** Measures the total amount staked across all markets. This indicates economic activity and protocol revenue potential.

3. **Active Users:** Counts unique users who place predictions or create markets within a defined period (daily, weekly, monthly).

4. **Score-to-Market Conversion Rate:** The percentage of triggered polls that reach the engagement threshold to become live markets. This gauges the effectiveness of the engagement scoring model.

5. **Average Time to Market Creation:** How long it takes for a prediction poll to hit the Red Pill score and launch a market after creation. This reflects the virality and responsiveness of the community.

6. **Protocol Fee Revenue:** Total fees collected by the protocol, which is the primary monetization metric.

7. **User Retention Rate:** Tracks how many users return to participate in multiple markets, essential for assessing product stickiness.

8. **Liquidity Provider Participation:** Number and volume of liquidity providers supplying funds to the prediction markets, indicating market health.

9. **XP/Grass Distribution and Usage:** Measures user engagement with gamification incentives and their effect on growth.

10. **Creator Referral Impact:** Tracks how many markets originate from influencer or creator quotes and the resulting volume, important for growth strategy validation.

These metrics will be continuously monitored through backend analytics dashboards and used to inform product improvements, incentive structures, and marketing efforts

This growth strategy ensures that BetThis doesn’t rely on paid user acquisition or external hype cycles. Instead, it activates a network of creators, degens, and forecasters already operating in the environment BetThis is designed to enhance.

## **8\. Roadmap & Timeline**

**Phase 1: MVP Development (Weeks 1-4)**

* Week 1: Set up Twitter bot for quote detection and poll creation; establish engagement scoring engine; scaffold frontend UI and database schema.

* Week 2: Develop smart contract core for YES/NO markets on Solana; integrate Red Pill trigger to auto-launch markets based on score threshold; implement basic oracle for manual resolution.

* Week 3: Enable staking and market participation via Ribbit Wallet; complete payout and settlement logic; add real-time score and market status UI components.

* Week 4: Polish UI/UX; deploy contracts on Solana devnet; perform testing; prepare demo for hackathon submission.

**Phase 2: Mainnet Launch & Feature Expansion (Months 2-4)**

* Deploy on Solana mainnet with robust oracle integration.

* Introduce native token for rewards, staking, and governance.

* Add premium features: analytics dashboard, creator incentives, sponsored markets.

* Build out XP and leaderboard systems for gamification.

**Phase 3: Ecosystem Growth & Integrations (Months 5-8)**

* Integrate with Telegram/X bots and other social platforms for multi-channel prediction creation.

* Expand wallet support and add fiat onramps.

* Partner with DAOs and meme communities for curated markets.

* Launch liquidity mining and token staking programs.

**Phase 4: Advanced Features & Scale (Months 9-12+)**

* Develop cross-chain prediction markets using Supra or other Layer 1s.

* Implement AI-powered market insights and personalized forecasting agents.

* Launch mobile apps and native social feed for predictions.

* Explore licensing, regulatory compliance, and institutional product versions.

This timeline balances a rapid MVP delivery with progressive feature rollout to build a sustainable, scalable protocol that grows with its community.

## **9\. Team**

The BetThis team combines expertise in blockchain development, product management, marketing, and community building—critical areas for success in the rapidly evolving crypto and social prediction space.

* **Founder / Product Lead:** Experienced in launching and scaling crypto products with a strong background in marketing and user growth. Responsible for overall vision, strategy, and community engagement. (E.g., Abhinav Kumar — cofounder of Ribbit Wallet)

* **Smart Contract Developer:** Proficient in Solana’s Anchor framework and Rust programming, responsible for designing, implementing, and auditing the prediction market contracts and oracle integration.

* **Backend Engineer:** Skilled in Node.js, TypeScript, and working with Twitter APIs (e.g., Helius) for real-time data ingestion, poll management, engagement scoring, and triggering smart contract actions.

* **Frontend Developer:** Experienced in React, Next.js, and wallet integrations (Ribbit Wallet, Phantom). Focused on building intuitive interfaces for prediction creation, staking, and market monitoring.

* **DevOps / Infrastructure Engineer:** Handles deployment, monitoring, and scaling of backend services and smart contract infrastructure on Solana devnet/mainnet, ensuring uptime and security.

* **Designer (Optional/Part-time):** Crafts UI/UX wireframes and visual assets to deliver a polished user experience aligned with crypto and social media aesthetics.

Where possible, team members will leverage existing Ribbit Wallet infrastructure and community to accelerate development and adoption. The team is lean but focused on rapid iteration and high-impact delivery.

## **10\. Funding Ask / Grant Purpose**

BetThis seeks a **grant of $150,000** to accelerate the development and launch of its MVP and initial growth phase on Solana. The funds will be allocated as follows:

* **Development (65%)**: Salaries for core team members including smart contract dev, backend, frontend, and devops engineers to deliver a robust, secure, and scalable MVP within 4 weeks and subsequent feature rollouts.

* **Community & Growth (15%)**: Incentives for early adopters, creators, and liquidity providers; marketing campaigns targeting crypto Twitter influencers and key communities; initial liquidity incentives.

* **Infrastructure & Tools (10%)**: Cloud services, API subscriptions (Helius/Twitter API), deployment, and monitoring costs required to run real-time engagement tracking and onchain interactions.

* **Design & User Experience (5%)**: UI/UX design resources for polishing the frontend and ensuring seamless wallet integrations.

* **Miscellaneous & Contingency (5%)**: Buffer for unforeseen expenses, legal review, and compliance consultation.

The grant investment will enable BetThis to launch a live MVP on Solana devnet within 4 weeks, demonstrate product-market fit through user engagement metrics, and build a foundation for scaling to mainnet and broader integrations. The protocol’s fee model projects sustainable revenue generation that can fund ongoing development and community rewards.

This funding aligns with Solana’s strategic focus on innovative consumer applications that drive network adoption and new use cases for programmable money.

## 

## 

## 

## 

## 

## 

## **Product Document** 

## **1: Product Overview**

**Project Name:** *BetThis*  
 **Chain:** Solana  
 **Type:** Social-activated onchain prediction market protocol  
 **Stage:** MVP (Hackathon-ready in 4 weeks)

**Product Goal:**  
 To build a protocol that automatically turns viral tweets into YES/NO onchain prediction markets, allowing users to stake real value (USDC/SOL) on the outcome of public claims made on Twitter. The product connects Twitter engagement (quotes, votes, replies) to a trigger mechanism that, when a defined threshold is reached, deploys a prediction market on Solana with zero manual intervention.

**Key Value Proposition:**  
 BetThis allows users to monetize attention, hold influencers accountable, and bet on the outcomes of social discourse in real time. It creates a new category of community-driven markets where virality drives market creation, and public consensus is tested through economic skin-in-the-game.

**Problem Being Solved:**  
 There is no native, low-friction way to turn public predictions and viral discourse into financially meaningful markets. SocialFi platforms focus on clout and tokens but rarely tie engagement to outcomes. Prediction markets exist, but they are disconnected from the real-time pulse of crypto Twitter.

**Solution Summary:**  
 By embedding into Twitter-native behavior (quote tweets), BetThis allows any user to create a lightweight poll-based prediction. When enough users engage (via votes or quotes), the system hits a score threshold and deploys a smart contract that handles staking, outcome resolution, and payouts. The product uses Ribbit Wallet and Solana for fast, low-cost execution and supports both casual and high-stakes usage.

**MVP Focus:**

* Viral tweet → Score tracker → Smart contract deployment

* YES/NO staking with USDC or SOL

* Oracle resolution (manual or automated)

* Simple, mobile-optimized frontend

* Twitter bot integration

* Wallet connection via Ribbit and Phantom

**Success Criteria:**

* Users can trigger prediction markets by quoting tweets

* System accurately tracks score and automatically launches contracts

* 100 users create or vote on predictions in the first month

* $50K in staked volume within first 3 months

* Protocol earns first $1K in fees within 3–4 months

## **2: Core User Flows**

BetThis is designed with minimal friction and native alignment with Twitter behavior. Here are the core user flows that define the product experience:

### **1\. Create a Prediction (Quote Trigger Flow)**

**Actor:** Any Twitter user  
 **Steps:**

* User quotes a public tweet and tags `@betthis` with a prediction statement, e.g., `@betthis "Solana flips Ethereum in market cap by 2026"`

* BetThis bot replies to the tweet with a public poll (YES/NO) and a link to the live score dashboard

* A Red Pill score counter (based on quotes \+ poll votes) starts tracking in real time

* Once score ≥ 100, the market is triggered onchain automatically

* Tweet becomes a market — users can now stake USDC/SOL

### **2\. Engage & Build Score**

**Actor:** Followers and community  
 **Steps:**

* Users vote on the poll or quote the same tweet with the claim text

* Each quote or unique vote contributes to the Red Pill score

* UI updates the live score, engagement activity, and projected market status

* Social engagement creates organic virality and incentivizes meme participation

### **3\. Market Trigger & Launch**

**Actor:** System (automatic)  
 **Steps:**

* Once the Red Pill score reaches 100, a smart contract is deployed on Solana

* Market parameters: YES/NO options, expiry time, staking token (USDC/SOL)

* Tweet is updated with a reply link to the live onchain market

### **4\. Prediction Participation (Staking Flow)**

**Actor:** Any user with a wallet  
 **Steps:**

* User clicks the market link, connects wallet (Ribbit, Phantom, etc.)

* Selects YES or NO, enters stake amount

* Confirms transaction on Solana

* Bet is recorded onchain, position is tracked in user dashboard

### **5\. Resolution & Payout**

**Actor:** Oracle or admin (MVP), protocol (future)  
 **Steps:**

* After expiry, outcome is resolved using oracle input or manual input

* Winning side receives pro-rata payout, minus 2% protocol fee

* Users can claim rewards directly through UI

* XP/Grass rewards optionally distributed for early participants or winners

### **6\. Creator / Referrer Incentives *(optional)***

**Actor:** Original tweet author or quote initiator  
 **Steps:**

* Protocol fee share or token reward can be credited to creators whose tweets trigger markets

* Referral tracking system tracks who initiated the tweet-to-market flow

* This builds long-term incentive for creators to post high-engagement claims

## **3: Technical Architecture**

The architecture of BetThis is built for modularity, scalability, and responsiveness across three layers: **Social Ingestion**, **Onchain Prediction Market**, and **Frontend \+ Wallet UX**. Below is the high-level breakdown:

### **1\. Social Ingestion Layer (Offchain)**

**Purpose:** Monitor Twitter/X in real-time for prediction triggers and engagement scoring.

* **Twitter Bot Listener**

  * Monitors quote tweets tagging `@betthis` using Helius or Twitter API

  * Extracts original tweet ID, quoted claim, and user handle

  * Replies with a YES/NO poll and stores metadata

* **Engagement Score Engine**

  * Tracks real-time engagement: poll votes, quote tweets, and replies

  * Calculates Red Pill score dynamically

  * Triggers smart contract deployment when threshold is reached (e.g., score ≥ 100\)

* **Data Store (e.g., Supabase)**

  * Stores mapping of Tweet IDs ↔ Prediction metadata

  * Tracks engagement history, user actions, and referral data

  * Queues job for market creation on trigger

### **2\. Prediction Market Layer (Onchain – Solana)**

**Purpose:** Manage market creation, staking, settlement, and payouts.

* **Market Factory Contract (Rust / Anchor)**

  * Deploys new YES/NO market contracts with configurable expiry, staking token, and oracle hook

  * Prevents spam and caps max open markets per user or window

* **Market Contract (per event)**

  * Accepts USDC/SOL stakes on YES/NO

  * Uses constant-sum or bonding curve AMM for pricing

  * Records user positions and locks funds until expiry

* **Oracle Resolver (manual initially)**

  * MVP: Admin resolution via multisig

  * Future: Integration with Supra or UMA for external verification

* **Payout Module**

  * Settles funds to winning side

  * Deducts 2% protocol fee

  * Optional creator/referrer payout split

  * Triggers XP/Grass reward event offchain

### **3\. Frontend \+ Wallet UX Layer**

**Purpose:** Deliver a clean, mobile-friendly UI for browsing, voting, staking, and tracking.

* **Frontend Stack**

  * Built with React \+ TailwindCSS

  * Hosted on Vercel

  * Responsive UI with embedded Twitter views, score tracker, and live market cards

* **Wallet Integration**

  * Supports Ribbit Wallet \+ Phantom

  * Solana Pay flow for staking

  * Real-time market updates via WebSockets or polling

* **Dashboard / Analytics**

  * User dashboard for tracking positions, earnings, and XP

  * Creator leaderboard, Red Pill stats, and market history

  * Admin panel for manual oracle resolution during MVP

### **Optional: Gamification & Token Layer (Post-MVP)**

* XP/Grass reward engine tied to onchain \+ social actions

* BetThis token contract for staking, governance, and rewards

* Points-to-token conversion logic (offchain-to-onchain sync)

## **4: Development Milestones & Timeline**

This section outlines the development plan for building BetThis MVP within a 4-week hackathon sprint, followed by optional post-MVP milestones for mainnet expansion, gamification, and scaling.

### **Phase 1: Week 1 – Infrastructure Setup & Social Ingestion**

* Set up GitHub repo, project board, deployment environment (Vercel, Supabase, etc.)

* Integrate Twitter API or Helius webhook to detect `@betthis` quote tweets

* Build Twitter bot to reply with YES/NO polls and store tweet metadata

* Implement backend service to track quote count and poll votes

* Define Red Pill scoring model and scoring threshold logic

* Set up Supabase/Postgres for tweet-market mapping and score tracking

### **Phase 2: Week 2 – Smart Contract Development (Solana)**

* Build Market Factory contract using Anchor (Rust)

  * Parameters: prediction text, expiry time, token type (USDC/SOL), creator address

* Build YES/NO market contract

  * Accepts staking, records user positions, handles AMM pricing

* Deploy test contracts on Solana devnet

* Add basic Oracle hook and admin resolution function

* Begin frontend integration for contract interactions

### **Phase 3: Week 3 – Frontend, Wallet, and Prediction UI**

* Build frontend UI using React \+ TailwindCSS

  * Home page: trending predictions

  * Score dashboard: active tweet polls \+ Red Pill status

  * Market page: YES/NO market view, stake input, timer, odds display

* Integrate Ribbit Wallet and Phantom for staking flow

* Add transaction history and simple position tracker per wallet

* Enable live score updates and tweet linking

### **Phase 4: Week 4 – End-to-End Testing, UX Polish, and Devnet Launch**

* End-to-end testing: quote → poll → score → contract deployment → staking → payout

* Manual resolution system via admin multisig

* Add simple user XP tracking and leaderboard placeholder

* Polish UI, loading states, wallet feedback, mobile responsiveness

* Deploy contracts on Solana devnet

* Conduct internal test event with dummy USDC

* Prepare hackathon pitch demo

### **Post-MVP: Month 2–3 (optional, beyond hackathon)**

* Oracle integration (Supra or UMA) for decentralized resolution

* Launch token XP → $BET rewards system

* Add creator/referrer payout model

* Deploy to Solana mainnet

* Expand to Telegram and Lens clients

* Introduce curated “market of the day” and creator spotlights

* Build analytics dashboard, prediction history, and liquidity tracking

## **5: Technical Requirements / Stack Summary**

This section lists the required technologies, tools, and services needed to build and run BetThis from MVP to post-launch scale.

### **Core Tech Stack**

| Component | Tech / Tool |
| ----- | ----- |
| **Smart Contracts** | Solana, Anchor Framework (Rust), SPL Tokens (USDC/SOL support) |
| **Backend Services** | Node.js / TypeScript, Supabase (Postgres \+ auth), Redis (score cache optional) |
| **Frontend** | React, TailwindCSS, Next.js, Vercel (hosting \+ serverless) |
| **Twitter Integration** | Helius (preferred) or Twitter API (fallback), webhook listeners |
| **Wallet Support** | Ribbit Wallet, Phantom (via Solana Wallet Adapter), Solana Pay |
| **Oracle System (MVP)** | Manual admin resolution via multisig; later integration with Supra or UMA |
| **DevOps / Infra** | GitHub Actions (CI/CD), Vercel for frontend, Solana RPC provider (Helius, Triton) |
| **Analytics / Logging** | Supabase dashboard, optional Sentry or LogSnag for error tracking |
| **Security** | Manual code review, audit-ready smart contracts, multisig controls |

### **Development Tools**

* **Solana Devnet** for initial contract testing and UX validation

* **Anchor CLI** for deploying and testing smart contracts

* **Vercel CLI** for CI/CD on the frontend

* **Postman** or **Insomnia** for testing API endpoints (backend \+ Twitter ingest)

* **VS Code** with Solana \+ Anchor extensions

* **Figma** for UI/UX wireframes and mockups (optional)

### **3rd Party APIs & Services**

| Service | Use |
| ----- | ----- |
| Helius API | Monitor Solana wallet transactions \+ fetch tweet mentions via webhooks |
| Twitter API (v2) | Fallback to get quote tweets and reply counts (if Helius is insufficient) |
| Supabase | Auth, database, real-time sync for engagement tracking |
| Solana RPC Provider | Contract interactions and account reads (Triton, QuickNode, or Helius) |

### **Optional for Post-MVP**

* **Supra Oracle** for decentralized market resolution

* **The Graph (if needed)** for indexed prediction history

* **Token Gating / NFT XP Boosts** (if gamification layer is expanded)

* **Lens Protocol Bot / Telegram Bot** for multichannel market creation

* **Analytics Dashboard** via Dune (if needed) for onchain stats and revenue

## **6: Open Questions or Risks**

This section outlines potential technical, legal, and operational risks associated with BetThis, along with open questions to be resolved during or after MVP.

### **A. Legal & Regulatory Risks**

| Risk | Notes / Mitigation |
| ----- | ----- |
| **Gambling / Betting Classification** | Prediction markets may be viewed as gambling in some jurisdictions. |
| **Mitigation:** | Use “forecast” or “prediction” language (like Polymarket), limit high-stakes markets, and explore offshore DAO structuring if needed. |
| **KYC/AML Requirements** | If fiat ramps or tokens are introduced, KYC thresholds may apply. |
| **Mitigation:** | Start with pure USDC/SOL staking, no fiat. Later integrate compliant on-ramps only if necessary. |

### **B. Technical Risks**

| Risk | Notes / Mitigation |
| ----- | ----- |
| **Oracle Manipulation or Delay** | Manual resolution in MVP is centralized and prone to bias. |
| **Mitigation:** | Transition to decentralized or multi-party oracles like Supra, UMA, or Witnet post-MVP. |
| **High Engagement Spam / Sybil** | Users may try to trigger markets through bots or fake accounts. |
| **Mitigation:** | Score weighting (unique voters only), Sybil-resistant scoring, or wallet-linked voting via Ribbit. |
| **Contract Bugs / Financial Loss** | Prediction contracts carry financial stakes; untested bugs could lead to locked/lost funds. |
| **Mitigation:** | Manual audits, bug bounties, time-locked payouts in MVP phase. |

### **C. UX / Adoption Risks**

| Risk | Notes / Mitigation |
| ----- | ----- |
| **Twitter API Rate Limits or Changes** | Dependency on Twitter may break due to policy changes or API limitations. |
| **Mitigation:** | Use Helius as primary data source, cache engagement data, and explore Lens/Mastodon later. |
| **Low Market Liquidity Early On** | Without users or LPs, prediction markets may be shallow or unattractive. |
| **Mitigation:** | Bootstrap with protocol liquidity, faucet campaigns, and reward top participants. |
| **Confusing Wallet UX** | First-time users may struggle with staking, fees, and claiming. |
| **Mitigation:** | Use Ribbit Wallet’s simplified flow; mobile-first design; add tooltips and guides. |

### **D. Open Questions**

1. **Should we allow creators to customize markets (expiry, tokens, etc.) at launch or keep it fixed?**  
    → MVP will keep it fixed for simplicity; future versions can unlock advanced creator tools.

2. **Do we allow users to exit positions before market expiry (i.e., secondary trading)?**  
    → No in MVP. Yes/NO markets are binary and AMM-based; advanced trading adds complexity.

3. **Do we reward early voters/stakers more than late ones?**  
    → Potentially, via XP boost or slightly better odds in early entry, can be explored in post-MVP gamification.

4. **What data source qualifies as "truth" for market resolution?**  
    → Initially: admin-controlled. Later: structured oracle questions or verified URLs/news sources tied to market metadata.

# **Scoring Mechanism: "Red Pill Score"**

The **Red Pill Score** quantifies the social proof a tweet and its associated poll receive before triggering a live onchain prediction market. Only tweets that demonstrate significant reach and engagement qualify, ensuring markets are meaningful and liquid.

| Metric | Points per Unit | Notes |
| ----- | ----- | ----- |
| Impressions on Original Quoted Tweet | 0.01 pt per 1 view | Measures original tweet reach |
| Impressions on First Quote \+ Poll | 0.05 pt per 1 view | Captures reach of the initial quote that triggers the poll |
| Subsequent Quote Tweets (of same poll) | 3 pts per quote | Rewards propagation by others quoting the poll |
| Likes on Quotes | 0.5 pts per like | Signals additional engagement |
| Votes on the Poll (YES/NO) | 1 pt per vote | Strongest signal of interest |
| Impressions on Poll Tweet | 0.02 pt per 1 view | Poll visibility measure |
| Verified User Starts It (optional) | \+10 pts | Bonus for trusted initiators |

**Threshold:** Market deploys when Red Pill Score ≥ 100 pts.

# **Example Calculations with Approximate Reach**

### **Example 1: Medium Influencer Tweet**

| Metric | Value | Points Calculation |
| ----- | ----- | ----- |
| Original Tweet Impressions | 10,000 | 10,000 × 0.01 \= **100 pts** |
| First Quote Impressions | 20,000 | 20,000 × 0.05 \= **1,000 pts** |
| Likes on First Quote | 120 | 120 × 0.5 \= **60 pts** |
| Votes on Poll | 200 | 200 × 1 \= **200 pts** |
| Poll Tweet Impressions | 25,000 | 25,000 × 0.02 \= **500 pts** |
| Subsequent Quotes | 4 | 4 × 3 \= **12 pts** |
| Likes on Subsequent Quotes | 80 | 80 × 0.5 \= **40 pts** |

**Total Red Pill Score:** 100 \+ 1,000 \+ 60 \+ 200 \+ 500 \+ 12 \+ 40 \= **1,912 pts**

**Estimated Unique Reach:** \~40,000–50,000 people

### **Example 2: Degen Meme Tweet (Small Account)**

| Metric | Value | Points Calculation |
| ----- | ----- | ----- |
| Original Tweet Impressions | 2,000 | 2,000 × 0.01 \= **20 pts** |
| First Quote Impressions | 1,500 | 1,500 × 0.05 \= **75 pts** |
| Likes on First Quote | 40 | 40 × 0.5 \= **20 pts** |
| Votes on Poll | 50 | 50 × 1 \= **50 pts** |
| Poll Tweet Impressions | 5,000 | 5,000 × 0.02 \= **100 pts** |
| Subsequent Quotes | 1 | 1 × 3 \= **3 pts** |
| Likes on Subsequent Quote | 10 | 10 × 0.5 \= **5 pts** |

**Total Red Pill Score:** 20 \+ 75 \+ 20 \+ 50 \+ 100 \+ 3 \+ 5 \= **273 pts**

**Estimated Unique Reach:** \~6,000–7,000 people

### **Example 3: Low Engagement Tweet (No Market Trigger)**

| Metric | Value | Points Calculation |
| ----- | ----- | ----- |
| Original Tweet Impressions | 500 | 500 × 0.01 \= **5 pts** |
| First Quote Impressions | 1,000 | 1,000 × 0.05 \= **50 pts** |
| Likes on First Quote | 10 | 10 × 0.5 \= **5 pts** |
| Votes on Poll | 12 | 12 × 1 \= **12 pts** |
| Poll Tweet Impressions | 800 | 800 × 0.02 \= **16 pts** |
| Subsequent Quotes | 0 | 0 pts |
| Likes on Subsequent Quotes | 0 | 0 pts |

**Total Red Pill Score:** 5 \+ 50 \+ 5 \+ 12 \+ 16 \= **88 pts**

**Estimated Unique Reach:** \~1,500–1,800 people

**Market NOT triggered** (below 100 pts threshold).

# **Summary**

| Example | Red Pill Score | Estimated Unique Reach | Market Trigger? |
| ----- | ----- | ----- | ----- |
| Medium Influencer Tweet | 1,912 | 40,000–50,000 | Yes |
| Degen Meme Tweet | 273 | 6,000–7,000 | Yes |
| Low Engagement Tweet | 88 | 1,500–1,800 | No |

# 

# **Loyalty Points Design: “ XP” System**

### **Who earns XP?**

1. **Originator** – The user who first quotes the tweet and triggers the poll

2. **First 3–10 Subsequent Quotes** – Early amplifiers who quote the poll tweet with related text

3. **Poll Voters** – Users who vote YES or NO in the Twitter poll

4. **Retweeters** – Users who retweet the quote or poll tweet

5. **Replies with Keyword** – Users who reply to the quote or poll tweet using specific topic hashtags or keywords tracked by the bot

6. **Wallet-Linked Actions** – If user links wallet via Ribbit and stakes in the market, bonus XP applied

### **Why exclude likes?**

Since public likes data is disabled or unreliable for polling bots, replace likes with **actions that show stronger engagement and are trackable** — retweets, replies, poll votes.

# **Proposed XP Allocation**

| Action | Max Rewarded Count | XP Points per Action | Notes |
| ----- | ----- | ----- | ----- |
| Originator (1st quote) | 1 | 20 XP | Bonus for starting market creation |
| Early Quotes | First 10 only | 10 XP each | Encourages first-wave amplifiers |
| Poll Votes | Unlimited | 5 XP each | Shows interest and commitment |
| Retweets (quote or poll tweet) | Unlimited | 3 XP each | Amplifies reach, reward viral spread |
| Replies with tracked keywords | Unlimited | 2 XP each | Bot scans for relevant hashtags/keywords |
| Wallet Staking (per market) | 1 per user per market | 30 XP | Onchain commitment bonus |

# **Example XP Scenarios**

### **Example: Medium Influencer Tweet Market**

* Originator: 20 XP

* 10 early quotes: 10 × 10 \= 100 XP (distributed to 10 users)

* Poll votes: 200 × 5 \= 1,000 XP (distributed across voters)

* Retweets: 300 × 3 \= 900 XP

* Replies with hashtag: 100 × 2 \= 200 XP

* Wallet stakers: 50 × 30 \= 1,500 XP

**Total XP rewarded across community: 3,720 XP**

# **Additional Notes**

* XP points are **wallet-linked and stored offchain or onchain** via Ribbit wallet integration

* XP can be used later for **fee discounts, governance voting, NFT minting eligibility, or special event access**

* To avoid Sybil attacks, XP for quotes and votes should be weighted by wallet verification or capped per user

* Bot should track **replies with topic keywords or hashtags** as a proxy for engagement where likes are unavailable

