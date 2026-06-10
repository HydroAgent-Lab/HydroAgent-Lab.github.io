import "./globals.css";

export const metadata = {
  title: "HydroAgent-Lab",
  description:
    "HydroAgent-Lab is a human-in-the-loop flood forecasting workflow system for auditable operational forecasting."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/hero-hydroagent-lab-fast.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
