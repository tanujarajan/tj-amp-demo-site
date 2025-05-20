# Vibe Coding - AI Prompt Library

This document contains all the prompts from the Vibe Coding AI Prompt Library. You can copy and paste these directly into your preferred AI assistant.

## Quickstart Prompts

### Quickstart Context Co-Pilot

**Purpose:** To have an AI co-pilot guide you in rapidly defining the essential foundational context for your new product idea.

**Goal:** A concise, AI-assisted summary of your core idea, target users, key problems, solution concept, initial tech thoughts, and desired UI style.

**When to Use:** As the very first step with a new idea, to collaboratively build foundational clarity with AI assistance before planning or building.

**Prompt Text:**

```markdown
## AI Co-Pilot: Define Your Quickstart Context

**Instructions for the AI chatbot (e.g., ChatGPT, Claude, Windsurf, Cursor):**
"You are an expert Product Development Co-Pilot. Your goal is to help me, an aspiring founder, rapidly define the essential foundational context for my new product idea.

Please guide me through the following sections **one by one, or in small, logical groups of questions**. Wait for my response to each set of questions before moving to the next. My initial thoughts are provided below each section to give you a starting point – use these to ask clarifying questions and help me elaborate.

After we've gone through all sections, compile a structured summary of the refined context.

**Let's begin!**

---

**Section 1: Core Idea & Problem**
*Your Task (AI):* Help me explore and clearly articulate:
    1.  The main idea or concept for my product/service. (Aim for 1-2 sentences)
    2.  The primary problem my target audience faces that this idea aims to solve. (Aim for 1-2 sentences)
    3.  The 1-2 most critical pain points related to this problem that I want to address first.

*My Initial Thoughts (User to customise):*
> My idea is about: [e.g., an app for local community skill-sharing]
> The problem it solves is: [e.g., people have skills but can't easily connect with locals who need them, and vice-versa]
> Key pain points are: [e.g., difficulty finding trusted local help, underutilised personal skills]

---

**Section 2: Target Audience**
*Your Task (AI):* Help me explore and define:
    1.  My primary target audience segment/niche (be specific, e.g., "retired seniors in urban areas," "freelance graphic designers").
    2.  Their key characteristics or needs relevant to my idea.

*My Initial Thoughts (User to customise):*
> My target audience is: [e.g., residents of my town]
> Their relevant needs/characteristics are: [e.g., want to learn new things, save money, or connect with community]

---

**Section 3: Solution & Differentiation**
*Your Task (AI):* Help me explore and describe:
    1.  The main components of my proposed solution. (Aim for 1-2 sentences)
    2.  How my solution is different from existing alternatives, or what unique value it offers (e.g., "simpler," "hyper-local focus," "gamified learning").

*My Initial Thoughts (User to customise):*
> My solution is: [e.g., a mobile platform where users can list skills they offer or seek]
> It's different because: [e.g., it focuses only on in-person exchange and includes a reputation system]

---

**Section 4: Initial Tech Stack Considerations**
*Your Task (AI):* Help me explore and describe:
    1.  First, ask me about any technologies or platforms I'm leaning towards or would like to consider for a rapid first prototype (e.g., "a simple web page with HTML/CSS/JS," "a mobile app").
    2.  Then, based on my idea and preferences, suggest 1-2 lean tech stack options suitable for building this rapid first prototype. Focus on tools/frameworks known for quick setup, development, iteration and deployment. Explain your suggestions briefly. 

*My Initial Thoughts (User to customise):*
> I'm thinking about: [e.g., building a simple responsive website to start. It will need to support some interactivity but doesn't need any heavy JS frameworks like React or Vue.]
> I'm planning to use Replit/Lovable/V0/Cursor/Windsurf/Bolt.new/Firebase Studio/Trae/Data Button to build this (delete the ones I don't plan to use)
---

**Section 5: Brand/UI Design Style Preferences**
*Your Task (AI):*
    1.  First, present these general style options and ask which best fits my initial vision (or if I have another style in mind):
        - A) Modern & Clean (minimalist, spacious, professional)
        - B) Playful & Vibrant (colourful, engaging, friendly)
        - C) Elegant & Sophisticated (premium feel, refined typography, muted colours)
        - D) Utilitarian & Functional (focus on clarity and ease of use, less on aesthetics)
    2.  Based on my choice, suggest 2-3 specific, actionable keywords an AI image generator could use to create a mood board or initial UI mockups (e.g., for "Modern & Clean": "minimalist UI dashboard, teal and grey, sans-serif font").

*My Initial Thoughts (User to customise):*
> I like the idea and feel of it being [e.g., friendly and approachable, minimal, playful, elegant, utilitarian]
> I'm inspired by [e.g., the design of a popular app or website]
> I like [e.g., the use of muted/bold colours, the use of sans-serif font, the use of a dark theme, the use of a light theme]

---

**Final Output (AI to Generate at the End):**
After guiding me through all sections, please provide a consolidated summary in the following format:

*   **Product Idea:** [Summary]
*   **Core Problem & Pain Points:** [Summary]
*   **Target Audience:** [Summary]
*   **Proposed Solution & Differentiation:** [Summary]
*   **Initial Tech Stack Considerations & AI Recommendations:** [User's thoughts + AI's suggested options and reasoning]
*   **Brand/UI Design Style & AI Keyword Suggestions:** [User's preference + AI's suggested keywords]

This summary will serve as the core input for the 'Build Kick-off Plan.'
```

---


### Build Kick-off Co-Pilot

**Purpose:** To have an AI co-pilot guide you in translating your foundational context into a defined MVP, a rapid prototyping approach, and actionable initial steps.

**Goal:** An AI-assisted, prioritised MVP feature set, a clear Day 1 prototype target (core user journey), and a list of granular actions to begin building immediately.

**When to Use:** After using the 'Quickstart Context Co-Pilot,' to collaboratively define your MVP and the immediate plan to build its first iteration with AI assistance.

**Prompt Text:**

