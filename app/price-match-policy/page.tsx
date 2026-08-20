"use client";

import { 
  Shield, 
  FileText, 
  Globe, 
  CheckCircle,
  Phone,
  Clock,
  DollarSign,
  Search,
  XCircle,
  AlertCircle,
  Info,
  CreditCard,
  UserCheck,
  RefreshCw,
  Award,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PriceMatchPage() {
  const sections = [
    {
      icon: Shield,
      title: "Our Price Match Promise",
      content: [
        "Tickettooasia.com, operated by Noam Flyers Inc., is committed to presenting travel pricing in a transparent, reviewable, and fair manner.",
        "Tickettooasia.com is an independent travel agency and is not an airline. Airline names, route information, schedules, fare brands, trademarks, and logos may appear on the Website solely to identify available travel inventory or supplier content. Their appearance does not imply any affiliation, endorsement, sponsorship, or ownership relationship between Noam Flyers Inc. and any airline unless expressly stated.",
        "Tickettooasia.com may provide both online self-service booking and optional assisted booking through telephone, chat, or email. Pricing displayed online and pricing quoted through an assisted channel may differ when the service level differs, an assisted-booking fee applies, or availability and pricing change between channels.",
        "Subject to the conditions below, Noam Flyers Inc. may review a properly submitted claim where a lower publicly available total airfare was available for the same itinerary shortly after a booking was made through Tickettooasia.com.",
        "Because airline inventory and pricing can change rapidly, not every lower price found elsewhere will qualify.",
        "Our Price Match Promise is intended to provide a consistent process for reviewing properly documented and independently verifiable lower-price claims."
      ]
    },
    {
      icon: FileText,
      title: "What Qualifies as the Same Itinerary?",
      content: [
        "For a Price Match claim to qualify, the compared booking must match the original Tickettooasia.com reservation on all material booking elements.",
        "This generally includes:",
        "• Operating airline or airlines",
        "• Marketing carrier, where applicable",
        "• Flight number or materially identical flight",
        "• Origin and destination airports",
        "• Travel dates",
        "• Applicable departure time or departure window",
        "• Cabin class",
        "• Fare family or equivalent fare conditions",
        "• Number and type of passengers",
        "• Baggage allowance",
        "• Seat inclusion, where applicable",
        "• Change and cancellation conditions",
        "• Flexibility provisions",
        "• Other mandatory services or charges included in the fare",
        "The comparison must be like-for-like.",
        "For example, a basic fare without a cabin-baggage allowance would not generally be considered equivalent to a fare that includes baggage.",
        "Similarly, an online self-service fare is not automatically comparable to an assisted-booking quote where the assisted transaction includes a clearly disclosed service fee.",
        "A competitor's advertised headline price will not qualify if mandatory fees are added later and the resulting checkout total is higher."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "Publicly Available Fare Requirement",
      content: [
        "A lower fare will generally qualify for review only when it was:",
        "• Visible to the general public",
        "• Available for public purchase",
        "• Bookable at the time of verification",
        "• For the same itinerary",
        "• Based on materially equivalent fare conditions",
        "• Inclusive of the same applicable mandatory charges",
        "Taxes and known mandatory airline, supplier, or agency charges should be included when comparing the total price.",
        "Optional services selected only by the customer are generally excluded from the comparison unless both offers include those services on the same basis.",
        "Examples of optional services may include:",
        "• Optional seat purchases",
        "• Travel protection",
        "• Donations",
        "• Optional baggage",
        "• Additional after-sale services",
        "• Other customer-selected ancillary services"
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "Price Match Claim Period",
      content: [
        "Price Match claims must be submitted within twenty-four (24) hours of the original booking confirmation time shown by Noam Flyers Inc. and before the first flown segment departs, whichever occurs first.",
        "The claim should include:",
        "• Tickettooasia.com booking reference",
        "• Passenger's full name",
        "• Original itinerary",
        "• Lower advertised fare",
        "• Comparison website or URL, where available",
        "• Date and time the lower fare was observed",
        "• Currency displayed",
        "• Screenshots or other objective evidence showing the lower public price",
        "Noam Flyers Inc. may request additional documentation if the submitted information is insufficient to independently verify the claim.",
        "Claims that cannot be independently verified may be declined."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "How We Review a Claim",
      content: [
        "Once a claim is received, Noam Flyers Inc. will review the submitted information and compare the lower fare against the original Tickettooasia.com reservation.",
        "The review may consider:",
        "• Whether the lower price was publicly available.",
        "• Whether the fare could actually be booked.",
        "• Whether the itinerary is materially identical.",
        "• Whether the passenger mix is identical.",
        "• Whether the cabin and fare conditions are equivalent.",
        "• Whether mandatory taxes and charges are included.",
        "• Whether baggage and other included services are equivalent.",
        "• Whether the lower price is still available at the time of verification.",
        "• Whether the comparison is based on the same applicable currency and point of sale.",
        "• Whether the competing offer is subject to restrictions unavailable to the general public.",
        "Dynamic or temporary pricing differences do not automatically qualify."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Approved Price Match Remedies",
      content: [
        "If a Price Match claim is approved, Noam Flyers Inc. may resolve the claim through one of the following remedies, depending on the circumstances.",
        "",
        "1. Verified Difference Refund",
        "Where operationally practical, Noam Flyers Inc. may refund the verified difference between the amount originally charged and the lower comparable public fare.",
        "",
        "2. Agency Credit",
        "Where a direct refund is not operationally practical but another transparent remedy is appropriate, Noam Flyers Inc. may issue an applicable agency credit for the verified difference.",
        "",
        "3. Eligible Cancellation and Reversal",
        "If the reservation remains within an applicable cancellation period and the airline fare permits cancellation without loss of the applicable airfare, Noam Flyers Inc. may offer to cancel the reservation and process the applicable reversal in accordance with the relevant cancellation conditions.",
        "",
        "The available remedy may depend on:",
        "• Ticket status",
        "• Time elapsed since booking",
        "• Payment status",
        "• Airline fare rules",
        "• Supplier restrictions",
        "• Cancellation eligibility",
        "• Operational feasibility",
        "The applicable remedy will be communicated when the claim is resolved."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "Excluded Offers",
      content: [
        "The following types of fares or offers are generally excluded from this Price Match Promise:",
        "• Member-only fares",
        "• Login-only fares",
        "• Subscription fares",
        "• Corporate fares",
        "• Negotiated fares",
        "• Student fares",
        "• Military fares",
        "• Tour-operator fares",
        "• Group fares",
        "• Charter fares",
        "• Consolidator fares",
        "• Unpublished fares",
        "• Opaque fares",
        "• Auction or bidding-based fares",
        "• Coupon-dependent prices unavailable to the general public",
        "• Loyalty-point or loyalty-redemption offers",
        "• Cashback offers",
        "• Financing-specific offers",
        "• Obvious pricing errors",
        "• Metasearch preview prices that are not the final checkout total",
        "• Prices that cannot be reproduced or independently verified",
        "• Prices requiring a different point of sale",
        "• Prices available only in a different country or market",
        "• Prices dependent on different tax residency",
        "• Prices involving materially different currency-conversion treatment",
        "• Prices requiring a payment method unavailable to the claimant",
        "Offers bundled with unrelated services that materially change the effective airfare may also be excluded."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Online Booking vs. Assisted Booking",
      content: [
        "Tickettooasia.com may provide both self-service online booking and assisted booking through telephone, chat, or email.",
        "If the original reservation was made through an assisted channel, the comparison must take into account the relevant service level.",
        "For example, an online-only competitor fare will not automatically invalidate an assisted Tickettooasia.com booking where the assisted transaction included a clearly disclosed service fee and the competitor fare does not provide comparable assisted service.",
        "However, if a customer can demonstrate that another publicly available assisted-booking transaction for the same itinerary provides a lower verified total, including applicable mandatory assisted-booking charges, Noam Flyers Inc. may review that claim under the same Price Match criteria."
      ]
    },
    {
      icon: AlertCircle,
      title: "Abusive or Invalid Claims",
      content: [
        "Noam Flyers Inc. reserves the right to decline repeated, abusive, fraudulent, or bad-faith Price Match submissions.",
        "This may include claims involving:",
        "• Manipulated screenshots",
        "• Altered booking information",
        "• Stale cached prices",
        "• Automated or artificially generated pricing results",
        "• Scraped prices that cannot be purchased",
        "• Offers that were never genuinely available for public purchase",
        "• Repeated claims based solely on normal dynamic price fluctuations",
        "Airline fares can change rapidly, sometimes within minutes. The purpose of this Price Match Promise is to address objectively verifiable price differences, not to guarantee protection against every future movement in airline pricing."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "Effect on Your Original Booking",
      content: [
        "Nothing in this Price Match Promise changes the fact that Tickettooasia.com is an independent travel agency and that airline inventory, ticket conditions, and fare rules are controlled by the applicable airline or travel supplier.",
        "Payment for the original booking is processed through the applicable booking and payment arrangements of Noam Flyers Inc.",
        "Approval of a Price Match claim does not guarantee that any later voluntary cancellation, exchange, refund, or modification will be free of airline or agency fees.",
        "If a Price Match claim is denied, the original booking remains subject to the fare rules, conditions, and policies presented at the time of booking, together with any other applicable Tickettooasia.com policies."
      ]
    },
    {
      icon: FileText,
      title: "Price Match Summary",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Claim Component</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Tickettooasia.com Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Claim Window</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Within 24 hours of booking and before the first departure</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Compared Price</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Same itinerary, passenger mix, cabin, fare conditions, and mandatory charges</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Proof Required</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Booking reference, comparison URL where available, screenshots/evidence, timestamp, and currency</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Mandatory Charges</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Base fare, applicable airline charges, known taxes, and known mandatory agency charges</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Excluded Prices</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Optional ancillary services, member-only fares, coupon-only savings, opaque fares, loyalty redemptions, and non-public fares</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Remedies</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Verified difference refund, agency credit, or eligible cancellation/reversal where operationally feasible</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Online vs. Assisted</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Must be compared on a like-for-like service basis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Verification Requirement",
      content: [
        "Any approved Price Match claim will be resolved only after Noam Flyers Inc. independently verifies that the lower fare was publicly available, bookable, and materially identical to the confirmed Tickettooasia.com itinerary.",
        "Dynamic price differences, stale cached fares, membership-only promotions, unavailable fares, and prices that exclude mandatory charges will not qualify."
      ]
    },
    {
      icon: CheckCircle,
      title: "Our Commitment",
      content: [
        "Tickettooasia.com aims to make airfare pricing as transparent and understandable as possible.",
        "Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.",
        "We encourage customers to provide complete and accurate documentation so that claims can be reviewed efficiently and consistently.",
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
            <span className="text-[#2a2420]/60">Price Match Promise</span>
          </nav>

          <div className="max-w-auto mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Price Match Promise
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
                      // React element (table) handler
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