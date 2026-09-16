"use client";

import { useState } from "react";

export default function Home() {
const dispatchNumber = "3368664133";

const [form, setForm] = useState({
name: "",
phone: "",
location: "",
service: "",
vehicle: "",
notes: "",
});

const [locationStatus, setLocationStatus] = useState("");

const services = [
{
icon: "🔑",
title: "Vehicle Lockouts",
text: "Locked your keys inside? We’ll help get you back into your vehicle.",
price: "From $40",
},
{
icon: "⚡",
title: "Jump Starts",
text: "Dead battery? Fast jump-start service to help get you moving again.",
price: "From $40",
},
{
icon: "🛞",
title: "Tire Changes",
text: "Flat tire assistance using your vehicle’s usable spare tire.",
price: "From $30",
},
{
icon: "⛽",
title: "Fuel Delivery",
text: "Ran out of gas? Emergency fuel delivered directly to your location.",
price: "From $30",
},
{
icon: "🔋",
title: "Battery Assistance",
text: "Roadside battery assistance when your vehicle won’t start.",
price: "Call for pricing",
},
{
icon: "🔌",
title: "EV Assistance",
text: "Emergency EV roadside support as service coverage expands.",
price: "Coming Soon",
},
];

function updateForm(event) {
const { name, value } = event.target;

setForm((current) => ({
...current,
[name]: value,
}));
}

function useMyLocation() {
if (!navigator.geolocation) {
setLocationStatus("Location services are not supported on this device.");
return;
}

setLocationStatus("Getting your location...");

navigator.geolocation.getCurrentPosition(
(position) => {
const lat = position.coords.latitude.toFixed(6);
const lng = position.coords.longitude.toFixed(6);

setForm((current) => ({
...current,
location: `${lat}, ${lng}`,
}));

setLocationStatus("Location added.");
},
() => {
setLocationStatus(
"We could not get your location. Enter your address manually."
);
}
);
}

function submitRequest(event) {
event.preventDefault();

const message = `CAMPANELLA ROADSIDE SERVICE REQUEST

Customer: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Service Needed: ${form.service}
Vehicle: ${form.vehicle || "Not provided"}
Details: ${form.notes || "None"}

Please contact customer to confirm pricing and dispatch.`;

window.location.href = `sms:${dispatchNumber}?body=${encodeURIComponent(
message
)}`;
}

return (
<main>
<style>{`
:root {
--blue: #087cff;
--blue2: #00b7ff;
--black: #05070a;
--dark: #080c12;
--card: #10151d;
--white: #ffffff;
--gray: #9ba6b2;
--line: rgba(255,255,255,.1);
}

.container {
width: min(1180px, 92%);
margin: auto;
}

.nav {
position: sticky;
top: 0;
z-index: 50;
background: rgba(5,7,10,.95);
backdrop-filter: blur(14px);
border-bottom: 1px solid var(--line);
}

.navInner {
min-height: 76px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 25px;
}

.brand {
font-size: 20px;
font-weight: 900;
letter-spacing: 1px;
}

.brand span {
color: var(--blue);
}

.navLinks {
display: flex;
align-items: center;
gap: 24px;
font-weight: 700;
font-size: 14px;
}

.navLinks a:hover {
color: var(--blue2);
}

.callButton,
.primaryButton {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 15px 23px;
background: linear-gradient(135deg, var(--blue), var(--blue2));
color: white;
border: none;
border-radius: 8px;
font-weight: 900;
cursor: pointer;
box-shadow: 0 0 28px rgba(8,124,255,.25);
}

.secondaryButton {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 14px 23px;
border: 1px solid rgba(255,255,255,.22);
background: transparent;
color: white;
border-radius: 8px;
font-weight: 900;
cursor: pointer;
}

.hero {
min-height: 760px;
display: flex;
align-items: center;
background:
radial-gradient(circle at 80% 25%, rgba(0,183,255,.18), transparent 30%),
radial-gradient(circle at 20% 80%, rgba(8,124,255,.12), transparent 30%),
linear-gradient(120deg, #05070a, #0b111a);
}

.heroGrid {
display: grid;
grid-template-columns: 1.05fr .95fr;
align-items: center;
gap: 60px;
}

.eyebrow {
color: var(--blue2);
font-size: 13px;
font-weight: 900;
letter-spacing: 2px;
margin-bottom: 18px;
}

.hero h1 {
font-size: clamp(48px, 7vw, 84px);
line-height: .95;
margin: 0 0 24px;
}

.hero h1 span {
color: var(--blue);
}

.hero p {
color: var(--gray);
font-size: 19px;
line-height: 1.7;
max-width: 650px;
}

.heroButtons {
display: flex;
flex-wrap: wrap;
gap: 14px;
margin-top: 30px;
}

.logoBox {
background: linear-gradient(145deg, #111925, #080b10);
border: 1px solid rgba(0,183,255,.25);
border-radius: 22px;
min-height: 460px;
display: flex;
align-items: center;
justify-content: center;
padding: 25px;
box-shadow: 0 30px 80px rgba(0,0,0,.5);
}

.logoBox img {
width: 100%;
max-width: 560px;
object-fit: contain;
}

section {
padding: 95px 0;
}

.sectionTitle {
max-width: 720px;
margin-bottom: 45px;
}

.sectionTitle h2 {
font-size: clamp(36px, 5vw, 54px);
line-height: 1.05;
margin: 0 0 15px;
}

.sectionTitle p {
color: var(--gray);
font-size: 17px;
line-height: 1.7;
}

.services {
background: var(--dark);
}

.serviceGrid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 18px;
}

.card {
padding: 28px;
background: var(--card);
border: 1px solid var(--line);
border-radius: 16px;
transition: .2s;
}

.card:hover {
transform: translateY(-5px);
border-color: rgba(0,183,255,.5);
}

.icon {
width: 54px;
height: 54px;
display: flex;
align-items: center;
justify-content: center;
background: rgba(8,124,255,.12);
border: 1px solid rgba(8,124,255,.25);
border-radius: 12px;
font-size: 25px;
margin-bottom: 20px;
}

.card h3 {
font-size: 21px;
margin: 0 0 10px;
}

.card p {
color: var(--gray);
min-height: 70px;
line-height: 1.6;
}

.price {
color: var(--blue2);
font-weight: 900;
}

.request {
background:
radial-gradient(circle at 80% 20%, rgba(8,124,255,.12), transparent 30%),
#05070a;
}

.requestGrid {
display: grid;
grid-template-columns: .8fr 1.2fr;
gap: 55px;
align-items: start;
}

.requestInfo h2 {
font-size: clamp(38px, 5vw, 58px);
line-height: 1.05;
margin: 0 0 20px;
}

.requestInfo p {
color: var(--gray);
line-height: 1.7;
font-size: 17px;
}

.dispatchNumber {
font-size: 27px;
font-weight: 900;
color: var(--blue2);
margin: 25px 0;
}

.formCard {
background: var(--card);
border: 1px solid rgba(0,183,255,.22);
border-radius: 18px;
padding: 30px;
}

.formGrid {
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

.field label {
font-size: 14px;
font-weight: 800;
}

.field input,
.field select,
.field textarea {
width: 100%;
background: #080c12;
color: white;
border: 1px solid rgba(255,255,255,.14);
border-radius: 8px;
padding: 14px;
outline: none;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
border-color: var(--blue2);
}

.field textarea {
min-height: 120px;
resize: vertical;
}

.locationRow {
display: grid;
grid-template-columns: 1fr auto;
gap: 10px;
}

.locationButton {
border: 1px solid rgba(0,183,255,.4);
background: rgba(8,124,255,.12);
color: white;
border-radius: 8px;
padding: 0 16px;
cursor: pointer;
font-weight: 800;
}

.locationStatus {
color: var(--blue2);
font-size: 12px;
margin-top: 5px;
}

.formNotice {
color: var(--gray);
font-size: 12px;
line-height: 1.6;
margin-top: 14px;
}

.why {
background: var(--dark);
}

.whyGrid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 18px;
}

.whyBox {
border-left: 3px solid var(--blue);
padding: 10px 25px;
}

.whyBox h3 {
font-size: 22px;
margin: 0 0 8px;
}

.whyBox p {
color: var(--gray);
line-height: 1.6;
}

.tech {
background: #05070a;
}

.techGrid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 50px;
align-items: center;
}

.requirements {
display: grid;
gap: 12px;
}

.requirement {
background: var(--card);
border: 1px solid var(--line);
border-radius: 10px;
padding: 16px 18px;
}

.requirement span {
color: var(--blue2);
font-weight: 900;
margin-right: 10px;
}

.cta {
text-align: center;
background: linear-gradient(135deg, #07111e, #05070a);
}

.cta h2 {
font-size: clamp(38px, 6vw, 64px);
margin: 0 0 18px;
}

.cta p {
color: var(--gray);
font-size: 18px;
margin-bottom: 30px;
}

footer {
border-top: 1px solid var(--line);
padding: 35px 0;
color: var(--gray);
background: #05070a;
}

.footerInner {
display: flex;
justify-content: space-between;
gap: 20px;
flex-wrap: wrap;
}

@media (max-width: 900px) {
.heroGrid,
.requestGrid,
.techGrid {
grid-template-columns: 1fr;
}

.serviceGrid,
.whyGrid {
grid-template-columns: 1fr 1fr;
}

.navLinks a:not(.callButton) {
display: none;
}

.hero {
min-height: auto;
padding: 85px 0;
}
}

@media (max-width: 600px) {
.serviceGrid,
.whyGrid,
.formGrid {
grid-template-columns: 1fr;
}

.full {
grid-column: auto;
}

.hero h1 {
font-size: 49px;
}

.logoBox {
min-height: 300px;
}

.locationRow {
grid-template-columns: 1fr;
}

.locationButton {
padding: 14px;
}
}
`}</style>

<header className="nav">
<div className="container navInner">
<div className="brand">
CAMPANELLA <span>ROADSIDE</span>
</div>

<nav className="navLinks">
<a href="#services">Services</a>
<a href="#request">Request Help</a>
<a href="#technicians">Technicians</a>

<a href={`tel:${dispatchNumber}`} className="callButton">
Call Now
</a>
</nav>
</div>
</header>

<section className="hero">
<div className="container heroGrid">
<div>
<div className="eyebrow">
24/7 ROADSIDE ASSISTANCE
</div>

<h1>
HELP WHEN YOU
<br />
<span>NEED IT MOST.</span>
</h1>

<p>
Campanella Roadside Assistance connects stranded drivers
with fast, dependable roadside help for lockouts,
jump starts, flat tires, fuel emergencies and more.
</p>

<div className="heroButtons">
<a href="#request" className="primaryButton">
Request Roadside Help
</a>

<a href={`tel:${dispatchNumber}`} className="secondaryButton">
Call Dispatch
</a>
</div>
</div>

<div className="logoBox">
<img
src="/campanella-roadside-logo.png"
alt="Campanella Roadside Assistance"
/>
</div>
</div>
</section>

<section className="services" id="services">
<div className="container">
<div className="sectionTitle">
<div className="eyebrow">OUR SERVICES</div>

<h2>Roadside problems handled.</h2>

<p>
Whether you’re locked out, dealing with a dead battery,
stranded with a flat tire or out of fuel, Campanella
Roadside is built to get help headed your way.
</p>
</div>

<div className="serviceGrid">
{services.map((service) => (
<div className="card" key={service.title}>
<div className="icon">{service.icon}</div>

<h3>{service.title}</h3>

<p>{service.text}</p>

<div className="price">{service.price}</div>
</div>
))}
</div>
</div>
</section>

<section className="request" id="request">
<div className="container requestGrid">
<div className="requestInfo">
<div className="eyebrow">REQUEST ROADSIDE HELP</div>

<h2>Tell dispatch where you are and what happened.</h2>

<p>
Enter the information below and Campanella Roadside will
receive your service request. A dispatcher can confirm
availability, pricing and technician arrival information.
</p>

<div className="dispatchNumber">
336-866-4133
</div>

<a href={`tel:${dispatchNumber}`} className="primaryButton">
Call Dispatch Now
</a>
</div>

<form className="formCard" onSubmit={submitRequest}>
<div className="formGrid">
<div className="field">
<label htmlFor="name">Your Name</label>

<input
id="name"
name="name"
type="text"
value={form.name}
onChange={updateForm}
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
onChange={updateForm}
required
/>
</div>

<div className="field full">
<label htmlFor="location">Breakdown Location</label>

<div className="locationRow">
<input
id="location"
name="location"
type="text"
placeholder="Address, intersection, parking lot or coordinates"
value={form.location}
onChange={updateForm}
required
/>

<button
type="button"
className="locationButton"
onClick={useMyLocation}
>
Use My Location
</button>
</div>

{locationStatus && (
<div className="locationStatus">
{locationStatus}
</div>
)}
</div>

<div className="field">
<label htmlFor="service">Service Needed</label>

<select
id="service"
name="service"
value={form.service}
onChange={updateForm}
required
>
<option value="">Choose service</option>
<option value="Vehicle Lockout">Vehicle Lockout</option>
<option value="Jump Start">Jump Start</option>
<option value="Tire Change">Tire Change</option>
<option value="Fuel Delivery">Fuel Delivery</option>
<option value="Battery Assistance">
Battery Assistance
</option>
<option value="Other Roadside Help">
Other Roadside Help
</option>
</select>
</div>

<div className="field">
<label htmlFor="vehicle">Vehicle</label>

<input
id="vehicle"
name="vehicle"
type="text"
placeholder="Year / Make / Model"
value={form.vehicle}
onChange={updateForm}
/>
</div>

<div className="field full">
<label htmlFor="notes">What Happened?</label>

<textarea
id="notes"
name="notes"
placeholder="Example: Keys locked inside, rear passenger tire flat, battery dead..."
value={form.notes}
onChange={updateForm}
/>
</div>

<div className="field full">
<button type="submit" className="primaryButton">
Send Request to Dispatch
</button>

<div className="formNotice">
Submitting this form opens a prepared text message
containing your roadside request. Final pricing and
technician availability are confirmed by dispatch.
For collisions, injuries, fire or unsafe roadway
emergencies, call 911.
</div>
</div>
</div>
</form>
</div>
</section>

<section className="why">
<div className="container">
<div className="sectionTitle">
<div className="eyebrow">WHY CAMPANELLA</div>

<h2>Fast. Reliable. Built for the road.</h2>
</div>

<div className="whyGrid">
<div className="whyBox">
<h3>Fast Response</h3>
<p>
Dispatch designed to connect drivers with available
roadside technicians quickly.
</p>
</div>

<div className="whyBox">
<h3>Trusted Technicians</h3>
<p>
Building a dependable technician network focused on
professional roadside service.
</p>
</div>

<div className="whyBox">
<h3>Growing Coverage</h3>
<p>
Locally rooted with plans to expand service coverage
into additional markets.
</p>
</div>
</div>
</div>
</section>

<section className="tech" id="technicians">
<div className="container techGrid">
<div>
<div className="eyebrow">JOIN THE NETWORK</div>

<div className="sectionTitle">
<h2>Become a Campanella Roadside technician.</h2>

<p>
We’re building a network of independent roadside
technicians who can receive available service
opportunities in their coverage area.
</p>
</div>

<a
href="/technicians"
className="primaryButton"
>
Apply to Drive With Us
</a>
</div>

<div className="requirements">
<div className="requirement">
<span>✓</span> Reliable personal vehicle
</div>

<div className="requirement">
<span>✓</span> Valid driver’s license
</div>

<div className="requirement">
<span>✓</span> Auto insurance
</div>

<div className="requirement">
<span>✓</span> Lockout kit
</div>

<div className="requirement">
<span>✓</span> Jack and lug wrench
</div>

<div className="requirement">
<span>✓</span> Jump box or jumper cables
</div>

<div className="requirement">
<span>✓</span> Smartphone
</div>
</div>
</div>
</section>

<section className="cta">
<div className="container">
<div className="eyebrow">
CAMPANELLA ROADSIDE ASSISTANCE
</div>

<h2>Stranded? We’re ready.</h2>

<p>
Lockouts • Jump Starts • Tire Changes • Fuel Delivery
</p>

<div className="heroButtons" style={{ justifyContent: "center" }}>
<a href="#request" className="primaryButton">
Request Service
</a>

<a href={`tel:${dispatchNumber}`} className="secondaryButton">
Call 336-866-4133
</a>
</div>
</div>
</section>

<footer>
<div className="container footerInner">
<div>© 2026 Campanella Roadside Assistance</div>
<div>Help When You Need It Most.</div>
</div>
</footer>
</main>
);
}