```markdown
## AI Co-Pilot: Plan Your Build Kick-off

**Instructions for the AI chatbot (e.g., ChatGPT, Claude, Windsurf, Cursor):**
"You are an expert Product Development Co-Pilot. Your goal is to help me create a 'Build Kick-off Plan' for my product idea. We will use the 'Quickstart Context' (which I will provide) as our foundation.

Please guide me through the following sections **one by one, or in small, logical groups of questions**. Wait for my response to each set of questions before moving to the next. My initial thoughts or the output from the previous 'Quickstart Context Co-Pilot' will be provided to give you a starting point.

After we've gone through all sections, compile a structured 'Build Kick-off Plan'.

**Let's begin!**

**First, I will provide you with the 'Quickstart Context' summary that we previously generated. Reply "Ready" once you've processed the summary.**
*(User: Paste the summary from 'Quickstart Context Co-Pilot' here)*

---

**Section 1: Decompose Core Solution & Brainstorm Delighter Features**
*Your Task (AI):* Based on my 'Core Solution Idea' from the context provided:
    1.  Help me brainstorm and list 3-5 potential features or components that would bring it to life. Encourage me to think broadly at first. Prompt me to be creative and think outside the box. These are features that sit outside of core functionality (e.g. registration/login, user profiles, etc.)

*My Initial Thoughts (User to customise, or AI to prompt if blank):*
> Potential features could be: [e.g., skill listing, search for skills, real-time messaging, review/rating system, user profiles, AI-powered skill matching, gamification elements, community features]

---

**Section 2: Define & Prioritise MVP Feature Set (MoSCoW for Day 1)**
*Your Task (AI):* From our brainstormed feature list above:
    1.  Help me identify the **absolute minimum** features needed for a user to experience the core value proposition (the "Must-Haves" for a Day 1 prototype).
    2.  Help me identify any "Should-Haves" (important, but can come after the initial Must-Haves are working).
    3.  Remind me that "Could-Haves" and "Won't-Haves (this time)" are deferred to maintain focus for Day 1.
    4.  Combine the Must-Haves and Should-Haves into a list of features that will be built in the first iteration
    5.  Provide a full MVP scope, including generic core features that the MVP will require to be viable (table stakes features, like user auth, security, database integration, CMS, etc.)

*My Initial Thoughts (User to customise, or AI to prompt if blank):*
> Must-Haves seem to be: [e.g., basic user signup, ability to post one skill, ability to see a list of skills]
> Should-Haves might be: [e.g., search functionality]

---

**Section 3: High-Level Delivery Approach (Day 1 Goal)**
*Your Task (AI):* Based on the "Must-Have" MVP features:
    1.  Help me describe the single, most important **core user journey** for the Day 1 prototype. (e.g., "User lands on a page, inputs X, sees Y result," or "User signs up, creates a basic profile, views a core piece of content.")
    2.  Confirm that our default target is a **front-end-only interactive prototype** of this core user journey, with backend/database functionality mocked or deferred for now.

*My Initial Thoughts (User to customise, or AI to prompt if blank):*
> The core journey is: [e.g., User signs up, lists one skill they offer, and sees it appear on a main page]

---

**Section 4: Granular Actions for Getting Started (Day 1)**
*Your Task (AI):* Based on the MVP features, core user journey, and the 'Chosen Tech Stack' from the 'Quickstart Context':
    1.  Collaboratively generate a list of 3-5 specific, small, actionable tasks to build the Day 1 prototype.
    2.  For example, if the tech stack is HTML/CSS/JS, tasks might include: "Create a single `index.html` page for the main interface," "Style the page using basic CSS to reflect the [Brand/UI Style]," "Implement input field(s) for [core user input]," "Add a button to trigger the core action," "Display a mocked-up result/output on the page." Adapt these examples to my specific project.

*My Initial Thoughts (User to customise, or AI to prompt if blank):*
> We could start with: [e.g., creating the main HTML structure]

---

**Final Output (AI to Generate at the End):**
After guiding me through all sections, please provide a consolidated 'Build Kick-off Plan' in the following format:

*   **Input Quickstart Context:** (Briefly summarise or reference the provided context)
*   **Brainstormed Features:** [List]
*   **MVP Feature Set (Day 1):**
    *   **Must-Haves:** [List]
    *   **Should-Haves:** [List]
*   **Day 1 Prototype - Core User Journey:** [Description]
*   **Day 1 Prototype - Granular Action Plan:** [Numbered list of 3-5 actions]

This plan will directly feed into the 'Start Building Command' prompt.
```

---


### Start Building Command

**Purpose:** To generate a precise initial command or set of instructions to give to an AI building tool to kickstart the development of your Day 1 prototype.

**Goal:** A ready-to-use, focused command for an AI development tool, incorporating your context, MVP plan, and guardrails to guide the initial build.

**When to Use:** After creating your 'Build Kick-off Plan,' when you're ready to give the very first instruction to an AI tool to start generating code for your prototype.

**Prompt Text:**

```markdown
## Start Building Command

You have your "Quickstart Context" and "Build Kick-off Plan." Now, let's craft the initial command to give to your chosen AI building tool (e.g., a Large Language Model like ChatGPT, Claude, Windsurf, Cursor, or a similar code generation assistant).

**Instructions for the AI Building Tool:**

"You are an expert AI developer tasked with building the very first prototype of a new product.

**Project Context (from 'Quickstart Context' Prompt):**
*   **Problem:** [Insert Problem from Quickstart Context]
*   **Target Audience:** [Insert Target Audience from Quickstart Context]
*   **Core Solution Idea:** [Insert Solution Idea from Quickstart Context]
*   **Key Differentiator:** [Insert Differentiation from Quickstart Context]
*   **Chosen Tech Stack (or primary components):** [Insert Tech Stack from Quickstart Context, e.g., HTML, CSS, Vanilla JavaScript for a static site; or Next.js with Tailwind CSS]
*   **Desired UI/Brand Style:** [Insert UI Style from Quickstart Context, e.g., Modern & Clean, with keywords: minimalist UI dashboard, teal and grey, sans-serif font, colourful accents]

**Build Plan (from 'Build Kick-off Plan' Prompt):**
*   **Day 1 Prototype Goal:** Create a front-end-only interactive prototype of the following core user journey: [Insert Core User Journey from Build Kick-off Plan].
*   **MVP Must-Have Features for this prototype:**
    *   [Insert M1 from Build Kick-off Plan]
    *   [Insert M2 from Build Kick-off Plan]
    *   (Add other Must-Haves)
*   **Specific Initial Tasks:**
    *   [Insert first granular action from Build Kick-off Plan]
    *   [Insert second granular action from Build Kick-off Plan]
    *   (Add other granular actions)

**Your Task:**
Based *only* on the information above, implement **only the very first granular action** from the 'Specific Initial Tasks' list to begin creating the Day 1 prototype. Wait for my confirmation before proceeding to any subsequent tasks.

**Key Instructions & Guardrails:**
1.  **Focus:** Implement *only* the specified "Must-Have" features and initial tasks. Do not add any other functionality or complexity at this stage.
2.  **Simplicity:** Prioritise simplicity and speed. For this first pass, generate all necessary HTML, CSS, and JavaScript in a *single file* if appropriate for the chosen tech stack (e.g., for a simple HTML/CSS/JS prototype). If using a framework like Next.js, create the minimal necessary component files.
3.  **Styling:** Apply basic styling consistent with the 'Desired UI/Brand Style'. Use placeholder content where necessary.
4.  **No Backend:** Do not implement any backend logic, database connections, or user authentication unless it was explicitly listed as a 'Must-Have' *and* part of the initial granular tasks for a front-end mock.
5.  **Clarification:** If any part of this request is unclear, or if you need to make an assumption to proceed with one of the initial tasks, please state your assumption and ask for clarification *before* writing extensive code.
6.  **Output:** Provide the complete code for the initial file(s) created.

Start with the first task: [Re-iterate the very first granular action from Build Kick-off Plan here]."

---

**How to Use This Prompt:**
1.  Fill in the bracketed placeholders `[...]` with the outputs from your "Quickstart Context" and "Build Kick-off Plan" prompts.
2.  Copy the entire "Instructions for the AI Building Tool" section.
3.  Paste it directly into your chosen AI development tool, such as ChatGPT, Claude, Windsurf, or Cursor. This initial prompt will instruct the AI to implement only the *first* task.
4.  Once the AI has completed the first task, carefully review and test its output.
5.  To proceed with the next task from your 'Granular Action Plan', you can then instruct the AI with a follow-up prompt, for example: 'That looks good. Now, please implement the next task: [Clearly state the second task from your plan]'.
6.  Continue this iterative process for each task, testing and confirming each step.

**Expected Output from AI Tool:**
The initial code for **only the very first granular action** of your Day 1 prototype, adhering to the guardrails. This gives you a tangible, testable starting point. You will then guide the AI to implement subsequent tasks from your plan one by one.
```

