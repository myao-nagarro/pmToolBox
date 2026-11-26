"use strict";
/* ---------- Content ---------- */
const GROUPS = [
  {id:"frameworks", name:"PM frameworks"},
  {id:"people", name:"People and roles"},
  {id:"raid", name:"RAID"},
  {id:"concepts", name:"Related concepts"},
  {id:"bestpractices", name:"Best Practices"}
];
const GN = Object.fromEntries(GROUPS.map(g=>[g.id,g.name]));

const TOPICS = {
pmbok:{group:"frameworks",title:"PMI / PMBOK® Guide",tagline:"PMI’s standard: principles and performance domains you tailor to any delivery approach.",
sections:[
{t:"p",x:"The PMBOK® Guide – Eighth Edition (November 2025) keeps the principles-and-domains structure introduced in the Seventh Edition, trims it to six principles and seven performance domains, and brings back process guidance in a non-prescriptive form. It describes what good project management achieves rather than prescribing one method, so it works as a common language across predictive, agile and hybrid projects."},
{t:"list",h:"Six principles",i:[
["Adopt a holistic view","Treat the project as a system inside the organization; decisions in one area ripple into others."],
["Focus on value","Judge success by the value delivered to the organization and its stakeholders, not only by output."],
["Embed quality","Build quality into processes and deliverables instead of inspecting it in at the end."],
["Lead accountably","Own decisions and outcomes, act with integrity and be transparent about progress."],
["Integrate sustainability","Consider environmental, social and economic effects across the project’s life."],
["Build empowered teams","Create a culture where people have the clarity, trust and authority to deliver."]]},
{t:"list",h:"Seven performance domains",i:[
["Governance","Decision rights, oversight, approvals and how the project links to organizational strategy."],
["Scope","What will and won’t be delivered: requirements, WBS or backlog, acceptance criteria."],
["Schedule","Sequencing, estimating and tracking time, from Gantt baselines to release forecasts."],
["Finance","Budgets, cost control, funding and the financial case for the investment."],
["Stakeholders","Identifying, analysing and engaging the people who affect or are affected by the project."],
["Resources","People, equipment, materials and suppliers, including procurement."],
["Risk","Uncertainty in all its forms: threats, opportunities and how they are managed."]]},
{t:"steps",h:"Focus areas (the project lifecycle)",i:[
["Initiating","Authorize the project, write the charter, identify stakeholders."],
["Planning","Define scope, schedule, budget, risk, quality and communications approaches."],
["Executing","Do the work, manage the team, engage stakeholders, manage suppliers."],
["Monitoring and controlling","Track against baselines, manage change, report status."],
["Closing","Accept deliverables, hand over, capture lessons, release resources."]]},
{t:"list",h:"Key artefacts",i:[
["Project charter","Formally authorizes the project and the project manager’s authority."],
["Project management plan","Scope, schedule and cost baselines plus subsidiary plans."],
["WBS and WBS dictionary","Hierarchical breakdown of all deliverables and work."],
["Stakeholder register","Who the stakeholders are, their interests, influence and engagement level."],
["Risk register and issue log","Live records of uncertainty and current problems."],
["Change log","Every change request, its assessment and decision."],
["Lessons learned register","Knowledge captured throughout, not only at the end."]]},
{t:"note",h:"Earlier editions you will still meet",x:"The Seventh Edition (2021) had twelve principles and eight performance domains. The Sixth Edition (2017) used five process groups, ten knowledge areas and 49 processes, and many contracts, PMO templates and PMP-trained teams still talk in that vocabulary (knowledge areas, inputs/tools/outputs). Translate between them rather than insisting on one."},
{t:"list",h:"When it fits",i:[
["Good fit","Organizations wanting a common, vendor-neutral language; hybrid delivery; contracts with defined scope; PMP-certified teams."],
["Watch out","It is a body of knowledge, not a step-by-step method. Tailor deliberately or you get documentation without control."]]}
],related:["prince2","pmo-governance","risk","raci"]},

prince2:{group:"frameworks",title:"PRINCE2®",tagline:"A process-based method built on business justification, stages and management by exception.",
sections:[
{t:"p",x:"PRINCE2 (PRojects IN Controlled Environments) gives a project a clear governance structure: a Project Board makes decisions, the Project Manager runs the project day to day within agreed tolerances, and anything beyond tolerance is escalated. PRINCE2 7 (2023) renamed the former themes to practices and puts more weight on people and on sustainability."},
{t:"list",h:"Seven principles",i:[
["Ensure continued business justification","There must be a valid reason to start, and it must stay valid throughout."],
["Learn from experience","Seek and record lessons at every stage."],
["Define roles, responsibilities and relationships","Everyone knows who decides, who does and who is consulted."],
["Manage by stages","Plan and authorize the project one management stage at a time."],
["Manage by exception","Set tolerances; escalate only when they are forecast to be exceeded."],
["Focus on products","Define outputs and quality criteria before doing the work."],
["Tailor to suit the project","Adapt the method to size, risk, complexity and context."]]},
{t:"list",h:"Seven practices",i:[
["Business case","Why the project is worthwhile: options, benefits, costs, risks."],
["Organizing","The project management team structure and roles."],
["Plans","Project, stage, team and exception plans: what, how, by whom, when, cost."],
["Quality","Product descriptions, quality criteria and the quality register."],
["Risk","Identifying, assessing and controlling uncertainty."],
["Issues","Requests for change, off-specifications and problems or concerns."],
["Progress","Monitoring against plans, tolerances, reporting and escalation."]]},
{t:"steps",h:"Seven processes",i:[
["Starting up a project (SU)","Is the project viable and worthwhile? Appoint the team, prepare the project brief."],
["Directing a project (DP)","The Project Board authorizes initiation, the project, each stage and closure; runs throughout."],
["Initiating a project (IP)","Agree management approaches, controls, project plan and the Project Initiation Documentation."],
["Controlling a stage (CS)","Assign work packages, monitor progress, handle issues and risks, report."],
["Managing product delivery (MP)","Team Managers accept, execute and deliver work packages."],
["Managing a stage boundary (SB)","Review the stage, update plan and business case, plan the next stage."],
["Closing a project (CP)","Confirm acceptance, hand over, evaluate the project, recommend closure."]]},
{t:"list",h:"Roles",i:[
["Executive","Owns the business case; chairs the Project Board; single point of accountability."],
["Senior User","Represents those who will use the products and realize the benefits."],
["Senior Supplier","Represents those designing and building the products."],
["Project Manager","Runs the project day to day within tolerances set by the Board."],
["Team Manager","Delivers work packages and leads the specialist team."],
["Project Assurance","Independent check on the project’s health for the Board."],
["Project Support","Administration, configuration management and tooling."],
["Change Authority","Decides on changes within delegated limits."]]},
{t:"note",h:"Tolerances",x:"Tolerance is the permitted deviation before escalation. PRINCE2 sets it for time, cost, scope, quality, benefits, risk and sustainability. A forecast breach of stage tolerance triggers an exception report to the Project Board."},
{t:"list",h:"When it fits",i:[
["Good fit","Public sector, regulated industries, supplier–customer projects and anywhere clear governance and stage gates are expected."],
["Watch out","Over-documentation when not tailored. Combine with agile delivery (PRINCE2 Agile) for product work."]]}
],related:["business-justification","pmo-governance","issues","pmbok"]},

scrum:{group:"frameworks",title:"Agile / Scrum",tagline:"A lightweight framework for delivering value in short, inspected iterations.",
sections:[
{t:"p",x:"Agile is a mindset set out in the Agile Manifesto; Scrum is the most widely used framework for applying it. The Scrum Guide (2020) defines three accountabilities, five events and three artefacts, each artefact with a commitment that keeps the team focused."},
{t:"list",h:"Agile Manifesto values",i:[
["Individuals and interactions","over processes and tools."],
["Working software","over comprehensive documentation."],
["Customer collaboration","over contract negotiation."],
["Responding to change","over following a plan. The items on the right still have value; the left is valued more."]]},
{t:"list",h:"Accountabilities",i:[
["Product Owner","Maximizes product value; owns and orders the Product Backlog; one person, not a committee."],
["Scrum Master","Establishes Scrum, coaches the team and organization, removes impediments."],
["Developers","Everyone who creates the increment; self-managing on how the work is done."]]},
{t:"table",h:"Events and timeboxes",head:["Event","Purpose","Timebox (for a one-month Sprint)"],rows:[
["Sprint","Container for all other events; produces a usable increment","One month or less"],
["Sprint Planning","Agree why (Sprint Goal), what and how","Up to 8 hours"],
["Daily Scrum","Inspect progress toward the Sprint Goal and adapt","15 minutes"],
["Sprint Review","Inspect the outcome with stakeholders and adapt the backlog","Up to 4 hours"],
["Sprint Retrospective","Improve quality and effectiveness","Up to 3 hours"]]},
{t:"list",h:"Artefacts and commitments",i:[
["Product Backlog","Ordered list of what is needed. Commitment: Product Goal."],
["Sprint Backlog","Sprint Goal plus selected items and a plan. Commitment: Sprint Goal."],
["Increment","A usable step toward the Product Goal. Commitment: Definition of Done."]]},
{t:"list",h:"Pillars and values",i:[
["Pillars","Transparency, inspection, adaptation."],
["Values","Commitment, focus, openness, respect, courage."]]},
{t:"list",h:"Common anti-patterns",i:[
["Proxy Product Owner","Someone without decision authority relays requirements; decisions stall."],
["Sprint as mini-waterfall","Design, build and test in sequence inside the Sprint; nothing is done until the last day."],
["Status-meeting Daily Scrum","Developers report to a manager instead of planning together."],
["No Definition of Done","Increments are not actually releasable, so value is never proven."]]}
],related:["safe","kanban","okr","dependencies"]},

safe:{group:"frameworks",title:"SAFe®",tagline:"Scaled Agile Framework: aligning many agile teams on one solution through the Agile Release Train.",
sections:[
{t:"p",x:"SAFe scales Lean and agile practices to programmes and portfolios. Teams of teams (Agile Release Trains, typically 50–125 people) plan together every Planning Interval (PI), usually 8–12 weeks, and deliver to a shared cadence. Terminology here follows SAFe 6."},
{t:"list",h:"Configurations",i:[
["Essential SAFe","The basic building block: one or more ARTs with team and ART roles and events."],
["Large Solution SAFe","Coordinates multiple ARTs and suppliers building one large solution."],
["Portfolio SAFe","Adds Lean Portfolio Management, strategic themes and the portfolio Kanban."],
["Full SAFe","All of the above for the largest enterprises."]]},
{t:"list",h:"Seven core competencies",i:[
["Lean-Agile Leadership","Leaders who model and drive the change."],
["Team and Technical Agility","High-performing teams with built-in quality."],
["Agile Product Delivery","Customer-centric, continuous delivery with DevOps."],
["Enterprise Solution Delivery","Building and evolving large, complex systems."],
["Lean Portfolio Management","Strategy, funding and governance aligned with execution."],
["Organizational Agility","Lean thinking and fast strategy adjustments across the business."],
["Continuous Learning Culture","Relentless improvement and innovation."]]},
{t:"list",h:"Key ART roles",i:[
["Release Train Engineer (RTE)","Servant leader and coach for the ART; facilitates PI Planning and I&A."],
["Product Management","Owns the ART backlog and the what; prioritizes features."],
["System Architect","Guides the architectural runway and technical direction."],
["Business Owners","Key stakeholders accountable for business outcomes; assign business value to PI objectives."],
["Product Owner and Scrum Master / Team Coach","Team-level roles as in Scrum."]]},
{t:"steps",h:"PI rhythm",i:[
["PI Planning","Two days, everyone together: business context, team breakouts, dependencies on the ART planning board, PI objectives and a confidence vote."],
["Iterations","Teams execute; ART sync (Coach sync and PO sync) manages dependencies."],
["System demo","Integrated increment shown every iteration."],
["Inspect and Adapt","PI system demo, metrics review and a problem-solving workshop."]]},
{t:"list",h:"Useful techniques",i:[
["WSJF","Weighted Shortest Job First = Cost of Delay ÷ Job Size. Cost of Delay = business value + time criticality + risk reduction or opportunity enablement."],
["ROAM","Classify PI risks as Resolved, Owned, Accepted or Mitigated in front of the whole train."],
["Lean business case","Light case for each epic, tested with an MVP before more funding."]]},
{t:"note",h:"When it fits",x:"SAFe suits organizations with many teams depending on each other and leaders who want a prescriptive starting point. It is heavy for a single team, and it fails when adopted as a renaming exercise without changing funding and decision-making."}
],related:["scrum","dependencies","okr","strategic-cascade"]},

kanban:{group:"frameworks",title:"Lean / Kanban",tagline:"Manage flow: visualize the work, limit what’s in progress and improve continuously.",
sections:[
{t:"p",x:"Lean comes from the Toyota Production System and focuses on value and the removal of waste. Kanban applies Lean to knowledge work: start with what you do now, make it visible, limit work in progress and evolve the system through small, measured changes. It fits continuous work such as support, operations and maintenance especially well."},
{t:"steps",h:"Five Lean principles",i:[
["Identify value","Defined from the customer’s point of view."],
["Map the value stream","See every step from request to delivery and the waits between them."],
["Create flow","Remove interruptions and batch delays."],
["Establish pull","Start new work only when there is capacity."],
["Seek perfection","Keep improving; there is always more waste to remove."]]},
{t:"list",h:"Eight wastes (DOWNTIME)",i:[
["Defects","Rework and bugs."],["Overproduction","Building more than is needed or earlier than needed."],["Waiting","Queues for approvals, handoffs and environments."],["Non-utilized talent","Not using people’s skills and ideas."],["Transportation","Unnecessary handoffs between teams or tools."],["Inventory","Partly done work and large backlogs."],["Motion","Context switching and searching for information."],["Extra processing","Gold-plating and unnecessary reports."]]},
{t:"list",h:"Kanban practices",i:[
["Visualize","Make the workflow and every work item visible on a board."],
["Limit work in progress","WIP limits create pull and expose bottlenecks."],
["Manage flow","Watch how work moves and act on blockers and aging items."],
["Make policies explicit","Entry and exit criteria, classes of service, WIP rules."],
["Implement feedback loops","Regular cadences to review service delivery and risks."],
["Improve collaboratively, evolve experimentally","Use models and data to try small changes."]]},
{t:"list",h:"Flow metrics",i:[
["Lead time","From request to delivery, as the customer sees it."],
["Cycle time","From start of work to done."],
["Throughput","Items completed per period."],
["Little’s Law","Average cycle time = average WIP ÷ average throughput. Lower WIP, faster delivery."],
["Cumulative flow diagram","Shows WIP, bottlenecks and stability over time."]]},
{t:"list",h:"Classes of service",i:[
["Expedite","Urgent; can break WIP limits; keep very few."],["Fixed date","Real deadline with a high cost of missing it."],["Standard","Most work; first in, first out."],["Intangible","Important but not urgent, e.g. technical debt."]]}
],related:["itil","scrum","dependencies"]},

itil:{group:"concepts",title:"ITIL® / Service Management",tagline:"Guidance for co-creating value through IT and digital services.",
sections:[
{t:"p",x:"ITIL is the most widely used framework for IT service management. ITIL 4 replaced the old lifecycle with the Service Value System. ITIL (Version 5), released in February 2026, keeps the guiding principles, four dimensions, Service Value System and 34 practices, and widens the scope to digital product and service management, experience and AI governance. ITIL 4 runs in parallel, so both vocabularies are in use."},
{t:"list",h:"Service Value System",i:[
["Guiding principles","Universal recommendations that guide decisions."],
["Governance","How the organization is directed and controlled."],
["Service value chain","Six activities that turn demand into value."],
["Practices","34 sets of resources for performing work, e.g. incident management."],
["Continual improvement","A recurring activity at every level."]]},
{t:"list",h:"Seven guiding principles",i:[
["Focus on value","Everything should link back to value for stakeholders."],["Start where you are","Assess and reuse what already works."],["Progress iteratively with feedback","Small steps, learn as you go."],["Collaborate and promote visibility","Work together and make work visible."],["Think and work holistically","No service or practice stands alone."],["Keep it simple and practical","Remove steps that add no value."],["Optimize and automate","Optimize first, then automate."]]},
{t:"list",h:"Four dimensions",i:[
["Organizations and people","Structure, culture, roles and skills."],["Information and technology","Data, knowledge and the tools used."],["Partners and suppliers","Relationships with other organizations."],["Value streams and processes","How the parts work together to deliver value."]]},
{t:"list",h:"Service value chain activities",i:[
["Plan","Shared understanding of vision, status and direction."],["Improve","Continual improvement of products, services and practices."],["Engage","Understanding stakeholder needs and keeping relationships."],["Design and transition","Services meet quality, cost and time-to-market expectations."],["Obtain / build","Components are available when and where needed."],["Deliver and support","Services are delivered and supported to agreed specifications."]]},
{t:"table",h:"Core practices and how they look in Jira Service Management",head:["Practice","What it covers","In JSM Cloud"],rows:[
["Service desk","Single point of contact for users","Help center portal, email channel, queues"],
["Incident management","Restore normal service as fast as possible","Incident work type, SLAs, major incident handling, alerts and on-call"],
["Service request management","Handle pre-defined, user-initiated requests","Request types, forms, approvals, automation"],
["Problem management","Find and manage causes of incidents","Problem work type linked to incidents, known errors in the knowledge base"],
["Change enablement","Maximize successful changes","Change work type, risk assessment, approvals, change calendar"],
["Service level management","Set and track service level targets","SLA goals and calendars, reports"],
["Knowledge management","Make information available when needed","Confluence knowledge base linked to the portal"],
["Service configuration management","Information on configuration items and relationships","Assets (CMDB) object schemas"]]},
{t:"note",h:"Project tip",x:"An ITSM implementation is a project that ends in a service. Plan early life support (hypercare) and the hand-over to the service owner as deliverables, not afterthoughts."}
],related:["kanban","pmo-governance","issues","raci","role-map"]},

"role-map":{group:"people",title:"Roles across frameworks",tagline:"Which role in one framework does the job of a role in another, and where the match breaks down.",
sections:[
{t:"p",x:"Every framework names its roles differently, but most of them cover the same underlying jobs: someone funds the work, someone speaks for the users, someone coordinates delivery, someone does the work and someone checks it. The map below groups roles by that underlying job. Use it to translate between a client’s vocabulary and yours, or to design roles for a hybrid setup."},
{t:"rolemap",h:"Role map",cols:["PMI / PMBOK","PRINCE2","Scrum","SAFe","Kanban","ITIL"],links:["pmbok","prince2","scrum","safe","kanban","itil"],rows:[
["Investment owner","Funds the work and answers for the business case.","Sponsor","Executive","≈ Product Owner (product value; funding sits outside Scrum)","Business Owners; Epic Owner for portfolio epics","– Outside the method","≈ Service owner"],
["Governing body","Makes the big decisions and sets limits for others.","Steering committee","Project Board","– Not defined","Lean Portfolio Management","≈ Strategy review cadence","Governing body (SVS governance)"],
["Voice of the user","Represents the people who will use the result and defines what is needed.","≈ Customer and key stakeholders","Senior User","Product Owner","Product Management (ART); Product Owner (team)","Service Request Manager","≈ Business relationship manager"],
["Supplier representative","Commits the people and resources that design and build the solution.","≈ Functional managers and sellers","Senior Supplier","≈ Developers, collectively","≈ System Architect and supplier representatives","– Not defined","≈ Supplier manager"],
["Delivery coordinator","Runs the work day to day and reports on progress.","Project manager","Project Manager","– No project manager; shared across the Scrum Team","≈ Release Train Engineer (ART level)","Service Delivery Manager","≈ Practice manager or service delivery manager"],
["Process coach","Helps the team work effectively and removes impediments.","≈ PMO or agile coach in hybrid setups","– Not defined","Scrum Master","Scrum Master / Team Coach; RTE for the ART","≈ Flow manager, often the Service Delivery Manager","≈ Continual improvement lead"],
["Team lead","Leads a team and delivers an agreed package of work.","≈ Functional or team lead","Team Manager","– Developers self-manage","– Teams self-manage","– Team self-organizes","≈ Resolver or support team lead"],
["Delivery team","Does the specialist work.","Project team","Team members","Developers","Agile teams","Team members","Technical and support teams; service desk agents"],
["Assurance","Independently checks that the work is healthy and done right.","≈ PMO and quality assurance","Project Assurance","– Built into transparency and the Definition of Done","≈ Built-in quality; System Team for integration","– Explicit policies and service delivery reviews","≈ Practice owner reviews and internal audit"],
["Support and tooling","Administration, tools, configuration and reporting.","≈ PMO or project coordinator","Project Support","– Not defined","System Team; LACE for ways of working","– Not defined","≈ Service management tool administrators"],
["Change authority","Approves changes within delegated limits.","Change control board","Change Authority","Product Owner, by ordering the backlog","Product Management (features); LPM (epics)","≈ Replenishment meeting","Change authority (e.g. CAB)"],
["Design authority","Owns technical direction and design decisions.","≈ Subject matter experts and architects","≈ Senior Supplier or a named design authority","≈ Developers","System Architect; Solution and Enterprise Architects","– Not defined","≈ Architecture management practice"]]},
{t:"list",h:"Where the match breaks down",i:[
["Scrum has no project manager","Project management work is split: the Product Owner owns what and why, the Scrum Master owns how the team works, and the Developers own the plan for the Sprint. Adding a project manager inside a Scrum Team usually weakens the Product Owner."],
["A Product Owner is not a Senior User","A Senior User represents users on a board that meets at decision points. A Product Owner works with the team daily and can decide on the backlog alone."],
["An RTE is not a project manager","The Release Train Engineer facilitates the train and removes impediments but has no authority over scope (Product Management) or over people."],
["Executive and sponsor differ in weight","The PRINCE2 Executive is the single point of accountability and chairs the Project Board. A PMBOK sponsor’s involvement depends on the organization’s governance."],
["Kanban roles are optional","The Kanban Method suggests the Service Delivery Manager and Service Request Manager but lets teams start with their existing titles."],
["ITIL roles follow the service, not the project","Service owner, practice owner and change authority continue after go-live. Plan the hand-over from project roles to these service roles as part of closure."]]},
{t:"note",h:"A common hybrid",x:"PRINCE2 governance on top, agile teams underneath: the Project Board and Project Manager stay, the Product Owner works closely with or reports to the Senior User, and self-managing teams take the place of the Team Manager role. This is the pattern PRINCE2 Agile describes."}
],related:["raci","rapid","pmbok","prince2","scrum","safe"]},

raci:{group:"people",title:"RACI analysis",tagline:"Who does what: one matrix that clears up ownership for every activity.",
sections:[
{t:"p",x:"A RACI matrix lists activities or deliverables in rows and roles in columns. Each cell says how a role is involved. It prevents the two most common failures in delivery: work nobody owns and work everybody thinks they own."},
{t:"list",h:"The four letters",i:[
["R – Responsible","Does the work. Can be several people."],
["A – Accountable","Owns the outcome, signs off and answers for it. Exactly one per activity."],
["C – Consulted","Gives input before or during the work; two-way communication."],
["I – Informed","Kept up to date on progress or the decision; one-way communication."]]},
{t:"steps",h:"Building a RACI",i:[
["List activities","Use deliverables or decisions, not vague areas like “testing”."],
["List roles","Use roles, not names, so the matrix survives staff changes."],
["Assign A first","One accountable owner per row."],
["Assign R, then C and I","Keep C and I lean; every C slows things down."],
["Validate","Walk through with the people named and adjust."],
["Publish and revisit","Review at stage boundaries or when the team changes."]]},
{t:"list",h:"Checks to run",i:[
["No A or several As","Ownership is unclear; fix before work starts."],
["No R","Nobody will do the work."],
["Many Cs","Decisions will be slow; reduce to who really adds value."],
["Column full of As","One role is a bottleneck; delegate."],
["Column with no letters","Is that role needed on this project?"]]},
{t:"table",h:"Example",head:["Activity","Sponsor","Project manager","Architect","Team","Ops"],rows:[
["Approve business case","A","R","C","","I"],
["Produce solution design","I","C","A","R","C"],
["Build and test","","A","C","R","I"],
["Go-live decision","A","R","C","C","C"]]}
],related:["rapid","power-interest","prince2"]},

rapid:{group:"people",title:"RAPID decision analysis",tagline:"How decisions are made: who recommends, who agrees, who decides.",
sections:[
{t:"p",x:"RAPID, developed by Bain & Company, clarifies decision roles. Where RACI is about doing work, RAPID is about making a specific decision. The letters don’t follow the order of the process: a recommendation is formed with input, agreed, decided and then performed."},
{t:"list",h:"The five roles",i:[
["R – Recommend","Gathers data and input, proposes a course of action. Usually does most of the work."],
["A – Agree","Must formally agree; holds a veto. Use sparingly, typically for legal, regulatory or compliance sign-off."],
["P – Perform","Carries out the decision once made."],
["I – Input","Provides facts and views to the recommender. Not binding."],
["D – Decide","Makes the final call and commits the organization. Exactly one person."]]},
{t:"steps",h:"Using RAPID",i:[
["Pick the critical decisions","Focus on recurring or high-impact decisions, not every choice."],
["Name one D per decision","If two people decide, nobody does."],
["Limit A to real vetoes","Every A adds delay and conflict risk."],
["Agree how disagreement escalates","If A blocks, what happens and by when?"],
["Communicate and hold to it","Publish the roles; revisit after bad decisions."]]},
{t:"list",h:"RAPID or RACI?",i:[
["Use RACI","For activities and deliverables: who works on what."],
["Use RAPID","For decisions: scope changes, go-live, vendor selection, budget release."],
["Use both","On governance-heavy projects; link each RAPID decision to an A in the RACI."]]}
],related:["raci","pmo-governance","power-interest"]},

"power-interest":{group:"people",title:"Power–interest matrix",tagline:"Prioritize stakeholder engagement by how much they can affect the project and how much they care.",
sections:[
{t:"p",x:"Based on Mendelow’s matrix, this grid places each stakeholder by power (ability to influence the project) and interest (how much the project affects them or how engaged they are). The quadrant suggests how much effort to spend on each relationship."},
{t:"pi"},
{t:"steps",h:"Running the analysis",i:[
["Identify stakeholders","Brainstorm widely: sponsors, users, suppliers, regulators, unions, other projects."],
["Assess power and interest","Do it with the team; individual views are biased."],
["Add attitude","Mark supporters, neutrals and resistors; a powerful resistor needs a plan."],
["Define engagement actions","Channel, frequency, owner and message per stakeholder."],
["Review regularly","Positions move, especially at stage boundaries and during change."]]},
{t:"list",h:"Going further",i:[
["Salience model","Adds legitimacy and urgency to power for complex stakeholder landscapes."],
["Engagement assessment matrix","Compares current and desired engagement: unaware, resistant, neutral, supportive, leading."],
["Stakeholder register","Keep the analysis with contact details, interests and the engagement plan."]]}
],related:["raci","rapid","okr"]},

risk:{group:"raid",title:"Managing risks",tagline:"Uncertain events that could affect objectives, for better or worse.",
sections:[
{t:"p",x:"A risk is something that may happen. Threats harm objectives; opportunities help them. Managing risk means finding them early, deciding which matter and taking action before they become issues."},
{t:"note",h:"Write risks in three parts",x:"“Because of <cause>, <event> may occur, which would lead to <effect>.” This separates what you can act on (the cause) from what you’re worried about (the effect)."},
{t:"steps",h:"Risk process",i:[
["Identify","Workshops, checklists, assumptions analysis, lessons from earlier projects."],
["Assess","Rate probability and impact; consider proximity (how soon it could occur)."],
["Plan responses","Choose a response and assign a risk owner and actionees."],
["Implement","Carry out the actions and track them like any other work."],
["Monitor and review","Re-rate at a regular cadence; close risks that have passed."]]},
{t:"list",h:"Responses to threats",i:[
["Avoid","Change the plan so the threat can’t happen."],["Reduce / mitigate","Lower probability or impact."],["Transfer","Shift financial impact to a third party, e.g. insurance or contract."],["Accept","Consciously take the risk, often with a contingency plan or reserve."],["Escalate","The risk is outside your authority; hand it to the right level."]]},
{t:"list",h:"Responses to opportunities",i:[
["Exploit","Make sure it happens."],["Enhance","Increase probability or impact."],["Share","Partner with someone better placed to capture it."],["Accept","Take it if it comes."],["Escalate","Pass to the level that can act on it."]]},
{t:"list",h:"Risk register fields",i:[
["ID, description, category","Cause–event–effect wording."],["Probability, impact, score","Use a consistent scale, e.g. 1–5 × 1–5."],["Proximity","When it could occur."],["Owner and actionee","Owner monitors; actionee carries out the response."],["Response and status","What is being done and whether it is working."]]}
],related:["assumptions","issues","dependencies","prince2"]},

assumptions:{group:"raid",title:"Managing assumptions",tagline:"What the plan takes to be true without proof, and when you’ll check.",
sections:[
{t:"p",x:"Every plan rests on assumptions: that a supplier will deliver on time, that users are available for testing, that an API supports a feature. Unlogged assumptions are hidden risks. Logging them makes them visible and testable."},
{t:"steps",h:"Assumption process",i:[
["Capture","Ask during planning: “What must be true for this estimate or plan to hold?”"],
["Record owner and validation date","Who will confirm it and by when."],
["Validate","Confirm with evidence, a test or a written agreement."],
["Act on the result","Valid: close it. Invalid: raise an issue or risk and re-plan."]]},
{t:"list",h:"Assumptions vs constraints",i:[
["Assumption","Believed to be true, but not certain. Must be validated."],["Constraint","A known limit you must work within, e.g. a fixed budget or regulatory deadline."]]},
{t:"list",h:"Good practice",i:[
["Be specific","“The client provides test data for 3 banks by week 6” beats “Data will be available”."],["Put them in the contract","For client work, list key assumptions in the statement of work."],["Review at stage boundaries","Assumptions age quickly."]]}
],related:["risk","issues","business-justification"]},

issues:{group:"raid",title:"Managing issues",tagline:"Things that have happened and need action now.",
sections:[
{t:"p",x:"An issue is a current problem, request or concern that needs management attention. A risk that materializes becomes an issue. PRINCE2 groups issues into requests for change, off-specifications (something is or will be missing or wrong) and problems or concerns."},
{t:"steps",h:"Issue and change control",i:[
["Capture","Log it, classify type and severity."],["Examine","Assess impact on time, cost, quality, scope, benefits and risk."],["Propose","Identify options and recommend one."],["Decide","Within tolerance: the project manager or change authority. Beyond: escalate to the board or sponsor."],["Implement","Act, update plans and close the issue."]]},
{t:"list",h:"Issue log fields",i:[
["Type and priority","Request for change, off-specification or problem; priority and severity."],["Owner","Who drives it to resolution."],["Target date","When it must be resolved."],["Decision and status","What was decided, by whom, and where it stands."]]},
{t:"note",h:"Escalate early",x:"Escalation is a control, not a failure. If an issue will breach agreed tolerance, raise an exception or escalation with options and a recommendation, not just the problem."}
],related:["risk","dependencies","prince2","rapid"]},

dependencies:{group:"raid",title:"Managing dependencies",tagline:"Links between tasks, teams or projects that affect when work can happen.",
sections:[
{t:"p",x:"A dependency exists when one piece of work relies on another. On multi-team or multi-vendor projects, external dependencies are among the most frequent causes of delay because nobody on your team controls them."},
{t:"list",h:"Types of logical relationship",i:[
["Finish-to-start (FS)","B can’t start until A finishes. The most common."],["Start-to-start (SS)","B can’t start until A starts."],["Finish-to-finish (FF)","B can’t finish until A finishes."],["Start-to-finish (SF)","B can’t finish until A starts. Rare."]]},
{t:"list",h:"By nature",i:[
["Mandatory","Inherent in the work (you can’t test before you build)."],["Discretionary","A chosen sequence, based on best practice."],["External","On parties outside the project: vendors, other projects, regulators."],["Internal","Between teams or tasks within the project."]]},
{t:"steps",h:"Managing them",i:[
["Identify","During planning and in PI Planning or cross-team syncs."],["Record giver, receiver and need-by date","Both sides must agree what and when."],["Visualize","Network diagram, critical path or a dependency board."],["Track","Review at a regular cadence; treat slipping ones as risks."],["Escalate","Unresolved conflicts go to programme or portfolio level."]]}
],related:["risk","safe","pmbok","issues"]},

okr:{group:"concepts",title:"Objectives and Key Results (OKR)",tagline:"A goal-setting system linking ambitious objectives to measurable results.",
sections:[
{t:"p",x:"OKRs pair a qualitative Objective (where we want to go) with a few quantitative Key Results (how we’ll know we got there). Popularized by Intel and Google, they align teams on outcomes and make progress visible across the organization."},
{t:"list",h:"Building blocks",i:[
["Objective","Qualitative, inspiring and time-bound. “Make self-service the preferred support channel.”"],["Key result","Measurable outcome, not a task. “Raise portal deflection rate from 20% to 45%.” Usually 3–5 per objective."],["Initiative","The work that moves a key result: projects, epics, experiments. Kept separate from KRs."]]},
{t:"list",h:"Practices",i:[
["Cadence","Quarterly team OKRs, often under annual company OKRs, with weekly check-ins."],["Committed vs aspirational","Committed OKRs are expected to hit 100%; aspirational ones count as success around 0.6–0.7."],["Transparency","Everyone can see everyone’s OKRs."],["Separate from appraisal","Tying OKRs to pay encourages sandbagging."]]},
{t:"list",h:"Common mistakes",i:[
["Task lists as KRs","“Launch portal” is an initiative; measure its effect instead."],["Too many","More than 3–5 objectives means no priorities."],["Set and forget","No check-ins means no learning."]]},
{t:"note",h:"Linking OKRs to projects",x:"A project’s business case should name the key results it moves. That gives the steering group a value-based way to prioritize and to stop work that no longer contributes."}
],related:["kpi","strategic-cascade","business-justification","safe"]},

kpi:{group:"concepts",title:"Key Performance Indicators (KPI)",tagline:"The few measures that show whether delivery, service or benefits are on track.",
sections:[
{t:"p",x:"A KPI is a measure chosen because it is critical to success, tracked against a target over time. On projects you meet three families: delivery KPIs (is the project healthy?), service KPIs (is the running service performing?) and benefit KPIs (is the change paying off?). Good KPIs are few, precisely defined and owned by someone who can act on them."},
{t:"list",h:"Metric, KPI or OKR?",i:[
["Metric","Any measurement. Most metrics are useful context, not KPIs."],
["KPI","A selected metric with a target and thresholds, monitored continuously to show health."],
["OKR","A time-bound goal for change. A key result often aims to move a KPI, e.g. raise first contact resolution from 55% to 70% this quarter."],
["Leading vs lagging","Leading indicators predict (risk exposure, WIP); lagging indicators confirm (cost at completion, benefits realized). Use both."]]},
{t:"list",h:"Project delivery KPIs",i:[
["Schedule Performance Index (SPI)","Earned value ÷ planned value. Below 1 means behind schedule."],
["Cost Performance Index (CPI)","Earned value ÷ actual cost. Below 1 means over budget."],
["Estimate at completion (EAC)","Forecast total cost; one common formula is budget at completion ÷ CPI."],
["Milestone hit rate","Share of milestones met on the baseline date."],
["Scope change rate","Approved changes per period or as a share of baseline scope."],
["Risk exposure trend","Total score of open risks over time; should fall as the project progresses."],
["Stakeholder satisfaction","Regular pulse from sponsor and key stakeholders."]]},
{t:"list",h:"Agile and flow KPIs",i:[
["Sprint goal success rate","Share of Sprints that met their goal. Better than velocity for reporting outward."],
["Velocity","For a team’s own planning only; never compare teams by it."],
["Lead time and cycle time","How long work takes from request, or from start, to done."],
["Throughput","Items finished per period."],
["Flow efficiency","Active work time ÷ total lead time. Often below 20%, which shows how much time is spent waiting."],
["PI predictability","In SAFe, business value achieved vs planned for PI objectives; 80–100% is the usual target."],
["DORA delivery metrics","Deployment frequency, lead time for changes, change failure rate and time to restore service."]]},
{t:"list",h:"Service management KPIs",i:[
["SLA compliance","Share of tickets resolved or responded to within target."],
["Mean time to restore (MTTR)","Average time to restore service after an incident."],
["First contact resolution","Share of contacts resolved without escalation."],
["Change success rate","Share of changes implemented without causing incidents or rollback."],
["Self-service deflection","Share of needs solved through the portal or knowledge base."],
["Backlog age","How long open tickets have been waiting."],
["Customer satisfaction (CSAT)","Rating after ticket resolution."]]},
{t:"steps",h:"Setting up KPIs",i:[
["Start from objectives","Each KPI should trace to an objective, benefit or tolerance. If it doesn’t, drop it."],
["Choose few","Around five to seven per audience: steering group, team and service owner need different sets."],
["Define precisely","Formula, data source, frequency, owner and what counts as included or excluded."],
["Baseline and target","Measure the starting point before the project changes anything, so benefits can be proven."],
["Set thresholds","Link red, amber and green to tolerances so status means the same thing everywhere."],
["Review and retire","Check quarterly whether each KPI still drives decisions."]]},
{t:"note",h:"Watch for gaming",x:"Goodhart’s law: once a measure becomes a target, people optimize the number rather than the outcome. Pair KPIs that pull against each other, such as speed with quality, or resolution time with reopen rate."}
],related:["okr","business-justification","pmo-governance","itil","kanban"]},

"business-justification":{group:"concepts",title:"PRINCE2 business justification chain",tagline:"From products to strategy: why each output is worth building.",
sections:[
{t:"p",x:"PRINCE2’s first principle is continued business justification. The chain links what the project produces to the benefits the organization wants, so the business case can be tested at every stage boundary. Programme methods such as MSP add capability as a step between outputs and outcomes."},
{t:"steps",h:"The chain",i:[
["Outputs","The specialist products the project delivers, e.g. a configured service portal."],["Outcomes","The result of change from using the outputs, e.g. users log requests themselves."],["Benefits","Measurable improvements seen as an advantage, e.g. 30% fewer calls to the desk."],["Strategic objectives","The corporate goals the benefits contribute to, e.g. lower cost-to-serve."]]},
{t:"list",h:"Related terms",i:[
["Dis-benefit","A measurable result seen as negative by a stakeholder, e.g. temporary productivity loss."],["Benefits management approach","How and when benefits will be measured, often after the project closes."],["Benefit owner","Usually the Senior User; accountable for realizing benefits."],["Business case contents","Reasons, options, expected benefits and dis-benefits, timescale, costs, investment appraisal and major risks."]]},
{t:"note",h:"Test at every boundary",x:"If the chain breaks, the project should change or stop. Stopping a project whose justification has gone is good governance, not failure."}
],related:["prince2","okr","strategic-cascade","pmo-governance"]},

togaf:{group:"concepts",title:"TOGAF®",tagline:"An enterprise architecture method for moving from current to target state.",
sections:[
{t:"p",x:"TOGAF, published by The Open Group (10th Edition, 2022), centres on the Architecture Development Method (ADM): an iterative cycle for describing current and target architectures and planning the transition. Projects are where architecture becomes reality, so PMs meet TOGAF in phases E to G."},
{t:"steps",h:"ADM phases",i:[
["Preliminary","Set up the architecture capability, principles and tailoring."],["A – Architecture Vision","Scope, stakeholders, high-level vision and approval to proceed."],["B – Business Architecture","Business capabilities, processes and organization."],["C – Information Systems Architectures","Data and application architectures."],["D – Technology Architecture","Infrastructure and platforms."],["E – Opportunities and Solutions","Identify work packages and transition architectures."],["F – Migration Planning","Prioritized roadmap and implementation plan."],["G – Implementation Governance","Architecture contracts and compliance reviews for projects."],["H – Architecture Change Management","Keep the architecture current as things change."]]},
{t:"note",h:"Requirements management",x:"Sits at the centre of the ADM and feeds every phase; requirements are managed continuously rather than once."},
{t:"list",h:"Key concepts",i:[
["Architecture domains","Business, data, application and technology."],["Building blocks","Reusable components: architecture building blocks and solution building blocks."],["Architecture repository","Where models, standards and reference architectures are kept."],["Enterprise Continuum","Classifies assets from generic to organization-specific."],["Architecture Board","Governs architecture decisions and compliance."],["Architecture contract","Agreement between architects and delivery about what will be built."]]}
],related:["pmo-governance","strategic-cascade","dependencies"]},

"pmo-governance":{group:"concepts",title:"PMO governance",tagline:"How projects are directed, controlled and held to account across the organization.",
sections:[
{t:"p",x:"Project governance defines who decides what, based on which information, and how problems escalate. A Project or Portfolio Management Office (PMO) often designs and runs that framework, from templates and reporting to portfolio prioritization."},
{t:"list",h:"PMO types by level of control",i:[
["Supportive","Provides templates, training and lessons learned. Low control."],["Controlling","Requires compliance with methods, tools and reporting. Moderate control."],["Directive","Directly manages projects and assigns project managers. High control."]]},
{t:"list",h:"Scope of the office",i:[
["Project office","Supports a single large project."],["Programme office","Coordinates related projects toward shared outcomes."],["Portfolio office","Selects, prioritizes and balances the whole investment portfolio."],["Centre of excellence","Owns standards, methods, tools and capability building."]]},
{t:"list",h:"Governance building blocks",i:[
["Terms of reference","Purpose, membership and decision rights of each board."],["Decision rights and tolerances","What each level can approve before escalating."],["Stage gates","Go/no-go points with defined entry criteria."],["Reporting cadence","Status reports, RAG definitions, dashboards."],["Escalation path","Who, when and how issues move up."],["Assurance","Independent health checks and audits."]]},
{t:"steps",h:"Typical stage-gate sequence",i:[
["Idea / demand","Is it worth exploring?"],["Business case approval","Fund initiation?"],["Plan approval","Baseline agreed; fund delivery?"],["Go-live readiness","Safe to release?"],["Closure and benefits review","Were the benefits realized?"]]},
{t:"note",h:"Make RAG mean something",x:"Define red, amber and green against tolerances (e.g. amber = forecast within 10% of tolerance). Otherwise everything is green until it is red."}
],related:["prince2","rapid","strategic-cascade","business-justification"]},

"strategic-cascade":{group:"concepts",title:"Strategic alignment cascade",tagline:"A clear line of sight from purpose down to every project and team.",
sections:[
{t:"p",x:"A strategic cascade translates organizational intent into progressively more concrete goals, so every project can show which strategic objective it serves. Methods such as Hoshin Kanri and OKRs are ways of running the cascade."},
{t:"steps",h:"Levels",i:[
["Purpose and vision","Why the organization exists and where it is going."],["Strategic objectives","Three-to-five-year goals and strategic themes."],["Annual priorities","Breakthrough objectives and company OKRs for the year."],["Portfolio and programmes","Investments chosen and funded to deliver the priorities."],["Projects and products","Delivery vehicles with business cases tied to the level above."],["Team goals and deliverables","Sprint goals, work packages and individual objectives."]]},
{t:"list",h:"Making it work",i:[
["Catchball","From Hoshin Kanri: each level negotiates targets with the next, rather than receiving them top-down."],["Line-of-sight test","Ask any team member which objective their work supports; they should be able to answer."],["X-matrix","A one-page Hoshin tool linking objectives, priorities, metrics and owners."],["Feedback upward","Results and learning flow back up to adjust strategy."]]},
{t:"note",h:"Use in project start-up",x:"Before writing a business case, place the project in the cascade. If you can’t, question whether it should be in the portfolio."}
],related:["okr","business-justification","pmo-governance","togaf"]}
};
