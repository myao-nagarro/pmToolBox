"use strict";
/* ---------- Project management practices of leading organizations ----------
   Focus: how each organization manages projects and which PM frameworks it adopts.
   Paraphrased from public sources, listed on each page. Where an organization does not publish
   how it uses a framework, the page says so instead of guessing.
   bp.fw rates each framework: 2 = documented as used; 1 = supported, optional, tailored or only partly documented. */
const BP_FW = ["Scrum / Agile","SAFe / scaling","Kanban / flow","Stage-gate / predictive","Hybrid","OKRs","DevOps / SRE"];
Object.assign(TOPICS, {

"bp-microsoft":{group:"bestpractices",title:"Microsoft",tagline:"Scrum in 3-week sprints, a layered planning cadence and DevOps for services.",
bp:{hue:"#0B6BCB",mark:"Ms",headline:"Scrum for teams, DevOps for the service",fw:{"Scrum / Agile":2,"Kanban / flow":1,"DevOps / SRE":2}},
sections:[
{t:"p",x:"Microsoft’s Developer Division has described its own journey in detail. It adopted Scrum at team level with 3-week sprints and self-managed teams, then extended into DevOps when its products moved to a cloud service. Azure DevOps and Visual Studio teams have been described as sharing the same sprint cadence."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Microsoft uses it","Evidence"],rows:[
["Scrum / Agile","Team-level Scrum with 3-week sprints and self-managed teams.","Described in Microsoft’s own account of the Developer Division"],
["Layered planning","Sprints roll up into plans of about three sprints, six-month seasons and a 12-month strategy.","Conference talk summarizing the Developer Division"],
["DevOps","Extended from agile when the product became a hosted cloud service, with continuous delivery and live-site learning.","Microsoft e-book and Azure blog"],
["Kanban","Supported as a board view in Azure DevOps Boards for flow-based teams.","Product capability, not an internal mandate"]]},
{t:"list",h:"Project management practices",i:[
["Fixed cadence","All teams share the same sprint length, which makes cross-team planning and release simpler."],
["Self-managed teams","Teams own their backlog and commit to what they can finish; managers set direction, not tasks."],
["Plan at several horizons","Sprint, quarter, season and year plans stay linked so teams can see how the sprint serves the strategy."],
["Feature teams","Small cross-functional teams take features from idea to production."],
["Learn from live service","Telemetry and incidents feed straight back into the backlog."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Fix one sprint length","Align teams on the same cadence before trying to scale."],
["Add horizon plans","Keep a short quarterly plan above the sprint backlog."],
["Make teams self-managing","Hold them to outcomes, not task lists."],
["Close the loop","Review production data every sprint and add findings to the backlog."]]},
{t:"note",h:"Check the date",x:"The best-documented accounts are from 2015 to 2018, so the current cadence may differ. Use them as a pattern, not a current description."},
{t:"links",h:"Sources",i:[
["From Agile to DevOps at Microsoft Developer Division","Microsoft e-book on the journey.","https://download.microsoft.com/download/8/d/c/8dce111b-aa51-49d8-b8dd-ffcbc346f6ab/from_agile_to_devops_at_microsoft_developer_division.pdf"],
["How Microsoft plans with DevOps","Microsoft Learn description of planning.","https://learn.microsoft.com/devops/plan/how-microsoft-plans-devops"],
["Sharing the DevOps journey at Microsoft","Azure blog.","https://azure.microsoft.com/blog/sharing-the-devops-journey-at-microsoft/"]]}
],related:["scrum","kanban","pmo-governance"]},

"bp-google":{group:"bestpractices",title:"Google",tagline:"OKRs for goals and SRE for reliability; teams pick their own delivery method.",
bp:{hue:"#1A8F5B",mark:"G",headline:"Goals by OKR, reliability by SRE",fw:{"OKRs":2,"DevOps / SRE":2}},
sections:[
{t:"p",x:"Google is best known for OKRs, which it uses to set and align goals across teams, and for Site Reliability Engineering, which manages the balance between delivery speed and reliability. We found no authoritative source saying Google mandates Scrum or another delivery framework; commentary describes a lightweight mix that teams adapt themselves, but that is secondary."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Google uses it","Evidence"],rows:[
["OKRs","Objectives with measurable key results, set openly at company, team and individual level and reviewed regularly.","Google’s re:Work guide and OKR playbook"],
["SRE practices","Error budgets balance release speed against reliability; blameless postmortems follow incidents; launch work is coordinated with checklists.","Google’s SRE book"],
["DORA metrics","Lead time, deployment frequency, change failure rate and time to restore measure delivery health.","Google’s DORA research programme"],
["Scrum / Agile","No documented company-wide mandate; teams choose how they work.","Secondary commentary only"]]},
{t:"list",h:"Project management practices",i:[
["Ambitious, open goals","OKRs are visible to everyone and scored, which aligns teams without detailed task control."],
["Error budget as a rule","When the budget is spent, feature releases slow until reliability recovers. The rule removes argument."],
["Blameless postmortems","Written after incidents with actions, owners and dates."],
["Design docs","A short proposal reviewed before significant work starts."],
["Measure delivery","Track the four DORA measures and discuss trends, not targets."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Write 3 to 5 OKRs","Keep them ambitious and measurable, and review monthly."],
["Agree a quality budget","Define how much failure is acceptable and what happens when it’s used."],
["Run a postmortem","After the next incident, capture the timeline, causes and owned actions."],
["Track the four measures","Use them to spot flow problems."]]},
{t:"note",h:"Caution",x:"OKRs lose value when tied to pay or performance ratings. Keep them for focus and learning."},
{t:"links",h:"Sources",i:[
["re:Work – Set goals with OKRs","Google’s own guide.","https://rework.withgoogle.com/en/guides/set-goals-with-okrs"],
["Google’s OKR playbook","Copy of the internal guide.","https://www.whatmatters.com/resources/google-okr-playbook"],
["Site Reliability Engineering book","Error budgets, postmortems and launches.","https://sre.google/sre-book/table-of-contents/"],
["DORA","Research behind the delivery metrics.","https://dora.dev/"]]}
],related:["okr","kpi","risk","kanban"]},

"bp-amazon":{group:"bestpractices",title:"Amazon",tagline:"Its own mechanisms rather than a named framework: small owning teams and working backwards.",
bp:{hue:"#C26A00",mark:"A",headline:"Small owners, written plans, run what you build",fw:{"Scrum / Agile":1,"DevOps / SRE":2}},
sections:[
{t:"p",x:"Amazon’s public material describes its own mechanisms rather than adopting a named framework. Work is organized into small two-pizza teams, often led by a single-threaded owner, and new ideas start by working backwards from the customer. AWS presents this as an agile, DevOps-style model. We found no source on Amazon using PMBOK, PRINCE2 or a formal Scrum standard."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Amazon works","Evidence"],rows:[
["Agile principles","Small autonomous teams own one service end to end and can ship independently.","AWS executive insights on two-pizza teams"],
["DevOps","Teams run what they build, which AWS describes in its DevOps guidance.","AWS whitepaper"],
["Own mechanisms","Working backwards (a press release and FAQ before building), written narratives and single-threaded leaders.","Amazon and AWS publications; secondary summaries"],
["Scrum, PMBOK, PRINCE2","No public evidence of a company-wide adoption.","Not documented"]]},
{t:"list",h:"Project management practices",i:[
["Two-pizza teams","Teams small enough to be fed by two pizzas, around five to ten people, each focused on one service."],
["Single-threaded owner","One leader responsible for the team’s goal, protected from distractions."],
["Working backwards","Write the customer-facing announcement first. If it doesn’t read well, the idea isn’t ready."],
["Written narratives","Read in silence at the start of key meetings instead of slides."],
["Reversible and irreversible decisions","Decide fast on reversible choices, slowly on irreversible ones."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Name a single owner","For each initiative, one person whose main job is its success."],
["Write the announcement first","One page: who the customer is and what changes for them."],
["Right-size the team","Aim for a team that can be fed by two pizzas."],
["Label decisions","Mark each as reversible or not, and set review depth accordingly."]]},
{t:"note",h:"Caution",x:"AWS itself says the two-pizza model may not suit every organization or business unit."},
{t:"links",h:"Sources",i:[
["Amazon’s two-pizza team (AWS)","AWS executive insights.","https://aws.amazon.com/executive-insights/content/amazon-two-pizza-team/"],
["Two-pizza teams (AWS DevOps whitepaper)","How the model supports DevOps.","https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/two-pizza-teams.html"],
["Inside Day 1 (SHRM People Strategy Journal)","How Amazon uses agile team structures.","https://www.shrm.org/executive-network/insights/people-strategy/inside-day-1-how-amazon-uses-agile-team-structures-adaptive-practices-to-innovate-behalf-customers"]]}
],related:["rapid","scrum","business-justification"]},

"bp-deloitte":{group:"bestpractices",title:"Deloitte",tagline:"Pick agile, traditional or hybrid by outcome, then assure and report on delivery.",
bp:{hue:"#5B8C00",mark:"D",headline:"Match the method to the outcome",fw:{"Scrum / Agile":1,"SAFe / scaling":1,"Stage-gate / predictive":1,"Hybrid":2}},
sections:[
{t:"p",x:"Deloitte’s public guidance does not promote a single method. It supports agile, traditional and hybrid programmes and says the approach should be chosen from the outcomes and benefits sought. Its material covers programme management, a PMO approach, assurance of agile programmes, and agile transformation at scale."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Deloitte describes it","Evidence"],rows:[
["Hybrid","Choose agile, waterfall or a mix based on desired outcomes and benefits.","Deloitte UK guidance on assuring agile programmes"],
["Traditional / predictive","Status reporting such as red-amber-green is the main way to show control.","Deloitte US paper on agile and portfolio management"],
["Agile","Results management still checks intended outcomes; assurance is adapted to agile cadences.","Deloitte US and UK papers"],
["Scaled agile","Agile and DevOps transformation services, including large and complex change.","Deloitte service pages"],
["PMO","Programme managers and a PMO approach support whichever method is chosen.","Deloitte Netherlands programme delivery page"]]},
{t:"list",h:"Project management practices",i:[
["Outcome-led method choice","State the benefits first, then choose how to deliver."],
["Results management","Check benefits and outcomes regularly, whatever the method."],
["Independent assurance","Review business case, plans, risks and readiness, adapted for agile work."],
["PMO as support","Provide planning discipline and reporting without needless paperwork."],
["Simple status","Use plain signals backed by evidence."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Write the benefits","Name the outcomes and how they will be measured."],
["Assess uncertainty","Stable scope favours predictive; changing scope favours agile."],
["Combine as needed","Use different methods for different parts of the work."],
["Plan assurance","Schedule checks on delivery and benefits at intervals."]]},
{t:"note",h:"How this was built",x:"We found no single named Deloitte method, so this page summarizes themes from several public papers and service pages. It is not a framework to certify against."},
{t:"links",h:"Sources",i:[
["Assuring agile programmes and projects (UK)","Guidance on assurance when using agile.","https://www2.deloitte.com/content/dam/Deloitte/cz/Documents/risk/deloitte-uk-assuring-agile-programmes-and-projects.pdf"],
["Agile and project portfolio management (US)","Reporting and results management.","https://www.deloitte.com/content/dam/Deloitte/us/Documents/technology/us-cons-agile-and-project-portfolio-management.pdf"],
["Programme delivery (Netherlands)","Agile, traditional and hybrid programmes.","https://www2.deloitte.com/nl/nl/pages/human-capital/solutions/program-delivery.html"]]}
],related:["pmbok","prince2","pmo-governance","business-justification"]},

"bp-adobe":{group:"bestpractices",title:"Adobe",tagline:"Presents Scrum, SAFe and Kanban as options, supported by its Workfront tool.",
bp:{hue:"#C4262E",mark:"Ad",headline:"Frameworks as options, one system of work",fw:{"Scrum / Agile":1,"SAFe / scaling":1,"Kanban / flow":1,"Hybrid":1}},
sections:[
{t:"p",x:"Adobe’s verified public material is about how organizations can run projects, mainly through its Workfront work-management product. It presents Scrum, Kanban, hybrid methods and scaling frameworks such as SAFe, LeSS and Scrum at Scale as options. We found no authoritative first-party account of how Adobe itself runs its internal projects; one third-party blog says it adopted Scrum and customized SAFe and Nexus, but it gives no citations."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","What Adobe’s material says","Evidence"],rows:[
["Scrum and Kanban","Workfront supports both, plus hybrid approaches, in one system.","Adobe product pages (vendor)"],
["SAFe, LeSS, Scrum at Scale","Larger organizations tend to benefit from SAFe-style structure; smaller ones may prefer approaches that build on Scrum.","Adobe business blog"],
["Hybrid","Configurable work management for teams that mix methods.","Adobe product pages (vendor)"],
["Internal adoption","Reported to be Scrum with customized scaling, but not confirmed.","Unverified third-party blog"]]},
{t:"list",h:"Project management practices",i:[
["One system of work","Intake, resourcing, tracking and reporting live in one place across teams."],
["Method per team","Let each team use Scrum, Kanban or another method, with common reporting on top."],
["Scale by need","Add program and portfolio layers only when many teams depend on each other."],
["Visible workload","Show demand and capacity so overload is spotted early."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Separate method from reporting","Allow different team methods but agree one set of status measures."],
["Add scaling late","Introduce SAFe-style layers only when coordination becomes the bottleneck."],
["Capture all work","Put requests, projects and routine work in one intake."]]},
{t:"note",h:"Source quality",x:"Most sources are vendor marketing. Customer figures quoted there are unverified."},
{t:"links",h:"Sources",i:[
["Scaled agile frameworks (Adobe business blog)","Adobe’s comparison of scaling frameworks.","https://business.adobe.com/blog/basics/scaled-agile-frameworks"],
["Agile work management (Adobe Workfront)","Product page on agile support.","https://business.adobe.com/products/workfront/agile-work-management"]]}
],related:["scrum","safe","kanban"]},

"bp-accenture":{group:"bestpractices",title:"Accenture",tagline:"SAFe-based Agile and DevOps across its global delivery network, with automation.",
bp:{hue:"#7B3FD0",mark:"Ac",headline:"One scaling framework, many locations",fw:{"Scrum / Agile":2,"SAFe / scaling":2,"DevOps / SRE":2}},
sections:[
{t:"p",x:"Accenture has described adopting Agile and DevOps at scale across its Global Delivery Network using SAFe, with a common toolchain. Its myWizard platform is presented as automation that supports distributed agile teams across the software lifecycle."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Accenture uses it","Evidence"],rows:[
["SAFe","Used to scale Agile and DevOps across its global delivery network.","Scaled Agile case study"],
["Agile","Distributed agile teams across locations and time zones.","Accenture newsroom"],
["DevOps","Automation of builds, tests and deployments through myWizard.","Accenture newsroom and press coverage"]]},
{t:"list",h:"Project management practices",i:[
["Common framework","One scaling approach so teams in many places share terms and cadences."],
["Distributed agile","Clear working agreements and cross-site ceremonies."],
["Automation first","Automate the pipeline to shorten feedback loops."],
["Shared tooling","Common tools and dashboards for visibility."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Pick one scaling framework","Train every team on it together."],
["Build the pipeline first","Automate before adding teams."],
["Synchronize planning","Plan across sites on a shared cadence."]]},
{t:"note",h:"Source quality",x:"Sources are a vendor case study and press material, useful for ideas but not independent evaluation, and dated 2016–2021."},
{t:"links",h:"Sources",i:[
["Accenture case study (Scaled Agile)","Agile and DevOps at scale with SAFe.","https://v5.scaledagileframework.com/?p=23774"],
["myWizard announcement (2020)","Platform and distributed agile.","https://newsroom.accenture.com/news/2020/accenture-introduces-powerful-new-version-of-mywizard-intelligent-automation-platform"]]}
],related:["safe","scrum"]},

"bp-ibm":{group:"bestpractices",title:"IBM",tagline:"The Garage Method blends design thinking, agile and DevOps; SAFe supported in its tools.",
bp:{hue:"#0F62FE",mark:"IBM",headline:"Design thinking plus agile plus DevOps",fw:{"Scrum / Agile":2,"SAFe / scaling":1,"DevOps / SRE":2}},
sections:[
{t:"p",x:"IBM publishes the IBM Garage Method, which combines design thinking, agile and DevOps, and Enterprise Design Thinking with Hills, Playbacks and Sponsor Users. Its engineering tools (Engineering Lifecycle Management and Targetprocess) include support for planning with SAFe. We found nothing on how IBM’s own internal project office relates to PMI standards."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How IBM uses it","Evidence"],rows:[
["Agile","Iterative delivery with working software shown in Playbacks.","IBM Garage Method and Design Thinking pages"],
["DevOps","Garage Method covers building, delivering and running a solution.","IBM Garage Method"],
["SAFe","Templates and planning tools in IBM products for SAFe at scale.","IBM product pages (vendor)"],
["Design thinking","Hills state the user outcome; Sponsor Users work with teams throughout.","IBM Design Thinking"]]},
{t:"list",h:"Project management practices",i:[
["Hills","Short statements of the user outcome: who, what and why it matters."],
["Playbacks","Regular demos to stakeholders to get early feedback."],
["Sponsor users","Real users who work with the team all along."],
["Minimum viable product","Release the smallest useful version and learn."],
["Plan at scale with tools","Use SAFe-style planning where many teams depend on each other."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Write a Hill","Name the user and the outcome before planning work."],
["Schedule playbacks","Demonstrate real use every iteration."],
["Recruit a sponsor user","Give them a standing voice in the backlog."]]},
{t:"note",h:"Fit with other methods",x:"A Hill works like a product goal and a playback like a sprint review with a stronger user focus."},
{t:"links",h:"Sources",i:[
["IBM Garage Method","Method description.","https://www.ibm.com/garage/method"],
["Enterprise Design Thinking","Hills, Playbacks and Sponsor Users.","https://www.ibm.com/design/thinking/"],
["Scaled Agile Framework (IBM)","IBM’s overview of SAFe.","https://ibm.com/think/topics/scaled-agile-framework"]]}
],related:["scrum","safe","okr"]},

"bp-nasa":{group:"bestpractices",title:"NASA",tagline:"A gated life cycle with formal reviews, tailored per project; agile allowed within it.",
bp:{hue:"#1F3A93",mark:"NASA",headline:"Gates and tailoring, with agile inside",fw:{"Stage-gate / predictive":2,"Scrum / Agile":1,"Hybrid":1}},
sections:[
{t:"p",x:"NASA’s space flight programs and projects follow NPR 7120.5, a life cycle with phases, Key Decision Points and formal reviews. The requirements can be tailored with approval, and NASA material describes agile software work running inside this gated life cycle, with software governed by NPR 7150.2. We found no source mapping NASA’s approach to PMI’s PMBOK."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How NASA uses it","Evidence"],rows:[
["Stage-gate","Phases separated by Key Decision Points, each with a review and a decision authority.","NPR 7120.5"],
["Tailoring","Requirements may be tailored, customized or waived with approval; Centers hold delegated authority.","NPR 7120.5 and Center procedures"],
["Agile","A project may propose a tailored review plan that applies an agile approach, if the decision authority approves.","NASA review guidance"],
["Hybrid","Agile software teams working inside a waterfall-style life cycle, producing the outputs the requirements demand.","NASA presentation “Agile in a Waterfall World”"],
["Software engineering","NPR 7150.2 and a handbook set software requirements and tailoring.","NASA Software Engineering Handbook"]]},
{t:"list",h:"Project management practices",i:[
["Key Decision Points","A review board decides whether to proceed to the next phase."],
["Continuous risk management","Identify, analyze, plan, track and control risks throughout the project."],
["Joint cost and schedule confidence","State the probability of meeting both."],
["Systems engineering discipline","Requirements, interfaces, verification and validation are managed together."],
["Lessons learned","Captured in a public information system for reuse."]]},
{t:"table",h:"Compare with frameworks on this site",head:["NASA practice","Closest equivalent"],rows:[
["Key Decision Point","PRINCE2 stage boundary; stage gate in PMBOK"],
["Tailoring with approval","PRINCE2 tailoring; PMBOK tailoring"],
["Agile inside a gated life cycle","Hybrid approach"],
["Lessons learned system","Lessons log and retrospectives"]]},
{t:"note",h:"Check currency",x:"NPR 7120.5F and its interim directive carry expiration dates. Check the NASA directives library for the current revision before relying on them."},
{t:"links",h:"Sources",i:[
["NPR 7120.5F","Space flight program and project management requirements.","https://explorers.larc.nasa.gov/2023ESE/pdf_files/NASA01.%20NPR%207120.5F%20NASA%20Space%20Flight%20Program%20and%20Project%20Management%20Requirements.pdf"],
["Agile in a Waterfall World (NASA, 2024)","Agile software within the life cycle.","https://ntrs.nasa.gov/api/citations/20240002144/downloads/Agile_in_a_Waterfall_World_v005_2024_02_22.pdf"],
["NASA Project Management Handbook","Guidance on project management.","https://ntrs.nasa.gov/api/citations/20220009501/downloads/PM%20Handbook_June%202024.pdf"],
["Lessons Learned Information System","Public lessons database.","https://llis.nasa.gov/"]]}
],related:["prince2","pmbok","risk","pmo-governance"]},

"bp-capgemini":{group:"bestpractices",title:"Capgemini",tagline:"Align stakeholders in workshops, then deliver in agile product-aligned pods.",
bp:{hue:"#0A8FB5",mark:"Cg",headline:"Align first, then deliver in pods",fw:{"Scrum / Agile":2,"DevOps / SRE":2}},
sections:[
{t:"p",x:"Capgemini describes two complementary offerings. The Accelerated Solutions Environment (ASE) is a facilitation practice that aligns stakeholders through events such as the DesignShop. The Accelerated Delivery Center (ADC) is its agile delivery model, with cross-functional product-aligned teams (PODs) and CI/CD tooling. We found no source tying either to a named framework such as SAFe."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Capgemini uses it","Evidence"],rows:[
["Agile","Product-aligned cross-functional PODs deliver in the Accelerated Delivery Center.","Capgemini expert perspective"],
["DevOps","A shared team supplies project management and CI/CD platform support to the PODs.","Capgemini expert perspective"],
["Stakeholder alignment","DesignShops and Discovery Days align stakeholders before and during delivery.","Capgemini ASE pages"]]},
{t:"list",h:"Project management practices",i:[
["DesignShop","A multi-day facilitated event to align large groups on direction."],
["Discovery Day","A short session for a small decision-making group."],
["Product-aligned PODs","Teams organized around a product rather than a project."],
["Shared horizontal team","Project management and platform support shared across PODs."],
["Delivery measures","Case studies cite shorter time to market and fewer defects; these are self-reported."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Align before building","Hold a workshop with deciders and affected people."],
["Form product teams","Group people by product, not by function."],
["Share the platform work","One small team handles tooling and coordination."]]},
{t:"note",h:"Caution",x:"Sources are Capgemini web pages and client case summaries, so figures are self-reported and unverified."},
{t:"links",h:"Sources",i:[
["Accelerated Solutions Environment","DesignShops and Discovery Days.","https://www.capgemini.com/in-en/solutions/accelerated-solution-environment/"],
["Increasing velocity with the Accelerated Delivery Center","Delivery model.","https://www.capgemini.com/ca-en/insights/expert-perspectives/increasing-velocity-with-the-accelerated-delivery-center/"]]}
],related:["scrum","safe","strategic-cascade"]},

"bp-pmalliance":{group:"bestpractices",title:"PMAlliance",tagline:"Placeholder: no authoritative public project management material found yet.",
bp:{hue:"#8A6200",mark:"PM",headline:"Needs your source",fw:{}},
sections:[
{t:"p",x:"We could not identify a published set of project management practices or framework adoption from an organization called PMAlliance. Rather than invent content, this page is a placeholder."},
{t:"note",h:"What we need",x:"Please share the organization’s website or documents, or confirm whether another name was meant, such as PMI. The page can then be completed with sourced practices."}
],related:["pmbok","risk","raci"]}
});