---


## Validate Prompts

### Problem Interview Script

**Purpose:** Helps you create a structured interview script to validate customer problems and needs.

**Goal:** Uncover real customer pain points before building solutions.

**When to Use:** Early validation stage before committing resources to building a solution.

**Prompt Text:**

```markdown
Help me create a problem interview script for customer discovery. I need to validate whether my target audience experiences the problem I think they have before I build a solution.

First, ask me about:
- The problem I believe exists
- My target audience
- My hypotheses about their pain points
- What I've observed so far

Then, help me create:

1. Introduction script (30-60 seconds)
   - How to introduce myself and the purpose of the interview
   - How to establish rapport and set expectations
   - How to address confidentiality

2. Background questions (2-3 minutes)
   - Questions about their role, responsibilities, and context
   - Questions that help me understand their environment

3. Problem exploration questions (10-15 minutes)
   - Open-ended questions about their challenges
   - Questions about how they currently solve these problems
   - Questions about the impact of these problems
   - Questions that reveal frequency and severity

4. Solution exploration questions (5 minutes)
   - Questions about what an ideal solution would look like
   - Questions about what they've tried before
   - Questions about what would make a solution valuable to them

5. Wrap-up questions (2 minutes)
   - Questions to ensure I haven't missed anything important
   - Questions about who else I should talk to

6. Next steps script (1 minute)
   - How to thank them for their time
   - How to explain what happens next
   - How to ask for permission to follow up

Please include follow-up prompts and clarifying questions for each section to help me dig deeper when needed. Also, include tips for active listening and avoiding leading questions.
```

---


### Audience & Needs Analysis

**Purpose:** To deeply understand your target audience, their needs, pain points, and motivations.

**Goal:** A clear profile of your ideal customer and a prioritized list of their unmet needs.

**When to Use:** Before designing solutions, to ensure you're solving real problems for the right people.

**Prompt Text:**

```markdown
Help me conduct a comprehensive audience and needs analysis for [product/service concept]. I need to clearly identify my target audience segments and understand their specific needs.

First, ask me about:
- The general problem space I'm addressing
- Any initial hypotheses about who my users might be
- Preliminary research or observations I've already gathered
- The market or industry context

Then, guide me through:

1. Audience Segmentation
   - Help me identify 2-4 distinct audience segments
   - For each segment, define demographic, psychographic, and behavioral characteristics
   - Help me prioritize these segments based on market size, accessibility, and fit with my solution

2. Needs Assessment for Each Segment
   - What are their primary goals and motivations?
   - What pain points or challenges do they face?
   - What are their current alternatives or workarounds?
   - What would success look like from their perspective?

3. Opportunity Mapping
   - Which needs are most urgent or important?
   - Which needs are currently underserved by existing solutions?
   - Where do the needs of different segments overlap?
   - Which needs align best with my capabilities and vision?

4. Validation Plan
   - Suggest methods to validate these audience insights
   - Help me draft 5-7 key questions to ask potential users
   - Identify where to find representatives of each segment
   - Outline criteria for confirming or revising my audience hypotheses

Please be specific and actionable in your recommendations, avoiding generic advice. Challenge any assumptions that seem unvalidated, and suggest concrete next steps for deepening my understanding of these audience segments.
```

---


### Jobs To Be Done Framework

**Purpose:** To uncover the underlying 'jobs' customers are trying to get done, for which they might 'hire' your product.

**Goal:** Insight into customer motivations and desired outcomes, beyond surface-level features.

**When to Use:** To gain deeper empathy for customer needs and identify innovation opportunities.

**Prompt Text:**

```markdown
Help me apply the Jobs to be Done (JTBD) framework to understand why customers would "hire" my product or service.

First, ask me about:
- My product/service concept
- My target customers
- The context in which they'd use my solution
- Alternatives they're currently using

Then, guide me through identifying:

1. Functional Jobs
   - What practical tasks are customers trying to accomplish?
   - What functional problems are they trying to solve?
   - What practical outcomes are they seeking?

2. Emotional Jobs
   - How do customers want to feel when using the solution?
   - What emotional states are they trying to avoid?
   - What would give them peace of mind or satisfaction?

3. Social Jobs
   - How do customers want to be perceived by others?
   - What social status or relationship outcomes do they want?
   - How does the solution affect their social identity?

4. Job Statements
   - Help me craft 3-5 complete JTBD statements in this format:
   - "When [situation], I want to [motivation], so I can [expected outcome]"

5. Prioritization
   - Help me identify which jobs are:
   - Most important to customers
   - Most underserved by existing solutions
   - Most aligned with my product's unique capabilities
```

---


### Lean Canvas Builder

**Purpose:** To quickly outline and validate your business model using the Lean Canvas framework.

**Goal:** A completed Lean Canvas identifying key assumptions and areas for validation.

**When to Use:** Early in the idea stage, before significant investment, to map out your business model.

**Prompt Text:**

```markdown
Help me create a comprehensive Lean Canvas for my startup idea. I need a structured way to document my business model assumptions and identify areas that need validation.

First, ask me about:
- My product/service concept
- The problem I'm solving
- My target customers
- My unique value proposition
- Any validation I've already done

Then, guide me through completing each section of the Lean Canvas:

1. Problem (Top 3 Problems)
   - What are the top 3 problems my target customers face?
   - What existing alternatives are they using?

2. Customer Segments
   - Who are my target customers?
   - Who are my early adopters?
   - What are their characteristics?

3. Unique Value Proposition
   - What is my single, clear, compelling message?
   - Why is my solution different and worth buying?

4. Solution
   - What are the top features or capabilities that solve each problem?
   - How do they map to the problems identified?

5. Channels
   - How will I reach my customers?
   - Which channels will be most effective?
   - How do these channels connect to my customers' routines?

6. Revenue Streams
   - What is my revenue model?
   - What is my pricing strategy?
   - What is the lifetime value of a customer?
   - What is my gross margin?

7. Cost Structure
   - What are my fixed costs?
   - What are my variable costs?
   - What is my cost of customer acquisition?

8. Key Metrics
   - What key activities will I measure?
   - What are the key indicators of success?
   - What are my targets for these metrics?

9. Unfair Advantage
   - What can't be easily copied or bought?
   - What makes my solution defensible?

For each section, help me identify:
- The most critical assumptions that need validation
- How I might test these assumptions quickly and cheaply
- What would constitute validation of these assumptions

Please format the canvas clearly and provide a summary of the most critical aspects of my business model and the key assumptions I should focus on validating first.
```

---


### Value Proposition Canvas Generator

**Purpose:** To articulate how your product creates value for customers by addressing their pains and gains related to their jobs-to-be-done.

**Goal:** A clear and compelling value proposition that resonates with your target audience.

**When to Use:** To ensure product-market fit and to craft effective marketing messages.

**Prompt Text:**

