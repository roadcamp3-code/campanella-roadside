import "./globals.css";

export const metadata = {
title: "Campanella Roadside Assistance",
description: "Fast roadside assistance when you need it most.",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