/* ---------- Added organizations ---------- */
Object.assign(TOPICS, {

"bp-toyota":{group:"bestpractices",title:"Toyota",tagline:"Lean from the Toyota Production System, adapted to product development and agile software.",
bp:{hue:"#B8431B",mark:"T",headline:"Lean first, then agile where it fits",fw:{"Scrum / Agile":2,"Kanban / flow":2,"Stage-gate / predictive":1}},
sections:[
{t:"p",x:"Toyota is the origin of the lean and kanban ideas that many project frameworks borrow. The Toyota Production System uses just-in-time flow, with kanban as the tool that lets each process take what it needs from the one before. Its product development system adds a chief engineer with end-to-end responsibility and set-based concurrent engineering. Toyota Connected, its software arm, combines Scrum with lean thinking, which it calls “Scrum The Toyota Way”."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework","How Toyota uses it","Evidence"],rows:[
["Lean / Kanban","Just-in-time flow: later processes pull from earlier ones, with kanban as the signalling tool.","Toyota’s own history and production system pages"],
["Toyota Product Development System","A chief engineer holds ultimate responsibility for the product. Key integrating events have fixed dates; options are kept open and narrowed over time (set-based concurrent engineering).","MIT Sloan Management Review; Lean Enterprise Institute"],
["Scrum","Toyota Connected describes “Scrum The Toyota Way”, combining agile learning with lean thinking.","InfoQ reports on Toyota Connected"],
["Waterfall (earlier software)","A 2010 report says Toyota’s software group had used waterfall and was applying the Toyota Production System to software rather than adopting agile methods.","InfoQ, 2010 (dated)"]]},
{t:"list",h:"Project management practices",i:[
["Pull, don’t push","Start work when downstream capacity asks for it, which keeps work in progress low."],
["Chief engineer","One accountable leader integrates the whole product, rather than a committee."],
["Key integrating events","Fixed dates when parts must fit together; the content flexes, the date does not."],
["Set-based thinking","Explore several solutions in parallel and narrow down late instead of locking one early."],
["Continuous improvement","Teams keep improving how they work as part of the job."],
["Lean and agile together","Toyota Connected treats them as different but complementary."]]},
{t:"list",h:"Adoption strategy",i:[
["Start from principles, not tools","Build on lean thinking, then choose agile methods that serve it."],
["Fixed rhythm, flexible content","Anchor the plan on integration dates and adapt scope inside them."],
["Delay irreversible choices","Keep alternatives alive until evidence settles the decision."],
["Separate contexts","Use manufacturing-style flow where it fits and Scrum where product discovery needs short feedback loops."]]},
{t:"dd",h:"Dos and don’ts",dos:[
["Limit work in progress","Pull new work only when there is capacity, so flow stays smooth."],
["Give one person end-to-end accountability","A chief engineer prevents decisions from being diluted."],
["Fix integration dates","Flex the scope, not the date."],
["Keep options open","Narrow the choices as evidence arrives."],
["Combine lean and agile","Use each for what it does best."]],
donts:[
["Copy the tools without the thinking","The Lean Enterprise Institute warns that concurrent engineering is the most misinterpreted Toyota practice."],
["Treat lean and agile as the same thing","Toyota Connected’s agile lead stresses they are different."],
["Use the kanban metaphor loosely for development","The analogy helps, but it is not a full method."],
["Assume this is current Toyota-wide software policy","Sources are about specific units and some are dated."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Make work visible and limit it","Use a board with a limit on work in progress."],
["Name a single accountable lead","For each product or major deliverable."],
["Set integration dates","Agree when the parts must fit together, then protect them."],
["Review how you work","End each cycle by changing one thing about the process."]]},
{t:"note",h:"Source quality",x:"Most sources are secondary articles and conference material rather than Toyota publications. The Toyota Connected material reflects one business unit."},
{t:"links",h:"Sources",i:[
["Toyota Production System (Toyota Europe)","Toyota’s own overview.","https://www.toyota-europe.com/about-us/toyota-vision-and-philosophy/toyota-production-system"],
["Toyota’s principles of set-based concurrent engineering","MIT Sloan Management Review.","https://sloanreview.mit.edu/article/toyotas-principles-of-setbased-concurrent-engineering"],
["Lean development (Lean Enterprise Institute)","Toyota’s product development system.","https://www.lean.org/wp-content/uploads/2008/10/lean-development.pdf"],
["Agile at Toyota Connected (InfoQ)","Scrum The Toyota Way.","https://www.infoq.com/news/2019/01/agile-toyota-connected"],
["Scrum the Toyota Way (InfoQ)","Article on combining Scrum and lean.","https://www.infoq.com/articles/scrum-the-toyota-way"]]}
],related:["kanban","scrum","kpi"]},

"bp-atlassian":{group:"bestpractices",title:"Atlassian",tagline:"The Team Playbook: project posters, DACI decisions and health checks, with Scrum and Kanban supported in Jira.",
bp:{hue:"#0052CC",mark:"At",headline:"Plays that teams adapt, not one fixed method",fw:{"Scrum / Agile":1,"Kanban / flow":1,"SAFe / scaling":1}},
sections:[
{t:"p",x:"Atlassian publishes the Team Playbook, a free library of “plays” it uses with its own teams: a project poster, a kick-off, DACI decision roles, a team health monitor, and goals, signals and measures. Its products support Scrum, Kanban and scaling approaches such as SAFe for customers. Atlassian says it is scaling agile itself, but we found no detailed account of which scaling framework, if any, it follows internally."},
{t:"table",h:"Frameworks and how they are adopted",head:["Framework or play","How Atlassian uses it","Evidence"],rows:[
["Project poster and kick-off","A living one-page definition of the problem, goals and plan, completed before a kick-off so everyone has the same context.","Atlassian Team Playbook"],
["DACI","Roles for significant decisions: driver, approver, contributor, informed.","Atlassian Team Playbook"],
["Health monitor","A periodic team health check, recommended quarterly, with follow-up checkpoints.","Atlassian Team Playbook"],
["Goals, signals and measures","Agree goals and metrics before a project starts and put them on the poster.","Atlassian Team Playbook"],
["Scrum and Kanban","Supported in Jira and described in Atlassian’s agile guidance.","Atlassian product and guidance pages (vendor)"],
["SAFe and other scaling","Atlassian says there is no one right way to scale agile; its SAFe whitepaper, written with cPrime, is customer-facing.","Atlassian guidance and whitepaper"]]},
{t:"list",h:"Project management practices",i:[
["Shared context first","Complete the project poster before kick-off so the meeting is spent deciding."],
["Clear decision roles","One driver and one approver per decision, which Atlassian teams found made a big difference."],
["Check team health regularly","Rate the team against a set of attributes, pick the top few, agree actions."],
["Measure from the start","Set goals and measures before the project begins."],
["One system of work","Business and technology teams share one platform for work and goals."]]},
{t:"list",h:"Adoption strategy",i:[
["Offer plays, not a mandate","Teams pick the plays that address the problem they have."],
["Keep the method light","Use the poster and DACI to create alignment, then let teams choose Scrum, Kanban or something else."],
["Scale by learning","Atlassian shares what is and isn’t working as it scales agile."],
["Follow up on every check","Health monitor results lead to short checkpoints, not a one-off survey."]]},
{t:"dd",h:"Dos and don’ts",dos:[
["Fill in the project poster before kick-off","Everyone arrives with the same context."],
["Name one driver and one approver","Make decision ownership explicit."],
["Run the health monitor regularly","Quarterly is the recommended rhythm."],
["Set goals and measures at the start","Put them where stakeholders can see them."],
["Treat the poster as living","Update it as you learn."]],
donts:[
["Treat plays as a fixed process","They are starting points to adapt to the team."],
["Run a health check without follow-up","Without actions, it erodes trust."],
["Choose a scaling framework by name alone","Atlassian says there’s no single right way to scale."],
["Leave decision roles vague","Unclear ownership is where decisions stall."],
["Take vendor claims as proof","Product pages are marketing."]]},
{t:"steps",h:"What a project manager can copy",i:[
["Draft the poster","Problem, goals, scope, risks and how success will be measured."],
["Assign DACI roles","Do it for the three biggest decisions."],
["Hold the kick-off","Spend the time on open questions and red or yellow items."],
["Schedule a health check","Add a quarterly slot and a checkpoint two weeks after."]]},
{t:"note",h:"Source quality",x:"The Team Playbook is first-party. Statements about Scrum, Kanban and SAFe come from product and marketing pages, and how Atlassian itself scales agile is not documented in detail."},
{t:"links",h:"Sources",i:[
["Atlassian Team Playbook","Why the playbook exists.","https://www.atlassian.com/team-playbook/why"],
["IT Project Poster","The one-page project definition.","https://www.atlassian.com/team-playbook/plays/it-project-poster"],
["IT Project Kick-off","Running the kick-off, including DACI.","https://www.atlassian.com/team-playbook/plays/it-project-kick-off"],
["Health Monitor","The team health check.","https://www.atlassian.com/team-playbook/health-monitor"],
["Goals, signals and measures","Setting measures up front.","https://www.atlassian.com/team-playbook/plays/goals-signals-measures"],
["Ways to scale agile","Atlassian’s overview of scaling approaches.","https://www.atlassian.com/agile/ways-to-scale-agile"]]}
],related:["scrum","kanban","raci","rapid"]}
});