```markdown
Help me create a comprehensive value proposition canvas for [product/service name]. I need to clearly articulate how my solution addresses specific customer needs and delivers unique benefits.

First, ask me about:
- My target customer segment
- The key jobs/tasks my customers are trying to accomplish
- The pains they experience in trying to accomplish these jobs
- The gains they hope to achieve

Then, help me develop:

1. A detailed value proposition canvas with:
   - Customer Profile (jobs, pains, gains)
   - Value Map (products/services, pain relievers, gain creators)
   - How my offering specifically connects to each element

2. A concise value proposition statement that follows this format:
   - For [target customer]
   - Who [statement of need or opportunity]
   - Our [product/service name] is [product category]
   - That [key benefit, compelling reason to buy]
   - Unlike [primary competitive alternative]
   - Our product [statement of primary differentiation]

3. Three alternative versions of my value proposition optimized for:
   - Website headline
   - Elevator pitch (30 seconds)
   - Sales presentation

4. Suggestions for testing and validating this value proposition with real customers

Please ensure the value proposition is specific, addresses real customer needs, communicates concrete benefits (not just features), and differentiates from alternatives in the market.
```

---


## Plan Prompts

### User Story Map

**Purpose:** Helps you visualize the user journey and organize features into a coherent narrative.

**Goal:** Create a structured map of user activities, tasks, and stories to guide development.

**When to Use:** When planning your product backlog and organizing development priorities.

**Prompt Text:**

```markdown
Help me create a comprehensive user story map for [product/feature]. I need to visualize the user journey and organize our backlog into a coherent narrative structure.

First, ask me about:
- The primary user personas we're targeting
- The main goals these users want to accomplish
- The overall scope of the product or feature
- Any existing user research or journey maps we have
- Our development timeline and constraints

Then, guide me through building a user story map with:

1. Backbone (User Activities)
   - The high-level activities users perform to accomplish their goals
   - The natural sequence of these activities from start to finish
   - How different user personas might have different activity flows

2. Walking Skeleton (User Tasks)
   - The specific tasks users perform within each activity
   - How these tasks connect to form complete workflows
   - Alternative paths or edge cases in the user journey

3. User Stories
   - Detailed user stories for each task following the format:
     "As a [user type], I want to [action], so that [benefit]"
   - Acceptance criteria for each story
   - Relative complexity or effort estimates

4. Releases or Slices
   - How to organize stories into meaningful releases
   - What constitutes our Minimum Viable Product (MVP)
   - Subsequent releases that build upon the MVP
   - How to ensure each release delivers end-to-end user value

5. Prioritization
   - Which stories are must-haves vs. nice-to-haves
   - How to balance user value, business value, and risk
   - Dependencies between stories that affect sequencing

6. Gaps and Risks
   - Potential gaps in the user journey
   - Technical or design challenges we should anticipate
   - Research questions that need answering

Please provide a structured, visual representation of the story map that I can share with my team, along with guidance on how to use this map for sprint planning and backlog refinement.
```

---


### PRD Generator

**Purpose:** Helps you create a comprehensive Product Requirements Document.

**Goal:** Document clear requirements and specifications for your product or feature.

**When to Use:** When you need to define detailed requirements for development.

**Prompt Text:**

```markdown
Help me create a comprehensive Product Requirements Document (PRD) for [product/feature name]. I need to clearly define what we're building, why we're building it, and how it should work.

First, ask me about:
- The problem this product/feature solves
- Our target users and their needs
- Business objectives and success metrics
- Timeline and resource constraints
- Any existing research, designs, or technical considerations

Then, help me create a structured PRD with these sections:

1. Executive Summary
   - Brief overview of the product/feature
   - The core problem being solved
   - Key benefits and expected outcomes
   - Strategic alignment with company goals

2. Problem Statement & User Needs
   - Detailed description of the problem
   - User personas and their specific needs
   - Current pain points and limitations
   - How this solution addresses these needs

3. Market & Competitive Analysis
   - Target market size and segments
   - Competitive landscape
   - Differentiation strategy
   - Market trends and opportunities

4. Product Goals & Success Metrics
   - Primary and secondary objectives
   - Key performance indicators (KPIs)
   - How success will be measured
   - Baseline metrics and targets

5. User Stories & Requirements
   - Comprehensive list of user stories
   - Functional requirements
   - Non-functional requirements (performance, security, etc.)
   - Technical requirements and dependencies

6. User Experience & Design
   - User flows and journeys
   - Key screens or interactions
   - Design principles and guidelines
   - Accessibility considerations

7. Technical Considerations
   - Architecture overview
   - System dependencies
   - API requirements
   - Data requirements and models
   - Security and compliance needs

8. Rollout Strategy
   - Phasing and prioritization
   - Beta testing approach
   - Launch plan
   - Monitoring and feedback collection

9. Risks & Mitigations
   - Potential risks and challenges
   - Mitigation strategies
   - Open questions and assumptions

10. Timeline & Milestones
    - Development phases
    - Key milestones and deliverables
    - Dependencies and critical path

For each section, provide clear, specific content that avoids ambiguity and gives the development team everything they need to build the right solution.
```

---


### MUST-SHOULD-COULD Prioritiser

