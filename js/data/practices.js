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
