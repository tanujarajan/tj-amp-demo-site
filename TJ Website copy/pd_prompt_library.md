# AI Prompt Library for Product Development

This library contains 22 carefully crafted prompts for use with AI-powered assistants like Claude, ChatGPT, and GitHub Copilot. Each prompt is designed to help accelerate specific aspects of product development, from initial validation to growth and iteration.

> **How to use this library**: Copy the prompt text and paste it into your AI assistant. Replace any placeholder text (indicated with `[brackets]`) with your specific details.

## Table of Contents

### Quickstart
- [Quickstart Context Co-Pilot](#quickstart-context-co-pilot)
- [Build Kick-off Co-Pilot](#build-kick-off-co-pilot)
- [Start Building Command](#start-building-command)

### Validate
- [Problem Interview Script](#problem-interview-script)
- [Jobs To Be Done Framework](#jobs-to-be-done-framework)
- [Audience & Needs Analysis](#audience--needs-analysis)
- [Lean Canvas Builder](#lean-canvas-builder)

### Plan
- [Product Vision & Strategy](#product-vision--strategy)
- [User Story Map](#user-story-mapping)
- [PRD Generator](#prd-generator)
- [MUST-SHOULD-COULD Prioritiser](#must-should-could-prioritiser)
- [Tech Stack Advisor](#tech-stack-selection)
- [Roadmap Milestone Planner](#phased-roadmap-development)

### Build
- [Design System Starter](#design-system-establishment)
- [Repo & CI/CD Quick-Start](#repo--cicd-quick-start)
- [Architecture Outline](#architecture-planning)
- [Feature Implementation Planner](#feature-implementation)
- [Testing Strategy](#testing-strategy)

### Launch
- [Landing-Page Copy Crafter](#landing-page-copy-crafter)
- [Pricing Page Optimiser](#pricing-page-optimiser)
- [Objection-Handling FAQ Builder](#objection-handling-faq-builder)
- [Launch Checklist & Roll-back Plan](#launch-checklist--roll-back-plan)

### Grow & Iterate
- [Growth Experiment Generator](#growth-experiment-generator)
- [Retrospective Facilitator](#retrospective-facilitator)
- [KPI Dashboard Prompt](#kpi-dashboard-prompt)
---

## Quickstart

<details>
<summary><strong>Quickstart Context Co-Pilot</strong></summary>

### Quickstart Context Co-Pilot

**Name**: Foundational Clarity Generator

**Purpose**: Rapidly establish foundational context and clarity for your product idea using AI assistance.

**Goal**: Define your product concept, target users, key problems, differentiation, tech stack ideas, and UI style in a concise, structured format.

**Inputs**: Raw idea, assumptions, preferences.

**Combine With**: Build Kick-off Co-Pilot → Start Building Command

**When to Use**: At the very beginning of a new idea, before writing specs or building.

**Prompt**:
```
You are an expert Product Development Co-Pilot. Your goal is to help me, an aspiring founder, rapidly define the essential foundational context for my new product idea.

Please guide me through the following sections one by one, or in small, logical groups of questions. Wait for my response to each set before moving to the next. My initial thoughts are provided under each section—use these to ask clarifying questions and help me elaborate.

After we've gone through all sections, compile a structured summary of the refined context.

Let's begin!

---

Section 1: Core Idea & Problem
Ask me:
- What’s the main idea or concept for your product? (1–2 sentences)
- What primary problem does this solve for your audience?
- What are the 1–2 most critical pain points you aim to address first?

Section 2: Target Audience
Ask me:
- Who is your primary target user? (be specific)
- What key characteristics or needs are relevant?

Section 3: Solution & Differentiation
Ask me:
- What are the main components of your solution?
- How is it different from alternatives or uniquely valuable?

Section 4: Initial Tech Stack Considerations
Ask me:
- Any platforms or technologies you’re already considering?
Then suggest:
- 1–2 lean tech stack options optimized for speed of prototyping, with reasons

Section 5: Brand/UI Design Style Preferences
Ask me:
- Which style best fits your idea?
    A) Modern & Clean
    B) Playful & Vibrant
    C) Elegant & Sophisticated
    D) Utilitarian & Functional
- Any specific UI/brand inspirations?
Then suggest:
- 2–3 visual keywords to generate mockups

Final Task:
After going through each section, summarize in this format:
- Product Idea:
- Core Problem & Pain Points:
- Target Audience:
- Proposed Solution & Differentiation:
- Initial Tech Stack & Recommendations:
- UI/Brand Style & AI Keyword Suggestions:
```

**Example Usage**: When you have a spark of a product idea and want to turn it into an actionable, well-structured summary quickly.

**Expected Output**: A clearly defined foundational context summary to guide your MVP and prototyping.
</details>

<details>
<summary><strong>Build Kick-off Co-Pilot</strong></summary>

### Build Kick-off Co-Pilot

**Name**: MVP Planning Assistant

**Purpose**: Help translate your idea into a defined MVP and rapid prototyping plan.

**Goal**: Define MVP features, a Day 1 user journey, and granular actions to start building.

**Inputs**: Output of Quickstart Context Co-Pilot.

**Combine With**: Quickstart Context Co-Pilot → Start Building Command

**When to Use**: After you’ve defined your product context and want to translate it into an MVP build plan.

**Prompt**:
```
You are an expert Product Development Co-Pilot. Help me create a 'Build Kick-off Plan' for my product idea. Use the 'Quickstart Context' I provide as our foundation.

Guide me through the following sections one by one. Wait for my response before continuing. At the end, generate a Build Kick-off Plan summary.

Let's begin!

First, I will provide you the 'Quickstart Context' summary. Reply “Ready” once you’ve processed it.

---

Section 1: Decompose Core Solution & Brainstorm Features
Ask me:
- What 3–5 product features could bring this solution to life?
Encourage:
- Creativity, outside-the-box thinking

Section 2: MVP Feature Set (MoSCoW Prioritization)
Ask me:
- What’s the absolute minimum feature set needed to deliver core value?
- Any Should-Have features to come soon after?
Then:
- Summarize Must-Haves and Should-Haves together with common table-stakes MVP items (auth, DB, etc.)

Section 3: Define Day 1 User Journey
Ask me:
- What is the single, most important journey a user should be able to complete on Day 1?
Default:
- A simple front-end-only interactive prototype (mock or no backend)

Section 4: Day 1 Granular Action Plan
Based on above, generate 3–5 actionable build tasks, such as:
- Create an index.html page with main layout
- Add input fields for user skill entry
- Style using Tailwind (Modern & Clean)
- Mock backend logic with placeholder data

Final Output Format:
- Input Quickstart Context:
- Brainstormed Features:
- MVP Feature Set (Day 1):
  - Must-Haves:
  - Should-Haves:
- Day 1 Core User Journey:
- Granular Action Plan:
```

**Example Usage**: After defining a new product’s concept and you’re ready to move into MVP building.

**Expected Output**: A complete MVP build plan and Day 1 feature outline, ready for implementation.
</details>

<details>
<summary><strong>Start Building Command</strong></summary>

### Start Building Command

**Name**: AI Build Command Generator

**Purpose**: Helps you generate the very first build command to give to an AI coding tool.

**Goal**: Generate a clear, scoped, and contextualized AI build prompt to start your Day 1 prototype.

**Inputs**: Outputs of Quickstart Context + Build Kick-off Plan

**Combine With**: Build Kick-off Co-Pilot

**When to Use**: When you’re ready to paste your first command into ChatGPT, Claude, Cursor, etc. to start generating code.

**Prompt**:
```
You are an expert AI developer tasked with building the first prototype of a new product.

Project Context (from Quickstart Context):
- Problem: [Insert]
- Target Audience: [Insert]
- Core Solution Idea: [Insert]
- Key Differentiator: [Insert]
- Chosen Tech Stack: [Insert]
- UI/Brand Style: [Insert] (e.g., “Modern & Clean” with: “minimalist UI dashboard, teal and grey, sans-serif font”)

Build Plan (from Build Kick-off Plan):
- Day 1 Prototype Goal: [Insert user journey]
- MVP Must-Have Features:
  - [Insert]
  - [Insert]
- Specific Initial Tasks:
  - [Insert First Task]
  - [Insert Second Task]

Your Task:
1. Implement **only the very first granular action**.
2. Output complete code for this task.
3. Ask for confirmation before proceeding.

Key Guardrails:
- Don’t build anything not in the task list
- Use only the tech stack listed
- Implement with simplicity and fast iteration in mind
- Output minimal viable front-end (unless backend is in Must-Haves)
- Follow style cues from UI section (fonts, layout, etc.)

Start with:
[Reiterate First Task Here]
```

**Example Usage**: When ready to ask ChatGPT or Cursor to start coding a new feature or UI.

**Expected Output**: A clean, scoped prompt with all context and formatting AI tools need to start your prototype the right way.
</details>

---


## Validate

<details>
<summary><strong>Problem Interview Script</strong></summary>

### Problem Interview Script

**Name**: Demand Validator

**Purpose**: Helps you run structured customer-problem interviews to validate real pain points before building a solution.

**Goal**: Confirm that your problem hypothesis is valid and worth solving.

**Inputs**: Problem hypothesis, target customer segment, current assumptions.

**Combine With**: JTBD Framework → Lean Canvas Builder

**When to Use**: Before building anything, when you have a problem hypothesis but need validation.

**Prompt**:
```
Act as a research facilitator helping me run a 30-minute problem interview to validate my business idea. Guide me through a structured conversation that uncovers genuine pain points without leading the interviewee or introducing bias.

First, ask me about:
- The problem I believe exists
- Who experiences this problem (my target customer)
- My current assumptions about their pain points
- What solutions they might be using today

Then, help me create a 5-7 question interview script that:

1. Starts with broad context questions about their role and workflow
2. Naturally leads into discussion of the problem area without mentioning my solution
3. Explores the severity and frequency of the problem
4. Uncovers current workarounds and their limitations
5. Quantifies impact (time/money lost, opportunities missed)
6. Reveals willingness to pay for a solution

For each question, explain:
- Why you're including it
- What signals to look for in their response
- How to ask effective follow-ups without leading

Finally, provide guidance on:
- How to interpret different response patterns
- Red flags that indicate this isn't a real problem
- Green flags that suggest strong problem-solution fit
- How many interviews I should conduct before drawing conclusions
```

**Example Usage**: When you have a business idea but aren't sure if the problem is painful enough to justify building a solution.

**Expected Output**: A structured interview script with 5-7 questions, guidance on interpreting responses, and a framework for validating your problem hypothesis.
</details>

## Plan

<details>
<summary><strong>Tech Stack Advisor</strong></summary>

### Tech Stack Advisor

**Name**: CTO Tech Stack Advisor

**Purpose**: Helps you select the optimal tech stack for your specific project needs, balancing technical considerations with business requirements.

**Goal**: Make informed technology choices that align with your team's capabilities, timeline, and business objectives.

**Inputs**: Project requirements, team skills, timeline, budget, scaling needs.

**Combine With**: Architecture Outline → Repo & CI/CD Quick-Start

**When to Use**: Early in planning when you need to make foundational technology decisions.

**Prompt**:
```
Act as an experienced CTO advising me on selecting the ideal tech stack for my project. I need comprehensive guidance that considers all critical factors.

First, ask me about:
- The nature and purpose of my application
- My target platforms (web, mobile, desktop)
- Expected user base and scaling requirements
- My team's current technical expertise
- Timeline and budget constraints
- Long-term maintenance considerations

Then provide a structured recommendation that includes:

1. Frontend technology options with pros/cons for my specific case
2. Backend technology options with pros/cons for my specific case
3. Database recommendations based on my data structure and access patterns
4. Infrastructure and hosting considerations
5. Development tools and workflow suggestions
6. Trade-offs between different approaches (development speed vs. performance)

For each recommendation, explain WHY it's suitable for my specific needs rather than just listing technologies. If there are multiple viable options, present them as alternatives with clear differentiators.

Finally, provide a concise summary of your top recommendation as a cohesive stack, explaining how the components work together to meet my specific requirements.
```

**Example Usage**: When starting a new project and needing to decide between technologies like React vs. Flutter, Node.js vs. Django, SQL vs. NoSQL, etc.

**Expected Output**: A personalized tech stack recommendation based on your specific project requirements, with clear explanations of the trade-offs and reasoning behind each choice.
</details>

<details>
<summary><strong>Jobs To Be Done Framework</strong></summary>

### Jobs To Be Done Framework

**Name**: JTBD Framework Facilitator

**Purpose**: Helps you apply the Jobs to be Done framework to understand the functional, emotional, and social jobs your users are trying to accomplish.

**Goal**: Identify the real motivations behind user behavior to build solutions that address core needs.

**Inputs**: Target user segment, problem space, current solutions.

**Combine With**: Problem Interview Script → Lean Canvas Builder

**When to Use**: Early in product development when you need to deeply understand user motivations beyond surface-level features.

**Prompt**:
```
Help me apply the Jobs to be Done (JTBD) framework to understand what my users are truly trying to accomplish. Guide me through a comprehensive analysis of functional, emotional, and social jobs.

First, ask me about:
- My product or service concept
- The target users I'm focusing on
- The context in which they would use my solution
- Current alternatives or workarounds they use

Then, help me identify:

1. Functional Jobs:
   - What practical tasks are users trying to complete?
   - What problems are they trying to solve?
   - What needs are they trying to satisfy?
   - What obstacles are they trying to overcome?

2. Emotional Jobs:
   - How do users want to feel when using the solution?
   - What negative emotions are they trying to avoid?
   - What gives them confidence or reassurance?
   - What anxieties or frustrations are they trying to eliminate?

3. Social Jobs:
   - How do users want to be perceived by others?
   - What relationships are they trying to build or maintain?
   - How does this product affect their social identity?

For each job category, help me formulate clear JTBD statements in the format:
"When [situation], I want to [motivation], so I can [expected outcome]."

Then guide me to:
- Prioritize these jobs based on importance to users
- Identify which jobs are underserved by current solutions
- Map how my proposed solution addresses these jobs
- Spot gaps where important jobs remain unaddressed
```

**Example Usage**: When defining product requirements or evaluating product-market fit for a new concept.

**Expected Output**: A comprehensive JTBD analysis with prioritized job statements that reveal the true motivations behind user behavior, helping you build a more compelling solution.
</details>

<details>
<summary><strong>Lean Canvas Builder</strong></summary>

### Lean Canvas Builder

**Name**: Business Model Architect

**Purpose**: Helps you create a one-page business model using the Lean Canvas framework to validate your business concept quickly.

**Goal**: Articulate and validate your business model assumptions in a structured format.

**Inputs**: Problem, target customers, unique value proposition, solution ideas.

**Combine With**: Problem Interview Script → Product Vision & Strategy

**When to Use**: Early in the business planning process when you need to clarify and validate your business model.

**Prompt**:
```
Help me create a comprehensive Lean Canvas for my business idea. Guide me through each section of the canvas to develop a clear, concise business model that I can validate with customers.

First, ask me about:
- The problem I'm trying to solve
- My target customer segments
- My initial solution ideas
- My unique value proposition

Then, help me complete each section of the Lean Canvas:

1. Problem:
   - The top 1-3 problems my target customers face
   - Existing alternatives they currently use

2. Customer Segments:
   - My target customers and users
   - Early adopters who will try my solution first

3. Unique Value Proposition:
   - Clear, compelling message that states why I'm different and worth buying
   - How I connect customer pain to my solution

4. Solution:
   - The simplest solution that could address each problem
   - Minimum viable product features

5. Channels:
   - Paths to reach my customers
   - Which channels will work best for my specific customers

6. Revenue Streams:
   - Revenue model (subscription, one-time, etc.)
   - Pricing strategy and lifetime value

7. Cost Structure:
   - Fixed and variable costs
   - Customer acquisition costs

8. Key Metrics:
   - The numbers that tell me how my business is doing
   - Activities I need to measure

9. Unfair Advantage:
   - Something that cannot be easily copied or bought
   - My sustainable competitive advantage

For each section, help me be specific, concise, and focused on testable assumptions. Challenge me to think critically about each element and how they fit together into a cohesive business model.
```

**Example Usage**: When developing a new business idea or startup concept that needs validation.

**Expected Output**: A completed Lean Canvas with all nine sections filled out, highlighting key assumptions to test and providing a clear overview of your business model.

## Launch

<details>
<summary><strong>Landing-Page Copy Crafter</strong></summary>

### Landing-Page Copy Crafter

**Name**: Conversion Copywriter

**Purpose**: Helps you create compelling landing page copy that clearly communicates your value proposition and drives conversions.

**Goal**: Maximize conversion rates by crafting persuasive, benefit-focused copy that resonates with your target audience.

**Inputs**: Product details, target audience, key benefits, desired action.

**Combine With**: Pricing Page Optimiser → Objection-Handling FAQ Builder

**When to Use**: When preparing to launch a product or service and need high-converting landing page copy.

**Prompt**:
```
Help me craft compelling landing page copy that clearly communicates my value proposition and drives conversions. Guide me through creating all essential copy elements for a high-converting page.

First, ask me about:
- My product/service and its core value proposition
- My target audience and their key pain points
- The primary benefits and features of my offering
- The specific action I want visitors to take
- Any unique selling points or differentiators
- Brand voice and tone preferences

Then, help me create:

1. Headline and subheadline:
   - Attention-grabbing main headline that addresses the primary pain point
   - Supporting subheadline that expands on the value proposition
   - Alternative versions to test for effectiveness

2. Hero section copy:
   - Clear, concise description of what I'm offering
   - Primary benefit statement that resonates with the target audience
   - Call-to-action text that creates urgency and clarity

3. Feature-benefit blocks:
   - Compelling feature headlines that focus on outcomes, not features
   - Benefit-focused descriptions that connect features to user value
   - Supporting social proof elements or statistics

4. Objection-handling statements:
   - Copy that addresses common concerns or hesitations
   - Trust-building elements (guarantees, testimonials, etc.)
   - Risk-reversal statements

5. Final call-to-action section:
   - Compelling closing argument for taking action
   - Clear next steps with benefit-focused CTA button text
   - Urgency or scarcity elements if appropriate

For each section, provide multiple options where appropriate, and explain the psychological principles behind effective copy choices.
```

**Example Usage**: When creating a landing page for a new product launch, feature release, or marketing campaign.

**Expected Output**: Complete, conversion-focused landing page copy including headline, subheadline, feature descriptions, benefit statements, and compelling calls to action.
</details>

<details>
<summary><strong>Pricing Page Optimiser</strong></summary>

### Pricing Page Optimiser

**Name**: Pricing Strategy Architect

**Purpose**: Helps you design an effective pricing page that maximizes conversions and communicates value clearly.

**Goal**: Create a pricing structure and page that balances revenue optimization with conversion rate.

**Inputs**: Product/service details, target audience, competitive pricing, business goals.

**Combine With**: Landing-Page Copy Crafter → Objection-Handling FAQ Builder

**When to Use**: When launching a product or service and need to create or optimize your pricing strategy and presentation.

**Prompt**:
```
Help me design an effective pricing page that clearly communicates my value proposition and optimizes for conversions. Guide me through creating a pricing strategy and page layout that maximizes both revenue and customer acquisition.

First, ask me about:
- My product/service and its key value metrics
- My target customer segments and their willingness to pay
- Competitive pricing in my market
- My business goals (maximize revenue, market share, etc.)
- Any existing pricing model or constraints

Then, help me develop:

1. A strategic pricing structure:
   - Recommended pricing tiers (Free, Basic, Pro, Enterprise, etc.)
   - Feature allocation across tiers
   - Price points with psychological pricing tactics
   - Billing frequency options (monthly/annual with discount)

2. Value-focused presentation:
   - Clear, benefit-oriented tier names
   - Feature descriptions that emphasize value, not just functionality
   - Visual hierarchy to highlight key differentiators
   - Social proof elements to incorporate

3. Conversion optimization elements:
   - Recommended tier to highlight as "Most Popular"
   - Free trial or money-back guarantee positioning
   - Call-to-action button copy for each tier
   - Urgency or scarcity elements if appropriate

4. Objection handling:
   - Common pricing objections and how to address them
   - FAQ items to include near pricing
   - Trust signals to incorporate

Provide specific copy examples for each section of the pricing page, and explain the psychological principles behind your recommendations.
```

**Example Usage**: When launching a SaaS product, membership site, or service offering with multiple tiers.

**Expected Output**: A complete pricing strategy with tier structure, feature allocation, price points, and page layout recommendations optimized for conversions.
</details>

<details>
<summary><strong>Objection-Handling FAQ Builder</strong></summary>

### Objection-Handling FAQ Builder

**Name**: Conversion Obstacle Remover

**Purpose**: Helps you identify and address common objections that prevent users from converting, through strategic FAQ content.

**Goal**: Increase conversion rates by proactively addressing concerns and building trust.

**Inputs**: Product details, target audience, current conversion data, known objections.

**Combine With**: Landing-Page Copy Crafter → Pricing Page Optimiser

**When to Use**: When preparing to launch a product or optimizing an existing one with low conversion rates.

**Prompt**:
```
Help me create a strategic FAQ section that addresses common objections and increases conversion rates. Guide me through identifying and answering the questions that are preventing my users from taking action.

First, ask me about:
- My product/service and its core value proposition
- My target audience and their typical concerns
- Current conversion data and drop-off points
- Known objections from customer interactions
- Competitive alternatives users might consider

Then, help me develop:

1. Objection categories to address:
   - Price/value concerns
   - Product capabilities and limitations
   - Implementation or usage concerns
   - Security and privacy considerations
   - Support and service questions
   - Comparison with alternatives

2. Strategic question framing:
   - How to phrase questions from the customer's perspective
   - How to group related questions for clarity
   - Which objections to prioritize based on impact
   - When to use positive vs. neutrally framed questions

3. Persuasive answer techniques:
   - How to acknowledge concerns while redirecting to benefits
   - When to use social proof or testimonials in answers
   - How to incorporate guarantees or risk-reversals
   - Balancing honesty with positive positioning

4. FAQ presentation strategy:
   - Optimal organization and hierarchy
   - Expandable vs. always-visible answers
   - Placement on the page for maximum impact
   - Visual elements to enhance credibility

For each objection category, help me craft 3-5 specific questions with persuasive, conversion-focused answers that build trust while addressing concerns.
```

**Example Usage**: When launching a product or optimizing an existing page with low conversion rates.

**Expected Output**: A strategic FAQ section with carefully crafted questions and persuasive answers that address key objections and increase conversion rates.
</details>

## Grow & Iterate

<details>
<summary><strong>Growth Experiment Generator</strong></summary>

### Growth Experiment Generator

**Name**: Growth Hypothesis Builder

**Purpose**: Helps you design structured growth experiments to systematically improve acquisition, activation, retention, revenue, and referral metrics.

**Goal**: Create data-driven growth strategies through rapid experimentation and learning.

**Inputs**: Current metrics, target metrics, audience segments, available channels.

**Combine With**: KPI Dashboard Prompt → Retrospective Facilitator

**When to Use**: When you need to improve specific growth metrics and want to take a systematic, experimental approach.

**Prompt**:
```
Help me design structured growth experiments to improve my key metrics. Guide me through creating well-defined experiments using the ICE framework (Impact, Confidence, Ease) that will drive measurable results.

First, ask me about:
- The specific growth metric I'm trying to improve (acquisition, activation, retention, revenue, or referral)
- Current performance baseline and target goals
- My target audience segments
- Available channels and touchpoints
- Previous experiments or tactics I've tried
- Resources and constraints for implementation

Then, help me generate 5-7 experiment ideas that:

1. Have clear hypotheses in the format:
   "If we [make this change], then [this metric] will [increase/decrease] by [amount] because [reason]."

2. Are prioritized using the ICE framework:
   - Impact: Potential effect on the target metric (1-10)
   - Confidence: Likelihood of success based on evidence (1-10)
   - Ease: Simplicity of implementation with available resources (1-10)

3. Include detailed implementation plans:
   - Specific changes to make
   - Required resources and timeline
   - Success metrics and measurement approach
   - Minimum viable test to validate the hypothesis

4. Address different approaches:
   - Messaging/copy changes
   - UX/design modifications
   - Channel or targeting adjustments
   - Incentive or pricing experiments
   - Feature or product enhancements

For each experiment, help me define success criteria, potential risks, and a plan for analyzing results and determining next steps based on outcomes.
```

**Example Usage**: When you need to improve conversion rates, reduce churn, increase average order value, or boost user acquisition.

**Expected Output**: A prioritized list of 5-7 growth experiments with clear hypotheses, implementation plans, and measurement approaches.
</details>

<details>
<summary><strong>Retrospective Facilitator</strong></summary>

### Retrospective Facilitator

**Name**: Team Learning Catalyst

**Purpose**: Helps you conduct effective retrospectives that identify actionable improvements for your team and product.

**Goal**: Extract meaningful insights and create concrete action items to improve processes and outcomes.

**Inputs**: Sprint/release outcomes, team feedback, challenges faced, successes achieved.

**Combine With**: Growth Experiment Generator → KPI Dashboard Prompt

**When to Use**: At the end of a sprint, project milestone, or product release to reflect and improve.

**Prompt**:
```
Help me facilitate an effective retrospective that identifies actionable improvements for our team and product. Guide me through a structured process that extracts meaningful insights and creates concrete next steps.

First, ask me about:
- The timeframe we're reviewing (sprint, release, quarter, etc.)
- Team size and composition
- Key metrics and outcomes from this period
- Any significant events or challenges
- Previous retrospective action items and their status

Then, help me structure a retrospective that includes:

1. Reflection prompts to gather insights:
   - What went well? (Celebrate successes)
   - What didn't go as planned? (Identify challenges)
   - What did we learn? (Extract insights)
   - What still puzzles us? (Surface uncertainties)

2. Root cause analysis for key issues:
   - Techniques to dig deeper than symptoms
   - Ways to identify systemic vs. one-off problems
   - Methods to separate process issues from technical/product issues

3. Action item generation:
   - Criteria for effective action items (specific, measurable, assigned, realistic, time-bound)
   - Prioritization framework for improvements
   - Balance between process, technical, and team improvements

4. Follow-through mechanisms:
   - Accountability structures
   - Integration with existing workflows
   - Measurement approaches for improvements

Provide specific facilitation techniques, example questions, and templates I can use to run an engaging retrospective that results in meaningful improvements.
```

**Example Usage**: When completing a sprint, shipping a feature, or reaching a project milestone and wanting to improve team effectiveness.

**Expected Output**: A structured retrospective plan with specific prompts, activities, and templates to facilitate team reflection and generate actionable improvements.
</details>

<details>
<summary><strong>KPI Dashboard Prompt</strong></summary>

### KPI Dashboard Prompt

**Name**: Metrics Framework Designer

**Purpose**: Helps you design a comprehensive KPI dashboard that tracks the right metrics for your business objectives.

**Goal**: Create a focused measurement system that drives decision-making and continuous improvement.

**Inputs**: Business objectives, user journey, current data sources, stakeholder needs.

**Combine With**: Growth Experiment Generator → Retrospective Facilitator

**When to Use**: When setting up analytics for a new product or refining measurement for an existing one.

**Prompt**:
```
Help me design a comprehensive KPI dashboard that tracks the right metrics for my business objectives. Guide me through creating a focused measurement system that drives decision-making and continuous improvement.

First, ask me about:
- My core business objectives and success criteria
- Key stages in my user/customer journey
- Available data sources and tracking capabilities
- Stakeholders who will use the dashboard
- Current metrics I'm tracking (if any)

Then, help me develop:

1. A balanced metrics framework:
   - North Star Metric that aligns with business success
   - Supporting metrics organized by business function
   - Leading vs. lagging indicators
   - Vanity metrics to avoid or contextualize

2. User journey metrics:
   - Acquisition metrics (traffic sources, conversion rates)
   - Activation metrics (onboarding completion, initial value)
   - Retention metrics (churn, engagement frequency)
   - Revenue metrics (ARPU, LTV, conversion rates)
   - Referral metrics (virality, NPS, testimonials)

3. Operational metrics:
   - Product quality metrics (bugs, uptime, performance)
   - Team velocity metrics (cycle time, deployment frequency)
   - Customer service metrics (response time, resolution rate)
   - Cost metrics (CAC, operational expenses)

4. Dashboard implementation plan:
   - Recommended visualization for each metric
   - Dashboard organization and hierarchy
   - Frequency of updates and reviews
   - Alerting thresholds for key metrics

For each metric, help me define the formula, data sources, targets/benchmarks, and how it connects to business objectives.
```

**Example Usage**: When setting up analytics for a new product or refining measurement for an existing one.

**Expected Output**: A comprehensive KPI framework with North Star and supporting metrics, visualization recommendations, and implementation guidelines tailored to your business objectives.
</details>

<details>
<summary><strong>Product Vision & Strategy</strong></summary>

### Product Vision & Strategy

**Name**: Product Vision Architect

**Purpose**: Helps you articulate a clear, compelling vision and strategy for your product that aligns with business goals and user needs.

**Goal**: Create a north star that guides all product decisions and communicates value to stakeholders.

**Inputs**: Problem space, target users, market landscape, business goals.

**Combine With**: Lean Canvas Builder → Roadmap Milestone Planner

**When to Use**: When initiating a new product or pivoting an existing one.

**Prompt**:
```
Help me define a clear, compelling vision and strategy for my product. Guide me through a structured process that will result in a comprehensive product strategy document.

First, ask me about:
- The core problem my product aims to solve
- My target users and their key pain points
- The market landscape and competitive environment
- My business goals and constraints

Then, help me develop:

1. A concise product vision statement that articulates:
   - What the product is and who it's for
   - The key value proposition and differentiators
   - The long-term aspiration and impact

2. A comprehensive product strategy that includes:
   - Core user personas and their journeys
   - Key product pillars and principles
   - Critical features and capabilities (prioritized)
   - Success metrics and KPIs

3. A high-level roadmap framework that outlines:
   - Major phases or milestones
   - Key dependencies and decision points
   - Resource implications and constraints

Throughout this process, challenge my assumptions, identify potential blind spots, and help me ensure the strategy is both ambitious and achievable given my constraints.
```

**Example Usage**: When defining the strategic direction for a new product or major feature initiative.

**Expected Output**: A comprehensive product vision and strategy document that articulates what you're building, why it matters, and how you'll approach it.
</details>

<details>
<summary><strong>User Story Map</strong></summary>

### User Story Map

**Name**: User Journey Architect

**Purpose**: Helps you create a visual, structured map of user activities, tasks, and stories to plan your product development.

**Goal**: Organize user needs into a coherent journey that can be sliced into logical releases.

**Inputs**: User personas, core user goals, product scope.

**Combine With**: Product Vision & Strategy → MUST-SHOULD-COULD Prioritiser

**When to Use**: When planning product features and releases to ensure they deliver complete user value.

**Prompt**:
```
Help me create a comprehensive user story map for my product. Guide me through the process of identifying user activities, breaking them down into tasks, and organizing them into a coherent journey.

First, ask me about:
- The primary user personas for my product
- The main goals these users are trying to achieve
- The overall scope and boundaries of the product

Then, help me build the story map by:

1. Identifying the major user activities (backbone):
   - The high-level activities users perform to achieve their goals
   - The logical sequence of these activities from left to right
   - Any parallel activities that might happen simultaneously

2. Breaking down each activity into specific user tasks:
   - Detailed tasks that users complete within each activity
   - Arranged vertically under each activity
   - Prioritized from top to bottom by importance

3. Converting tasks into user stories:
   - Formatted as "As a [user], I want to [action], so that [benefit]"
   - Including acceptance criteria for each story
   - Identifying dependencies between stories

4. Organizing stories into releases or slices:
   - What's the minimum viable product that delivers end-to-end value?
   - What are logical feature increments for subsequent releases?
   - How can we ensure each release provides complete user value?

Provide guidance on how to use this story map for sprint planning, feature prioritization, and communicating with stakeholders.
```

**Example Usage**: When planning product development to ensure features are organized around user needs and journeys.

**Expected Output**: A structured user story map with backbone activities, detailed tasks, user stories, and release planning that aligns with user goals.
</details>

<details>
<summary><strong>Roadmap Milestone Planner</strong></summary>

### Roadmap Milestone Planner

**Name**: Strategic Roadmap Architect

**Purpose**: Helps you create a flexible, outcome-focused product roadmap organized around key milestones rather than fixed deadlines.

**Goal**: Develop a strategic roadmap that communicates direction while maintaining adaptability.

**Inputs**: Product vision, prioritized features, resource constraints, business objectives.

**Combine With**: Product Vision & Strategy → MUST-SHOULD-COULD Prioritiser

**When to Use**: When planning product development over multiple months or quarters and need to communicate direction to stakeholders.

**Prompt**:
```
Help me develop a flexible, outcome-focused product roadmap organized around key milestones rather than fixed deadlines. Guide me through creating a strategic plan that communicates direction while maintaining adaptability.

First, ask me about:
- My product vision and strategic objectives
- Key hypotheses I need to validate
- Available resources and constraints
- Target timeline horizon (3 months, 6 months, 1 year+)
- Key business objectives and success criteria

Then, help me develop a lean roadmap by:

1. Defining clear milestone outcomes:
   - What specific hypotheses will each milestone validate?
   - What user/business value will each milestone deliver?
   - How does each milestone build toward the larger vision?

2. Organizing features into thematic milestones:
   - How to group features by related user/business outcomes
   - How to sequence milestones in logical progression
   - How to balance quick wins with longer-term investments

3. Setting realistic timeframes:
   - How to estimate milestone durations without committing to specific dates
   - Using time horizons (Now, Next, Later) instead of fixed deadlines
   - Building in buffer for unexpected challenges

4. Communicating confidence levels:
   - How to indicate certainty vs. uncertainty in the roadmap
   - When to use specific timeframes vs. relative positioning
   - How to set appropriate stakeholder expectations

5. Building in feedback loops and pivot points:
   - When and how will we evaluate progress against our metrics?
   - What criteria would trigger a pivot or change in direction?
   - How will we incorporate learning into subsequent milestones?

Provide guidance on how to present this roadmap to different stakeholders (executives, team members, customers) and how to maintain it as a living document.
```

**Example Usage**: When planning product development over multiple quarters and need to communicate direction to stakeholders.

**Expected Output**: A flexible, outcome-focused roadmap with clear milestones, success metrics, and appropriate time horizons that can adapt to changing conditions.
</details>

## Build

<details>
<summary><strong>Repo & CI/CD Quick-Start</strong></summary>

### Repo & CI/CD Quick-Start

**Name**: DevOps Bootstrapper

**Purpose**: Helps you quickly set up a professional repository with proper structure and continuous integration/deployment pipeline.

**Goal**: Create a production-ready development environment with automated testing and deployment.

**Inputs**: Project type, tech stack, hosting preferences, team size.

**Combine With**: Architecture Outline → Testing Strategy

**When to Use**: At the beginning of a project when setting up the development infrastructure.

**Prompt**:
```
Help me set up a professional repository structure with CI/CD pipeline for my project. Guide me through creating a well-organized codebase with automated testing and deployment.

First, ask me about:
- The type of project (web app, mobile app, API, etc.)
- The tech stack and frameworks I'm using
- My preferred hosting/deployment platform
- Team size and collaboration needs
- Testing requirements and preferences

Then, help me implement:

1. Repository structure and organization:
   - Recommended folder structure for my tech stack
   - Essential configuration files (.gitignore, README, etc.)
   - Environment configuration approach (.env, config files)
   - Dependency management best practices

2. GitHub repository setup:
   - Branch protection rules
   - Pull request templates
   - Issue templates
   - GitHub Actions workflow files
   - Security scanning and linting

3. CI/CD pipeline configuration:
   - Automated testing setup
   - Build process optimization
   - Deployment workflow (staging, production)
   - Environment variable management
   - Rollback procedures

4. Documentation essentials:
   - README.md with clear setup instructions
   - CONTRIBUTING.md guidelines
   - Architecture documentation
   - Local development guide

Provide specific code snippets and configuration files tailored to my tech stack and hosting platform, with explanations of each component and why it's important.
```

**Example Usage**: When starting a new project and wanting to establish professional DevOps practices from day one.

**Expected Output**: Complete repository structure with CI/CD configuration files, GitHub templates, and documentation tailored to your specific tech stack and hosting platform.
</details>

<details>
<summary><strong>Design System Starter</strong></summary>

### Design System Starter

**Name**: UI System Architect

**Purpose**: Helps you create a foundational design system for your product with consistent components, styles, and usage guidelines.

**Goal**: Establish a cohesive visual language that improves user experience and development efficiency.

**Inputs**: Brand identity, target platforms, technical constraints, user needs.

**Combine With**: Feature Implementation Planner → Architecture Outline

**When to Use**: Early in the development process when establishing your product's visual identity and UI patterns.

**Prompt**:
```
Help me create a foundational design system for my product with consistent components, styles, and usage guidelines. Guide me through establishing a cohesive visual language that will improve both user experience and development efficiency.

First, ask me about:
- My product's brand identity and values
- Target platforms (web, mobile, desktop)
- Technical constraints or framework preferences
- User needs and accessibility requirements
- Any existing design elements or preferences

Then, help me develop:

1. Core design tokens:
   - Color palette (primary, secondary, accent, neutrals)
   - Typography system (font families, sizes, weights, line heights)
   - Spacing and layout grid system
   - Elevation/shadow system
   - Border radiuses and other global styles

2. Component library foundation:
   - Essential UI components to start with
   - Component variants and states
   - Component hierarchy and composition patterns
   - Responsive behavior guidelines

3. Usage guidelines and principles:
   - When to use specific components
   - Accessibility standards to follow
   - Naming conventions and organization
   - Documentation structure

4. Implementation approach:
   - Technical architecture recommendations
   - How to structure the code
   - Integration with development workflow
   - Versioning and maintenance strategy

Provide specific examples and code snippets where appropriate, tailored to my technical stack and platform requirements.
```

**Example Usage**: When starting a new product or redesigning an existing one and need to establish consistent design patterns.

**Expected Output**: A comprehensive design system foundation with color palettes, typography, component specifications, and implementation guidelines tailored to your product's needs.
</details>

<details>
<summary><strong>MUST-SHOULD-COULD Prioritiser</strong></summary>

### MUST-SHOULD-COULD Prioritiser

**Name**: Feature Prioritisation Framework

**Purpose**: Helps you objectively prioritize features and requirements using the MoSCoW method (Must, Should, Could, Won't).

**Goal**: Create a balanced, achievable scope that delivers maximum value with available resources.

**Inputs**: Feature list, business objectives, timeline constraints, available resources.

**Combine With**: User Story Map → PRD Generator

**When to Use**: When planning a release or sprint and need to make tough scope decisions.

**Prompt**:
```
Help me prioritize my product features using the MoSCoW method (Must have, Should have, Could have, Won't have). Guide me through a structured decision-making process that balances user needs, business goals, and resource constraints.

First, ask me about:
- The complete list of features/requirements I'm considering
- My core business objectives for this release
- Timeline constraints and deadlines
- Available resources (team size, skills, budget)
- Any non-negotiable requirements (legal, security, etc.)

Then, help me categorize each feature into:

1. MUST have:
   - Core features without which the product cannot function
   - Features that directly address primary user needs
   - Features that deliver the main business value
   - Non-negotiable requirements (legal, security, etc.)

2. SHOULD have:
   - Important features that significantly enhance the product
   - Features with high value but potential workarounds
   - Differentiators from competitors

3. COULD have:
   - Nice-to-have features that add value but aren't essential
   - Features that could be deferred to later releases
   - Features with lower ROI or higher implementation cost

4. WON'T have (this time):
   - Features explicitly excluded from current scope
   - Features to reconsider in future releases
   - Low-value features relative to implementation effort

For each feature, help me assess:
- User impact (high/medium/low)
- Business value (high/medium/low)
- Implementation effort (high/medium/low)
- Risk of exclusion (high/medium/low)

Finally, provide a summary of the prioritized features with clear rationale for each category, and highlight any potential risks or dependencies between features.
```

**Example Usage**: When planning an MVP or defining scope for a release with limited resources.

**Expected Output**: A prioritized feature list organized into MUST, SHOULD, COULD, and WON'T categories with clear rationale for each decision.
</details>

<details>
<summary><strong>Architecture Outline</strong></summary>

### Architecture Outline

**Name**: System Architecture Designer

**Purpose**: Helps you design a robust, scalable architecture for your application that meets both functional and non-functional requirements.

**Goal**: Create a clear architectural blueprint that guides implementation and ensures system quality.

**Inputs**: Application requirements, expected scale, technical constraints, team expertise.

**Combine With**: Tech Stack Advisor → Feature Implementation Planner

**When to Use**: Early in the development process when making foundational architectural decisions.

**Prompt**:
```
Help me design a robust, scalable architecture for my application that meets both functional and non-functional requirements. Guide me through creating a clear architectural blueprint that will guide implementation and ensure system quality.

First, ask me about:
- The core purpose and functionality of my application
- Expected scale and performance requirements
- Security and compliance considerations
- Technical constraints and preferences
- Team size and expertise

Then, help me develop:

1. High-level architecture overview:
   - Recommended architectural style (microservices, monolith, serverless, etc.)
   - System boundaries and major components
   - Data flow between components
   - Key interfaces and integration points

2. Component breakdown:
   - Core services/modules and their responsibilities
   - Data storage strategy and database choices
   - API design principles and patterns
   - Authentication and authorization approach

3. Non-functional considerations:
   - Scalability approach (vertical vs. horizontal)
   - Performance optimization strategies
   - Security measures and best practices
   - Monitoring and observability plan

4. Implementation guidance:
   - Suggested folder/code organization
   - Key design patterns to apply
   - Potential technical challenges and solutions
   - Phased implementation approach

Provide diagrams or pseudocode where appropriate to illustrate the architecture, and explain the rationale behind each major decision.
```

**Example Usage**: When starting a new project or planning a significant system redesign and need to establish a solid architectural foundation.

**Expected Output**: A comprehensive architectural blueprint with component diagrams, data flows, technology choices, and implementation guidelines tailored to your specific application needs.
</details>

<details>
<summary><strong>Feature Implementation Planner</strong></summary>

### Feature Implementation Planner

**Name**: Feature Development Strategist

**Purpose**: Helps you plan the implementation of a specific feature with detailed tasks, code structure, and testing approach.

**Goal**: Create a comprehensive implementation plan that ensures efficient, high-quality feature delivery.

**Inputs**: Feature requirements, tech stack, existing codebase structure, team capabilities.

**Combine With**: Architecture Outline → Testing Strategy

**When to Use**: When starting work on a new feature or major enhancement and need a detailed implementation plan.

**Prompt**:
```
Help me plan the implementation of a specific feature with detailed tasks, code structure, and testing approach. Guide me through creating a comprehensive plan that ensures efficient, high-quality delivery.

First, ask me about:
- The specific feature or capability I'm implementing
- My tech stack and development environment
- Existing codebase structure and patterns
- Any constraints or requirements to consider
- Team size and expertise

Then, help me develop:

1. Feature breakdown:
   - Core components and their relationships
   - UI/UX considerations
   - Data requirements and models
   - API endpoints or interfaces needed

2. Implementation steps:
   - Logical task breakdown with dependencies
   - Suggested implementation order
   - Potential technical challenges and solutions
   - Estimated effort for each task

3. Code structure:
   - Files and modules to create or modify
   - Key classes/functions and their responsibilities
   - Data flow between components
   - Reusable patterns or utilities

4. Testing strategy:
   - Unit test coverage plan
   - Integration test scenarios
   - Edge cases to consider
   - Manual testing checklist

Provide specific guidance, pseudocode, or examples that are directly applicable to my tech stack and feature requirements.
```

**Example Usage**: When starting work on a new feature or major enhancement and need a detailed implementation plan.

**Expected Output**: A comprehensive feature implementation plan with specific tasks, code structure recommendations, testing strategies, and implementation guidelines tailored to your tech stack.
</details>

<details>
<summary><strong>PRD Generator</strong></summary>

### PRD Generator

**Name**: Product Requirements Architect

**Purpose**: Helps you create a comprehensive product requirements document (PRD) that clearly defines what you're building and why.

**Goal**: Transform product vision into detailed, actionable requirements for the development team.

**Inputs**: Product vision, user needs, prioritized features, constraints.

**Combine With**: MUST-SHOULD-COULD Prioritiser → Tech Stack Advisor

**When to Use**: After defining your product vision and before starting development.

**Prompt**:
```
Help me create a comprehensive Product Requirements Document (PRD) that clearly defines what we're building and why. Guide me through documenting all essential aspects of the product in a format that's clear for both business and technical stakeholders.

First, ask me about:
- The product vision and core value proposition
- Target users and their primary needs
- Key features and functionality (prioritized)
- Business objectives and success metrics
- Technical constraints or requirements

Then, help me structure a PRD that includes:

1. Executive Summary:
   - Product overview and purpose
   - Target audience
   - Key value propositions
   - Success metrics

2. User Stories and Requirements:
   - User personas
   - Core user journeys
   - Functional requirements (organized by feature)
   - Non-functional requirements (performance, security, etc.)

3. Feature Specifications:
   - Detailed descriptions of each feature
   - User interactions and flows
   - Business rules and edge cases
   - Acceptance criteria

4. Technical Considerations:
   - System architecture implications
   - API requirements
   - Data requirements
   - Integration points

5. Implementation Guidelines:
   - Development phases and milestones
   - Dependencies and constraints
   - Potential risks and mitigations

For each section, provide a structured template with examples that I can easily adapt to my specific product.
```

**Example Usage**: When transitioning from product concept to development and need to create clear requirements for your team.

**Expected Output**: A structured PRD template with all essential sections filled in based on your product details, ready to share with stakeholders and development teams.
</details>

<details>
<summary><strong>Audience & Needs Analysis</strong></summary>

### Audience & Needs Analysis

**Name**: User Needs Explorer

**Purpose**: Helps you identify and understand your target audience segments and their specific needs, pain points, and motivations.

**Goal**: Create detailed user segments with validated needs to inform product decisions.

**Inputs**: Industry, problem space, initial audience hypotheses, any existing research.

**Combine With**: Problem Interview Script → JTBD Framework

**When to Use**: Early in product planning when defining who you're building for and what problems you're solving.

**Prompt**:
```
Help me conduct a thorough analysis of my target audience and their needs. Guide me through a structured process to identify specific user segments, their pain points, and how my product can address them.

First, ask me about:
- The general market or domain my product serves
- Any initial hypotheses I have about potential user segments
- Problems I believe exist in this space
- Competitive or alternative solutions users currently employ

Then, help me:

1. Define 3-5 distinct user segments with demographic and psychographic characteristics
2. For each segment, identify:
   - Their current challenges and pain points (prioritized by severity)
   - Their goals and desired outcomes
   - Their current workarounds or alternative solutions
   - Key motivations and decision factors

3. Create provisional user personas for the primary segments, including:
   - Background and context
   - Needs hierarchy
   - Key quotes or sentiments

4. Map how my product concept could address each segment's specific needs
5. Identify gaps where additional research is needed

Challenge my assumptions throughout this process and help me identify potential blind spots in my understanding of users. The output should be a comprehensive audience analysis that can inform product decisions.
```

**Example Usage**: When defining who your product serves and what specific problems it solves for them.

**Expected Output**: A detailed analysis of your target audience segments, their needs, and how your product addresses them.
</details>

<details>
<summary><strong>Jobs To Be Done Framework</strong></summary>

### Jobs To Be Done Framework Prompt

**Name**: JTBD Framework Facilitator

**Purpose**: Helps you apply the Jobs to be Done framework to understand the functional, emotional, and social jobs your users are trying to accomplish.

**When to Use**: When you want to deeply understand user motivations beyond surface-level feature requests.

**Prompt**:
```
Help me apply the Jobs to be Done (JTBD) framework to understand the core motivations driving my users. Guide me through identifying and classifying the functional, emotional, and social jobs my product helps users accomplish.

First, ask me about:
- My product's purpose and target audience
- The context in which users would use my product
- The alternatives or competitors in this space
- Any insights I already have about user motivations

Then, help me identify and classify:

1. Functional Jobs:
   - What practical tasks are users trying to accomplish?
   - What functional problems are they trying to solve?
   - What utility are they seeking?
   - How do they measure success for these tasks?

2. Emotional Jobs:
   - How do users want to feel when using the product?
   - What negative emotions are they trying to avoid?
   - What positive emotions are they seeking?
   - What gives them confidence or peace of mind?

3. Social Jobs:
   - How do users want to be perceived by others?
   - What social connections or status are they seeking?
   - What relationships are they trying to build or maintain?
   - How does this product affect their social identity?

For each job category, help me formulate clear JTBD statements in the format:
"When [situation], I want to [motivation], so I can [expected outcome]."

Then guide me to:
- Prioritize these jobs based on importance to users
- Identify which jobs are currently underserved in the market
- Connect these jobs to potential product features and capabilities
- Determine how to measure success in fulfilling these jobs

Challenge me to think beyond features and focus on the progress users are trying to make in their lives.
```

**Example Usage**: When you want to understand the deeper motivations behind user behavior to inform product decisions.

**Expected Output**: A comprehensive analysis of the functional, emotional, and social jobs your product helps users accomplish, formatted as clear JTBD statements.
</details>

<details>
<summary><strong>User Story Mapping</strong></summary>

### User Story Mapping Prompt

**Name**: User Journey Mapper

**Purpose**: Helps you create a structured user story map that organizes user activities, tasks, and stories into a coherent narrative flow.

**When to Use**: When planning product features and creating a development backlog that maintains focus on the user journey.

**Prompt**:
```
Help me create a comprehensive user story map for my product. Guide me through the process of identifying user activities, breaking them down into tasks, and organizing them into a coherent journey.

First, ask me about:
- The primary user personas for my product
- The main goals these users are trying to achieve
- The overall scope and boundaries of the product

Then, help me build the story map by:

1. Identifying the major user activities (the backbone):
   - What are the key phases of the user journey?
   - What are the primary activities users perform to achieve their goals?
   - How do these activities flow in sequence?

2. Breaking down each activity into specific tasks:
   - What steps do users take to complete each activity?
   - What are the essential vs. optional tasks?
   - How do these tasks connect to create a complete workflow?

3. For each task, help me identify:
   - What the user is trying to accomplish
   - What information they need
   - What decisions they need to make
   - What output or result they expect

4. Organizing the map horizontally (narrative flow) and vertically (priority):
   - Arrange activities in chronological order from left to right
   - Prioritize tasks from top (must-have) to bottom (nice-to-have)

5. Identifying natural release slices across the story map:
   - What's the minimum viable product that delivers end-to-end value?
   - What are logical feature increments for subsequent releases?
   - How can we ensure each release provides complete user value?

Throughout this process, challenge me to maintain focus on user goals rather than implementation details. The final output should be a structured story map that can guide product development priorities while maintaining focus on the complete user experience.
```

**Example Usage**: When planning product features and creating a development roadmap that maintains focus on the user journey.

**Expected Output**: A structured user story map that organizes user activities, tasks, and stories into a coherent narrative flow, with clear prioritization and release planning.
</details>

<details>
<summary><strong>User Story Creation</strong></summary>

### User Story Creation Prompt

**Name**: User Story Craftsman

**Purpose**: Helps you create well-formed user stories at various levels of granularity, from epics to detailed implementation stories.

**When to Use**: When translating user needs into actionable development items for your backlog.

**Prompt**:
```
Help me craft clear, effective user stories for my product backlog. Guide me through creating a hierarchy of stories from epics down to implementation-ready stories.

First, ask me about:
- The specific feature or capability we're focusing on
- The user personas involved
- The user goals and jobs to be done
- Any constraints or requirements to consider

Then, help me create:

1. Epic-level stories:
   - Broad user capabilities that might span multiple features
   - Format: "As a [persona], I want [capability], so that [benefit]"
   - Include success criteria and business value

2. Feature-level stories:
   - More specific capabilities that deliver distinct user value
   - Format: "As a [persona], I want [feature], so that [benefit]"
   - Include acceptance criteria and dependencies

3. Implementation-ready stories:
   - Granular stories that can be completed in a single sprint
   - Format: "As a [persona], I want [specific functionality], so that [specific benefit]"
   - Include detailed acceptance criteria using Given/When/Then format
   - Add technical notes, UI/UX considerations, and testing requirements

For each story level, help me:
- Ensure it's valuable (delivers user or business benefit)
- Make it independent (can be developed separately from other stories)
- Keep it negotiable (leaves room for discussion)
- Make it estimable (has enough detail to size)
- Keep it small (appropriate for its level in the hierarchy)
- Make it testable (has clear acceptance criteria)

Also guide me in:
- Breaking down larger stories into smaller ones when needed
- Identifying non-functional requirements as separate stories
- Creating technical stories that support user-facing functionality
- Prioritizing stories based on value and dependencies

The output should be a well-structured set of user stories that clearly communicate user needs at different levels of detail.
```

**Example Usage**: When creating a product backlog or planning a specific feature implementation.

**Expected Output**: A hierarchical set of well-formed user stories from epics to implementation-ready stories, with clear acceptance criteria and prioritization.
</details>

<details>
<summary><strong>Phased Roadmap Development</strong></summary>

### Phased Roadmap Development Prompt

**Name**: Lean Roadmap Strategist

**Purpose**: Helps you establish a clear, phased product roadmap with defined milestones, success metrics, and prioritized deliverables following lean methodology.

**When to Use**: When planning the strategic evolution of your product over time and need to balance vision with practical execution.

**Prompt**:
```
Help me establish a clear, phased roadmap for my product following lean methodology principles. Guide me through defining milestone outcomes, success metrics, and prioritized deliverables that focus on learning and validation.

First, ask me about:
- My product vision and core value proposition
- The current state of my product (concept, MVP, established)
- Key hypotheses I need to validate
- Available resources and constraints
- Target timeline horizon (3 months, 6 months, 1 year+)
- Key business objectives and success criteria

Then, help me develop a lean roadmap by:

1. Defining clear milestone outcomes:
   - What specific hypotheses will each milestone validate?
   - What user/business value will each milestone deliver?
   - How does each milestone build toward the larger vision?
   - What learning objectives are associated with each milestone?

2. Establishing success metrics for each milestone:
   - What quantitative metrics will indicate success?
   - What qualitative feedback will we seek?
   - What minimum thresholds must be met to proceed?
   - How will we collect and measure these metrics?

3. Prioritizing deliverables for each milestone:
   - What is the minimum scope needed to validate our hypotheses?
   - How can we batch user stories and technical tasks into coherent releases?
   - What dependencies exist between deliverables?
   - How should we balance new features vs. improvements to existing ones?

4. Incorporating supporting activities:
   - What marketing activities are needed to support each milestone?
   - What sales, customer success, or operational preparations are required?
   - What technical infrastructure or foundation work is necessary?
   - What user research should be conducted before/during/after each milestone?

5. Building in feedback loops and pivot points:
   - When and how will we evaluate progress against our metrics?
   - What criteria would trigger a pivot or change in direction?
   - How will we incorporate learning into subsequent milestones?

Throughout this process, challenge me to:
- Focus on outcomes rather than outputs
- Minimize scope to what's truly necessary for learning
- Consider both discovery (learning) and delivery (building) activities
- Balance short-term wins with long-term strategic objectives

The final output should be a flexible roadmap organized into clear phases, with defined outcomes, metrics, and prioritized deliverables for each phase.
```

**Example Usage**: When planning the strategic evolution of your product over time and need to balance vision with practical execution.

**Expected Output**: A comprehensive, phased roadmap with clear milestones, success metrics, and prioritized deliverables that follows lean methodology principles.
</details>

<details>
<summary><strong>Information Architecture</strong></summary>

### Information Architecture Prompt

**Name**: Information Architecture Designer

**Purpose**: Helps you establish a clear, intuitive information architecture for your website, application, or product that organizes content in a user-friendly way.

**When to Use**: When planning the structure and organization of content and functionality for a new product or redesigning an existing one.

**Prompt**:
```
Help me establish a comprehensive information architecture for my [website/application/product]. Guide me through creating an intuitive structure that organizes content and functionality in a way that makes sense to users.

First, ask me about:
- The purpose and goals of my [website/application/product]
- My target audience and their primary tasks
- The types of content and functionality I need to include
- Any existing content structure (if redesigning)
- Key user flows and journeys
- Any specific organizational challenges I'm facing

Then, help me develop:

1. Content inventory and audit (if applicable):
   - Categories of content to include
   - Content prioritization framework
   - Content relationships and dependencies
   - Content that can be archived or removed

2. Site/application structure:
   - Primary navigation categories
   - Secondary navigation organization
   - Hierarchical relationships between sections
   - Naming conventions for sections and pages

3. User flow mapping:
   - Key task flows through the architecture
   - Entry points and exit points
   - Decision points and alternative paths
   - Potential friction points and solutions

4. Information organization principles:
   - Taxonomies and categorization systems
   - Tagging and metadata strategy
   - Search functionality requirements
   - Filter and sort capabilities

5. Visualization of the architecture:
   - Site map representation
   - Content model diagrams
   - User flow diagrams
   - Navigation models

Throughout this process, challenge me to:
- Focus on user needs rather than internal organization
- Use clear, user-centered language
- Create intuitive paths to high-value content
- Balance comprehensiveness with simplicity
- Consider future growth and content expansion

The output should be a comprehensive information architecture plan that can guide design and development while ensuring users can easily find what they need.
```

**Example Usage**: When planning how to organize content and functionality for a new website or application.

**Expected Output**: A detailed information architecture plan with site maps, content organization principles, and user flow diagrams.
</details>

<details>
<summary><strong>Lean Canvas Development</strong></summary>

### Lean Canvas Development Prompt

**Name**: Lean Canvas Coach

**Purpose**: Helps founders and product teams rapidly develop a comprehensive Lean Canvas that captures the essence of their business model in a structured format.

**When to Use**: When starting a new venture or pivoting an existing one and need to clarify your business model fundamentals.

**Prompt**:
```
Act as an experienced business coach helping me develop a comprehensive Lean Canvas for my startup or product idea. Guide me through each section with targeted questions and provide constructive feedback to strengthen my business model.

First, ask me for a brief overview of my business concept to establish context.

Then, systematically walk me through each section of the Lean Canvas in this order:

1. Problem:
   - What are the top 1-3 problems your target customers face?
   - What existing alternatives do they use to solve these problems?
   - Why are current solutions inadequate?

2. Customer Segments:
   - Who are your target customers or users?
   - Who are your early adopters?
   - What characteristics define these segments?

3. Unique Value Proposition:
   - What is your single, clear, compelling message that states why you're different and worth paying attention to?
   - How does this connect to your customers' problems?
   - What makes your approach different from alternatives?

4. Solution:
   - What are the top features or capabilities that address each problem?
   - How do these solutions map to the problems identified?
   - What is the minimum viable solution?

5. Channels:
   - How will you reach your customers?
   - Which channels will be most effective for acquisition and retention?
   - How do these channels align with customer behaviors?

6. Revenue Streams:
   - How will you make money?
   - What is your pricing model?
   - What is the lifetime value of a customer?
   - What are your margins?

7. Cost Structure:
   - What are your fixed and variable costs?
   - What are the key resources you need to pay for?
   - What are your cost drivers?

8. Key Metrics:
   - What key activities will you measure?
   - What are the key indicators of success?
   - Which metrics will help you make decisions?

9. Unfair Advantage:
   - What can't be easily copied or bought?
   - What makes your business defensible?
   - What unique advantages do you have?

For each section:
- Challenge my assumptions and help me refine my thinking
- Provide examples relevant to my industry or business model
- Suggest ways to validate the most critical assumptions
- Highlight potential inconsistencies between sections

After completing all sections, help me identify:
- The riskiest assumptions that need validation first
- Potential experiments to test these assumptions
- How the different elements of the canvas connect and support each other

The output should be a comprehensive Lean Canvas that captures my business model in a clear, concise format, along with next steps for validation and refinement.
```

**Example Usage**: When starting a new venture or pivoting an existing one and need to clarify your business model fundamentals.

**Expected Output**: A complete Lean Canvas with well-articulated sections, identified assumptions, and validation strategies.
</details>

<details>
<summary><strong>PR-FAQ Creation</strong></summary>

### PR-FAQ Creation Prompt

**Name**: PR-FAQ Architect

**Purpose**: Helps you create a compelling Press Release and FAQ document that clearly articulates your product vision, value proposition, and addresses potential questions from both internal and external stakeholders.

**When to Use**: When defining a new product or major feature to align stakeholders around a shared vision of the end result before development begins.

**Prompt**:
```
Help me create a comprehensive PR-FAQ document for my product or feature following Amazon's "working backwards" methodology. Guide me through crafting both a compelling press release that communicates the customer value and a detailed FAQ that addresses stakeholder questions.

First, ask me about:
- The product or feature I'm developing
- The target customers and their pain points
- The key benefits and value proposition
- The timeline for launch
- Any specific concerns or challenges

Then, help me craft:

1. Press Release section including:
   - Attention-grabbing headline that focuses on customer benefit
   - Subheading that expands on the headline with additional context
   - Opening paragraph explaining the product, target customer, and market
   - Problem statement paragraph describing the customer pain point
   - Solution paragraph explaining how the product solves this problem
   - Quote from company leadership focusing on vision and strategy
   - Quote from a hypothetical customer describing their experience
   - Call to action and availability information
   - Boilerplate company description

2. FAQ section addressing:
   - Internal questions:
     * Why are we building this?
     * How does this align with our strategy?
     * What were the alternatives we considered?
     * What are the technical challenges?
     * What are the success metrics?
     * What is the rollout strategy?
     * What resources are required?

   - External questions:
     * How is this different from competitors?
     * What does it cost?
     * How do I get started?
     * What platforms/devices are supported?
     * How does it integrate with existing solutions?
     * What about security/privacy?
     * What support is available?

Throughout this process, challenge me to:
- Focus relentlessly on customer value
- Be specific and avoid vague marketing language
- Address difficult questions honestly
- Maintain a consistent voice and narrative
- Think through implications and edge cases

The output should be a polished PR-FAQ document that could theoretically be published (for the PR) and that thoroughly addresses stakeholder concerns (for the FAQ).
```

**Example Usage**: When defining a new product or major feature to align stakeholders around a shared vision before development begins.

**Expected Output**: A complete PR-FAQ document with a compelling press release and comprehensive FAQ sections for both internal and external stakeholders.
</details>

<details>
<summary><strong>Design System Establishment</strong></summary>

### Design System Establishment Prompt

**Name**: Design System Architect

**Purpose**: Helps you establish a comprehensive design system for your product that ensures visual consistency, improves development efficiency, and enhances user experience.

**When to Use**: When starting a new product or standardizing the design of an existing one to ensure consistency across all interfaces.

**Prompt**:
```
Help me establish a comprehensive design system for my product. Guide me through creating a living design framework that ensures consistency, improves development efficiency, and enhances user experience.

First, ask me about:
- My product type and target platforms
- Brand personality and values
- Design inspirations and references I admire
- Existing design elements (if any)
- Team structure and workflow
- Technical constraints or preferences
- Specific areas where consistency is lacking

Then, help me develop:

1. Design principles and philosophy:
   - Core principles that guide design decisions
   - Brand personality traits and how they translate to UI
   - Design values and priorities

2. Core visual elements:
   - Color palette (primary, secondary, accent, semantic colors)
   - Typography system (fonts, sizes, weights, line heights)
   - Spacing and layout system (grid, margins, padding)
   - Iconography style and guidelines
   - Imagery and illustration guidelines

3. Component library structure:
   - Atomic design organization (atoms, molecules, organisms)
   - Component naming conventions
   - Component variants and states
   - Responsive behavior guidelines
   - Accessibility considerations for each component

4. Pattern library:
   - Common UI patterns and when to use them
   - Navigation patterns
   - Form patterns
   - Data visualization patterns
   - Loading and error states

5. Implementation guidelines:
   - Technical approach (CSS framework, component library)
   - Documentation standards
   - Version control and change management
   - Integration with development workflow
   - Measuring adoption and compliance

Throughout this process, encourage me to:
- Share specific examples of designs I admire
- Consider how the system will evolve over time
- Balance consistency with flexibility
- Consider both designer and developer experience
- Prioritize accessibility from the beginning

The output should be a structured plan for my design system, including specific recommendations for tools, processes, and governance to ensure its successful implementation and adoption.
```

**Example Usage**: When establishing visual and interaction standards for a new product or standardizing an existing one.

**Expected Output**: A comprehensive design system plan with visual elements, component specifications, and implementation guidelines tailored to your product needs.
</details>

---

## Technical Setup

<details>
<summary><strong>GitHub Repository Configuration</strong></summary>

### GitHub Repository Configuration Prompt

**Name**: GitHub Setup Specialist

**Purpose**: Helps you properly configure a GitHub repository with best practices for collaboration, automation, and project management.

**When to Use**: When setting up a new project repository or improving the configuration of an existing one.

**Prompt**:
```
Help me configure a GitHub repository following best practices for my project. Guide me through setting up not just the basic repository, but all the supporting elements that make for an efficient development workflow.

First, ask me about:
- The nature of my project (language, framework, team size)
- My development workflow preferences
- CI/CD requirements
- Collaboration and review processes
- Any specific GitHub features I'm interested in

Then, help me configure:

1. Repository basics:
   - README.md structure and content
   - License selection and file
   - .gitignore appropriate for my tech stack
   - CONTRIBUTING.md guidelines
   - Issue and PR templates

2. Branch protection rules:
   - Main/master branch protection
   - Required reviews and approvals
   - Status check requirements
   - Merge strategy recommendations

3. GitHub Actions workflows:
   - CI pipeline for testing and validation
   - Automated dependency updates
   - Deployment workflows if applicable
   - Code quality checks

4. Project management:
   - Issue labels and categorization
   - Project board setup
   - Milestone configuration
   - Release management process

5. Repository settings:
   - Security settings and vulnerability alerts
   - Access control and team permissions
   - Webhook configurations if needed
   - GitHub Pages if applicable

For each configuration area, provide specific code snippets, file contents, or step-by-step instructions. Explain the rationale behind each recommendation so I understand the benefits.

The output should be a comprehensive GitHub repository setup plan that I can implement immediately.
```

**Example Usage**: When setting up a new project repository or improving the configuration of an existing one.

**Expected Output**: A detailed plan for configuring your GitHub repository with specific file contents, workflow configurations, and settings recommendations.
</details>

<details>
<summary><strong>Hosting & Deployment Setup</strong></summary>

### Hosting & Deployment Setup Prompt

**Name**: Deployment Infrastructure Architect

**Purpose**: Helps you select and configure the appropriate hosting solution (like Netlify) for your project, including CI/CD pipelines and environment management.

**When to Use**: When setting up hosting infrastructure for a new project or improving an existing deployment process.

**Prompt**:
```
Help me set up a robust hosting and deployment infrastructure for my project. Guide me through selecting the appropriate hosting platform and configuring CI/CD pipelines, environments, and deployment workflows.

First, ask me about:
- My project type (static site, SPA, full-stack application, etc.)
- Expected traffic and scaling needs
- Budget constraints
- Performance requirements
- Security considerations
- Development workflow preferences
- Any specific hosting platforms I'm considering (Netlify, Vercel, AWS, etc.)

Then, help me:

1. Select the optimal hosting platform:
   - Compare options based on my specific requirements
   - Explain pros/cons of each relevant option
   - Recommend the best fit with justification

2. Configure the selected platform:
   - Account setup and team access
   - Domain configuration and SSL
   - Environment variables management
   - Build settings and commands
   - Performance optimizations

3. Set up CI/CD pipelines:
   - Automated build and testing
   - Preview deployments for pull requests
   - Production deployment workflow
   - Rollback procedures

4. Establish environment management:
   - Development, staging, and production environments
   - Environment-specific configurations
   - Promotion process between environments
   - Database and backend service connections

5. Implement monitoring and maintenance:
   - Uptime and performance monitoring
   - Error tracking and alerting
   - Analytics integration
   - Regular maintenance procedures

For each step, provide specific commands, configuration files, or step-by-step instructions that I can follow. Include screenshots or diagrams where helpful.

The final output should be a comprehensive deployment setup plan tailored to my specific project needs.
```

**Example Usage**: When setting up hosting infrastructure for a new project or improving an existing deployment process.

**Expected Output**: A detailed plan for selecting and configuring your hosting platform, including specific configuration files, CI/CD workflows, and environment management strategies.
</details>

---

## Development Workflow

<details>
<summary><strong>Architecture Planning</strong></summary>

### Architecture Planning Prompt

**Name**: System Architecture Designer

**Purpose**: Helps you design a clean, scalable architecture for your application that follows best practices and accommodates your specific requirements.

**When to Use**: When planning the overall structure of your application before implementation begins.

**Prompt**:
```
Help me design a clean, scalable architecture for my application. Guide me through creating a comprehensive architecture plan that follows best practices for my specific tech stack and requirements.

First, ask me about:
- My application type and purpose
- The selected tech stack
- Expected scale and performance needs
- Key technical requirements and constraints
- Team size and expertise
- Future expansion plans

Then, help me design:

1. Overall architectural pattern:
   - Recommend appropriate patterns (MVC, MVVM, Clean Architecture, etc.)
   - Explain the benefits for my specific case
   - Diagram the high-level architecture

2. Module/component breakdown:
   - Identify major modules and their responsibilities
   - Define boundaries and interfaces between modules
   - Establish naming conventions and organization

3. Data flow and state management:
   - Design data flow through the system
   - Recommend state management approaches
   - Define data models and schemas

4. API design (if applicable):
   - REST/GraphQL endpoint structure
   - Authentication and authorization approach
   - Error handling and status codes
   - Documentation strategy

5. Infrastructure considerations:
   - Database design and access patterns
   - Caching strategy
   - Scaling approach (vertical vs. horizontal)
   - Cloud service integration

6. Cross-cutting concerns:
   - Logging and monitoring
   - Error handling
   - Security measures
   - Performance optimization

For each architectural decision, explain the rationale and trade-offs. Provide diagrams where appropriate to illustrate relationships and flows.

The output should be a comprehensive architecture document that can guide implementation while remaining flexible enough to adapt to changing requirements.
```

**Example Usage**: When planning the overall structure of your application before implementation begins.

**Expected Output**: A detailed architecture plan with diagrams, component breakdowns, data flow descriptions, and implementation guidelines tailored to your specific project.
</details>

<details>
<summary><strong>Feature Implementation</strong></summary>

### Feature Implementation Prompt

**Name**: Feature Development Guide

**Purpose**: Helps you plan and implement a specific feature with a structured approach that considers all aspects from design to testing.

**When to Use**: When starting work on a new feature or major enhancement to your application.

**Prompt**:
```
Help me plan and implement a specific feature for my application. Guide me through a structured approach that covers all aspects from design to testing.

First, ask me about:
- The specific feature I want to implement
- How it fits into the overall application
- User stories or requirements it addresses
- Any design or UX considerations
- Technical constraints or dependencies
- Timeline and priority

Then, help me create a comprehensive implementation plan:

1. Feature design:
   - Component breakdown
   - UI/UX considerations
   - Data requirements
   - API endpoints needed
   - State management approach

2. Implementation steps:
   - Break down the work into logical tasks
   - Identify dependencies between tasks
   - Suggest an implementation order
   - Highlight potential technical challenges

3. Code structure:
   - File and folder organization
   - Key classes/components to create
   - Interface definitions
   - Reusable utilities needed

4. Testing strategy:
   - Unit test coverage plan
   - Integration test scenarios
   - Edge cases to consider
   - Performance testing if applicable

5. Deployment considerations:
   - Feature flags if needed
   - Database migrations
   - Backward compatibility issues
   - Rollout strategy

For each section, provide specific guidance, code snippets, or examples that are directly applicable to my tech stack and feature requirements.

The output should be a detailed implementation plan that I can follow to efficiently build the feature while maintaining code quality and user experience.
```

**Example Usage**: When starting work on a new feature or major enhancement to your application.

**Expected Output**: A comprehensive feature implementation plan with specific tasks, code structure recommendations, testing strategies, and deployment considerations.
</details>

<details>
<summary><strong>Testing Strategy</strong></summary>

### Testing Strategy Prompt

**Name**: Test Coverage Strategist

**Purpose**: Helps you develop a comprehensive testing strategy for your application that balances coverage, efficiency, and maintainability.

**When to Use**: When establishing testing practices for a new project or improving testing coverage for an existing one.

**Prompt**:
```
Help me develop a comprehensive testing strategy for my application. Guide me through creating a balanced approach that ensures quality while remaining practical to implement and maintain.

First, ask me about:
- My application type and tech stack
- Current testing practices (if any)
- Team size and testing expertise
- CI/CD environment
- Time constraints and priorities
- Specific quality concerns

Then, help me create a testing strategy that includes:

1. Testing pyramid implementation:
   - Unit testing approach and coverage goals
   - Integration testing scope and approach
   - End-to-end testing strategy
   - Manual vs. automated testing balance

2. Test organization:
   - Folder structure and naming conventions
   - Test categorization (smoke, regression, etc.)
   - Shared fixtures and utilities

3. Testing tools selection:
   - Recommended testing frameworks for my stack
   - Mocking and stubbing tools
   - Code coverage tools
   - UI/visual testing tools if applicable

4. Test-driven development approach:
   - When and how to apply TDD
   - Best practices for writing tests first
   - Balancing TDD with other development approaches

5. CI/CD integration:
   - Test automation in the pipeline
   - Test parallelization for speed
   - Failure handling and reporting
   - Test environment management

6. Special testing considerations:
   - Performance testing
   - Security testing
   - Accessibility testing
   - Mobile/responsive testing if applicable

For each component of the strategy, provide specific examples, code snippets, or configuration details relevant to my tech stack.

The output should be a practical testing strategy document that balances thoroughness with implementation reality, and includes specific next steps to implement or improve our testing approach.
```

**Example Usage**: When establishing testing practices for a new project or improving testing coverage for an existing one.

**Expected Output**: A detailed testing strategy with specific recommendations for testing tools, organization, coverage goals, and CI/CD integration tailored to your project.
</details>

---

> **Note**: This prompt library is a living document. Add new prompts or refine existing ones as your project evolves and new needs emerge.