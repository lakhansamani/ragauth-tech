import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAGAuth — Permission-Aware RAG Security | Stop AI Data Leaks",
  description:
    "RAGAuth enforces user permissions before vector retrieval — not after. Built on OpenFGA + Authorizer. Self-hostable, open source core. No per-user pricing.",
  metadataBase: new URL("https://ragauth.tech"),
  alternates: {
    canonical: "https://ragauth.tech",
  },
  keywords: [
    "RAG security",
    "permission-aware RAG",
    "AI data leak prevention",
    "vector database security",
    "OpenFGA",
    "multi-tenant RAG",
    "retrieval augmented generation security",
    "RAGAuth",
    "Authorizer",
    "HIPAA RAG",
    "secure AI",
    "pre-filter RAG",
    "RAG access control",
    "AI permission control",
  ],
  authors: [{ name: "Lakhan Samani", url: "https://praalaktech.com" }],
  creator: "Praalak Tech Solutions",
  publisher: "Praalak Tech Solutions",
  openGraph: {
    title: "RAGAuth — Your AI feature can leak one customer's data to another",
    description:
      "Stop AI data leaks at the retrieval layer. Permission-aware RAG built on Authorizer + OpenFGA.",
    url: "https://ragauth.tech",
    siteName: "RAGAuth",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAGAuth — Permission-Aware RAG Security",
    description:
      "Stop AI data leaks at the retrieval layer. Permission-aware RAG built on Authorizer + OpenFGA.",
    creator: "@lakhansamani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "theme-color": "#0a0e1a",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Praalak Tech Solutions",
  alternateName: "RAGAuth",
  url: "https://ragauth.tech",
  email: "lakhan@authorizer.dev",
  description:
    "Praalak Tech Solutions builds permission-aware AI security infrastructure. RAGAuth is their flagship product for securing RAG pipelines.",
  sameAs: [
    "https://github.com/authorizerdev/authorizer",
    "https://authorizer.dev",
    "https://praalaktech.com",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RAGAuth",
  url: "https://ragauth.tech",
  description:
    "Permission-aware RAG security. Enforces user permissions before vector retrieval — not after.",
  publisher: {
    "@type": "Organization",
    name: "Praalak Tech Solutions",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RAGAuth",
  alternateName: "RAGAuth by Authorizer",
  description:
    "RAGAuth is a permission-aware RAG security layer that enforces user permissions before vector retrieval using OpenFGA relationship-based access control. Forbidden documents are never retrieved, never scored, and never in the LLM prompt. Open source core, self-hostable, MIT licensed.",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "AI Security / RAG Security",
  operatingSystem: "Linux, Docker, Cloud",
  url: "https://ragauth.tech",
  downloadUrl: "https://github.com/authorizerdev/authorizer",
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
  offers: [
    {
      "@type": "Offer",
      name: "Open Source",
      price: "0",
      priceCurrency: "USD",
      description: "Self-hosted, MIT-licensed. Full permission-aware RAG engine.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "149",
      priceCurrency: "USD",
      description:
        "Managed hosting. Up to 3 projects. Managed Vector DB + Authorizer. Per project, not per user.",
    },
  ],
  creator: {
    "@type": "Organization",
    name: "Praalak Tech Solutions",
    url: "https://praalaktech.com",
  },
  featureList: [
    "Pre-filter at retrieval layer",
    "Relationship-based access control via OpenFGA",
    "Multi-tenant isolation",
    "Instant permission revocation without re-indexing",
    "JWT-based authentication",
    "Self-hostable with Docker Compose",
    "EU AI Act Article 12 audit logs",
    "BYO LLM support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