/* ---------- Strategy, dos and don'ts for the original organizations ---------- */
const BP_EXTRA={
"bp-microsoft":{strat:[["Standardize the cadence first","Teams share a sprint length before the organization scales."],["Layer the plans","Sprint, plan, season and year plans stay connected."],["Extend agile into DevOps","When a product becomes a service, add live-site learning."],["Self-managed within a rhythm","Autonomy for teams, consistency in the calendar."]],
 dos:[["Align teams on one sprint length","Makes cross-team planning simpler."],["Plan at several horizons","Link the sprint to the strategy."],["Feed production data back","Add findings to the backlog."],["Let teams own their backlog","Managers set direction, not tasks."]],
 donts:[["Treat the 2015–2018 pattern as current","Check what has changed."],["Add process before aligning cadence","Scaling needs a common rhythm first."],["Stop at the sprint","Ship and learn from the live service."],["Micromanage tasks","It defeats self-management."]]},
"bp-google":{strat:[["Goals by OKR, method by team","The company sets goals; teams pick how to deliver."],["Settle speed versus reliability with a budget","An error budget replaces argument."],["Learn through blameless postmortems","Fix systems, not people."],["Measure delivery with DORA","Use four measures to see trends."]],
 dos:[["Keep OKRs few and ambitious","Three to five per team."],["Publish them openly","Visibility aligns teams."],["Agree error-budget rules in advance","So the response is automatic."],["Write blameless postmortems with owned actions","Include dates."]],
 donts:[["Tie OKRs to pay or ratings","It encourages safe goals."],["Assume a Scrum mandate","None is documented; teams choose."],["Turn DORA measures into individual targets","Our reading: use them as team signals."],["Assign blame in postmortems","It stops people reporting problems."]]},
"bp-amazon":{strat:[["Organize by ownership, not by project","Small teams own a service over time."],["Start from the customer announcement","Working backwards before building."],["Match decision depth to reversibility","Fast for reversible, careful for irreversible."],["Build it, run it","Teams operate what they launch."]],
 dos:[["Name a single owner","One leader whose focus is the goal."],["Write the narrative or announcement first","Test the idea on paper."],["Right-size the team","Small enough to stay close."],["Label decisions as reversible or not","Set review depth accordingly."]],
 donts:[["Copy the model wholesale","AWS says it may not suit every unit."],["Build before the announcement reads well","The idea may not be ready."],["Rush irreversible decisions","Slow down when you can’t undo."],["Assume Amazon uses PMBOK or Scrum","No public evidence either way."]]},
"bp-deloitte":{strat:[["Choose the method by outcome","Benefits first, method second."],["Assure, not only report","Independent checks on plans, risks and readiness."],["Let the PMO support","Planning discipline without paperwork."],["Mix methods where parts differ","Hybrid is a deliberate choice."]],
 dos:[["State the benefits first","Write how they will be measured."],["Adapt assurance for agile work","Check outcomes, not just documents."],["Check outcomes regularly","Whatever the method."],["Combine methods where work differs","Predictive for stable parts, agile for uncertain ones."]],
 donts:[["Pick agile or waterfall by preference","Let the outcome decide."],["Rely on status colours without evidence","Back them with data."],["Let the PMO become paperwork","It should support delivery."],["Treat this as a certifiable framework","It is a set of themes."]]},
"bp-adobe":{strat:[["Let teams choose the method","Standardize reporting, not practice."],["Scale only when needed","Add program layers late."],["One system of work","Capture intake, resourcing and tracking together."]],
 dos:[["Separate method from reporting","Common measures over diverse methods."],["Add scaling layers late","When coordination is the bottleneck."],["Capture all work in one intake","Avoid hidden demand."],["Show capacity next to demand","Spot overload early."]],
 donts:[["Adopt SAFe because it’s popular","Adobe says smaller teams may prefer lighter options."],["Force one method on every team","Teams differ."],["Trust vendor figures unchecked","They come from marketing."],["Assume Adobe’s internal practice from product pages","It isn’t documented."]]},
"bp-accenture":{strat:[["One scaling framework","SAFe gives shared language across sites."],["Automate the pipeline","Shorten feedback loops."],["Distributed agile with working agreements","Plan for time zones."]],
 dos:[["Train all teams together","Shared language from day one."],["Automate before adding teams","The pipeline is the foundation."],["Synchronize cadence across sites","Plan together."],["Share dashboards","Visibility without extra reports."]],
 donts:[["Add teams before the pipeline is automated","Manual steps multiply."],["Scale without a common language","Terms will drift."],["Treat vendor case studies as proof","They are not independent."],["Ignore time zones","Agree overlap hours."]]},
"bp-ibm":{strat:[["Start from the user outcome","A Hill names who benefits and how."],["Deliver in small playbacks","Show working software often."],["One team from idea to operation","The Garage Method covers the full life."],["Use SAFe tooling where scale demands","Planning at scale, not by default."]],
 dos:[["Write a Hill before planning","Anchor on the outcome."],["Schedule regular playbacks","Early feedback."],["Recruit sponsor users","Give them a standing voice."],["Release a minimum viable product","Learn and iterate."]],
 donts:[["Plan features without the user outcome","You risk building the wrong thing."],["Present slides instead of working software","Show real use."],["Assume IBM’s internal PMO practice","Not documented in our sources."],["Adopt SAFe tooling before the need","Keep it light."]]},
"bp-nasa":{strat:[["Gate the life cycle","Key Decision Points with decision authorities."],["Tailor with approval","Requirements flex formally, not informally."],["Allow agile inside the gates","Software teams still produce required outputs."],["Manage risk continuously","Not only at the start."]],
 dos:[["Define decision criteria in advance","Reviews then decide on evidence."],["Tailor formally and get approval","Document what changed."],["Produce required outputs even when using agile","Reviews depend on them."],["Capture lessons learned","Publish them for reuse."]],
 donts:[["Skip reviews without approval","Only the decision authority can approve it."],["Treat risk as a one-off exercise","It needs continuous attention."],["Assume a PMBOK mapping","No source confirms it."],["Rely on an expired directive","Check the current revision."]]},
"bp-capgemini":{strat:[["Align stakeholders first","DesignShops and Discovery Days."],["Product-aligned pods","Teams around a product, not a function."],["A shared platform team","Tooling and coordination shared across pods."]],
 dos:[["Invite the decision makers","Include those affected too."],["Group people by product","Cross-functional pods."],["Share tooling in a small team","Avoid duplication."],["Leave workshops with owners and dates","Turn alignment into action."]],
 donts:[["Treat workshop output as a plan without owners","Alignment isn’t delivery."],["Organize pods by function","It recreates handoffs."],["Quote self-reported metrics as proof","They are unverified."],["Confuse ASE with the delivery model","ASE aligns; ADC delivers."]]}
};
Object.entries(BP_EXTRA).forEach(([id,x])=>{
  const secs=TOPICS[id].sections;const at=secs.findIndex(s=>s.t==="steps");
  secs.splice(at,0,{t:"list",h:"Adoption strategy",i:x.strat},{t:"dd",h:"Dos and don’ts",dos:x.dos,donts:x.donts});
});
TOPICS["bp-pmalliance"].sections.splice(1,0,{t:"p",x:"Once a source is available this page will follow the same layout as the others: frameworks adopted, strategy, dos and don’ts, and sources."});

{const pm=TOPICS["bp-pmalliance"];delete TOPICS["bp-pmalliance"];TOPICS["bp-pmalliance"]=pm;}
