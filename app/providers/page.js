"use client";

import { useState } from "react";

export default function ProvidersPage() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(e) {
e.preventDefault();

// We will connect this to the provider database/API next.
setSubmitted(true);
window.scrollTo({ top: 0, behavior: "smooth" });
}

const inputStyle = {
width: "100%",
padding: "14px",
marginTop: "7px",
borderRadius: "8px",
border: "1px solid #d7d7d7",
background: "#ffffff",
color: "#111111",
fontSize: "16px",
};

const labelStyle = {
display: "block",
marginBottom: "18px",
fontWeight: "600",
};

const sectionStyle = {
background: "#ffffff",
borderRadius: "14px",
padding: "24px",
marginBottom: "20px",
boxShadow: "0 5px 20px rgba(0,0,0,.08)",
};

return (
<main
style={{
minHeight: "100vh",
background: "#f4f6f8",
color: "#111111",
fontFamily: "Arial, Helvetica, sans-serif",
}}
>
{/* HEADER */}
<section
style={{
background: "#101820",
color: "#ffffff",
padding: "55px 20px",
textAlign: "center",
}}
>
<div
style={{
maxWidth: "900px",
margin: "0 auto",
}}
>
<p
style={{
margin: "0 0 10px",
fontWeight: "700",
letterSpacing: "2px",
}}
>
CAMPANELLA ROADSIDE
</p>

<h1
style={{
fontSize: "clamp(34px, 6vw, 58px)",
margin: "0 0 15px",
}}
>
Become a Roadside Provider
</h1>

<p
style={{
fontSize: "18px",
lineHeight: "1.6",
maxWidth: "700px",
margin: "0 auto",
color: "#e2e7eb",
}}
>
Join the Campanella Roadside provider network and receive
roadside service opportunities in the areas you choose to cover.
</p>
</div>
</section>

<div
style={{
maxWidth: "800px",
margin: "0 auto",
padding: "35px 18px 70px",
}}
>
{submitted && (
<div
style={{
background: "#e8f7ec",
border: "1px solid #9bd3a8",
padding: "20px",
borderRadius: "12px",
marginBottom: "25px",
}}
>
<strong>Application received.</strong>
<p style={{ marginBottom: "0" }}>
Thank you for your interest in the Campanella Roadside Provider
Network. Our team will review your information and contact you
regarding the next onboarding steps.
</p>
</div>
)}

<form onSubmit={handleSubmit}>
{/* CONTACT INFORMATION */}
<section style={sectionStyle}>
<h2>Contact Information</h2>

<label style={labelStyle}>
Full Name *
<input
required
name="fullName"
type="text"
style={inputStyle}
/>
</label>

<label style={labelStyle}>
Business / Company Name
<input
name="businessName"
type="text"
style={inputStyle}
/>
</label>

<label style={labelStyle}>
Phone Number *
<input
required
name="phone"
type="tel"
style={inputStyle}
/>
</label>

<label style={labelStyle}>
Email Address *
<input
required
name="email"
type="email"
style={inputStyle}
/>
</label>
</section>

{/* COVERAGE */}
<section style={sectionStyle}>
<h2>Service Area</h2>

<label style={labelStyle}>
City *
<input
required
name="city"
type="text"
style={inputStyle}
/>
</label>

<label style={labelStyle}>
State *
<select required name="state" style={inputStyle}>
<option value="">Select State</option>
<option>Alabama</option>
<option>Alaska</option>
<option>Arizona</option>
<option>Arkansas</option>
<option>California</option>
<option>Colorado</option>
<option>Connecticut</option>
<option>Delaware</option>
<option>Florida</option>
<option>Georgia</option>
<option>Hawaii</option>
<option>Idaho</option>
<option>Illinois</option>
<option>Indiana</option>
<option>Iowa</option>
<option>Kansas</option>
<option>Kentucky</option>
<option>Louisiana</option>
<option>Maine</option>
<option>Maryland</option>
<option>Massachusetts</option>
<option>Michigan</option>
<option>Minnesota</option>
<option>Mississippi</option>
<option>Missouri</option>
<option>Montana</option>
<option>Nebraska</option>
<option>Nevada</option>
<option>New Hampshire</option>
<option>New Jersey</option>
<option>New Mexico</option>
<option>New York</option>
<option>North Carolina</option>
<option>North Dakota</option>
<option>Ohio</option>
<option>Oklahoma</option>
<option>Oregon</option>
<option>Pennsylvania</option>
<option>Rhode Island</option>
<option>South Carolina</option>
<option>South Dakota</option>
<option>Tennessee</option>
<option>Texas</option>
<option>Utah</option>
<option>Vermont</option>
<option>Virginia</option>
<option>Washington</option>
<option>West Virginia</option>
<option>Wisconsin</option>
<option>Wyoming</option>
</select>
</label>

<label style={labelStyle}>
Primary ZIP Code *
<input
required
name="zip"
type="text"
inputMode="numeric"
style={inputStyle}
/>
</label>

<label style={labelStyle}>
Coverage Radius *
<select required name="radius" style={inputStyle}>
<option value="">Select Coverage Radius</option>
<option>10 miles</option>
<option>20 miles</option>
<option>30 miles</option>
<option>40 miles</option>
<option>50+ miles</option>
</select>
</label>
</section>

{/* SERVICES */}
<section style={sectionStyle}>
<h2>Services & Equipment</h2>

<p>Select the services you are equipped to perform:</p>

{[
"Jump Starts",
"Tire Changes",
"Vehicle Lockouts",
"Fuel Delivery",
"Battery Installation",
"Minor Roadside Assistance",
].map((service) => (
<label
key={service}
style={{
display: "block",
padding: "9px 0",
fontWeight: "500",
}}
>
<input
type="checkbox"
name="services"
value={service}
style={{ marginRight: "10px" }}
/>
{service}
</label>
))}

<label style={{ ...labelStyle, marginTop: "20px" }}>
Describe Your Vehicle & Equipment *
<textarea
required
name="equipment"
rows="5"
placeholder="Example: Pickup truck, floor jack, impact wrench, jump box, lockout kit..."
style={inputStyle}
/>
</label>
</section>

{/* AVAILABILITY */}
<section style={sectionStyle}>
<h2>Availability</h2>

<label style={labelStyle}>
Typical Availability *
<select required name="availability" style={inputStyle}>
<option value="">Select Availability</option>
<option>Full Time</option>
<option>Part Time</option>
<option>Weekdays</option>
<option>Weekends</option>
<option>Evenings / Nights</option>
<option>24/7 Availability</option>
</select>
</label>

<label style={labelStyle}>
How soon can you begin accepting calls?
<select name="startDate" style={inputStyle}>
<option>Immediately</option>
<option>Within 1 Week</option>
<option>Within 2 Weeks</option>
<option>Within 30 Days</option>
</select>
</label>
</section>

{/* PROVIDER INFORMATION */}
<section style={sectionStyle}>
<h2>Provider Information</h2>

<label style={labelStyle}>
Provider Type *
<select required name="providerType" style={inputStyle}>
<option value="">Select One</option>
<option>Individual Provider</option>
<option>Roadside Assistance Company</option>
<option>Towing Company</option>
<option>Mobile Mechanic</option>
<option>Other</option>
</select>
</label>

<label style={labelStyle}>
Do you currently carry business / roadside insurance? *
<select required name="insured" style={inputStyle}>
<option value="">Select One</option>
<option>Yes</option>
<option>No</option>
<option>Currently Obtaining Coverage</option>
</select>
</label>

<label style={labelStyle}>
Years of Roadside / Automotive Experience
<input
name="experience"
type="number"
min="0"
style={inputStyle}
/>
</label>
</section>

{/* AGREEMENT */}
<section style={sectionStyle}>
<h2>Provider Acknowledgment</h2>

<label
style={{
display: "flex",
gap: "12px",
alignItems: "flex-start",
lineHeight: "1.5",
}}
>
<input
required
type="checkbox"
name="acknowledgment"
style={{
marginTop: "5px",
width: "18px",
height: "18px",
}}
/>

<span>
I certify that the information submitted is accurate. I
understand that submitting this application does not guarantee
acceptance into the Campanella Roadside Provider Network and
that additional documentation and onboarding requirements may
apply.
</span>
</label>
</section>

<button
type="submit"
style={{
width: "100%",
border: "none",
borderRadius: "10px",
padding: "18px",
background: "#101820",
color: "#ffffff",
fontWeight: "800",
fontSize: "18px",
cursor: "pointer",
}}
>
SUBMIT PROVIDER APPLICATION
</button>

<p
style={{
textAlign: "center",
color: "#666",
fontSize: "13px",
marginTop: "18px",
}}
>
Campanella Roadside Provider Network
</p>
</form>
</div>
</main>
);
}
