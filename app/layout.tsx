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
  title: "RAGAuth — Stop AI Data Leaks in Multi-Tenant Apps",
  description:
    "RAGAuth enforces document-level permissions before vector retrieval. Your AI never sees what users aren't allowed to read. Works with OpenAI, LangChain, Pinecone, Weaviate, pgvector.",
  metadataBase: new URL("https://ragauth.tech"),
  alternates: {
    canonical: "https://ragauth.tech",
  },
  keywords: [
    "RAG security",
    "AI data leak prevention",
    "multi-tenant RAG",
    "permission-aware RAG",
    "vector database access control",
    "OpenFGA",
    "RAGAuth",
    "HIPAA RAG",
    "secure AI",
    "pre-filter RAG",
    "RAG access control",
    "AI permission control",
    "LangChain security",
    "OpenAI file search permissions",
  ],
  authors: [{ name: "Lakhan Samani", url: "https://praalaktech.com" }],
  creator: "Praalak Tech Solutions",
  publisher: "Praalak Tech Solutions",
  openGraph: {
    title: "RAGAuth — Your AI feature can leak one customer's data to another",
    description:
      "Stop AI data leaks at the retrieval layer. Document-level permissions for multi-tenant AI apps.",
    url: "https://ragauth.tech",
    siteName: "RAGAuth",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAGAuth — Stop AI Data Leaks",
    description:
      "Document-level permissions for multi-tenant AI apps. Works with OpenAI, LangChain, Pinecone.",
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
    "theme-color": "#EFF6FF",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Praalak Tech Solutions",
  alternateName: "RAGAuth",
  url: "https://ragauth.tech",
  email: "lakhan@praalaktech.com",
  description:
    "Praalak Tech Solutions builds permission-aware AI security infrastructure. RAGAuth is their flagship product for securing RAG pipelines.",
  sameAs: ["https://praalaktech.com"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RAGAuth",
  url: "https://ragauth.tech",
  description:
    "Document-level permissions for multi-tenant AI apps. Enforces user permissions before vector retrieval.",
  publisher: {
    "@type": "Organization",
    name: "Praalak Tech Solutions",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RAGAuth",
  description:
    "RAGAuth is a permission-aware RAG security layer that enforces document-level access control before vector retrieval. Forbidden documents are never retrieved, never scored, and never in the LLM prompt.",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "AI Security / RAG Security",
  operatingSystem: "Linux, Docker, Cloud",
  url: "https://ragauth.tech",
  offers: [
    {
      "@type": "Offer",
      name: "Pro",
      price: "199",
      priceCurrency: "USD",
      description:
        "Managed hosting. Up to 3 projects. Per project, not per user.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "VPC/on-prem deployment, SSO, SLA, compliance documentation.",
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
    "EU AI Act Article 12 audit logs",
    "BYO LLM support",
    "Works with OpenAI, LangChain, Pinecone, Weaviate, pgvector",
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
