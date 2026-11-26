"use strict";
/* ---------- Best practices from leading organizations ----------
   Paraphrased summaries of publicly described practices. Each page lists its sources;
   check them for the organization's own wording and for anything that has changed since. */
const BP_THEMES = ["Delivery","Culture and teams","Decisions","Risk and quality","Innovation","Governance"];
Object.assign(TOPICS, {

"bp-microsoft":{group:"bestpractices",title:"Microsoft",tagline:"Engineering fundamentals, shared playbooks and a growth mindset.",
bp:{themes:["Delivery","Culture and teams","Governance"],hue:"#0B6BCB",mark:"Ms",headline:"Make good habits the default"},
sections:[
{t:"p",x:"Microsoft publishes much of how its engineering and customer-facing teams work: an open Code-With Engineering Playbook and the Cloud Adoption Framework. The common thread is to write the good habits down, so every new project starts from a proven baseline instead of reinventing one."},
{t:"list",h:"Core practices",i:[
["Engineering fundamentals first","Agree on source control, code review, testing, continuous integration and observability before the first feature is built."],
["Working agreement","The team writes down how it works together: hours, how decisions are made, definition of done, how disagreement is handled."],
["Retrospectives with follow-through","Each retrospective produces a small number of actions with owners, reviewed at the next one."],
["Staged cloud adoption","The Cloud Adoption Framework moves from strategy and plan to ready, adopt, govern and manage, so technology change stays tied to business outcomes."],
["Growth mindset","Leaders ask what was learned, not who is to blame. Learning from failures is treated as part of the work."]]},
{t:"steps",h:"How a project manager can apply it",i:[
["Start from a checklist","Adopt a one-page engineering fundamentals checklist at kick-off and review it every few sprints."],
["Write the working agreement","Run a 60-minute session in week one. Keep the result visible in the team space."],
["Tie work to outcomes","For every epic, name the business outcome and how you will see it, before building."],
["Close the loop","Track retrospective actions on the board like any other work item."]]},
{t:"note",h:"What to take from it",x:"The practices are cheap to copy. The value comes from doing them consistently, and from a leader who treats a missed checklist item as a prompt to fix the process, not to blame a person."},
{t:"links",h:"Sources",i:[
["Code-With Engineering Playbook","Open playbook for engineering fundamentals, agile and team working.","https://microsoft.github.io/code-with-engineering-playbook/"],
["Cloud Adoption Framework","Microsoft’s guidance for planning and governing cloud adoption.","https://learn.microsoft.com/azure/cloud-adoption-framework/"]]}
],related:["scrum","pmo-governance","kpi"]},

"bp-google":{group:"bestpractices",title:"Google",tagline:"Psychological safety, measurable goals and blameless learning.",
bp:{themes:["Culture and teams","Risk and quality","Delivery"],hue:"#1A8F5B",mark:"G",headline:"Safe teams ship better work"},
sections:[
{t:"p",x:"Google’s public guidance focuses on how teams behave. Its Project Aristotle research found psychological safety was the strongest factor in effective teams. Site Reliability Engineering adds a disciplined way to balance speed against reliability, and OKRs connect daily work to ambitious goals."},
{t:"list",h:"Core practices",i:[
["Psychological safety","Team members feel able to take risks and admit mistakes. Managers model this by asking questions and sharing their own errors."],
["OKRs","A few ambitious objectives, each with measurable key results, reviewed and scored openly."],
["Blameless postmortems","After an incident, write up what happened, why, and what changes. The focus is on systems and process, not on individuals."],
["Error budgets","Agree an acceptable level of unreliability. While the budget lasts, ship fast; when it runs out, slow down and fix reliability."],
["Design docs","Propose significant changes in a short written document and gather comments before building."],
["DORA metrics","Track lead time, deployment frequency, change failure rate and time to restore as signals of delivery health."]]},
{t:"steps",h:"A blameless postmortem in four steps",i:[
["Build the timeline","Collect facts: what happened and when, without judging."],
["Find contributing factors","Ask “why” until you reach conditions that can be changed."],
["Agree actions","Few, specific, owned, with dates."],
["Share it","Publish the write-up so other teams learn too."]]},
{t:"note",h:"Watch out",x:"OKRs lose their value when they are tied to pay or used as a performance score. Keep them for focus and learning."},
{t:"links",h:"Sources",i:[
["re:Work – Guide: Understand team effectiveness","Google’s research on what makes teams effective, including psychological safety.","https://rework.withgoogle.com/"],
["Site Reliability Engineering book","Free online book covering error budgets and postmortem culture.","https://sre.google/sre-book/table-of-contents/"],
["DORA","The research programme behind the four delivery metrics.","https://dora.dev/"]]}
],related:["okr","kpi","risk","scrum"]},

"bp-amazon":{group:"bestpractices",title:"Amazon",tagline:"Working backwards, small owning teams and fast, reversible decisions.",
bp:{themes:["Decisions","Delivery","Innovation"],hue:"#C26A00",mark:"A",headline:"Start from the customer"},
sections:[
{t:"p",x:"Amazon describes its way of working through its Leadership Principles, annual shareholder letters and widely discussed mechanisms. Four stand out for project managers: working backwards from the customer, small teams with single owners, written narratives, and a clear way to size decisions."},
{t:"list",h:"Core practices",i:[
["Working backwards","Before building, write the press release and FAQ that would announce the finished product. If it doesn’t read well, the idea isn’t ready."],
["Two-pizza teams","Keep teams small enough to be fed by two pizzas, each with a clear mission and the ability to ship independently."],
["Single-threaded ownership","One leader whose main focus is one goal, so it is never a side job."],
["Written narratives","Replace slide decks in key meetings with a short written memo that everyone reads silently first."],
["One-way and two-way doors","Decide carefully on irreversible choices; decide quickly and learn from reversible ones."],
["Disagree and commit","Voice concerns, then fully back the decision once it is made."]]},
{t:"table",h:"Sizing a decision",head:["Type","What it means","Approach"],rows:[
["One-way door","Hard or costly to reverse","Slow down, involve senior reviewers, document the reasoning"],
["Two-way door","Can be reversed cheaply","Decide quickly with about 70% of the information, then adjust"]]},
{t:"note",h:"For your next project",x:"Try a one-page “press release” as the first artefact of a new initiative. It forces a shared answer to who the customer is and what changes for them."},
{t:"links",h:"Sources",i:[
["Amazon Leadership Principles","Amazon’s own list of principles.","https://www.aboutamazon.com/about-us/leadership-principles"],
["Letter to shareholders, 2016","Describes fast decisions and the 70% rule.","https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"]]}
],related:["rapid","business-justification","okr"]},

"bp-deloitte":{group:"bestpractices",title:"Deloitte",tagline:"Choose the approach by outcome, then assure delivery against benefits.",
bp:{themes:["Governance","Delivery","Risk and quality"],hue:"#5B8C00",mark:"D",headline:"Match method to outcome"},
sections:[
{t:"p",x:"Deloitte’s public guidance does not push one method. It describes agile, traditional and hybrid programmes as options chosen to fit the outcomes and benefits sought, with programme management and a PMO supporting whichever is used. Its assurance material shows how to check that delivery is on track, including for agile work."},
{t:"list",h:"Core practices",i:[
["Pick the approach from the outcome","Choose agile, waterfall or hybrid based on the benefits required, not preference."],
["Results management","Whatever the method, check regularly whether the intended outcomes are being achieved."],
["Assurance across the life of a programme","Independent checks of the business case, plans, risks and delivery readiness, adapted for agile cadences."],
["A PMO that supports delivery","Provide reporting, planning discipline and risk visibility without adding unnecessary paperwork."],
["Plain status reporting","Use simple status signals such as red, amber and green, backed by evidence."]]},
{t:"steps",h:"Choosing an approach",i:[
["State the benefits","Write down the outcomes and how they will be measured."],
["Assess uncertainty","Is the scope clear and stable, or is it expected to change?"],
["Choose and tailor","Pick the delivery model that fits. Combine approaches where parts of the work differ."],
["Assure","Plan how you will check delivery and benefits at intervals."]]},
{t:"note",h:"How this summary was built",x:"This page summarizes Deloitte’s public programme-management and assurance material. We did not find a single named Deloitte method, so treat it as themes, not a framework to certify against."},
{t:"links",h:"Sources",i:[
["Assuring agile programmes and projects (Deloitte UK)","Guidance on assurance when delivering with agile methods.","https://www2.deloitte.com/content/dam/Deloitte/cz/Documents/risk/deloitte-uk-assuring-agile-programmes-and-projects.pdf"],
["Agile and project portfolio management (Deloitte US)","How reporting and results management work with agile and traditional delivery.","https://www.deloitte.com/content/dam/Deloitte/us/Documents/technology/us-cons-agile-and-project-portfolio-management.pdf"]]}
],related:["business-justification","pmo-governance","pmbok","prince2"]},

"bp-adobe":{group:"bestpractices",title:"Adobe",tagline:"Frequent check-ins and a toolkit that lets anyone test an idea.",
bp:{themes:["Culture and teams","Innovation"],hue:"#C4262E",mark:"Ad",headline:"Replace ceremony with conversation"},
sections:[
{t:"p",x:"Adobe is known for two people-centred practices. In 2012 it replaced annual performance reviews and ratings with Check-in, an ongoing conversation between employee and manager. It also created Kickbox, a self-service innovation kit, and made it open for others to use."},
{t:"list",h:"Core practices",i:[
["Check-in","Regular two-way conversations on expectations, feedback and growth, replacing yearly ratings. Adobe describes these as quarterly today."],
["Clear expectations","Set and revisit expectations together, so feedback can happen when it is useful, not months later."],
["Kickbox","A short, step-by-step innovation process in a box. Individuals test an idea with a small budget and no need to ask for permission."],
["Stage-gated experiments","Ideas move to the next level only after evidence from experiments."],
["Open-sourcing the method","Sharing the toolkit with others invites improvement and builds credibility."]]},
{t:"steps",h:"Bring check-ins to a project team",i:[
["Agree the cadence","A short one-to-one every few weeks, with a simple agenda: expectations, feedback, growth."],
["Keep notes light","Record agreements, not a form to be scored."],
["Link to delivery","Connect the conversation to current goals and the team’s working agreement."],
["Review","Ask the team after a quarter what to change."]]},
{t:"note",h:"A caution",x:"Adobe’s reported results, such as lower voluntary attrition and fewer management hours spent on reviews, come from Adobe and its published case studies. Your results will depend on manager skill and trust."},
{t:"links",h:"Sources",i:[
["Adobe Check-in","Adobe’s description of the approach and toolkit.","https://www.adobe.com/check-in.html"],
["Lessons learned with Check-in (Adobe blog, 2014)","Early lessons from rolling it out.","https://blog.adobe.com/en/publish/2014/03/10/lessons-learned-with-check-in"]]}
],related:["okr","raci","kpi"]},

"bp-accenture":{group:"bestpractices",title:"Accenture",tagline:"Agile and DevOps at scale, backed by automation.",
bp:{themes:["Delivery","Governance"],hue:"#7B3FD0",mark:"Ac",headline:"Scale agile with automation"},
sections:[
{t:"p",x:"Accenture has described adopting Agile and DevOps at scale across its global delivery network, using SAFe as the scaling framework. It pairs this with myWizard, an automation platform it says supports distributed agile teams across the software lifecycle."},
{t:"list",h:"Core practices",i:[
["Scale with a common framework","Use one shared scaling approach, here SAFe, so teams across locations speak the same language."],
["Distributed agile","Plan for time zones with clear working agreements, shared tooling and regular cross-site ceremonies."],
["Automate the lifecycle","Automate builds, tests and deployments to shorten feedback loops and reduce manual errors."],
["Shared delivery platform","Common tools and dashboards give leaders visibility without extra reporting."],
["Measure outcomes","Track delivery speed, quality and client outcomes, not only activity."]]},
{t:"steps",h:"Scaling checklist",i:[
["Pick the framework","Choose a scaling approach, such as SAFe, and train everyone together."],
["Set up the toolchain","Automate the pipeline before adding more teams."],
["Align cadence","Synchronize planning across teams, including remote ones."],
["Inspect and adapt","Review metrics each cycle and adjust."]]},
{t:"note",h:"Source quality",x:"Most public material comes from Accenture press releases and a Scaled Agile case study. It is useful for ideas but is marketing, not independent evaluation."},
{t:"links",h:"Sources",i:[
["Accenture case study (Scaled Agile)","How Accenture adopted Agile and DevOps at scale.","https://v5.scaledagileframework.com/?p=23774"],
["myWizard announcement (Accenture newsroom, 2020)","Platform description and its support for distributed agile.","https://newsroom.accenture.com/news/2020/accenture-introduces-powerful-new-version-of-mywizard-intelligent-automation-platform"]]}
],related:["safe","scrum","kanban"]},

"bp-ibm":{group:"bestpractices",title:"IBM",tagline:"Design thinking and the Garage Method for co-creating with users.",
bp:{themes:["Innovation","Delivery","Culture and teams"],hue:"#0F62FE",mark:"IBM",headline:"Co-create, then ship in small steps"},
sections:[
{t:"p",x:"IBM publishes two approaches that project teams can borrow. Enterprise Design Thinking keeps teams focused on user outcomes. The IBM Garage Method combines design thinking, agile, DevOps and cloud practices across the whole life of a solution."},
{t:"list",h:"Core practices",i:[
["Hills","Short statements of the user outcome the team will deliver: who, what, and the wow. They keep the team aimed at value."],
["Playbacks","Regular demonstrations to stakeholders and users, so feedback arrives early."],
["Sponsor users","Real users who work closely with the team throughout, not only at the end."],
["Loops","Repeat observe, reflect and make, in small cycles."],
["Garage Method phases","Cover culture, co-create, co-execute, co-operate and learn. The same team follows a solution from idea to live service."],
["Minimum viable product","Release the smallest useful version, learn, and build on it."]]},
{t:"steps",h:"Running a playback",i:[
["Prepare the story","Tie it to the Hill, not to a list of features."],
["Show working software","Demonstrate real use, ideally with a user."],
["Capture feedback","Record what the stakeholders liked, questioned and want changed."],
["Update the plan","Adjust the backlog before the next loop."]]},
{t:"note",h:"Fit with other methods",x:"Hills and playbacks work well on top of Scrum or SAFe: a Hill is a product goal, a playback is a sprint review with a stronger user focus."},
{t:"links",h:"Sources",i:[
["IBM Garage Method","IBM’s description of the method and its practices.","https://www.ibm.com/garage/method"],
["Enterprise Design Thinking","IBM’s guide to Hills, Playbacks and Sponsor Users.","https://www.ibm.com/design/thinking/"]]}
],related:["scrum","safe","okr"]},

"bp-nasa":{group:"bestpractices",title:"NASA",tagline:"Lifecycle gates, continuous risk management and lessons learned.",
bp:{themes:["Risk and quality","Governance","Decisions"],hue:"#1F3A93",mark:"NASA",headline:"Decide at gates, learn from every mission"},
sections:[
{t:"p",x:"NASA runs some of the most complex projects there are, and publishes much of how it does so. Its project life cycle has formal decision points, its Systems Engineering Handbook sets out disciplined technical management, and its Lessons Learned Information System shares what past missions taught."},
{t:"list",h:"Core practices",i:[
["Life cycle with Key Decision Points","Work moves through phases, and at each Key Decision Point a review board decides whether to proceed."],
["Continuous risk management","Identify, analyze, plan, track and control risks throughout, not only at the start."],
["Risk-informed decisions","Combine risk analysis with other factors such as cost, schedule and technical performance when choosing."],
["Joint cost and schedule confidence","Estimate cost and schedule together as a probability, so the plan states how confident it is."],
["Systems engineering","Manage requirements, interfaces, verification and validation as a connected whole."],
["Lessons Learned","Capture and publish lessons so other teams find them before repeating the mistake."]]},
{t:"table",h:"Compare with other approaches",head:["NASA practice","Similar idea elsewhere"],rows:[
["Key Decision Point","PRINCE2 stage boundary; stage gate in PMBOK"],
["Continuous risk management","Risk register and regular risk reviews"],
["Lessons Learned system","Lessons log, retrospective"]]},
{t:"note",h:"Scale it down",x:"You don’t need a formal board. Define two or three decision points, name who decides, and write down the criteria in advance."},
{t:"links",h:"Sources",i:[
["NASA Systems Engineering Handbook","The agency’s reference for systems engineering practice.","https://www.nasa.gov/reference/systems-engineering-handbook/"],
["Lessons Learned Information System","Public database of lessons from NASA programmes.","https://llis.nasa.gov/"]]}
],related:["risk","prince2","pmo-governance","pmbok"]},

"bp-capgemini":{group:"bestpractices",title:"Capgemini",tagline:"Align stakeholders in a workshop, then deliver in product-aligned pods.",
bp:{themes:["Delivery","Innovation","Culture and teams"],hue:"#0A8FB5",mark:"Cg",headline:"Align first, then deliver fast"},
sections:[
{t:"p",x:"Capgemini describes two complementary offerings. The Accelerated Solutions Environment (ASE) brings stakeholders together for intensive workshops, such as DesignShops, to align on a way forward. The Accelerated Delivery Center (ADC) is an agile delivery model with product-aligned teams."},
{t:"list",h:"Core practices",i:[
["DesignShop","A multi-day, facilitated event where large groups of stakeholders align on direction and plans."],
["Discovery Day","A shorter session for a small decision-making group."],
["Product-aligned pods","Cross-functional teams organized around a product rather than a project."],
["Shared horizontal team","A small team that supplies project management and CI/CD platform support to the pods."],
["Delivery metrics","Capgemini’s case studies cite shorter time to market and fewer defects. These are self-reported."]]},
{t:"steps",h:"A lightweight alignment workshop",i:[
["Invite the decision makers","Include people who can decide, and those affected."],
["Frame the challenge","State the question in one sentence."],
["Diverge, then converge","Generate options broadly, then vote and refine."],
["Leave with a plan","Owners, next steps and dates before anyone leaves."]]},
{t:"note",h:"Caution",x:"The sources are Capgemini web pages and case summaries, so performance figures are self-reported and unverified."},
{t:"links",h:"Sources",i:[
["Accelerated Solutions Environment","Capgemini’s description of DesignShops and Discovery Days.","https://www.capgemini.com/in-en/solutions/accelerated-solution-environment/"],
["Increasing velocity with the Accelerated Delivery Center","Capgemini perspective on the delivery model.","https://www.capgemini.com/ca-en/insights/expert-perspectives/increasing-velocity-with-the-accelerated-delivery-center/"]]}
],related:["scrum","safe","strategic-cascade"]},

"bp-pmalliance":{group:"bestpractices",title:"PMAlliance",tagline:"Placeholder: no authoritative public practice set found yet.",
bp:{themes:["Governance"],hue:"#8A6200",mark:"PM",headline:"Needs your source"},
sections:[
{t:"p",x:"We could not identify a published set of project management practices from an organization called PMAlliance. Rather than invent content, this page is a placeholder."},
{t:"note",h:"What we need",x:"Please share the organization’s website or documents, or confirm whether another name was meant, such as PMI. The page can then be filled in with sourced practices."},
{t:"list",h:"General practices that most standards agree on",i:[
["Define success first","Agree objectives, scope and measures of success with the sponsor."],
["Plan at the right level","Detailed for the near term, outlined for later."],
["Manage risks and issues actively","Keep a register, assign owners and review it regularly."],
["Communicate with stakeholders","Tailor frequency and format to each group."],
["Review and learn","Hold lessons-learned reviews during and after the project."]]}
],related:["pmbok","risk","raci"]}
});
