"use client";

import { 
  Megaphone, 
  Eye, 
  Gift, 
  Link as LinkIcon, 
  FileText, 
  TrendingUp, 
  Search, 
  Shield, 
  Globe, 
  Database, 
  Users, 
  AlertCircle, 
  Phone,
  ChevronDown,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function AdvertiserDisclosurePage() {
  const sections = [
    {
      icon: Megaphone,
      title: "Introduction",
      content: [
        "This Advertiser Disclosure explains how Tickettooasia.com, operated by Noam Flyers Inc., may display advertising, sponsored placements, affiliate links, compensated recommendations, referral arrangements, promotional offers, and other commercial content across its Website and related communication channels.",
        "Tickettooasia.com is an independent travel agency and is not an airline, hotel operator, cruise line, airport authority, government agency, or other transportation operator.",
        "The presence of an airline, hotel, travel supplier, financial product, destination, brand, or other third-party advertiser on Tickettooasia.com does not by itself mean that Noam Flyers Inc. owns, operates, controls, or officially represents that company."
      ]
    },
    {
      icon: Megaphone,
      title: "1. Advertising and Commercial Relationships",
      content: [
        "Noam Flyers Inc. may receive compensation in connection with certain advertising or promotional relationships.",
        "Depending on the arrangement, compensation may include:",
        "• Advertising placement fees",
        "• Affiliate commissions",
        "• Referral fees",
        "• Cost-per-click compensation",
        "• Cost-per-acquisition compensation",
        "• Promotional or campaign fees",
        "• Sponsored-content payments",
        "• Media or marketing support",
        "• Preferred-placement fees",
        "• Other commercially agreed compensation",
        "The existence of compensation does not make Tickettooasia.com the official website of an airline, hotel, cruise line, or other travel supplier.",
        "Compensation also does not automatically mean that Noam Flyers Inc. controls the supplier's prices, availability, operating policies, cancellation rules, or conditions of carriage."
      ],
      twoColumn: true
    },
    {
      icon: Eye,
      title: "2. Clear Advertising Identification",
      content: [
        "Tickettooasia.com aims to identify paid or commercially influenced content clearly and in understandable language.",
        "Depending on the nature of the relationship, labels may include:",
        "• Advertisement",
        "• Sponsored",
        "• Paid Placement",
        "• Affiliate Link",
        "• Promoted Partner",
        "• Sponsored Placement",
        "• ReservationEase Offer — where applicable to a first-party service",
        "The label used should correspond to the actual commercial relationship.",
        "Noam Flyers Inc. does not intend to rely on vague language such as “we work with great brands” where a more direct explanation of a paid relationship is appropriate.",
        "Where a page contains a recommendation, promotion, or endorsement for which compensation may be received, the disclosure may appear near the beginning of the relevant content and/or near the applicable link, offer, or placement."
      ],
      twoColumn: true
    },
    {
      icon: Gift,
      title: "3. Types of Advertising and Promotional Content",
      content: [
        "Tickettooasia.com may display different forms of commercial content.",
        "Examples may include:",
        "• Banner advertisements",
        "• Promotional tiles",
        "• Destination sponsorships",
        "• Travel-partner offers",
        "• Hotel or car rental promotions",
        "• Travel-financing offers",
        "• Card-related offers",
        "• Newsletter advertisements",
        "• Sponsored destination content",
        "• Affiliate offers",
        "• Referral placements",
        "• Preferred supplier placements",
        "• Promotional landing pages",
        "• Third-party travel offers",
        "Some promotional content may be advertising inventory purchased by a third party.",
        "Other content may involve an affiliate or referral relationship where Noam Flyers Inc. may receive compensation if a customer clicks, books, purchases, or otherwise completes a qualifying action.",
        "Tickettooasia.com may also promote its own services. These are first-party promotions rather than third-party advertising."
      ],
      twoColumn: true
    },
    {
      icon: LinkIcon,
      title: "4. Affiliate Links",
      content: [
        "Some links displayed on Tickettooasia.com may be affiliate or referral links.",
        "If a customer clicks or completes a qualifying transaction through such a link, Noam Flyers Inc. may receive compensation.",
        "Where appropriate, affiliate or referral content should be identified as such.",
        "Affiliate compensation does not necessarily increase the price paid by the customer. However, the applicable supplier's own pricing, terms, taxes, fees, and conditions will govern the underlying transaction."
      ]
    },
    {
      icon: FileText,
      title: "5. Sponsored Content",
      content: [
        "Noam Flyers Inc. may publish or display sponsored content, including destination guides, travel articles, promotional pages, newsletters, social-media content, or other editorial-style material.",
        "Where content has been materially sponsored or paid for by a third party, it may be identified using terms such as:",
        "• Sponsored",
        "• Paid Promotion",
        "• Sponsored Content",
        "A sponsorship does not necessarily mean that Noam Flyers Inc. independently endorses every product, service, statement, or representation made by the sponsoring company.",
        "Customers should review the applicable supplier's information and terms before making a purchase."
      ],
      twoColumn: true
    },
    {
      icon: TrendingUp,
      title: "6. Preferred or Paid Placement",
      content: [
        "Certain advertisers, suppliers, or partners may receive preferred placement through a commercial arrangement.",
        "Where a placement is materially influenced by payment or sponsorship, Tickettooasia.com may identify the placement as:",
        "• Sponsored Placement",
        "• Paid Placement",
        "or another substantially similar disclosure.",
        "Paid placement should not be interpreted as a guarantee that the promoted supplier has the lowest price, best service, highest availability, or most suitable option for every customer."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "7. Search Results and Recommendations",
      content: [
        "Tickettooasia.com may use various factors when displaying travel options, recommendations, or promotional content.",
        "Depending on the page or booking environment, these factors may include:",
        "• Price",
        "• Availability",
        "• Route relevance",
        "• Travel dates",
        "• Customer search criteria",
        "• Supplier participation",
        "• Popularity",
        "• Technical feed quality",
        "• Customer demand",
        "• Commercial relationships",
        "• Promotional arrangements",
        "Where a search result, recommendation, or placement is materially influenced by payment, sponsorship, or another commercial arrangement, the applicable commercial relationship may be disclosed near the relevant placement.",
        "Payment for placement does not automatically mean that an option is recommended solely because it is paid."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "8. Supplier Identity and Independence",
      content: [
        "Tickettooasia.com is an independent travel agency.",
        "If an airline, hotel, car-rental company, cruise line, or other travel supplier is displayed on the Website, that supplier's name, logo, trademark, or other identifying information may be used to identify the relevant travel product or service.",
        "The appearance of a supplier's branding does not necessarily mean that the customer is visiting that supplier's official website.",
        "Noam Flyers Inc. should not present supplier logos, names, URLs, telephone numbers, support channels, or other identifying information in a manner intended to falsely suggest that the customer is dealing directly with the supplier when the transaction is actually being handled by Noam Flyers Inc. or another intermediary.",
        "This principle applies to:",
        "• Advertisements",
        "• Search pages",
        "• Landing pages",
        "• Destination pages",
        "• Blogs",
        "• Emails",
        "• Social-media content",
        "• Promotional campaigns",
        "• Telephone scripts",
        "• Customer-service communications"
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "9. Third-Party Websites",
      content: [
        "Some advertisements, affiliate links, or promotional offers may take customers away from Tickettooasia.com.",
        "Where a link directs a customer to an external website, the applicable context may identify that the customer is leaving Tickettooasia.com.",
        "Once a customer leaves Tickettooasia.com, the third party's own:",
        "• Pricing",
        "• Availability",
        "• Privacy practices",
        "• Cookie practices",
        "• Terms and conditions",
        "• Cancellation policies",
        "• Refund policies",
        "• Booking procedures",
        "may apply.",
        "Noam Flyers Inc. does not automatically control the conduct, content, availability, or policies of an independent third-party website."
      ],
      twoColumn: true
    },
    {
      icon: Database,
      title: "10. Advertising Technology and Measurement",
      content: [
        "Noam Flyers Inc. may use third-party advertising, analytics, attribution, or measurement technologies to operate, measure, and improve advertising campaigns.",
        "Depending on applicable settings and requirements, these technologies may help measure:",
        "• Impressions",
        "• Clicks",
        "• Conversions",
        "• Campaign reach",
        "• Attributed bookings",
        "• Audience suppression",
        "• Advertising performance",
        "• Website interactions",
        "Information about cookies, tracking technologies, analytics, and applicable privacy choices is addressed separately in the applicable Privacy Policy and Cookie Policy.",
        "This Advertiser Disclosure focuses on the commercial relationship behind advertising and promotional content."
      ],
      twoColumn: true
    },
    {
      icon: Users,
      title: "11. Social Media and Influencer Content",
      content: [
        "The same disclosure principles may apply to social-media content, creator campaigns, influencer promotions, and other endorsements.",
        "If Noam Flyers Inc. pays for, sponsors, or receives compensation in connection with an endorsement or promotional campaign, the commercial relationship should be disclosed in a manner that is reasonably visible where the endorsement is presented.",
        "Examples of appropriate language may include:",
        "• Sponsored",
        "• Paid Partnership",
        "• Advertisement",
        "• Paid Promotion",
        "• Affiliate Link",
        "A commercial disclosure should not be intentionally hidden in a location where a reasonable user would be unlikely to see it before relying on the endorsement."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "12. Advertising Does Not Guarantee Supplier Performance",
      content: [
        "An advertisement, sponsorship, affiliate relationship, or promotional placement does not guarantee:",
        "• Availability",
        "• Lowest pricing",
        "• Airline performance",
        "• Hotel performance",
        "• Flight operation",
        "• Schedule reliability",
        "• Refund eligibility",
        "• Cancellation eligibility",
        "• Supplier service quality",
        "The applicable supplier's own terms, fare rules, contract of carriage, booking conditions, and applicable law govern the underlying travel service."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "13. Advertising Relationship Table",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Relationship Type</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Example</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Appropriate User-Facing Label</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Sold advertising inventory</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Banner advertisement from a travel brand</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Advertisement</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Affiliate relationship</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Link that may generate commission from a qualifying purchase</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Affiliate Link / We May Earn Commission</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Sponsored editorial</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Destination content funded by a commercial partner</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Sponsored / Paid Promotion</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Preferred placement</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Supplier pays for highlighted positioning</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Sponsored Placement / Paid Placement</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>First-party promotion</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc. promotes its own booking or support service</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Tickettooasia.com Offer / Our Service</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>External redirect</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Link sends customer to an independent third-party website</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>You Are Leaving Tickettooasia.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: FileText,
      title: "14. Example Commercial Disclosure",
      content: [
        "Some links or placements on Tickettooasia.com may be paid advertisements, sponsored placements, or affiliate links. If you click or make a qualifying purchase through certain placements, Noam Flyers Inc. may receive compensation.",
        "Compensation for advertising or placement does not make Tickettooasia.com the official website of the airline, hotel, or other travel supplier displayed.",
        "The applicable supplier's pricing, availability, fare rules, cancellation policies, and operating conditions remain subject to that supplier's own terms."
      ]
    },
    {
      icon: Globe,
      title: "15. Platform Advertising Disclosures",
      content: [
        "Noam Flyers Inc. may participate in advertising verification, advertiser-identity, or transparency programs operated by advertising platforms.",
        "When an advertising platform provides its own public advertiser information, such as advertiser identity or location, that information is controlled and displayed by the relevant platform according to its own policies and systems.",
        "This Advertiser Disclosure is intended to complement—not replace—those platform-level disclosures."
      ]
    },
    {
      icon: Shield,
      title: "16. Independence of Commercial Decisions",
      content: [
        "Commercial relationships may form part of Noam Flyers Inc.'s broader advertising and marketing activities.",
        "However, the existence of an advertising or affiliate relationship should not be interpreted as a representation that a supplier is the official, exclusive, or only available travel provider on Tickettooasia.com.",
        "Where applicable, customers should evaluate travel options based on the information presented, including price, itinerary, availability, fare conditions, and other relevant booking criteria."
      ]
    },
    {
      icon: FileText,
      title: "17. Advertising Disclosure Process",
      content: (
        <div className="mt-2">
          <p className="leading-relaxed mb-6" style={{ color: '#2a242099' }}>
            The general commercial-disclosure process may be summarized as follows:
          </p>
          
          <div className="relative">
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                >
                  1
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Content or Offer Appears on Tickettooasia.com</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Commercial content is published on the website</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  2
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Is There Compensation, Sponsorship, or Affiliate Consideration?</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Evaluation of commercial relationship</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 3 - Decision */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  3
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>No → Normal Site/Service Identification</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Standard content without commercial disclosure</p>
                  <p className="font-medium text-sm mt-1" style={{ color: '#5e503f' }}>Yes → Apply Appropriate Commercial Label</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Add disclosure such as "Sponsored" or "Advertisement"</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  4
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Does the Link Leave Tickettooasia.com?</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Determines if user is redirected to external site</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 5 - Decision */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  5
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Yes → Identify External Destination Where Appropriate</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Disclose that user is leaving the website</p>
                  <p className="font-medium text-sm mt-1" style={{ color: '#5e503f' }}>No → Keep Applicable Commercial Disclosure Near the Placement</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Maintain disclosure near the commercial content</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 6 - Final */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 ring-2"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`,
                    
                  }}
                >
                  6
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#5e503f' }}>Third-Party Terms May Apply After Redirect</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>External site's policies and terms govern the transaction</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, #b8956e)` }} />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ backgroundColor: '#faf7f2', borderColor: '#b8956e' }}>
                <CheckCircle size={14} style={{ color: '#5e503f' }} />
                <span className="text-xs font-medium" style={{ color: '#5e503f' }}>Disclosure Complete</span>
              </div>
              <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, #b8956e)` }} />
            </div>

            <p className="mt-4 text-xs text-center" style={{ color: '#2a242060' }}>
              Commercial relationships are disclosed clearly and transparently to customers.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "18. Changes to This Advertiser Disclosure",
      content: [
        "Noam Flyers Inc. may update this Advertiser Disclosure from time to time to reflect changes in its advertising relationships, marketing practices, technology, third-party advertising services, or applicable legal requirements.",
        "The latest version will be made available on Tickettooasia.com.",
        "Where appropriate, material changes may be accompanied by an updated “Last Updated” date.",
        "",
        "Tickettooasia.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#5e503f' }}>
              Home
            </NextLink>
            <span className="text-[#2a2420]/30">›</span>
            <span className="text-[#2a2420]/60">Advertiser Disclosure</span>
          </nav>

          <div className="max-w-auto mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Advertiser Disclosure
              </h1>
              <div 
                className="w-12 h-1 mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`
                }}
              />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#eae0d5' }}
                    >
                      <Icon size={16} style={{ color: '#5e503f' }} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#3d3226' }}>
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-sm sm:text-base leading-relaxed ml-0 sm:ml-11 text-justify" style={{ color: '#2a242099' }}>
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : "space-y-3"}>
                        {section.content.map((paragraph, pIndex) => {
                          // 1. Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2 col-span-2" />;
                          }

                          // 2. Render bullet point
                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 col-span-2 md:col-span-1 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#5e503f' }}
                                />
                                <span className="leading-relaxed" style={{ color: '#2a242099' }}>
                                  {paragraph.substring(2)}
                                </span>
                              </div>
                            );
                          }

                          // 3. Normal paragraph
                          return (
                            <p key={pIndex} className="col-span-2 leading-relaxed" style={{ color: '#2a242099' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // React element handler (tables and flowcharts)
                      <div className="w-full">
                        {section.content}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div 
              className="mt-10 p-6 rounded-lg text-white"
              style={{
                background: `linear-gradient(to right, #3d3226, #5e503f)`
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                style={{
                  backgroundColor: '#faf7f2',
                  color: '#5e503f'
                }}
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}