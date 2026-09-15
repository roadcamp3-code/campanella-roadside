export default function Home() {
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

return (
<main>
<style>{`
:root {
--blue: #087cff;
--blue2: #00b7ff;
--black: #05070a;
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
background: rgba(5,7,10,.94);
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
border-radius: 8px;
font-weight: 900;
box-shadow: 0 0 28px rgba(8,124,255,.25);
}

.secondaryButton {
display: inline-flex;
align-items: center;
justify-content: center;
padding: 14px 23px;
border: 1px solid rgba(255,255,255,.22);
border-radius: 8px;
font-weight: 900;
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
max-width: 520px;
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
background: #080c12;
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

.why {
background:
radial-gradient(circle at 10% 20%, rgba(8,124,255,.12), transparent 25%),
var(--black);
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

.tech {
background: #080c12;
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

footer {
border-top: 1px solid var(--line);
padding: 35px 0;
color: var(--gray);
}

.footerInner {
display: flex;
justify-content: space-between;
gap: 20px;
flex-wrap: wrap;
}

@media (max-width: 900px) {
.heroGrid,
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
.whyGrid {
grid-template-columns: 1fr;
}

.hero h1 {
font-size: 51px;
}

.logoBox {
min-height: 300px;
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
<a href="#technicians">Technicians</a>
<a href="tel:3368664133" className="callButton">
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
<a href="tel:3368664133" className="primaryButton">
Call 336-866-4133
</a>

<a href="#services" className="secondaryButton">
View Services
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

<h2>
Roadside problems handled.
</h2>

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

<section className="why">
<div className="container">
<div className="sectionTitle">
<div className="eyebrow">WHY CAMPANELLA</div>

<h2>
Fast. Reliable. Built for the road.
</h2>
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
<div className="eyebrow">
JOIN THE NETWORK
</div>

<div className="sectionTitle">
<h2>
Become a Campanella Roadside technician.
</h2>

<p>
We’re building a network of independent roadside
technicians who can receive service opportunities in
their coverage area.
</p>
</div>

<a
href="mailto:campanellaroadside@gmail.com"
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

<h2>
Stranded? Give us a call.
</h2>

<p>
Lockouts • Jump Starts • Tire Changes • Fuel Delivery
</p>

<a href="tel:3368664133" className="primaryButton">
Call 336-866-4133
</a>
</div>
</section>

<footer>
<div className="container footerInner">
<div>
© 2026 Campanella Roadside Assistance
</div>

<div>
Help When You Need It Most.
</div>
</div>
</footer>
</main>
);
}
