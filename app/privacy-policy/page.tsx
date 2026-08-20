"use client";

import { 
  Shield, 
  FileText, 
  Globe, 
  CheckCircle,
  RefreshCw,
  Phone,
  Lock,
  Eye,
  Database,
  Share2,
  Users,
  AlertCircle,
  Clock,
  DollarSign,
  Search,
  CreditCard,
  UserCheck,
  Mail,
  Info,
  Award,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Info,
      title: "Introduction",
      content: [
        "This Privacy Policy explains how Noam Flyers Inc. (“Company,” “we,” “us,” or “our”) collects, uses, stores, shares, retains, and otherwise handles personal information in connection with Tickettooasia.com (the “Website”), including its booking flows, service communications, customer-support interactions, assisted-booking channels, promotions, and related travel services.",
        "Tickettooasia.com is an independent online travel agency and is not an airline. This Privacy Policy should be read together with our Cookie Policy, Fare Disclosure, Fulfillment Policy, Terms and Conditions, and any other applicable notices published on the Website."
      ]
    },
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: [
        "Noam Flyers Inc. may collect information directly from customers, automatically from devices and browsers, and from payment, fraud-prevention, travel, and technology providers involved in completing a requested booking or providing related customer services.",
        "Information collected directly from customers may include:",
        "• Passenger names",
        "• Dates of birth",
        "• Email addresses",
        "• Telephone numbers",
        "• Billing and mailing addresses",
        "• Travel dates and destinations",
        "• Itinerary preferences",
        "• Passport or travel-document information where required for travel",
        "• Emergency contact information where voluntarily provided",
        "• Frequent-flyer or loyalty-program information",
        "• Seat, meal, accessibility, and other special-service requests",
        "• Payment and billing information",
        "• Records of communications with Noam Flyers Inc.",
        "• Information submitted through booking, contact, or support forms",
        "Information collected automatically may include:",
        "• IP address",
        "• Browser type and version",
        "• Device identifiers",
        "• Operating system",
        "• Approximate location derived from technical information",
        "• Website search activity",
        "• Pages visited",
        "• Clickstream and navigation information",
        "• Booking and checkout activity",
        "• Booking-abandonment signals",
        "• Error and diagnostic logs",
        "• Traffic-source information",
        "• Cookies and similar technologies",
        "If a customer contacts Noam Flyers Inc. by telephone, email, chat, or another support channel, we may retain relevant communications, metadata, recordings, or transcripts where permitted by applicable law. Such information may be used for customer service, quality assurance, fraud prevention, dispute resolution, security, and training purposes."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "2. How We Use Personal Information",
      content: [
        "Noam Flyers Inc. primarily uses personal information to provide the services requested by customers.",
        "This may include:",
        "• Displaying available travel options",
        "• Processing and facilitating flight reservations",
        "• Collecting required passenger information",
        "• Processing or facilitating payment authorization",
        "• Preventing fraud and unauthorized transactions",
        "• Requesting or issuing applicable travel tickets",
        "• Sending booking confirmations and travel-related communications",
        "• Processing eligible booking changes and cancellations",
        "• Responding to customer-service requests",
        "• Providing assistance with travel arrangements",
        "• Maintaining customer accounts where applicable",
        "• Remembering customer preferences",
        "• Improving the Website and booking experience",
        "• Analyzing Website performance",
        "• Developing and improving products and services",
        "• Preventing misuse, abuse, or fraudulent activity",
        "• Complying with applicable legal and regulatory requirements",
        "• Establishing, exercising, or defending legal claims",
        "• Communicating relevant promotional or marketing information where permitted by applicable law",
        "We will use personal information only for purposes that are reasonably related to the services, operations, and activities described in this Privacy Policy or otherwise permitted or required by applicable law."
      ],
      twoColumn: true
    },
    {
      icon: Share2,
      title: "3. Sharing of Personal Information",
      content: [
        "Where necessary to complete a booking or provide requested services, Noam Flyers Inc. may share relevant personal information with third parties, including:",
        "• Airlines and travel suppliers",
        "• Global Distribution Systems (GDS) and airline-content systems",
        "• Payment processors",
        "• Fraud-prevention and risk-management providers",
        "• Customer-service providers",
        "• Email and messaging providers",
        "• Technology and hosting providers",
        "• Analytics providers",
        "• Marketing and advertising service providers where permitted",
        "• Business partners involved in fulfilling requested travel services",
        "• Regulators, courts, law-enforcement agencies, or other competent authorities where legally required",
        "Travel suppliers receiving information for booking fulfillment may process that information under their own privacy policies, terms, and operational requirements.",
        "Once information is provided to an airline or other independent travel supplier for purposes such as ticketing, check-in, security, transportation, or operational fulfillment, that provider may independently process the information under its own privacy notice and applicable legal obligations."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "4. Advertising, Analytics, and Personalization",
      content: [
        "Noam Flyers Inc. may use certain information for advertising, measurement, analytics, and personalization purposes.",
        "This may include:",
        "• Understanding Website usage",
        "• Measuring advertising effectiveness",
        "• Showing relevant travel or destination offers",
        "• Understanding customer interactions with marketing campaigns",
        "• Creating audience or suppression lists where permitted",
        "• Measuring whether advertising activity results in bookings",
        "• Improving Website functionality and customer experience",
        "• Understanding trends in travel searches and booking activity",
        "Where applicable law provides customers with rights to opt out of targeted advertising, sale, sharing, or certain forms of cross-context behavioral advertising, Tickettooasia.com will provide applicable mechanisms for exercising those rights.",
        "Where additional notices are required under specific state, regional, or national privacy laws, Noam Flyers Inc. may provide supplemental privacy notices."
      ],
      twoColumn: true
    },
    {
      icon: Lock,
      title: "5. Data Minimization and Sensitive Information",
      content: [
        "Noam Flyers Inc. does not intentionally require customers to provide information that is unnecessary for the legitimate booking, travel, or customer-support purpose involved.",
        "Payment-card information should be submitted through designated secure payment channels and should not be sent through insecure communications.",
        "Certain travel services may require information that could be considered sensitive or special-category information under applicable law. Such information may include accessibility requirements, special-service requests, dietary requirements, or other information voluntarily provided by a traveler.",
        "Where such information is required to arrange a requested service, it may be shared with the applicable airline, travel supplier, or service provider for fulfillment.",
        "If a customer makes a reservation for another traveler, the person making the booking should have the appropriate authority to provide that individual's information and authorize its use for booking fulfillment and related customer support."
      ]
    },
    {
      icon: CreditCard,
      title: "6. Payment Information",
      content: [
        "Payment information may be collected and processed to facilitate travel purchases and related services.",
        "Where applicable, payment information may be transmitted to third-party payment processors, financial institutions, fraud-prevention providers, or other service providers involved in processing or verifying a transaction.",
        "Noam Flyers Inc. does not encourage customers to send complete payment-card numbers, security codes, passwords, or other highly sensitive payment information through unsecured email, chat, or other informal communication channels."
      ]
    },
    {
      icon: Clock,
      title: "7. Data Retention",
      content: [
        "Noam Flyers Inc. retains personal information for as long as reasonably necessary to:",
        "• Provide requested services",
        "• Complete and administer bookings",
        "• Comply with payment and accounting requirements",
        "• Prevent and investigate fraud",
        "• Resolve customer-service matters",
        "• Respond to disputes",
        "• Process refunds where applicable",
        "• Address chargebacks",
        "• Meet regulatory or legal obligations",
        "• Maintain records required for business operations",
        "• Establish, exercise, or defend legal claims",
        "Different categories of information may have different retention periods.",
        "For example, booking records associated with completed travel, cancellations, open travel credits, tax or financial reporting, disputes, refunds, chargebacks, or unresolved customer-service matters may need to be retained longer than marketing preferences or certain temporary Website-session information.",
        "When information is no longer reasonably required, Noam Flyers Inc. may delete, anonymize, or otherwise render it unavailable for ordinary use, subject to applicable legal, regulatory, accounting, security, backup, and record-retention requirements."
      ],
      twoColumn: true
    },
    {
      icon: UserCheck,
      title: "8. Your Privacy Rights",
      content: [
        "Depending on applicable law and your jurisdiction, you may have certain rights concerning your personal information.",
        "These rights may include:",
        "• Requesting access to personal information",
        "• Requesting correction of inaccurate information",
        "• Requesting deletion of personal information",
        "• Requesting restriction of certain processing",
        "• Requesting portability of applicable information",
        "• Objecting to certain forms of processing",
        "• Opting out of certain targeted advertising or similar activities",
        "• Withdrawing consent where processing is based on consent",
        "Noam Flyers Inc. may need to verify your identity before processing a privacy request.",
        "If a request concerns an active or recently completed reservation, certain information may need to be retained to complete the transaction, process a refund, address a dispute or chargeback, demonstrate transaction authorization, comply with airline or supplier requirements, or satisfy legal and regulatory obligations.",
        "Accordingly, certain deletion or restriction requests may not be capable of being fully completed while an applicable transaction or legal obligation remains outstanding."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "9. International Data Transfers",
      content: [
        "Because travel services frequently involve international airlines, suppliers, technology providers, and infrastructure, personal information may be transferred to or processed in jurisdictions other than the customer's home jurisdiction.",
        "Data may be processed in multiple countries where necessary to:",
        "• Provide requested travel services",
        "• Complete reservations",
        "• Process payments",
        "• Provide customer support",
        "• Operate and maintain our technology systems",
        "• Prevent fraud",
        "• Provide analytics or other business services",
        "• Comply with applicable legal obligations",
        "Where applicable law requires specific safeguards for international transfers, Noam Flyers Inc. will seek to use appropriate safeguards consistent with those requirements."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "10. Data Security",
      content: [
        "Noam Flyers Inc. takes the security of customer information seriously.",
        "We use reasonable technical, organizational, and administrative safeguards designed to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction.",
        "Depending on the information and system involved, these safeguards may include:",
        "• Access controls",
        "• Least-privilege permissions",
        "• Authentication measures",
        "• Payment-security controls",
        "• Audit logging",
        "• Service-provider security requirements",
        "• Fraud monitoring",
        "• System monitoring",
        "• Administrative safeguards",
        "However, no Internet transmission, device, network, electronic storage environment, or security system can be guaranteed to be completely secure.",
        "Customers should therefore avoid sending full payment-card numbers, passwords, security codes, or other highly sensitive information through unsecured communications."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "11. Children's Privacy",
      content: [
        "Tickettooasia.com is not directed toward young children, and Noam Flyers Inc. does not knowingly seek to collect personal information from children in circumstances where such collection is prohibited by applicable law.",
        "Travel bookings may, however, include children as passengers. In such situations, an adult may provide the child's information as necessary to arrange and fulfill the child's travel.",
        "The collection of information relating to a child passenger for legitimate travel-booking purposes is different from intentionally marketing or maintaining accounts for children."
      ]
    },
    {
      icon: Database,
      title: "12. Cookies and Similar Technologies",
      content: [
        "Tickettooasia.com may use cookies, pixels, tags, logs, and similar technologies to operate the Website and understand how customers interact with our services.",
        "These technologies may be used for purposes such as:",
        "• Website functionality",
        "• Security",
        "• Session management",
        "• Analytics",
        "• Performance measurement",
        "• Personalization",
        "• Advertising and marketing measurement where permitted",
        "Additional information about our use of cookies and similar technologies may be provided in our separate Cookie Policy or through applicable cookie-consent mechanisms."
      ],
      twoColumn: true
    },
    {
      icon: Share2,
      title: "13. Third-Party Services and Websites",
      content: [
        "The Website may contain links, integrations, or services provided by third parties, including airlines, travel suppliers, payment providers, technology providers, and other service partners.",
        "Noam Flyers Inc. does not control the privacy practices, content, security, or policies of third-party websites and services.",
        "When you access or use a third-party service, your information may be subject to that third party's privacy policy and terms.",
        "We encourage customers to review the applicable privacy notices of third-party providers before submitting personal information to them."
      ]
    },
    {
      icon: FileText,
      title: "14. Data Map",
      content: (
        <div className="overflow-x-auto mt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[640px] sm:min-w-0">
            <table className="w-full border-collapse text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Data Category</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Examples</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Main Use</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Typical Recipients</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Identity and Contact Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Name, email, phone, address</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Booking, support, notifications</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc., airlines, processors, support providers</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Booking and Itinerary Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Routes, dates, passengers, fares, ticket references</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Fulfillment, changes, cancellations, refunds, analytics</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc., airlines, GDS/content providers</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Payment and Billing Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Billing address, payment tokens, transaction information</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Payment processing, fraud prevention, accounting</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Payment processors, risk providers, Noam Flyers Inc. financial systems</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Device and Technical Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>IP address, browser, device information, cookies</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Security, analytics, personalization</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc., analytics providers, advertising providers where permitted</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Customer-Service Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Calls, chats, recordings, support tickets</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Customer service, quality assurance, disputes, training</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc., authorized support providers</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Preference and Ancillary Data</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Meal preferences, seats, accessibility requests</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Travel fulfillment and personalization</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airlines and applicable travel-service providers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: UserCheck,
      title: "15. Privacy Rights Requests",
      content: [
        "To protect customers and other travelers included on the same reservation, Noam Flyers Inc. may request additional information to verify identity before acting on an access, correction, deletion, or other privacy request.",
        "Where a request concerns an active or recently resolved reservation, certain records may need to be retained until the applicable transaction, refund period, chargeback risk, legal requirement, or other legitimate business purpose has been resolved."
      ]
    },
    {
      icon: RefreshCw,
      title: "16. Changes to This Privacy Policy",
      content: [
        "Noam Flyers Inc. may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable legal requirements.",
        "The most current version of this Privacy Policy will be made available on the Tickettooasia.com Website.",
        "Where appropriate, material changes may be accompanied by an updated “Last Updated” date or additional notice.",
        "Your continued use of Tickettooasia.com after an updated Privacy Policy becomes effective constitutes acknowledgment of the updated policy to the extent permitted by applicable law."
      ]
    },
    {
      icon: Mail,
      title: "17. Contact Us",
      content: [
        "If you have questions about this Privacy Policy or wish to submit a privacy-related request, please contact Noam Flyers Inc. through the contact information provided on the Tickettooasia.com Website.",
        "When submitting a privacy request, please provide sufficient information for us to understand and verify the request while avoiding the transmission of unnecessary sensitive information.",
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
            <span className="text-[#2a2420]/60">Privacy Policy</span>
          </nav>

          <div className="max-w-auto mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Privacy Policy
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
                      // React element (like table) handler
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
                Questions About Your Privacy?
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