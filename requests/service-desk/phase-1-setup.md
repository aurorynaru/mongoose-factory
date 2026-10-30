# Service desk, phase 1 of 4: setup tables and their Forms

Design and order: `requests/service-desk/README.md`. Paste the text block below as one message.

```text
/mongoose-builder

## 1. Goal (required)
What I want, in one or two sentences: Phase 1 of 4 of a service desk app: the four setup tables (projects, agents, statuses, priorities), each with a maintenance Form, filled with fake test rows. Later phases add tickets, a portal with a board, and a dashboard (plan in requests/service-desk/README.md).
Who uses it and for what: Service desk admins keep the lists that tickets pick from. For now only I use it, while it's being built.

## 2. Build type (required, pick one or more)
[x] new Form            [x] new IDO + SQL table     [ ] new portal / shell (Flex) Form
[ ] dashboard / chart   [ ] web page (HTML/JS/CSS asset)   [ ] change an existing factory object (built with this prefix)
[ ] change an existing object the factory didn't build (name it in section 6)
New Forms are built as Flex Forms. Write "Classic" here if you want a Classic Form instead: Classic

## 3. Names
Prefix (every new object name starts with it; keep FX_ unless you want another): FX_
Form name(s) (FX_…): FX_Projects, FX_Agents, FX_Statuses, FX_Priorities
IDO / table name(s) (FX_…): FX_Projects, FX_Agents, FX_Statuses, FX_Priorities
Asset folder (FX_…/index.html):
Leave blank and Claude will propose names in the plan for you to approve.

## 4. Details by type

### 4a. IDOs / tables (one block per table)
#### Table 1
Table / IDO name (FX_…): FX_Agents
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- AgentID | text | 30 | required | key | 
- DisplayName | text | 60 | required | not key | 
- Team | text | 40 | optional | not key | 
- Role | text | 20 | required | not key | Agent
- Active | yes-no |  | required | not key | 1
Relations / lookups (field → other table or IDO): none
Calculated fields (formula in words): none
Test rows to create (fake data only): 4 rows: agent.anna | Anna Agent | Service Desk | Agent; agent.ben | Ben Agent | Service Desk | Agent; lead.carla | Carla Lead | Service Desk | Lead; tech.dev | Dev Tech | Facilities | Agent. All Active.

#### Table 2
Table / IDO name (FX_…): FX_Projects
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- ProjectKey | text | 10 | required | key | 
- ProjectName | text | 60 | required | not key | 
- Description | text | 500 | optional | not key | 
- LeadAgent | text | 30 | optional | not key | 
- NextTicketNo | number |  | required | not key | 1
- Active | yes-no |  | required | not key | 1
Relations / lookups (field → other table or IDO): LeadAgent → FX_Agents (shows the agent's DisplayName)
Calculated fields (formula in words): none
Test rows to create (fake data only): 2 rows: SUP | IT Support | Hardware, software and access requests | lead.carla | NextTicketNo 6; FAC | Facilities | Building and office requests | tech.dev | NextTicketNo 4. Both Active. (Phase 2 creates SUP-1..5 and FAC-1..3, so the next new numbers are SUP-6 and FAC-4.)

#### Table 3
Table / IDO name (FX_…): FX_Statuses
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- StatusCode | text | 20 | required | key | 
- StatusName | text | 40 | required | not key | 
- Category | text | 20 | required | not key | To do
- SortOrder | number |  | required | not key | 0
- IsClosed | yes-no |  | required | not key | 0
Relations / lookups (field → other table or IDO): none
Calculated fields (formula in words): none
Test rows to create (fake data only): 5 rows: OPEN | Open | To do | 10 | no; INPROG | In progress | In progress | 20 | no; WAITING | Waiting for customer | In progress | 30 | no; RESOLVED | Resolved | Done | 40 | no; CLOSED | Closed | Done | 50 | yes.

#### Table 4
Table / IDO name (FX_…): FX_Priorities
Is the data in an existing IDO? (name it, or "new"): new
Fields — one per line: name | type (text / number / decimal / date / yes-no) | length or precision | required? | key? | default
- PriorityCode | text | 10 | required | key | 
- PriorityName | text | 30 | required | not key | 
- SortOrder | number |  | required | not key | 0
- ResponseHours | number |  | required | not key | 8
- ResolveHours | number |  | required | not key | 72
Relations / lookups (field → other table or IDO): none
Calculated fields (formula in words): none
Test rows to create (fake data only): 4 rows: CRITICAL | Critical | 10 | 1 | 4; HIGH | High | 20 | 4 | 24; MEDIUM | Medium | 30 | 8 | 72; LOW | Low | 40 | 24 | 120.

### 4b. Forms (one block per Form)
#### Form 1
Form name (FX_…): FX_Agents
Data it shows (IDO): FX_Agents
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- User name (AgentID)
- Name (DisplayName)
- Team
- Role
- Active
Read-only fields: none
Dropdowns / validation (field → allowed values or source): Role → Agent, Lead, Admin
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

#### Form 2
Form name (FX_…): FX_Projects
Data it shows (IDO): FX_Projects
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- Key (ProjectKey)
- Project (ProjectName)
- Description
- Lead (LeadAgent, showing the agent's name)
- Next ticket number (NextTicketNo)
- Active
Read-only fields: Next ticket number (phase 2's ticket numbering changes it)
Dropdowns / validation (field → allowed values or source): Lead → list from FX_Agents (active agents only)
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

#### Form 3
Form name (FX_…): FX_Statuses
Data it shows (IDO): FX_Statuses
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- Code (StatusCode)
- Status (StatusName)
- Category
- Order (SortOrder)
- Closed (IsClosed)
Read-only fields: none
Dropdowns / validation (field → allowed values or source): Category → To do, In progress, Done
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

#### Form 4
Form name (FX_…): FX_Priorities
Data it shows (IDO): FX_Priorities
How it connects (on its own / tile in another Form's grid / opened by a button on another Form / embedded in another Form's region): on its own
Layout: [x] grid + detail   [ ] grid only   [ ] detail only   [ ] other:
Fields shown, in order (with captions as the user should see them):
- Code (PriorityCode)
- Priority (PriorityName)
- Order (SortOrder)
- Respond within (hours) (ResponseHours)
- Resolve within (hours) (ResolveHours)
Read-only fields: none
Dropdowns / validation (field → allowed values or source): none
Second grid on this Form (another IDO, e.g. the selected row's lines): none
Buttons — one per line: caption | what happens when clicked | what the user sees after
-

## 5. Look and feel
Mock screenshot / reference (attach or give a path): none (standard Mongoose look for the setup Forms)
Colors / theme / fonts (or "match <an existing page>"): default Mongoose theme
Must work on: [x] desktop  [ ] tablet  [ ] phone

## 6. Scope, approvals and limits
Final scope for Forms (User / Group <name> / Site) — default User; Group or Site is saved only after the User-scope version passes: User
Group/Site save approved: not needed (User scope)
Existing objects the factory didn't build that may be changed (name each one, or "none"): none
Other tenant-wide steps allowed (FormSync, deployment, metadata cache unload) — default none: none
Outbound calls allowed (exact endpoint + verb) — default none beyond those already approved: none
Data I must not touch: everything whose name doesn't start with FX_

## 7. Done means (required)
I will accept it when (list what I can see or do at runtime):
- FX_Agents, FX_Projects, FX_Statuses and FX_Priorities open from the Web Client and show the test rows above.
- In each Form I can add a row, Save, close and reopen the Form, and the row is still there; deleting it works the same way.
- FX_Projects' Lead dropdown lists only active agents, by name.
- Role on FX_Agents and Category on FX_Statuses only accept the listed values.
- Sql Tables › Columns shows each table's columns with the types, lengths and key above.

## 8. Anything else
Known problems, deadlines, things to avoid: Build the tables in the order above (FX_Agents first, because FX_Projects looks up agents). Keep every table, column and Form name exactly as written: phases 2 to 4 rely on them. Don't add your own created/updated date or user columns; use the system columns Mongoose adds. Test data is fake only. Put the IDOs in one new IDO project FX_ServiceDeskProject, or ask me if another project fits better.

## 9. Evidence and guide
Evidence: full
Guide with pictures: none
```
