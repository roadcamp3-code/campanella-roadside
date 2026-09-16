"use client";

import { useState } from "react";

export default function TechnicianApplication() {
const [form, setForm] = useState({
name: "",
phone: "",
email: "",
city: "",
state: "",
vehicle: "",
experience: "",
services: [],
equipment: "",
availability: "",
notes: "",
});

const dispatchNumber = "3368664133";

function updateField(event) {
const { name, value } = event.target;

setForm((current) => ({
...current,
[name]: value,
}));
}

function toggleService(service) {
setForm((current) => {
const alreadySelected = current.services.includes(service);

return {
...current,
services: alreadySelected
? current.services.filter((item) => item !== service)
: [...current.services, service],
};
});
}

function submitApplication(event) {
event.preventDefault();

const message = `CAMPANELLA ROADSIDE TECHNICIAN APPLICATION

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City: ${form.city}
State: ${form.state}
Vehicle: ${form.vehicle}
Roadside Experience: ${form.experience}
Services: ${form.services.join(", ") || "None selected"}
Equipment: ${form.equipment}
Availability: ${form.availability}
Notes: ${form.notes || "None"}

Please review this technician application.`;

window.location.href = `sms:${dispatchNumber}?body=${encodeURIComponent(
message
)}`;
}

const services = [
"Vehicle Lockouts",
"Jump Starts",
"Tire Changes",
"Fuel Delivery",
"Battery Assistance",
"EV Assistance",
];

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

.container {
width: min(980px, 92%);
margin: auto;
}

.nav {
border-bottom: 1px solid var(--line);
background: rgba(5,7,10,.95);
position: sticky;
top: 0;
z-index: 20;
}

.navInner {
min-height: 76px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
}

.brand {
font-weight: 900;
letter-spacing: 1px;
}

.brand span {
color: var(--blue2);
}

.back {
color: var(--blue2);
text-decoration: none;
font-weight: 800;
}

.hero {
padding: 80px 0 40px;
background:
radial-gradient(circle at 80% 20%, rgba(0,183,255,.15), transparent 30%),
linear-gradient(120deg, #05070a, #0b111a);
}

.eyebrow {
color: var(--blue2);
font-size: 13px;
font-weight: 900;
letter-spacing: 2px;
margin-bottom: 14px;
}

h1 {
font-size: clamp(42px, 7vw, 72px);
line-height: 1;
margin: 0 0 18px;
}

.hero p {
color: var(--gray);
font-size: 18px;
line-height: 1.7;
max-width: 760px;
}

.content {
padding: 50px 0 90px;
}

.card {
background: var(--card);
border: 1px solid rgba(0,183,255,.2);
border-radius: 18px;
padding: 30px;
}

.grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
}

.field {
display: flex;
flex-direction: column;
gap: 8px;
}

.full {
grid-column: 1 / -1;
}

label {
font-weight: 800;
font-size: 14px;
}

input,
select,
textarea {
width: 100%;
background: #080c12;
color: white;
border: 1px solid rgba(255,255,255,.14);
border-radius: 8px;
padding: 14px;
outline: none;
}

input:focus,
select:focus,
textarea:focus {
border-color: var(--blue2);
}

textarea {
min-height: 110px;
resize: vertical;
}

.services {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 12px;
}

.serviceOption {
display: flex;
align-items: center;
gap: 10px;
background: #080c12;
border: 1px solid var(--line);
border-radius: 8px;
padding: 13px;
cursor: pointer;
}

.serviceOption input {
width: auto;
}

.button {
width: 100%;
border: none;
border-radius: 8px;
padding: 16px;
font-weight: 900;
cursor: pointer;
color: white;
background: linear-gradient(135deg, var(--blue), var(--blue2));
box-shadow: 0 0 28px rgba(8,124,255,.22);
}

.notice {
margin-top: 14px;
color: var(--gray);
font-size: 12px;
line-height: 1.6;
}

.requirements {
margin-top: 35px;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 14px;
}

.requirement {
background: #0b1017;
border: 1px solid var(--line);
border-radius: 10px;
padding: 16px;
color: var(--gray);
}

.requirement strong {
color: var(--blue2);
}

@media (max-width: 700px) {
.grid,
.services,
.requirements {
grid-template-columns: 1fr;
}

.full {
grid-column: auto;
}
}
`}</style>

<header className="nav">
<div className="container navInner">
<div className="brand">
CAMPANELLA <span>ROADSIDE</span>
</div>

<a href="/" className="back">
Back to Home
</a>
</div>
</header>

<section className="hero">
<div className="container">
<div className="eyebrow">JOIN THE NETWORK</div>

<h1>Become a Campanella Roadside Technician.</h1>

<p>
Apply to receive roadside service opportunities in your local
coverage area. Independent technicians use their own vehicle,
equipment and smartphone to complete roadside calls.
</p>
</div>
</section>

<section className="content">
<div className="container">
<form className="card" onSubmit={submitApplication}>
<div className="grid">
<div className="field">
<label htmlFor="name">Full Name</label>
<input
id="name"
name="name"
value={form.name}
onChange={updateField}
required
/>
</div>

<div className="field">
<label htmlFor="phone">Phone Number</label>
<input
id="phone"
name="phone"
type="tel"
value={form.phone}
onChange={updateField}
required
/>
</div>

<div className="field full">
<label htmlFor="email">Email Address</label>
<input
id="email"
name="email"
type="email"
value={form.email}
onChange={updateField}
required
/>
</div>

<div className="field">
<label htmlFor="city">City</label>
<input
id="city"
name="city"
value={form.city}
onChange={updateField}
required
/>
</div>

<div className="field">
<label htmlFor="state">State</label>
<input
id="state"
name="state"
value={form.state}
onChange={updateField}
placeholder="NC"
required
/>
</div>

<div className="field full">
<label htmlFor="vehicle">
Vehicle You Will Use for Roadside Calls
</label>

<input
id="vehicle"
name="vehicle"
value={form.vehicle}
onChange={updateField}
placeholder="Year / Make / Model"
required
/>
</div>

<div className="field full">
<label htmlFor="experience">
Roadside / Automotive Experience
</label>

<textarea
id="experience"
name="experience"
value={form.experience}
onChange={updateField}
placeholder="Tell us about your roadside, towing, automotive or delivery experience."
required
/>
</div>

<div className="field full">
<label>Services You Can Perform</label>

<div className="services">
{services.map((service) => (
<label className="serviceOption" key={service}>
<input
type="checkbox"
checked={form.services.includes(service)}
onChange={() => toggleService(service)}
/>

{service}
</label>
))}
</div>
</div>

<div className="field full">
<label htmlFor="equipment">Equipment You Currently Have</label>

<textarea
id="equipment"
name="equipment"
value={form.equipment}
onChange={updateField}
placeholder="Example: jump box, lockout kit, 3-ton jack, lug wrench, fuel can..."
required
/>
</div>

<div className="field full">
<label htmlFor="availability">Availability</label>

<select
id="availability"
name="availability"
value={form.availability}
onChange={updateField}
required
>
<option value="">Choose availability</option>
<option>Full Time</option>
<option>Part Time</option>
<option>Evenings</option>
<option>Overnight</option>
<option>Weekends</option>
<option>On Call / Flexible</option>
</select>
</div>

<div className="field full">
<label htmlFor="notes">Anything Else?</label>

<textarea
id="notes"
name="notes"
value={form.notes}
onChange={updateField}
placeholder="Additional information, preferred coverage area, etc."
/>
</div>

<div className="field full">
<button className="button" type="submit">
Submit Technician Application
</button>

<div className="notice">
Submitting opens a prepared text message to Campanella
Roadside with your application information. Submission
does not guarantee contractor approval or work
availability.
</div>
</div>
</div>
</form>

<div className="requirements">
<div className="requirement">
<strong>Required:</strong> Reliable personal vehicle
</div>

<div className="requirement">
<strong>Required:</strong> Valid driver's license
</div>

<div className="requirement">
<strong>Required:</strong> Current auto insurance
</div>

<div className="requirement">
<strong>Required:</strong> Smartphone
</div>

<div className="requirement">
<strong>Equipment:</strong> Basic roadside service tools
</div>

<div className="requirement">
<strong>Status:</strong> Independent contractor opportunity
</div>
</div>
</div>
</section>
</main>
);
}
