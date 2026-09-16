"use client";

import { useEffect, useMemo, useState } from "react";

const initialTechnicians = [
{
id: 1,
name: "Campanella Tech 1",
phone: "",
market: "Winston-Salem, NC",
status: "Available",
},
];

const startingPrices = {
"Vehicle Lockout": 40,
"Jump Start": 40,
"Tire Change": 30,
"Fuel Delivery": 30,
"Battery Assistance": 45,
"Other Roadside Help": 50,
};

export default function DispatchPage() {
const [jobs, setJobs] = useState([]);
const [technicians, setTechnicians] = useState(initialTechnicians);

const [jobForm, setJobForm] = useState({
customer: "",
phone: "",
location: "",
market: "Winston-Salem, NC",
service: "Vehicle Lockout",
vehicle: "",
price: "40",
notes: "",
});

const [techForm, setTechForm] = useState({
name: "",
phone: "",
market: "",
});

useEffect(() => {
const savedJobs = localStorage.getItem("campanellaJobs");
const savedTechs = localStorage.getItem("campanellaTechs");

if (savedJobs) {
setJobs(JSON.parse(savedJobs));
}

if (savedTechs) {
setTechnicians(JSON.parse(savedTechs));
}
}, []);

useEffect(() => {
localStorage.setItem("campanellaJobs", JSON.stringify(jobs));
}, [jobs]);

useEffect(() => {
localStorage.setItem("campanellaTechs", JSON.stringify(technicians));
}, [technicians]);

function updateJobForm(event) {
const { name, value } = event.target;

setJobForm((current) => ({
...current,
[name]: value,
}));

if (name === "service") {
setJobForm((current) => ({
...current,
service: value,
price: String(startingPrices[value] || ""),
}));
}
}

function createJob(event) {
event.preventDefault();

const newJob = {
id: Date.now(),
...jobForm,
status: "Open",
technicianId: "",
createdAt: new Date().toLocaleString(),
};

setJobs((current) => [newJob, ...current]);

setJobForm({
customer: "",
phone: "",
location: "",
market: "Winston-Salem, NC",
service: "Vehicle Lockout",
vehicle: "",
price: "40",
notes: "",
});
}

function updateJob(id, field, value) {
setJobs((current) =>
current.map((job) =>
job.id === id
? {
...job,
[field]: value,
...(field === "technicianId" && value
? { status: "Assigned" }
: {}),
}
: job
)
);
}

function deleteJob(id) {
if (!window.confirm("Delete this roadside call?")) return;

setJobs((current) => current.filter((job) => job.id !== id));
}

function updateTechForm(event) {
const { name, value } = event.target;

setTechForm((current) => ({
...current,
[name]: value,
}));
}

function addTechnician(event) {
event.preventDefault();

const newTech = {
id: Date.now(),
...techForm,
status: "Available",
};

setTechnicians((current) => [...current, newTech]);

setTechForm({
name: "",
phone: "",
market: "",
});
}

function updateTechnician(id, field, value) {
setTechnicians((current) =>
current.map((tech) =>
tech.id === id ? { ...tech, [field]: value } : tech
)
);
}

function deleteTechnician(id) {
if (!window.confirm("Remove this technician?")) return;

setTechnicians((current) =>
current.filter((tech) => tech.id !== id)
);
}

const counts = useMemo(() => {
return {
open: jobs.filter((job) => job.status === "Open").length,
active: jobs.filter((job) =>
["Assigned", "En Route", "On Scene"].includes(job.status)
).length,
completed: jobs.filter((job) => job.status === "Completed").length,
availableTechs: technicians.filter(
(tech) => tech.status === "Available"
).length,
};
}, [jobs, technicians]);

return (
<main>
<style>{`
:root {
--blue: #087cff;
--blue2: #00b7ff;
--black: #05070a;
--dark: #080c12;
--card: #10151d;
--gray: #9ba6b2;
--line: rgba(255,255,255,.1);
--green: #29d17d;
--yellow: #ffc857;
--red: #ff5b64;
}

* {
box-sizing: border-box;
}

body {
margin: 0;
background: var(--black);
color: white;
font-family: Arial, Helvetica, sans-serif;
}

button,
input,
select,
textarea {
font: inherit;
}

.container {
width: min(1450px, 95%);
margin: auto;
}

.topbar {
border-bottom: 1px solid var(--line);
background: #05070a;
position: sticky;
top: 0;
z-index: 30;
}

.topInner {
min-height: 72px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
}

.brand {
font-weight: 900;
font-size: 20px;
}

.brand span {
color: var(--blue2);
}

.homeLink {
color: var(--blue2);
text-decoration: none;
font-weight: 800;
}

.page {
padding: 35px 0 80px;
}

h1 {
margin: 0 0 8px;
font-size: 42px;
}

.subtitle {
color: var(--gray);
margin-bottom: 30px;
}

.stats {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 14px;
margin-bottom: 28px;
}

.stat {
background: var(--card);
border: 1px solid var(--line);
border-radius: 14px;
padding: 20px;
}

.statLabel {
color: var(--gray);
font-size: 13px;
font-weight: 800;
text-transform: uppercase;
}

.statNumber {
font-size: 36px;
font-weight: 900;
margin-top: 5px;
}

.layout {
display: grid;
grid-template-columns: 390px 1fr;
gap: 20px;
align-items: start;
}

.panel {
background: var(--card);
border: 1px solid var(--line);
border-radius: 15px;
padding: 22px;
margin-bottom: 20px;
}

.panel h2 {
margin-top: 0;
font-size: 21px;
}

.field {
display: flex;
flex-direction: column;
gap: 7px;
margin-bottom: 13px;
}

label {
font-size: 13px;
font-weight: 800;
}

input,
select,
textarea {
width: 100%;
color: white;
background: #080c12;
border: 1px solid rgba(255,255,255,.14);
padding: 12px;
border-radius: 7px;
outline: none;
}

textarea {
min-height: 80px;
resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
border-color: var(--blue2);
}

.primary {
width: 100%;
border: none;
border-radius: 8px;
padding: 13px;
cursor: pointer;
color: white;
font-weight: 900;
background: linear-gradient(135deg, var(--blue), var(--blue2));
}

.jobs {
display: grid;
gap: 14px;
}

.job {
background: var(--card);
border: 1px solid var(--line);
border-radius: 15px;
padding: 20px;
}

.jobTop {
display: flex;
justify-content: space-between;
gap: 15px;
align-items: flex-start;
margin-bottom: 16px;
}

.jobTitle {
font-size: 20px;
font-weight: 900;
}

.meta {
color: var(--gray);
font-size: 13px;
margin-top: 4px;
}

.jobGrid {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
margin-bottom: 15px;
}

.infoLabel {
color: var(--gray);
font-size: 11px;
text-transform: uppercase;
font-weight: 900;
}

.infoValue {
margin-top: 4px;
font-weight: 800;
}

.controls {
display: grid;
grid-template-columns: 1fr 1fr auto;
gap: 10px;
align-items: end;
}

.delete {
border: 1px solid rgba(255,91,100,.4);
background: rgba(255,91,100,.08);
color: #ff8d94;
border-radius: 7px;
padding: 12px 15px;
cursor: pointer;
font-weight: 800;
}

.empty {
background: var(--card);
border: 1px dashed rgba(255,255,255,.2);
color: var(--gray);
padding: 45px;
border-radius: 15px;
text-align: center;
}

.techList {
display: grid;
gap: 10px;
margin-top: 15px;
}

.tech {
background: #080c12;
border: 1px solid var(--line);
border-radius: 9px;
padding: 13px;
}

.techName {
font-weight: 900;
}

.techMarket {
color: var(--gray);
font-size: 12px;
margin: 3px 0 9px;
}

.techControls {
display: grid;
grid-template-columns: 1fr auto;
gap: 8px;
}

.smallDelete {
border: none;
background: rgba(255,91,100,.1);
color: #ff8d94;
border-radius: 6px;
cursor: pointer;
padding: 8px 12px;
}

@media (max-width: 1050px) {
.layout {
grid-template-columns: 1fr;
}

.stats {
grid-template-columns: 1fr 1fr;
}

.jobGrid {
grid-template-columns: 1fr 1fr;
}
}

@media (max-width: 650px) {
.stats,
.jobGrid,
.controls {
grid-template-columns: 1fr;
}

h1 {
font-size: 34px;
}
}
`}</style>

<header className="topbar">
<div className="container topInner">
<div className="brand">
CAMPANELLA <span>DISPATCH</span>
</div>

<a className="homeLink" href="/">
Website
</a>
</div>
</header>

<section className="page">
<div className="container">
<h1>Roadside Dispatch</h1>

<div className="subtitle">
Manage service calls, technicians and job status.
</div>

<div className="stats">
<div className="stat">
<div className="statLabel">Open Calls</div>
<div className="statNumber">{counts.open}</div>
</div>

<div className="stat">
<div className="statLabel">Active Calls</div>
<div className="statNumber">{counts.active}</div>
</div>

<div className="stat">
<div className="statLabel">Completed</div>
<div className="statNumber">{counts.completed}</div>
</div>

<div className="stat">
<div className="statLabel">Available Techs</div>
<div className="statNumber">{counts.availableTechs}</div>
</div>
</div>

<div className="layout">
<aside>
<div className="panel">
<h2>Create Roadside Call</h2>

<form onSubmit={createJob}>
<div className="field">
<label>Customer Name</label>
<input
name="customer"
value={jobForm.customer}
onChange={updateJobForm}
required
/>
</div>

<div className="field">
<label>Phone</label>
<input
name="phone"
type="tel"
value={jobForm.phone}
onChange={updateJobForm}
required
/>
</div>

<div className="field">
<label>Breakdown Location</label>
<input
name="location"
value={jobForm.location}
onChange={updateJobForm}
required
/>
</div>

<div className="field">
<label>Market</label>
<input
name="market"
value={jobForm.market}
onChange={updateJobForm}
required
/>
</div>

<div className="field">
<label>Service</label>

<select
name="service"
value={jobForm.service}
onChange={updateJobForm}
>
{Object.keys(startingPrices).map((service) => (
<option key={service}>{service}</option>
))}
</select>
</div>

<div className="field">
<label>Vehicle</label>
<input
name="vehicle"
value={jobForm.vehicle}
onChange={updateJobForm}
placeholder="Year / Make / Model"
/>
</div>

<div className="field">
<label>Customer Price</label>
<input
name="price"
type="number"
value={jobForm.price}
onChange={updateJobForm}
/>
</div>

<div className="field">
<label>Notes</label>
<textarea
name="notes"
value={jobForm.notes}
onChange={updateJobForm}
/>
</div>

<button className="primary" type="submit">
Create Call
</button>
</form>
</div>

<div className="panel">
<h2>Technicians</h2>

<form onSubmit={addTechnician}>
<div className="field">
<label>Name</label>
<input
name="name"
value={techForm.name}
onChange={updateTechForm}
required
/>
</div>

<div className="field">
<label>Phone</label>
<input
name="phone"
value={techForm.phone}
onChange={updateTechForm}
/>
</div>

<div className="field">
<label>Market</label>
<input
name="market"
value={techForm.market}
onChange={updateTechForm}
placeholder="Winston-Salem, NC"
required
/>
</div>

<button className="primary" type="submit">
Add Technician
</button>
</form>

<div className="techList">
{technicians.map((tech) => (
<div className="tech" key={tech.id}>
<div className="techName">{tech.name}</div>

<div className="techMarket">
{tech.market || "No market"}{" "}
{tech.phone ? `• ${tech.phone}` : ""}
</div>

<div className="techControls">
<select
value={tech.status}
onChange={(event) =>
updateTechnician(
tech.id,
"status",
event.target.value
)
}
>
<option>Available</option>
<option>Busy</option>
<option>Offline</option>
</select>

<button
className="smallDelete"
type="button"
onClick={() => deleteTechnician(tech.id)}
>
Remove
</button>
</div>
</div>
))}
</div>
</div>
</aside>

<section>
<div className="panel">
<h2>Service Calls</h2>

<div className="jobs">
{jobs.length === 0 && (
<div className="empty">
No roadside calls yet.
</div>
)}

{jobs.map((job) => (
<div className="job" key={job.id}>
<div className="jobTop">
<div>
<div className="jobTitle">
{job.service} — {job.customer}
</div>

<div className="meta">
Created {job.createdAt}
</div>
</div>

<strong>${job.price}</strong>
</div>

<div className="jobGrid">
<div>
<div className="infoLabel">Phone</div>
<div className="infoValue">{job.phone}</div>
</div>

<div>
<div className="infoLabel">Location</div>
<div className="infoValue">{job.location}</div>
</div>

<div>
<div className="infoLabel">Market</div>
<div className="infoValue">{job.market}</div>
</div>

<div>
<div className="infoLabel">Vehicle</div>
<div className="infoValue">
{job.vehicle || "Not provided"}
</div>
</div>
</div>

{job.notes && (
<div className="meta" style={{ marginBottom: 15 }}>
Notes: {job.notes}
</div>
)}

<div className="controls">
<div className="field" style={{ marginBottom: 0 }}>
<label>Assigned Technician</label>

<select
value={job.technicianId}
onChange={(event) =>
updateJob(
job.id,
"technicianId",
event.target.value
)
}
>
<option value="">Unassigned</option>

{technicians.map((tech) => (
<option value={tech.id} key={tech.id}>
{tech.name} — {tech.market}
</option>
))}
</select>
</div>

<div className="field" style={{ marginBottom: 0 }}>
<label>Status</label>

<select
value={job.status}
onChange={(event) =>
updateJob(
job.id,
"status",
event.target.value
)
}
>
<option>Open</option>
<option>Assigned</option>
<option>En Route</option>
<option>On Scene</option>
<option>Completed</option>
<option>Cancelled</option>
</select>
</div>

<button
className="delete"
type="button"
onClick={() => deleteJob(job.id)}
>
Delete
</button>
</div>
</div>
))}
</div>
</div>
</section>
</div>
</div>
</section>
</main>
);
}
