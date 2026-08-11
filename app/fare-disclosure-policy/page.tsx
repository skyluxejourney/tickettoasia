"use client";

import { 
  Info, 
  DollarSign, 
  Globe, 
  Clock, 
  Search, 
  Ticket, 
  AlertCircle, 
  Scale, 
  Package, 
  CreditCard, 
  FileText, 
  Shield, 
  UserCheck, 
  Phone,
  ChevronDown,
  CheckCircle,
  Award,
  RefreshCw,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function FareDisclosurePage() {
  const sections = [
    {
      icon: Info,
      title: "Introduction",
      content: [
        "This Fare Disclosure explains how pricing is presented on Tickettooasia.com, what an advertised or displayed fare may include, what may be excluded, why airline prices can change, how online and assisted-booking prices may differ, and what customers should verify before authorizing payment.",
        "Tickettooasia.com is operated by Noam Flyers Inc. and is an independent travel agency. Tickettooasia.com is not an airline and is not affiliated with, owned by, or operated by any airline unless expressly stated otherwise.",
        "Our objective is to present travel pricing clearly and to distinguish between airline fares, mandatory charges, agency service fees, and optional services."
      ]
    },
    {
      icon: Info,
      title: "1. What Makes Up an Airfare?",
      content: [
        "An airfare displayed on Tickettooasia.com may consist of several pricing components.",
        "Depending on the itinerary and booking channel, these may include:",
        "• Airline base fare",
        "• Airline-imposed surcharges or carrier-imposed charges",
        "• Government taxes",
        "• Airport or passenger facility charges",
        "• Other mandatory charges",
        "• Applicable Noam Flyers Inc. service fees",
        "• Optional services selected by the customer",
        "The total amount displayed immediately before payment authorization is the most important price for the transaction and should be reviewed carefully before payment is submitted."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "2. Displayed and Promotional Fares",
      content: [
        "Prices displayed on Tickettooasia.com may appear in different contexts, including:",
        "• Search results",
        "• Fare displays",
        "• Route pages",
        "• Promotional offers",
        "• Destination pages",
        "• Marketing communications",
        "A displayed price may be presented as a one-way fare, round-trip fare, or other itinerary-specific amount depending on the search and display context.",
        "Unless the applicable fare or itinerary specifically states otherwise, customers should not assume that the displayed fare automatically includes optional services such as:",
        "• Checked baggage",
        "• Seat selection",
        "• Priority boarding",
        "• Lounge access",
        "• Travel protection",
        "• Optional upgrades",
        "• Change flexibility",
        "• Airline loyalty benefits",
        "These services may be unavailable, optional, airline-specific, or sold separately."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "3. Online vs. Assisted Booking Pricing",
      content: [
        "Tickettooasia.com may provide both online self-service booking and assisted booking through telephone, chat, email, or other supported channels.",
        "",
        "Online Self-Service Fare",
        "An online self-service fare is the price presented through the Website's booking process when a customer completes the transaction without agent assistance.",
        "",
        "Assisted-Booking Fare",
        "An assisted-booking fare is a price quoted through a supported customer-service channel where a Noam Flyers Inc. representative assists with matters such as:",
        "• Itinerary selection",
        "• Fare information",
        "• Manual booking",
        "• Payment processing",
        "• Travel planning",
        "• Booking support",
        "• Post-booking assistance",
        "An assisted-booking transaction may include an applicable agency service fee that is different from an online self-service transaction.",
        "Any applicable service fee should be disclosed before the customer authorizes payment.",
        "A difference between online and assisted pricing does not by itself mean that either price is inaccurate, provided the total amount payable and applicable services are clearly communicated before the transaction is completed."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "4. Dynamic Airline Pricing",
      content: [
        "Airline fares and availability are dynamic and may change without prior notice.",
        "A fare may change because:",
        "• The last seat in a particular booking class was sold",
        "• The airline withdrew a fare",
        "• The airline changed its fare filing",
        "• A different fare brand became available",
        "• Taxes or carrier-imposed charges changed",
        "• Another customer completed a purchase",
        "• Supplier inventory was revalidated",
        "• The selected itinerary was no longer available",
        "For these reasons, Noam Flyers Inc. does not guarantee that a price displayed during an initial search will remain available until payment is successfully authorized and the applicable reservation is confirmed or ticketed.",
        "If the fare changes before the transaction is completed, the customer should be informed of the revised amount where applicable and given the opportunity to accept or decline the revised price."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "5. Search Price vs. Final Price",
      content: [
        "The first fare displayed during a search is not necessarily the final amount payable.",
        "The booking process may require the fare and availability to be revalidated after the customer selects an itinerary and enters passenger information.",
        "The final amount may change if the airline or supplier updates availability, fare conditions, taxes, mandatory charges, or other applicable pricing components.",
        "The final total presented to the customer before payment authorization is the amount that should be carefully reviewed before proceeding."
      ]
    },
    {
      icon: Ticket,
      title: "6. Booking Completion and Ticket Issuance",
      content: [
        "A search result or booking request does not by itself constitute a completed ticketed reservation.",
        "For an air booking to be considered completed, the applicable reservation generally must be accepted, payment must be successfully authorized or captured, and the applicable ticket number or confirmation identifier must be issued.",
        "If a booking request fails before ticket issuance, Noam Flyers Inc. will not represent the itinerary as a completed ticketed booking.",
        "Depending on the circumstances, the transaction may be:",
        "• Retried",
        "• Repriced",
        "• Revalidated",
        "• Revised",
        "• Cancelled",
        "• Reversed or refunded where applicable",
        "A temporary payment authorization or hold does not necessarily mean that a ticket has been issued."
      ],
      twoColumn: true
    },
    {
      icon: Award,
      title: "7. Historical and Promotional Fares",
      content: [
        "Historical, recently observed, promotional, or “from” fares should be treated as illustrative rather than guaranteed.",
        "A fare shown in a route page, destination page, blog post, advertisement, or promotional communication may no longer be available when another customer searches for the same itinerary.",
        "Where applicable, Tickettooasia.com may identify such prices as:",
        "• “From” prices",
        "• Recently found fares",
        "• Sample fares",
        "• Historical fares",
        "• Promotional fares",
        "A promotional fare may also be subject to specific conditions involving:",
        "• Travel dates",
        "• Booking dates",
        "• Specific routes",
        "• Passenger eligibility",
        "• Coupon requirements",
        "• Membership",
        "• Limited inventory",
        "• Specific booking channels",
        "Any material restrictions applicable to a promotion should be disclosed with or near the applicable offer."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "8. Fare Restrictions",
      content: [
        "Airline fares can contain significant restrictions.",
        "Depending on the selected fare, conditions may include:",
        "• Non-refundable status",
        "• Non-transferability",
        "• Name restrictions",
        "• No-show restrictions",
        "• Change fees",
        "• Fare differences for changes",
        "• Limited cancellation rights",
        "• Limited travel-credit eligibility",
        "• Restrictions on route changes",
        "• Baggage limitations",
        "• Seat-selection restrictions",
        "Many promotional and basic-economy fares may carry particularly restrictive conditions.",
        "Customers should carefully review the applicable fare rules before authorizing payment.",
        "Name changes may be prohibited, while even certain name corrections may require airline approval and may be subject to additional requirements or charges."
      ],
      twoColumn: true
    },
    {
      icon: Scale,
      title: "9. Taxes and Government Charges",
      content: [
        "Government taxes, airport charges, passenger facility charges, and other mandatory charges may be displayed separately depending on the itinerary, jurisdiction, and booking environment.",
        "The applicable amount may vary based on factors such as:",
        "• Origin",
        "• Destination",
        "• Number of flight segments",
        "• Point of sale",
        "• Passenger type",
        "• Travel dates",
        "• Applicable government rules",
        "• Airline or supplier fare construction",
        "Some charges may be recalculated when the itinerary or point of sale changes.",
        "The customer should rely on the final applicable total presented during the booking process rather than an isolated tax estimate or promotional fare displayed elsewhere."
      ],
      twoColumn: true
    },
    {
      icon: Package,
      title: "10. Optional Services and Ancillaries",
      content: [
        "Optional services are not necessarily included in the advertised base airfare.",
        "Depending on the airline and itinerary, optional services may include:",
        "• Checked baggage",
        "• Additional baggage",
        "• Seat selection",
        "• Preferred seating",
        "• Priority services",
        "• Meals",
        "• Travel protection",
        "• Cabin upgrades",
        "• Other airline ancillary services",
        "Where an optional service is selected during the booking process and added to the transaction, its applicable charge should be reflected in the final amount before payment authorization."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "11. Payment and Final Total",
      content: [
        "Noam Flyers Inc. processes payments for bookings made through Tickettooasia.com.",
        "Depending on the applicable payment pathway, the final transaction may appear as:",
        "• One charge",
        "• Multiple component charges",
        "• A temporary authorization followed by a completed charge",
        "• Another payment presentation determined by the applicable processor",
        "Where multiple charges are used, they should collectively correspond to the applicable amount disclosed or quoted to the customer before authorization, subject to any subsequently agreed or separately authorized services.",
        "Before submitting payment, customers should carefully review:",
        "• Final total",
        "• Currency",
        "• Passenger names",
        "• Itinerary",
        "• Cabin class",
        "• Fare conditions",
        "• Baggage provisions",
        "• Change and cancellation restrictions",
        "• Selected optional services",
        "• Applicable agency service fees",
        "If the customer does not agree with the final amount or applicable fare conditions, the customer should not proceed with payment."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "12. Fare Component Table",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Fare Component</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Typically Controlled By</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Included in Core Fare Total?</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Base fare</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Generally yes</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Core transportation price</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airline-imposed surcharge</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Generally yes</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Carrier-controlled and dependent on itinerary/fare</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Government taxes and airport charges</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Government authorities, airports, or applicable collection systems</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Generally included in final displayed total where applicable</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>May vary by itinerary and jurisdiction</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Noam Flyers Inc. online service fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc.</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>If applicable, yes</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Agency fee applicable to the transaction</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Noam Flyers Inc. assisted-booking fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc.</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>If applicable, yes</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Service fee associated with assisted booking</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Optional seats, baggage, insurance, or other services</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline or third-party provider</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>No, unless selected</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Added where applicable and disclosed before payment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: DollarSign,
      title: "13. Illustrative Pricing Example",
      content: (
        <div className="mt-2">
          <p className="leading-relaxed mb-3" style={{ color: '#2a242099' }}>
            The following example is illustrative only and does not represent a guaranteed fare or tax calculation for any specific itinerary.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-md border-collapse text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Component</th>
                  <th className="border px-4 py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Illustrative Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Base airfare</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 180.00</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applicable government taxes and charges</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 45.00</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applicable agency service fee</td>
                  <td className="border px-4 py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 24.00</td>
                </tr>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <td className="border px-4 py-3 font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Illustrative total</td>
                  <td className="border px-4 py-3 font-semibold" style={{ borderColor: '#eae0d5', color: '#5e503f' }}>USD 249.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: '#2a242060' }}>
            Actual taxes, airline charges, agency fees, and total prices vary by itinerary, airline, booking channel, travel dates, passenger details, and applicable fare rules.
          </p>
          <p className="text-xs mt-1" style={{ color: '#2a242060' }}>
            Optional baggage, seats, upgrades, travel protection, and other services may increase the final total.
          </p>
          <p className="text-xs mt-1" style={{ color: '#2a242060' }}>
            The actual amount payable is the final total presented to the customer before payment authorization.
          </p>
        </div>
      )
    },
    {
      icon: Shield,
      title: "14. Important Pricing Principle",
      content: [
        "Nothing in this Fare Disclosure creates an obligation on the part of an airline beyond the airline's own fare rules, conditions of carriage, and applicable law.",
        "Tickettooasia.com and Noam Flyers Inc., however, are committed to:",
        "• Clearly identifying applicable agency fees",
        "• Distinguishing mandatory charges from optional services",
        "• Avoiding misleading airline-affiliation or “official airline” implications",
        "• Providing the final applicable total before payment authorization",
        "• Communicating material fare changes before the customer commits to the revised price",
        "• Presenting applicable fare restrictions as clearly as reasonably possible"
      ],
      twoColumn: true
    },
    {
      icon: UserCheck,
      title: "15. Customer Review Before Payment",
      content: [
        "Before authorizing payment, customers should review the final booking information carefully.",
        "By selecting “Pay Now” or an equivalent payment button, the customer confirms that they have had an opportunity to review:",
        "• The final total price",
        "• The currency",
        "• Passenger names",
        "• Travel itinerary",
        "• Cabin class",
        "• Applicable baggage provisions",
        "• Selected optional services",
        "• Applicable fare restrictions",
        "• Change and cancellation conditions",
        "• Any disclosed agency service fee",
        "Once payment is submitted and ticketing or booking processing begins, the applicable fare conditions and change or refund restrictions will govern the transaction."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "16. Pricing Process",
      content: (
        <div className="mt-2">
          <p className="leading-relaxed mb-6" style={{ color: '#2a242099' }}>
            The typical pricing process may be summarized as follows:
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
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Search Result Fare</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Initial fare displayed based on search criteria</p>
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
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Passenger and Itinerary Details</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Passenger information and travel preferences are entered</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
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
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Live Fare and Availability Revalidation</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>System checks real-time availability and fare accuracy</p>
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
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Mandatory Taxes and Applicable Agency Fees</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Taxes, fees, and service charges are calculated</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-4">
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
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Customer Selects Optional Services</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Add-ons like baggage, seats, or insurance are chosen</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 6 - Highlighted */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 animate-pulse"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                >
                  6
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#5e503f' }}>Final Total Displayed</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Complete price breakdown is shown for review</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  7
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Customer Reviews Fare Conditions</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Terms, restrictions, and policies are reviewed</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 8 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: '#faf7f2', 
                    borderColor: '#b8956e', 
                    color: '#5e503f'
                  }}
                >
                  8
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#3d3226' }}>Payment Authorization</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Payment is submitted and authorized</p>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4" style={{ background: `linear-gradient(to bottom, #b8956e, #5e503f)` }} />
                  <ChevronDown size={16} style={{ color: '#5e503f' }} />
                </div>
              </div>

              {/* Step 9 */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0 ring-2"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                   
                  }}
                >
                  9
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#5e503f' }}>Ticketing / Reservation Confirmation</p>
                  <p className="text-xs" style={{ color: '#2a242060' }}>Ticket is issued and booking is confirmed</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, #b8956e)` }} />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ backgroundColor: '#faf7f2', borderColor: '#b8956e' }}>
                <CheckCircle size={14} style={{ color: '#5e503f' }} />
                <span className="text-xs font-medium" style={{ color: '#5e503f' }}>Booking Complete</span>
              </div>
              <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, #b8956e)` }} />
            </div>

            <p className="mt-4 text-xs text-center" style={{ color: '#2a242060' }}>
              Pricing and availability may change at any stage before the transaction is successfully completed.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "17. Changes to This Fare Disclosure",
      content: [
        "Noam Flyers Inc. may update this Fare Disclosure from time to time to reflect changes in airline pricing practices, booking technology, service fees, payment processes, or applicable legal requirements.",
        "The current version will be made available on Tickettooasia.com.",
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
            <span className="text-[#2a2420]/60">Fare Disclosure</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Fare Disclosure
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
                  <div className="text-sm sm:text-base leading-relaxed ml-11 text-justify" style={{ color: '#2a242099' }}>
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

                          // 3. Render headers in bold brown
                          if (paragraph === "Online Self-Service Fare" || paragraph === "Assisted-Booking Fare") {
                            return (
                              <p key={pIndex} className="col-span-2 font-semibold" style={{ color: '#3d3226' }}>
                                {paragraph}
                              </p>
                            );
                          }

                          // 4. Normal paragraph
                          return (
                            <p key={pIndex} className="col-span-2 leading-relaxed" style={{ color: '#2a242099' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // React element handler (tables and pricing steps)
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