**Purpose:** Helps you prioritize features using the MoSCoW method (Must, Should, Could, Won't).

**Goal:** Create a clear prioritization framework for your product backlog.

**When to Use:** When you need to decide what to build first and what can wait.

**Prompt Text:**

```markdown
Help me prioritize my product backlog using the MoSCoW method (Must have, Should have, Could have, Won't have). I need to make clear decisions about what features to include in our initial release and subsequent iterations.

First, ask me about:
- My product vision and core value proposition
- The primary user problems we're solving
- Our development timeline and constraints
- Any non-negotiable requirements (legal, security, etc.)
- The feature ideas currently in our backlog

Then, guide me through:

1. Establishing Prioritization Criteria
   - Business value (revenue, retention, acquisition)
   - User value (pain point severity, frequency of use)
   - Implementation complexity and effort
   - Dependencies and technical constraints
   - Strategic alignment with company goals

2. MoSCoW Categorization
   - MUST have: Critical features without which the product will fail
   - SHOULD have: Important features that add significant value but aren't critical
   - COULD have: Desirable features that would enhance the product but can be delayed
   - WON'T have: Features explicitly excluded from the current scope

3. For each feature in my backlog, help me:
   - Evaluate it against our prioritization criteria
   - Assign it to the appropriate MoSCoW category
   - Document the rationale for this categorization
   - Identify any dependencies or prerequisites

4. Scope Definition
   - Define our Minimum Viable Product (MVP) based on the MUST haves
   - Create a roadmap for incorporating SHOULD and COULD haves in future iterations
   - Establish clear boundaries for what's in and out of scope

5. Trade-off Analysis
   - Identify potential conflicts or resource constraints
   - Suggest approaches for resolving prioritization conflicts
   - Highlight risks associated with delaying certain features

6. Communication Strategy
   - How to explain our prioritization decisions to stakeholders
   - How to manage expectations about features in each category
   - How to revisit and adjust priorities as we learn more

Please be specific and challenge any assumptions that might lead to scope creep or misaligned priorities. Help me make tough decisions rather than trying to include everything.
```

---


### Tech Stack Advisor

**Purpose:** Helps you select the most appropriate technology stack for your product.

**Goal:** Make informed decisions about technologies that align with your requirements and constraints.

**When to Use:** Before beginning development when evaluating technical options.

**Prompt Text:**

```markdown
Help me select the most appropriate technology stack for my [product type] project. I need to make informed decisions about which technologies to use based on my specific requirements and constraints.

First, ask me about:
- The type of product I'm building (web app, mobile app, etc.)
- My target users and their technical environment
- Key functional requirements and features
- Non-functional requirements (performance, scalability, security)
- My team's current technical expertise
- Timeline and budget constraints
- Long-term maintenance and scalability needs

Then, help me evaluate options for:

1. Frontend Technologies
   - Framework options (React, Vue, Angular, etc.)
   - Mobile approach (native, hybrid, PWA)
   - UI libraries and design systems
   - State management solutions
   - Performance considerations

2. Backend Technologies
   - Language options (Node.js, Python, Ruby, etc.)
   - Framework options within chosen language
   - API architecture (REST, GraphQL, etc.)
   - Authentication and authorization approaches
   - Background processing needs

3. Database Solutions
   - Relational vs. NoSQL options
   - Specific database technologies
   - Data modeling considerations
   - Scaling strategy
   - Backup and recovery approach

4. Infrastructure & DevOps
   - Hosting options (cloud providers, self-hosted)
   - Containerization and orchestration
   - CI/CD pipeline options
   - Monitoring and logging solutions
   - Security considerations

5. Third-party Services & APIs
   - Build vs. buy decisions
   - Integration requirements
   - Vendor evaluation criteria
   - Cost implications

For each category, provide:
- 2-3 recommended options with pros and cons
- Specific factors that make each option suitable for my case
- Potential risks and mitigations
- Cost and learning curve considerations
- Future-proofing and scalability implications

Conclude with a recommended stack that balances my requirements, constraints, and long-term considerations, with clear rationale for each technology choice.
```

---


### Roadmap Milestone Planner

**Purpose:** Helps you create a phased product roadmap with clear milestones and deliverables.

**Goal:** Develop a strategic roadmap that balances vision with realistic execution.

**When to Use:** When planning your product development timeline and communicating it to stakeholders.

**Prompt Text:**

```markdown
Help me create a strategic product roadmap with clear milestones for [product name]. I need to plan our development phases and communicate our direction to stakeholders.

First, ask me about:
- Our product vision and key objectives
- Our prioritized feature list (MoSCoW or similar)
- Available resources and team capacity
- Key deadlines or market timing considerations
- Known dependencies or constraints
- Stakeholder expectations

Then, guide me through creating a roadmap with:

1. Roadmap Horizons
   - Near-term (next 1-3 months) with specific deliverables
   - Mid-term (3-6 months) with planned feature sets
   - Long-term (6+ months) with strategic directions
   - How to balance specificity vs. flexibility at each horizon

2. Milestone Definition
   - 3-5 key milestones that represent significant product evolution
   - Clear success criteria for each milestone
   - Logical progression that builds toward our vision
   - Realistic timeframes based on our capacity

3. For each milestone:
   - Theme or focus area
   - Core user stories and features included
   - Expected user and business outcomes
   - Technical foundation being established
   - Key metrics and KPIs to track
   - Dependencies and prerequisites

4. Release Planning
   - How milestones map to specific releases
   - Cadence of releases (continuous, scheduled, etc.)
   - Beta or staged rollout considerations
   - Feature flagging strategy

5. Resource Allocation
   - Team capacity requirements for each phase
   - Skills or specialists needed at different points
   - Potential bottlenecks or constraints
   - External dependencies or partnerships

6. Risk Management
   - Potential delays or challenges
   - Contingency plans and buffer strategies
   - Decision points for re-evaluation
   - How to handle scope changes

7. Communication Format
   - Visual representation of the roadmap
   - How to present to different stakeholder groups
   - Level of detail appropriate for each audience
   - How to set expectations about certainty vs. flexibility

Please help me create a roadmap that is both aspirational and realistic, with enough detail to guide execution while maintaining flexibility to adapt to new information.
```

---


### Product Vision & Strategy Outline

**Purpose:** To define the long-term vision for your product and the high-level strategy to achieve it.

**Goal:** A clear product vision statement and a strategic roadmap with key objectives.

**When to Use:** After initial validation, to set direction and guide product development efforts.

**Prompt Text:**

```markdown
Help me develop a comprehensive product vision and strategy for [product name]. I need to articulate where we're going and how we'll get there to align my team and stakeholders.

First, ask me about:
- The core problem we're solving and for whom
- Our validated customer insights and pain points
- The market landscape and competitive environment
- Our unique capabilities or advantages
- Any constraints or limitations we face

Then, guide me through creating:

1. Vision Statement
   - A concise, inspiring description of the future we want to create
   - The long-term impact we aim to have for our users and the market
   - How the world will be different when we succeed

2. Mission Statement
   - What we do, for whom, and the primary value we deliver
   - How we're different from alternatives
   - Our core principles and approach

3. Strategic Pillars (3-5)
   - The key focus areas that will drive our success
   - How each pillar supports our vision and mission
   - Why these pillars matter more than other potential focuses

4. Success Metrics
   - How we'll measure progress toward our vision
   - Key performance indicators for each strategic pillar
   - Leading and lagging indicators of success

5. Strategic Roadmap
   - Major phases or milestones over the next 12-18 months
   - Key capabilities we need to build in each phase
   - How these phases build toward our vision

6. Guiding Principles
   - Decision-making frameworks for the team
   - Trade-offs we're willing (and not willing) to make
   - How we'll prioritize competing opportunities

7. Narrative
   - A compelling story that ties everything together
   - How to communicate this strategy to different stakeholders
   - Addressing potential objections or concerns

For each component, provide examples and templates, then help me craft my own version that's specific, meaningful, and actionable for my product context.
```

---


## Build Prompts

### Design System Starter

**Purpose:** Helps you establish a cohesive design system for your product.

**Goal:** Create a consistent visual language and component library for your product.

**When to Use:** When starting the design phase of your product development.

**Prompt Text:**

```markdown
Help me establish a comprehensive design system for my [product type]. I need to create a cohesive visual language and component library that ensures consistency across our product.

First, ask me about:
- The type of product I'm building
- Our brand personality and values
- Our target audience and their preferences
- Any existing brand assets or guidelines
- Technical constraints or platform requirements
- Accessibility needs and compliance requirements

Then, guide me through creating a design system with:

1. Brand Foundations
   - Color palette (primary, secondary, accent, neutral)
   - Typography system (headings, body text, special text)
   - Spacing and layout grid
   - Iconography style and guidelines
   - Imagery and illustration principles

2. Core Components
   - Essential UI components (buttons, inputs, cards, etc.)
   - Component variants and states
   - Responsive behavior guidelines
   - Interactive patterns and animations
   - Loading states and error handling

3. Design Principles
   - Key principles that guide design decisions
   - How these principles reflect our brand and values
   - How to apply these principles in practice
   - Examples of good and bad applications

4. Usage Guidelines
   - When and how to use each component
   - Component combinations and layouts
   - Content guidelines and voice/tone
   - Accessibility best practices
   - Performance considerations

5. Implementation Strategy
   - How to document the design system
   - Tools and platforms for maintaining the system
   - Versioning and update process
   - How developers and designers should collaborate

6. Governance Model
   - Who owns and maintains the design system
   - Process for proposing and approving changes
   - How to handle exceptions and custom needs
   - Measuring adoption and effectiveness

For each section, provide specific recommendations tailored to my product context, not generic advice. Include examples and rationale for key decisions to help my team understand the system's purpose and value.
```

---


### Repo & CI/CD Quick-Start

**Purpose:** Helps you set up a repository structure and CI/CD pipeline for your project.

**Goal:** Establish a solid foundation for collaborative development and automated deployment.

**When to Use:** When starting development and setting up your technical infrastructure.

**Prompt Text:**

```markdown
Help me set up a repository structure and CI/CD pipeline for my [project type] project. I need to establish a solid foundation for collaborative development and automated deployment.

First, ask me about:
- The type of project (web app, mobile app, API, etc.)
- The programming languages and frameworks we're using
- Our team size and development workflow
- Our hosting environment or deployment targets
- Any specific security or compliance requirements
- Our testing strategy and quality standards

Then, guide me through setting up:

1. Repository Structure
   - Recommended folder organization
   - Essential files (.gitignore, README, etc.)
   - Configuration management approach
   - Dependency management
   - Environment variable handling
   - Documentation structure

2. Branch Strategy
   - Recommended branching model (GitFlow, trunk-based, etc.)
   - Branch naming conventions
   - Protection rules for critical branches
   - Pull request and code review process
   - Merge strategy and conflict resolution

3. CI Pipeline Configuration
   - Recommended CI platform (GitHub Actions, CircleCI, etc.)
   - Pipeline stages and workflows
   - Build process configuration
   - Automated testing setup
   - Code quality checks (linting, static analysis)
   - Security scanning integration

4. CD Pipeline Configuration
   - Deployment environments (dev, staging, production)
   - Deployment strategy (blue-green, canary, etc.)
   - Environment-specific configurations
   - Rollback mechanisms
   - Post-deployment verification

5. Infrastructure as Code
   - Approach for managing infrastructure
   - Configuration files and templates
   - Environment consistency
   - Secret management

6. Monitoring and Logging
   - Essential metrics to track
   - Log aggregation approach
   - Alert configuration
   - Performance monitoring

For each section, provide specific configuration examples and code snippets that I can adapt for my project, along with explanations of why these practices are recommended for my specific context.
```

---


### Architecture Outline

**Purpose:** Helps you design a scalable and maintainable software architecture.

**Goal:** Create a clear architectural blueprint that supports your product requirements.

**When to Use:** When planning the technical foundation of your product.

**Prompt Text:**

```markdown
Help me design a scalable and maintainable software architecture for my [product type] project. I need a clear architectural blueprint that supports our current requirements while allowing for future growth.

First, ask me about:
- The type of application we're building
- Core functional requirements and user flows
- Expected scale and performance needs
- Security and compliance requirements
- Integration requirements with other systems
- Team size and technical expertise
- Budget and resource constraints
- Future growth and expansion plans

Then, guide me through designing an architecture with:

1. Architectural Style and Pattern Selection
   - Recommended overall architecture (microservices, monolith, serverless, etc.)
   - Justification for this approach given my context
   - Tradeoffs and considerations
   - How this architecture supports our specific requirements

2. System Components and Services
   - Core components and their responsibilities
   - Service boundaries and communication patterns
   - Data flow between components
   - External dependencies and integrations
   - API design principles and standards

3. Data Architecture
   - Data storage solutions (databases, caching, etc.)
   - Data models and schemas
   - Data access patterns
   - Data migration and evolution strategy
   - Backup and recovery approach

4. Security Architecture
   - Authentication and authorization approach
   - Data protection strategies
   - Security monitoring and auditing
   - Compliance considerations
   - Threat modeling and mitigation

5. Scalability and Performance
   - Scaling strategy (vertical, horizontal, etc.)
   - Performance optimization approaches
   - Caching strategy
   - Load balancing and distribution
   - Resource estimation and capacity planning

6. Resilience and Reliability
   - Failure modes and recovery strategies
   - Redundancy and failover mechanisms
   - Monitoring and alerting approach
   - SLA and uptime considerations
   - Disaster recovery planning

7. Development and Deployment
   - Local development environment
   - CI/CD pipeline integration
   - Environment strategy (dev, staging, prod)
   - Feature flagging and progressive rollout
   - Observability and debugging

Please provide diagrams or visual representations where appropriate, and explain the rationale behind key architectural decisions. Focus on practical, implementable solutions rather than theoretical ideals.
```

---


### Feature Implementation Planner

**Purpose:** Helps you plan the detailed implementation of a specific feature.

**Goal:** Break down a feature into manageable tasks with clear technical specifications.

**When to Use:** When you're ready to implement a specific feature from your backlog.

**Prompt Text:**

```markdown
Help me plan the detailed implementation of [feature name] for my [product type] project. I need to break down this feature into manageable tasks with clear technical specifications.

First, ask me about:
- The high-level description of the feature
- User stories or requirements related to this feature
- Our current architecture and technology stack
- Any design mockups or wireframes
- Technical constraints or limitations
- Dependencies on other features or systems
- Timeline and resource availability

Then, guide me through creating an implementation plan with:

1. Feature Breakdown
   - Core components and functionality
   - User interface elements
   - Backend services or APIs needed
   - Data models and storage requirements
   - Integration points with existing systems
   - Edge cases and error scenarios

2. Technical Specifications
   - Detailed requirements for each component
   - API contracts and data formats
   - State management approach
   - Performance requirements
   - Security considerations
   - Accessibility requirements

3. Implementation Tasks
   - Logical breakdown of work into tasks
   - Dependencies between tasks
   - Estimated effort for each task
   - Suggested implementation order
   - Skills required for each task

4. Testing Strategy
   - Unit test requirements
   - Integration test scenarios
   - End-to-end test cases
   - Performance testing approach
   - Manual testing needs

5. Rollout Considerations
   - Feature flag strategy
   - Phased rollout approach
   - Monitoring and metrics
   - Rollback plan
   - User feedback collection

6. Documentation Needs
   - Code documentation requirements
   - User documentation updates
   - API documentation
   - Knowledge transfer considerations

For each section, provide specific, actionable details rather than generic advice. Include code snippets, pseudo-code, or architectural diagrams where appropriate to illustrate the implementation approach.
```

---


### Testing Strategy

**Purpose:** Helps you develop a comprehensive testing approach for your product.

**Goal:** Create a testing strategy that ensures quality and reliability.

**When to Use:** When planning your quality assurance approach for development.

**Prompt Text:**

```markdown
Help me develop a comprehensive testing strategy for my [product type] project. I need to ensure our product meets quality standards and functions reliably across all scenarios.

First, ask me about:
- The type of product we're building
- Our development methodology (Agile, Waterfall, etc.)
- Our technology stack and architecture
- Critical user flows and functionality
- Performance and security requirements
- Available resources and expertise for testing
- Timeline and release cadence
- Any regulatory or compliance requirements

Then, guide me through creating a testing strategy with:

1. Testing Levels
   - Unit testing approach and coverage goals
   - Integration testing strategy
   - System testing requirements
   - End-to-end testing scenarios
   - Acceptance testing criteria

2. Testing Types
   - Functional testing approach
   - Performance testing (load, stress, endurance)
   - Security testing methodology
   - Usability testing plan
   - Accessibility testing requirements
   - Compatibility testing (browsers, devices, etc.)

3. Test Automation
   - What to automate vs. test manually
   - Recommended automation tools and frameworks
   - Test automation architecture
   - Continuous integration strategy
   - Maintenance approach for test suites

4. Test Environment Management
   - Environment requirements and setup
   - Test data management
   - Configuration management
   - Environment parity with production

5. Test Execution Process
   - Test planning and preparation
   - Test case design methodology
   - Defect management workflow
   - Reporting and metrics
   - Sign-off criteria for releases

6. Specialized Testing Needs
   - Mobile-specific testing (if applicable)
   - API testing approach
   - Database testing strategy
   - Third-party integration testing
   - Recovery and failover testing

7. Testing Roles and Responsibilities
   - Team structure and skill requirements
   - Developer vs. QA responsibilities
   - Training and knowledge sharing

Please provide specific recommendations tailored to my product context, including suggested tools, frameworks, and methodologies that would work best for our specific needs.
```

---


## Launch Prompts

### Landing-Page Copy Crafter

**Purpose:** Helps you write compelling landing page copy that converts visitors.

**Goal:** Create persuasive messaging that clearly communicates your value proposition.

**When to Use:** When preparing marketing materials for your product launch.

**Prompt Text:**

```markdown
Help me craft compelling copy for the landing page of [product name]. I need persuasive messaging that clearly communicates our value proposition and converts visitors into users.

First, ask me about:
- My product and its core value proposition
- My target audience and their pain points
- Key benefits and features of my product
- Competitive advantages and differentiators
- Brand voice and tone preferences
- Call-to-action goals and conversion objectives
- Any existing messaging or brand guidelines

Then, help me create copy for these essential landing page sections:

1. Headline and Subheadline
   - Attention-grabbing headline that communicates core value
   - Supporting subheadline that elaborates on the main benefit
   - Multiple options with different approaches (benefit-focused, problem-focused, etc.)

2. Hero Section
   - Opening paragraph that hooks the reader
   - Clear articulation of the problem we solve
   - Concise explanation of how we solve it
   - Primary call-to-action text and placement

3. Features and Benefits
   - 3-5 key features presented as benefits
   - Compelling headers for each feature/benefit
   - Concise descriptions that focus on value, not just functionality
   - Supporting social proof or metrics for each benefit

4. Social Proof Elements
   - Customer testimonial templates
   - Case study summary formats
   - Statistical proof points and how to present them
   - Trust indicators and credibility builders

5. Objection Handling
   - Addressing common concerns or objections
   - FAQ section content
   - Risk reversal statements (guarantees, free trials, etc.)

6. Call-to-Action Sections
   - Primary and secondary CTA button text
   - Supporting copy around CTAs
   - Urgency or scarcity elements (if appropriate)
   - Next steps explanation

For each section, provide multiple options with different approaches, and explain the psychology behind effective copy choices. Focus on clarity, specificity, and customer-centric language rather than jargon or marketing speak.
```

---


### Pricing Page Optimiser

**Purpose:** Helps you design an effective pricing strategy and page layout.

**Goal:** Create a pricing structure and presentation that maximizes conversions and revenue.

**When to Use:** When finalizing your monetization strategy before launch.

**Prompt Text:**

```markdown
Help me design an effective pricing strategy and page layout for [product name]. I need to create a pricing structure and presentation that maximizes conversions while communicating our value.

First, ask me about:
- My product and its core value proposition
- My target customer segments and their willingness to pay
- My cost structure and margin requirements
- Competitive pricing in the market
- My business model (subscription, one-time, etc.)
- Value metrics that could drive pricing
- Any existing pricing research or testing

Then, guide me through creating:

1. Pricing Strategy
   - Recommended pricing models (tiered, usage-based, hybrid, etc.)
   - Price points for different tiers or packages
   - Feature differentiation between tiers
   - Psychological pricing tactics (anchoring, decoy pricing, etc.)
   - Potential for add-ons or expansion revenue
   - Annual vs. monthly pricing options

2. Pricing Page Structure
   - Overall layout and flow
   - Tier names and positioning
   - Feature comparison presentation
   - Highlighting the recommended or most popular plan
   - Visual hierarchy and attention flow
   - Mobile vs. desktop considerations

3. Value Communication
   - How to articulate value rather than just features
   - ROI or value-based messaging
   - Addressing price sensitivity and objections
   - Social proof and trust elements specific to pricing
   - Risk-reduction elements (guarantees, free trials, etc.)

4. Call-to-Action Optimization
   - CTA button text and design
   - Friction reduction in the purchase process
   - Upsell and cross-sell opportunities
   - Trial-to-paid conversion strategy

5. Testing Strategy
   - Key elements to test
   - Metrics to track
   - A/B testing approach for pricing page elements
   - How to gather customer feedback on pricing

For each section, provide specific recommendations tailored to my product and market context, with examples and rationale. Help me balance maximizing revenue with customer acquisition and satisfaction.
```

---


### Objection-Handling FAQ Builder

**Purpose:** Helps you create a comprehensive FAQ that addresses common objections and questions.

**Goal:** Anticipate and address customer concerns to improve conversion rates.

**When to Use:** When preparing customer-facing documentation before launch.

**Prompt Text:**

```markdown
Help me create a comprehensive FAQ section that addresses common objections and questions about [product name]. I need to anticipate customer concerns and provide reassuring answers that improve conversion rates.

First, ask me about:
- My product and its core functionality
- My target audience and their typical concerns
- Common objections or hesitations in the sales process
- Competitive alternatives and how we compare
- Pricing model and potential price sensitivity
- Technical requirements or limitations
- Support and service level expectations

Then, help me create:

1. Objection-Handling Questions
   - Questions that address common sales objections
   - Concerns about value, price, or ROI
   - Comparisons with alternatives or competitors
   - Risk-related concerns (data security, reliability, etc.)
   - Implementation or onboarding concerns
   - Questions about long-term support and updates

2. Product Clarification Questions
   - Questions about core features and capabilities
   - Technical requirements and compatibility
   - Integration with other tools or systems
   - Customization and flexibility options
   - Performance and scalability questions

3. Practical Questions
   - Onboarding and implementation process
   - Training and support availability
   - Account management and billing
   - Cancellation and refund policies
   - Data ownership and privacy

4. Strategic Organization
   - Logical grouping of questions by theme
   - Prioritization of most important questions
   - Progressive disclosure approach (basic to advanced)
   - Search and navigation recommendations

5. Answer Crafting
   - Clear, concise answers that directly address concerns
   - Positive framing that reinforces value
   - Specific examples or social proof where relevant
   - Appropriate tone and voice for my brand
   - Call-to-action suggestions where appropriate

For each question, provide a well-crafted answer that not only addresses the specific concern but also reinforces our value proposition and encourages the next step in the customer journey.
```

---


### Launch Checklist & Roll-back Plan

**Purpose:** Helps you create a comprehensive launch plan with contingency measures.

**Goal:** Ensure a smooth product launch with risk mitigation strategies in place.

**When to Use:** When preparing for product launch or major feature release.

**Prompt Text:**

```markdown
Help me create a comprehensive launch checklist and roll-back plan for [product/feature name]. I need to ensure a smooth launch while being prepared for potential issues.

First, ask me about:
- The product or feature being launched
- Launch scope and target audience
- Technical architecture and dependencies
- Current testing status and known issues
- Team structure and responsibilities
- Timeline and launch window constraints
- Critical business requirements for the launch

Then, help me create:

1. Pre-Launch Checklist
   - Technical readiness verification
   - Performance testing and benchmarks
   - Security and compliance checks
   - Content and copy review
   - Analytics and monitoring setup
   - User documentation and support materials
   - Team training and readiness
   - Stakeholder sign-offs and approvals

2. Launch Day Plan
   - Detailed launch sequence and timing
   - Team roles and responsibilities during launch
   - Communication channels and protocols
   - Monitoring strategy and key metrics to watch
   - Initial user feedback collection
   - Support team preparation and escalation paths
   - Go/No-Go decision criteria

3. Post-Launch Monitoring
   - Critical metrics and KPIs to track
   - Warning signs or thresholds that indicate problems
   - User feedback collection and analysis
   - Performance monitoring approach
   - Error tracking and bug triage process
   - Regular check-in schedule and reporting

4. Roll-Back Plan
   - Specific scenarios that would trigger a rollback
   - Detailed rollback procedures for each scenario
   - Data integrity and consistency considerations
   - Communication templates for rollback scenarios
   - Team responsibilities during rollback
   - Testing the rollback process pre-launch

5. Phased Rollout Strategy (if applicable)
   - User segment definitions for phased release
   - Criteria for expanding to additional segments
   - Monitoring between phases
   - Timeline and triggers for full release

6. Launch Communication Plan
   - Internal stakeholder communications
   - Customer/user communications
   - Support team briefing and documentation
   - Public relations and marketing coordination

For each section, provide specific, actionable items tailored to my product context, with clear ownership assignments and verification methods.
```

---


## Grow Prompts

### Growth Experiment Generator

**Purpose:** Helps you design data-driven growth experiments to improve key metrics.

**Goal:** Create structured experiments to test growth hypotheses and improve conversion.

**When to Use:** When looking to optimize acquisition, activation, retention, or revenue.

**Prompt Text:**

```markdown
Help me design data-driven growth experiments for [product name] to improve our [specific metric or goal]. I need structured experiments to test growth hypotheses and improve our key performance indicators.

First, ask me about:
- The specific metric or goal we're trying to improve
- Current performance baseline and targets
- Our product's user journey and conversion funnel
- Available user data and analytics capabilities
- Resources available for running experiments
- Previous experiments we've run and their results
- Timeline and constraints for implementation

Then, help me create:

1. Experiment Ideation
   - 5-10 potential experiment ideas targeting our goal
   - Categorized by funnel stage (acquisition, activation, retention, revenue)
   - Mix of small, medium, and large effort experiments
   - Both optimization and innovation experiments
   - Inspiration from relevant case studies or industry examples

2. Experiment Prioritization
   - Framework for evaluating experiment potential (ICE, PIE, etc.)
   - Assessment of each idea based on impact, confidence, and effort
   - Recommended sequence of experiments
   - Quick wins vs. strategic long-term tests

3. For each prioritized experiment:
   - Clear hypothesis statement (We believe that [change] will result in [outcome])
   - Success metrics and expected impact
   - Detailed implementation plan
   - Required resources and timeline
   - Potential risks and mitigations
   - Minimum viable test definition

4. Experiment Tracking Template
   - Key information to document before, during, and after the test
   - Statistical significance considerations
   - Qualitative data collection approach
   - Learning documentation format

5. Testing Process
   - How to set up proper control groups
   - A/B testing methodology recommendations
   - Sample size and duration calculations
   - How to analyze results and make decisions
   - Framework for scaling successful experiments

Please be specific and practical in your recommendations, focusing on experiments that are feasible given my context and have a clear connection to the metric we're trying to improve.
```

---


### Retrospective Facilitator

**Purpose:** Helps you conduct effective retrospectives to improve team processes.

**Goal:** Identify actionable insights and improvements from past work.

**When to Use:** After completing a sprint, milestone, or project phase.

**Prompt Text:**

```markdown
Help me plan and facilitate an effective retrospective for my team following our recent [sprint/milestone/project phase]. I need to identify actionable insights and improvements from our work.

First, ask me about:
- The scope and timeframe we're reflecting on
- Team size and composition
- Current team dynamics and communication patterns
- Any significant challenges or successes during this period
- Previous retrospective formats we've used
- Specific areas we might want to focus on
- How we typically track and implement retrospective actions

Then, help me create:

1. Retrospective Structure
   - Recommended format and timeboxing
   - Warm-up activities to set the right tone
   - Core retrospective exercises tailored to our context
   - Closing activities and next steps
   - Remote vs. in-person considerations

2. Facilitation Guide
   - Opening script and ground rules
   - Key questions to prompt meaningful discussion
   - Techniques for ensuring balanced participation
   - How to handle difficult conversations constructively
   - Methods for prioritizing insights and actions
   - Time management tips

3. For each recommended exercise:
   - Clear instructions and purpose
   - Materials or tools needed
   - Timeboxing recommendations
   - Expected outcomes
   - Variations or alternatives

4. Action Planning Framework
   - How to transform insights into specific actions
   - Criteria for good action items (specific, measurable, assigned, etc.)
   - Prioritization method for identified improvements
   - Accountability and follow-up mechanisms
   - Integration with existing workflows

5. Continuous Improvement Approach
   - How to track retrospective actions between meetings
   - Methods for measuring the impact of implemented changes
   - Evolving retrospective formats to prevent staleness
   - Building a culture of continuous improvement

Please provide specific, practical guidance tailored to my team's context, avoiding generic advice. Include templates, scripts, and examples I can use directly in our retrospective.
```

---


### KPI Dashboard Prompt

**Purpose:** Helps you design an effective KPI dashboard to track product performance.

**Goal:** Create a focused dashboard that provides actionable insights on key metrics.

**When to Use:** When setting up analytics or refining your measurement approach.

**Prompt Text:**

```markdown
Help me design an effective KPI dashboard for [product name] that will provide actionable insights on our performance. I need to track the right metrics in a way that drives decisions and improvements.

First, ask me about:
- The type of product and business model
- Our key business objectives and success criteria
- Current user lifecycle and conversion funnel
- Available data sources and analytics tools
- Primary stakeholders and their information needs
- Current reporting processes and pain points
- Decision-making processes that the dashboard should support

Then, guide me through creating:

1. KPI Framework
   - Core KPIs aligned with business objectives
   - Leading vs. lagging indicators
   - North Star metric identification
   - Supporting metrics hierarchy
   - Balanced scorecard approach (user, business, product health)

2. Dashboard Structure
   - Logical organization and layout
   - Recommended visualization types for different metrics
   - Information hierarchy and visual emphasis
   - Drill-down capabilities and detail levels
   - Time period comparisons and trend visibility

3. For each key dashboard section:
   - Specific metrics to include
   - Visualization recommendations
   - Contextual information needed
   - Benchmarks and targets
   - Alert thresholds and indicators

4. Implementation Recommendations
   - Data collection requirements
   - Dashboard tool suggestions
   - Refresh frequency and data latency
   - Access and sharing approach
   - Mobile vs. desktop considerations

5. Dashboard Usage Framework
   - Regular review cadence and process
   - Guided analysis questions for users
   - Action-triggering thresholds
   - Connection to decision-making processes
   - Continuous improvement of the dashboard itself

Please be specific and practical in your recommendations, focusing on metrics that truly matter rather than vanity metrics. Provide mockup suggestions and examples tailored to my product context.
```

---


