"use client";

import { 
  Shield, 
  FileText, 
  Scale, 
  Globe, 
  CheckCircle,
  Phone,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  Users,
  MapPin,
  AlertCircle,
  Clock,
  DollarSign,
  Search,
  XCircle,
  CreditCard,
  Ticket,
  UserCheck,
  Mail,
  Plane,
  Info,
  Package,
  ChevronDown,
  Gift,
  TrendingUp,
  Link as LinkIcon,
  Megaphone,
  Sliders,
  BarChart,
  Target,
  User,
  Receipt,
  RefreshCw,
  HelpCircle,
  Landmark,
  Building,
  Banknote,
  Award,
  Heart,
  Lightbulb,
  Compass,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Info,
      title: "1. Identity, Scope and Definitions",
      twoColumn: true,
      content: [
        "",
        "Corporate Identity and Operator",
        "These Terms & Conditions govern access to and use of the Tickettooasia.com website, any associated mobile experience, any contact-centre or phone-assisted booking service offered under the Tickettooasia.com brand, and any booking request, ticketing request, exchange, cancellation request, refund request, waiver request, reissue request, or related customer-support activity processed by Noam Flyers Inc. for travel services sold through Tickettooasia.com.",
        "For purposes of these Terms, “Tickettooasia.com,” “Noam Flyers Inc.,” “we,” “us,” and “our” refer to the platform operator and, where relevant, its authorised employees, agents, payment processors, technology providers, suppliers, and service subcontractors acting within the scope of their engagement.",
        "These Terms apply whether you are browsing the website, requesting a quote, creating an account, entering passenger data, completing a payment, requesting assisted support by phone, receiving a booking acknowledgement, receiving a ticketing confirmation, or requesting post-ticket servicing.",
        "By continuing to use Tickettooasia.com, or by instructing us to place, modify, cancel, or service a booking, you agree to these Terms and to any ancillary policy referenced in them, including our Privacy Policy, Cookie Policy, Refund and Cancellation Policy, Fees Disclosure, and any booking-specific fare rule or supplier notice shown during the purchase flow.",
        "",
        "ARC Accreditation and Verification",
        "Noam Flyers Inc. is an ARC-accredited travel agency.",
        "ARC accreditation reflects participation in recognised U.S. travel-agency ticketing and settlement infrastructure. It does not change the legal identity of Noam Flyers Inc. into that of an airline, and it does not mean that Noam Flyers Inc. owns, operates, controls, or represents any airline.",
        "Accordingly, any reference in these Terms to ARC accreditation should be understood as a statement about agency participation and recognised ticketing and settlement infrastructure, and not as a statement of airline ownership, airline partnership, airline endorsement, airline sponsorship, or airline operational control.",
        "Customers may independently verify the agency's participation status through ARC's official verification resources. No ARC accreditation number is disclosed in these Terms.",
        "",
        "Independent Agency Status and Airline Non-Affiliation",
        "Tickettooasia.com is an independent travel agency platform operated by Noam Flyers Inc. Tickettooasia.com is not an airline.",
        "Tickettooasia.com does not operate aircraft. Tickettooasia.com does not control airline schedules, aircraft swaps, staffing, airport operations, baggage systems, check-in counters, boarding decisions, or air-traffic events.",
        "Tickettooasia.com is not affiliated with, endorsed by, or authorised to speak on behalf of any airline merely because an airline name, route, fare, brand name, logo, city pair, flight number, or timetable appears on the platform.",
        "The platform provides access to travel inventory and agency services. The actual air transportation is supplied by the relevant airline or airlines.",
        "That distinction matters for liability, refunds, schedule changes, baggage, denied boarding, disruption handling, special-service approval, and many other operational issues.",
        "Airline conditions of carriage, fare rules, airport rules, security rules, immigration rules, and operational decisions remain the responsibility of the carrier and relevant authorities, not Tickettooasia.com.",
        "For clarity, Tickettooasia.com may, depending on the itinerary and system access available, issue, request, or service tickets using accredited agency channels. That ability does not alter the fundamental allocation of responsibility: Tickettooasia.com facilitates travel arrangements; airlines provide the transportation.",
        "",
        "Definitions",
        "For purposes of these Terms:",
        "• “Travel Supplier” means any airline, codeshare carrier, partner carrier, consolidator, wholesaler, GDS-linked supplier, hotel, transportation provider, or other travel-service provider whose inventory or rules apply to your booking.",
        "• “Booking Request” means your request to search, reserve, or purchase a travel service through Tickettooasia.com. Depending on the workflow, a booking request may exist before ticket issuance or final supplier confirmation.",
        "• “Ticketed” means that an airline ticket has been issued and/or that the relevant supplier reservation has been made and confirmed with an identifying reference such as a ticket number, PNR, reservation number, or record locator.",
        "• “PNR” means a passenger name record, airline confirmation code, or record locator.",
        "• “Merchant of Record” means the entity shown on the financial charge statement for the relevant purchase. For applicable U.S.-related transactions, the merchant of record may have refund obligations depending on the circumstances and applicable law.",
        "• “Service Fee” means any fee charged by Noam Flyers Inc. / Tickettooasia.com for agency work, booking support, researched itinerary handling, manual servicing, exchanges, refund processing support, cancellation handling, waiver submissions, special-service support, or similar administrative work. Service fees are separate from airline fares, airline penalties, fare differences, taxes, airport charges, or optional supplier fees.",
        "",
        "Acceptance, Eligibility and Permitted Use",
        "You may use Tickettooasia.com only if you are legally capable of entering a binding contract.",
        "You must provide accurate information and use the platform only for legitimate travel-shopping, travel-booking, and booking-servicing purposes.",
        "If you make a booking for another person or for multiple travellers, you represent that you have authority to do so and that all travellers accept being bound by these Terms, any booking-specific restrictions, and the applicable supplier rules.",
        "You must not use the platform for speculative, fictitious, fraudulent, duplicative, abusive, or high-risk bookings; automated scraping without written permission; chargeback abuse; circumvention of airline fare rules; hidden-city or throwaway-ticketing conduct that violates supplier rules; or any unlawful purpose.",
        "We may suspend, refuse, or cancel access or a booking request if we reasonably suspect a breach of these Terms, a risk to payment integrity, or a breach of supplier restrictions.",
        "",
        "Supplier Terms and Incorporated Airline Rules",
        "By booking through Tickettooasia.com, you acknowledge that your journey is subject not only to these Terms but also to the rules of the relevant Travel Supplier.",
        "These underlying airline terms may include liability limits, baggage limits, check-in rules, refusal-to-carry provisions, schedule-change rights, rerouting provisions, and claim deadlines.",
        "If there is a conflict between these Terms and a mandatory airline rule attached to your fare, ticket, or contract of carriage, the more specific rule applicable to the underlying transport service may apply, except to the extent that non-excludable consumer law requires a different result.",
        "Nothing in these Terms is intended to override a statutory right that cannot legally be excluded."
      ]
    },
    {
      icon: FileText,
      title: "2. Booking, Pricing, Fees and Payment",
      twoColumn: true,
      content: [
        "",
        "Booking Channels",
        "Tickettooasia.com supports two primary booking channels:",
        "• Online self-service — You search, compare, enter passenger details, review the total, and pay through the website yourself. May carry no assisted-service fee or a lower transaction/service fee displayed during checkout. Faster and usually lower-cost, but you are responsible for entering all information correctly.",
        "• Assisted phone booking — You speak with an agent who helps research options, explains fare conditions, enters data, and assists with placing the booking. A separate assisted-booking or contact-centre fee may apply and may be higher than online fees. Useful for complex itineraries, multi-city travel, schedule-risk questions, or travellers who need additional assistance.",
        "• Post-ticket support — Work requested after ticket issuance, such as exchange, cancellation, waiver filing, refund support, name-correction handling, or seat/baggage request support. Separate post-ticketing service fees may apply, in addition to airline fees or fare differences. These services are not included merely because an original booking existed.",
        "Tickettooasia.com adopts the following structural logic: Online and phone bookings are not automatically priced the same, and post-ticket work is a separate service category. Calling Tickettooasia.com is optional. If you choose assisted support, pricing may reflect the additional human handling involved.",
        "",
        "Booking Flow",
        "The booking flow below is a simplified representation of how Tickettooasia.com generally processes a flight booking request:",
        "Search itinerary → Select flights → Review total price → Enter traveller details → Pay Noam Flyers Inc. → Booking request submitted → Airline or supplier processing → Ticket issued / PNR created → Confirmation sent",
        "Industry booking terms commonly distinguish between a booking request, acknowledgement email, and eventual ticket issuance or supplier confirmation.",
        "Accordingly, an initial acknowledgement email is not necessarily final contractual confirmation, and price, availability, and dates are not guaranteed until the travel supplier confirms and the ticket is issued, unless a supplier-specific or instant-ticketing workflow clearly states otherwise.",
        "",
        "Dynamic Pricing and Fare Accuracy",
        "Air fares are dynamic. Inventory, booking class, seat availability, route combinations, carrier-imposed charges, and taxes may change before ticketing.",
        "Every quote shown on Tickettooasia.com should therefore be understood as subject to availability; subject to fare-rule validation; subject to supplier confirmation; and subject to correction of a genuine pricing or tax error.",
        "A booking may proceed through several stages, including search, selection, payment authorisation, supplier validation, and ticket issuance.",
        "If a fare can no longer be honoured because airline inventory changed, a booking class closed, taxes or surcharges changed, or an obvious pricing error occurred, we may offer an updated price, an alternative itinerary, a void or reversal where possible, or cancellation of the pending request.",
        "A displayed fare is not the same thing as a guaranteed ticket. The booking becomes materially firmer once the travel supplier confirms the booking and the ticket is issued.",
        "",
        "Total Price Disclosure, Taxes and Surcharges",
        "Where an airfare is advertised or displayed as a price to purchase a ticket, applicable mandatory government taxes and fees and mandatory carrier-imposed charges should be reflected as required by applicable law.",
        "Accordingly, Tickettooasia.com aims to present the total amount payable at the point of payment confirmation while also allowing the customer to understand the structure of that price where a breakdown is displayed.",
        "The total price shown before payment may include: Base fare (Core airfare charged by the airline for the booked fare basis / inventory), Carrier-imposed surcharge (Mandatory airline-imposed charge attached to the fare), Government taxes and airport charges (Mandatory taxes, fees, passenger facility, security, inspection, or similar charges imposed by authorities), Tickettooasia.com service fee (Agency booking or servicing fee charged by Noam Flyers Inc., if applicable), Optional airline extras (Charges for bags, seats, upgrades, meals, lounge, priority, Wi-Fi, or other optional ancillaries), and Airport / border / entry charges not collected at booking (Certain destination-based charges, visa costs, border charges, or locally payable amounts).",
        "Nothing in these Terms guarantees that every possible travel-related cost is collected at checkout. Optional supplier charges may be payable separately or later depending on the itinerary and service selected.",
        "Tickettooasia.com will disclose the amount being charged by Noam Flyers Inc. before payment, but other supplier-imposed or authority-imposed costs may still apply depending on the itinerary.",
        "",
        "Tickettooasia.com Service-Fee Framework",
        "Unless a lower amount is stated during checkout, quoted by an agent, or required by applicable law, the following maximum Tickettooasia.com agency fees may apply in USD or local-currency equivalent.",
        "• Online self-service booking fee — USD 0.00 – USD 50.00 per traveller (Applies where a service fee is shown during website checkout).",
        "• Complex online itinerary fee — Up to USD 100.00 per traveller (May apply to multi-city, mixed-carrier, non-standard fare constructions, or manually validated itineraries).",
        "• Assisted phone booking fee — USD 10.00 – USD 200.00 per traveller (May be higher for complex, round-the-world, premium-cabin, or urgent manual bookings).",
        "• Alternative airport / date research fee — Up to USD 50.00 per traveller (Applies where a customised manual search is requested).",
        "• Same-day urgent manual ticket review — Up to USD 75.00 per traveller (Applies to urgent manual servicing where system automation is not sufficient).",
        "• Post-ticket voluntary change / exchange handling fee — USD 25.00 – USD 200.00 per traveller (Plus any airline fee and any fare difference).",
        "• Post-ticket voluntary cancellation for future credit — USD 40.00 – USD 100.00 per traveller (Plus any airline-imposed cancellation cost or credit restriction).",
        "• Post-ticket voluntary cancellation / refund handling — USD 50.00 – USD 250.00 per traveller (Applies to refund requests, whether or not ultimately approved by the airline, unless service has not been performed or applicable law requires otherwise).",
        "• Name-correction / reissue assistance — Up to USD 50.00 per traveller (Minor corrections only if permitted by the carrier or validating ticket stock).",
        "• Waiver / special-case support — USD 50.00 – USD 150.00 per traveller (Examples may include medical submissions, bereavement, duplicate-ticket, visa, denied-boarding documentation, or no-show review).",
        "• Special-service request support — Up to USD 35.00 per request or USD 75.00 per traveller (Seats, SSRs, wheelchair notation, infant linkage, unaccompanied-minor coordination, or similar requests are request-only and not guaranteed).",
        "",
        "Important Rules About Tickettooasia.com Fees",
        "First, service fees are generally non-refundable once the relevant agency service has been performed, unless these Terms expressly provide otherwise, a lower policy is shown in the booking flow, the service request was never actually performed, or a non-excludable legal rule requires a refund. Transaction fees and post-ticketing service fees are separate from supplier fees.",
        "Second, where an assisted cancellation or refund request is made shortly after booking and the airline fare remains voidable or otherwise eligible under airline policy, Tickettooasia.com may choose to waive, reduce, or refund some portion of its own service fee. Any such accommodation is discretionary unless clearly confirmed in writing for the relevant booking.",
        "Third, if an airline denies a refund, denies a voluntary change, or refuses a waiver, the fact that the supplier declined the request does not automatically mean that no agency work was performed. If Tickettooasia.com researched alternatives, contacted the supplier, filed a request, documented the case, or revalidated eligibility, an agency service fee may remain payable or non-refundable.",
        "",
        "Sample Price Calculations",
        "• Simple online economy booking: Base fare USD 220.00 + carrier surcharge USD 18.00 + taxes and airport fees USD 46.00 + Tickettooasia.com online service fee USD 12.00 = USD 296.00",
        "• Phone-assisted international multi-city: Base fare USD 640.00 + carrier surcharge USD 52.00 + taxes and airport fees USD 118.00 + Tickettooasia.com assisted-booking fee USD 70.00 = USD 880.00",
        "• Voluntary exchange after ticketing: Fare difference USD 85.00 + airline exchange penalty USD 0.00 + Tickettooasia.com exchange handling fee USD 50.00 = USD 135.00",
        "• Refund request on refundable fare: Original total USD 900.00 – refundable airline amount USD 0.00 retained – Tickettooasia.com refund handling fee USD 50.00 = Estimated refund USD 850.00",
        "• Non-refundable fare converted to future credit: Original total USD 420.00 – airline cancellation penalty / credit restriction according to fare rule + Tickettooasia.com future-credit handling fee USD 40.00 = Varies",
        "These examples are illustrative only and do not constitute promises of any specific live fare, fee, tax, or refund outcome.",
        "",
        "Payment Authorisation, Merchant of Record and Secure Processing",
        "Payments made through Tickettooasia.com are processed by Noam Flyers Inc. using payment methods made available during checkout or communicated by an authorised agent during an assisted booking flow.",
        "Depending on the purchase path, the financial statement descriptor may show Noam Flyers Inc., Tickettooasia.com, or another disclosed trade descriptor used by the operator. The descriptor shown on your statement matters because, for eligible transactions, the merchant of record may have responsibility for processing applicable airfare refunds.",
        "Tickettooasia.com may require full payment at the time of booking unless an instalment or deferred-payment option is expressly offered. By submitting payment information, you authorise Noam Flyers Inc. and its payment processors to charge the total amount shown or quoted to you, including applicable taxes, surcharges, and disclosed service fees.",
        "We may also pre-authorise or otherwise validate a payment method before final confirmation to reduce fraud, card misuse, or settlement failures. No online system can be guaranteed to be completely immune from unauthorised access, error, outage, or third-party compromise. Tickettooasia.com nevertheless intends to use secure payment workflows and service providers designed around recognised payment-data protection practices.",
        "",
        "Failed Payments, Reversals and Chargebacks",
        "If a payment authorisation fails, is reversed, is later declined, is flagged as high risk, or cannot be completed for settlement reasons, the booking request may be suspended, cancelled, or never finalised. A ticket is not guaranteed merely because you reached the end of a checkout screen if the payment did not settle or the booking was blocked for verification.",
        "If you believe a charge is unauthorised, duplicated, billed in error, or was taken for a service not delivered, you should contact Tickettooasia.com first so that we can investigate. Nothing in these Terms removes or limits any statutory card-dispute rights available to you.",
        "If you initiate a chargeback while travel remains pending, live, or serviceable, we may pause non-essential booking support while the billing dispute is under review. We may provide relevant records to an issuer, acquirer, processor, or dispute-resolution body to contest a dispute that we reasonably believe is inaccurate, abusive, or inconsistent with the services actually provided.",
        "If a chargeback is resolved in our favour and the booking is to remain active, you may need to repay the outstanding amount before additional servicing is provided. Fraudulent or bad-faith chargeback activity may result in cancellation of accounts, refusal of future bookings, and pursuit of recovery where lawful.",
        "",
        "Pricing Errors, Tax Changes and Currency Conversion",
        "Despite reasonable efforts to publish accurate fares and totals, technical or human errors may occur. If there is a genuine and demonstrable pricing error, tax miscalculation, stale inventory error, or carrier surcharge change, Tickettooasia.com may contact you with the corrected amount and the options available.",
        "Where the platform displays a local-currency equivalent, the amount finally posted by your bank or card issuer may differ because of exchange rates, issuer fees, processor settlement timing, or foreign-transaction rules. Unless expressly stated otherwise, agency fee tables shown in these Terms are denominated in USD for illustration and policy-capping purposes."
      ]
    },
    {
      icon: Ticket,
      title: "3. Ticketing, Confirmation, Cancellations and Refunds",
      twoColumn: true,
      content: [
        "",
        "Fulfilment Policy and Ticket Issuance",
        "Tickettooasia.com's fulfilment policy is simple in principle but important in operation: A booking request is fulfilled when the relevant ticket is issued and/or the relevant reservation is confirmed and communicated to you, subject to supplier-specific exceptions. A booking acknowledgement, order number, payment receipt, or “request received” message should not automatically be read as proof that the airline has finally accepted the booking.",
        "Tickettooasia.com may need to validate inventory, pass the booking into airline or GDS queues, complete risk checks, request manual fare validation, or await supplier confirmation before issuing final ticket details. Reservation request → Validation → Ticketing → Confirmation.",
        "",
        "Ticketing Timelines and Possible Delays",
        "• Search and quote: Live fare display or cached fare display (Immediate). Fare may change before ticketing.",
        "• Payment authorisation: Card or other payment check (Seconds to minutes). Payment success does not itself guarantee ticketing.",
        "• Fraud / verification review: Cardholder or itinerary validation (Immediate to 24 hours). May require customer response.",
        "• Supplier / airline processing: Booking queue, PNR creation, ticketing message (Minutes to several hours). Delays may occur during disruption, schedule changes, manual review, or system outages.",
        "• Confirmation dispatch: Email / SMS / dashboard (After ticket issuance). Customer should review details promptly.",
        "• Airline verification: Traveller checks the PNR with the airline (After receipt of PNR). Recommended, especially for complex or urgent itineraries.",
        "Customers should review confirmation documents promptly and report any apparent issue or discrepancy as soon as reasonably possible.",
        "",
        "Confirmation, PNR and Airline Verification",
        "Once a booking is ticketed, Tickettooasia.com will ordinarily send confirmation containing booking details such as passenger names, itinerary, supplier name, and a PNR, record locator, ticket number, or other identifying reference. Customers should keep confirmation codes and PNRs confidential and should not share them unnecessarily.",
        "After receiving confirmation, you should: check the spelling of all traveller names immediately; verify travel dates; verify departure and destination airports; review all stopovers and connections; confirm passport and travel-document alignment for international itineraries; check the operating carrier on codeshare or mixed-carrier itineraries; and verify the booking with the airline once the PNR is available, especially where travel is imminent or the itinerary is complex.",
        "A confirmation number is an indicator that a reservation exists, but it does not override airline rules relating to check-in, schedule changes, seat assignment, travel documents, baggage, or ancillary purchases.",
        "",
        "24-Hour Handling and Agency Policy",
        "The U.S. Department of Transportation's 24-hour rule for qualifying direct-airline bookings does not automatically apply to tickets purchased through travel agents or online travel agencies.",
        "Tickettooasia.com therefore adopts the following position: If you book through Tickettooasia.com, a penalty-free cancellation is not automatically guaranteed merely because the request falls within 24 hours. Where the airline fare rule, supplier void rule, or Tickettooasia.com policy allows it, we may process a 24-hour cancellation, void, or refund. If an assisted agent performs cancellation work, a reduced or waived agency fee may apply, but is not guaranteed unless shown in writing for the specific booking. If the fare was instantly ticketed, partially ticketed, contains non-voidable supplier content, or involves agency work already performed, a complete unwind may not be possible.",
        "",
        "Voluntary Changes and Exchanges",
        "If you ask to change an existing ticket: the airline or validating carrier must permit the change; the new itinerary must have eligible inventory; any fare difference must be paid; any airline exchange/change penalty must be paid where applicable; any Tickettooasia.com post-ticket exchange fee may apply; and the reissued ticket may carry new or different fare rules.",
        "Where a route has no airline change fee but fares have increased, the principal cost may be the fare difference plus the Tickettooasia.com servicing fee. Where the fare chosen is highly restrictive, no change may be permitted.",
        "",
        "Voluntary Cancellations and Future Credit",
        "For voluntary cancellations made after any applicable initial cooling-off or void period, the starting point is the fare rule attached to the ticket. Non-refundable fare usually means no cash refund for customer-initiated cancellation after the applicable void/cooling-off window. An airline credit may sometimes be available. Partially refundable fare means some taxes, surcharge portions, or fare value may be refundable depending on the applicable fare rule. Refundable fare may produce a refund to the original payment method, subject to supplier confirmation, cancellation timing, and any properly disclosed agency handling fee where permitted. If the airline permits future credit, it is generally subject to the airline's expiry, traveller, fare-class, and reissue restrictions. Any future credit is created by the airline or under airline rules, not by Tickettooasia.com alone.",
        "",
        "Refundable and Non-Refundable Fares",
        "Tickettooasia.com uses the following practical framework: Refundable fare may be eligible for refund to the original payment method, subject to fare rules and cancellation timing. Non-refundable fare usually not eligible for cash refund after the applicable cancellation/void period. Restricted/basic fare may prohibit changes, credits, or refunds depending on fare conditions. Premium fare (higher price does not automatically mean refundable; the actual fare conditions remain decisive). Airline credit may be available where permitted by the airline and subject to expiration and reissue restrictions.",
        "",
        "Airline Cancellations, Significant Schedule Changes and Alternative Transportation",
        "Where an airline cancels a flight or makes a qualifying significant schedule change, applicable law and airline policy may provide customers with rebooking or refund rights. For Tickettooasia.com bookings: if the airline cancels or significantly changes the flight and you do not accept the airline's alternative transportation, a refund may be due; where Noam Flyers Inc. / Tickettooasia.com is the merchant of record for the airfare and applicable law requires a refund, we will process the proper airfare refund when due; where the airline is the merchant of record, the airline will ordinarily be responsible for the airfare refund; ancillary refunds such as baggage or certain optional airline services may generally be handled by the airline. Customers should respond promptly to disruption communications because deadlines and airline waiver rules may apply.",
        "",
        "No-Shows, Missed Departures and Missed Connections",
        "A no-show may result in severe consequences. Unless the airline rule, formal waiver, or mandatory law provides otherwise: if you do not travel on the first unused segment and do not notify the airline or Tickettooasia.com before departure, remaining value may be lost; onward or return segments may be cancelled; voluntary refund eligibility may be lost; voluntary future-credit eligibility may be lost; and any available relief may depend on the airline's specific waiver or irregular-operations policy. Missing a flight because of late arrival at the airport, late baggage drop, failure to meet check-in deadlines, or failure to be present at the gate is ordinarily treated as a customer-side issue.",
        "",
        "Name Corrections, Name Changes and Reissues",
        "Tickettooasia.com distinguishes between: Minor correction (A spelling, formatting, or ordering issue that still refers to the same traveller); Material name change (A change that may effectively attempt to substitute a different traveller); and Transfer request (An attempt to transfer a ticket to another person). Only minor corrections may be possible, and only if: the validating carrier allows it; the route, stock, and operating carriers permit it; the correction remains within the airline's permitted tolerance; and any required reissue is completed. Traveller substitutions and ticket transfers are generally prohibited.",
        "",
        "Ancillary Services, Baggage, Seats and Special Requests",
        "Seat selection, meal preferences, wheelchair assistance, infant linkage, unaccompanied-minor handling, and similar items may be requests rather than guarantees. If Tickettooasia.com assists with an ancillary request: the request may require a separate service fee; the airline may decline, modify, or reassign the service; seats together are not guaranteed unless confirmed and operationally preserved by the airline; baggage allowances depend on the operating carrier and fare; refunds for paid airline ancillaries may need to be requested from the airline. Tickettooasia.com may assist with documentation or guidance, but supplier approval and supplier performance remain outside the agency's operational control.",
        "",
        "Scenario-Based Examples",
        "• Online booking cancelled within a few hours, before ticket issuance — We may attempt to void or cancel the request. Full unwind may be possible if payment settled cleanly and the fare was not yet ticketed.",
        "• Booking cancelled within 24 hours through Tickettooasia.com — Airline 24-hour rules do not automatically bind agency bookings. If airline or agency policy allows, a refund or void may be processed.",
        "• Non-refundable fare cancelled voluntarily — Usually no cash refund. Airline credit may be available if permitted by the airline.",
        "• Refundable fare cancelled before departure — Refund may be processed to original payment method, subject to supplier validation and any applicable agency handling fee.",
        "• Airline cancels flight and customer rejects rebooking — Refund may be due. Merchant of record matters for airfare refund.",
        "• Significant schedule change — Customer may have refund or rebooking rights depending on applicable law, route, airline policy, and circumstances.",
        "• No-show without advance notice — Most or all value may be lost and onward segments may be cancelled.",
        "• Missed flight because customer arrived late — Usually treated as customer responsibility.",
        "• Minor misspelling — Tickettooasia.com may attempt correction if the airline permits it.",
        "• Traveller substitution — Usually not permitted because airline tickets are generally non-transferable.",
        "• Medical, bereavement, military, visa, or other waiver request — Relief may be possible if the airline provides or grants a waiver and supporting evidence is supplied.",
        "• Airline weather waiver — Changes or credits may be processed under the published waiver terms.",
        "• Bag fee paid but bag significantly delayed or lost — Refund request generally needs to be directed to the airline.",
        "• Mixed-airline itinerary — Each airline's rules may apply separately, creating additional costs or restrictions."
      ]
    },
    {
      icon: Shield,
      title: "4. Responsibilities, Liability, Fraud Prevention and Data Use",
      twoColumn: true,
      content: [
        "",
        "Traveller Responsibilities and Document Compliance",
        "Travellers are responsible for obtaining and maintaining all required travel documents. You must: enter each traveller's name accurately; ensure passports and visas are valid; verify entry and transit requirements; provide mandatory passenger information; comply with immigration, customs, security, health, and other applicable requirements; review confirmation documents promptly; and notify Tickettooasia.com promptly if an apparent error is discovered. Tickettooasia.com does not guarantee that a traveller will be admitted to a country or permitted to board an aircraft.",
        "",
        "Check-in, Boarding and Timeline Compliance",
        "Travellers are responsible for meeting airline check-in and boarding deadlines. You should arrive sufficiently early to allow time for: security screening; baggage drop; document verification; immigration procedures; airport transfers within the terminal; and gate boarding. Failure to meet airline deadlines may result in denied boarding, cancellation of the reservation, no-show status, or loss of ticket value. Tickettooasia.com does not control these operational decisions.",
        "",
        "Multi-Airline Itineraries, Separate Tickets and Special Requests",
        "Where an itinerary involves multiple airlines, codeshares, or separate tickets, each carrier's rules may differ. If one flight is changed, cancelled, or rescheduled, another flight may not automatically receive protection. Where travel is not protected under a single through-ticket, customers may bear the cost of changing an unaffected ticket. Special requests such as seats, meals, wheelchair services, bassinets, or other preferences remain subject to supplier approval and operational conditions.",
        "",
        "Limitation of Liability",
        "Because Tickettooasia.com is an independent travel agency and not an operating carrier, our liability is limited to the services we actually perform. To the maximum extent permitted by applicable law, Tickettooasia.com shall not be liable for losses arising from: airline cancellations; delays; schedule changes; rerouting; missed connections; aircraft substitutions; denied boarding; oversales; seating changes; baggage loss, delay, or damage; airport operations; refusal to carry; passport or visa problems; security decisions; supplier non-performance; supplier insolvency; traveller failure to comply with check-in or boarding requirements; special requests not honoured by suppliers; or indirect, consequential, incidental, special, punitive, or exemplary losses, except where non-excludable law provides otherwise.",
        "If Tickettooasia.com is found liable for a direct loss caused by our own proven breach relating to an agency service, our aggregate liability for the affected booking will, to the maximum extent permitted by law, be limited to the total amount of Tickettooasia.com service fees actually paid by you for that booking. This limitation does not apply to statutory obligations that cannot legally be excluded.",
        "",
        "Indemnity",
        "You agree to indemnify and hold harmless Noam Flyers Inc., Tickettooasia.com, and their officers, employees, contractors, processors, and service providers against losses, costs, claims, liabilities, penalties, and expenses arising out of: your breach of these Terms; inaccurate passenger information supplied by you; violation of supplier rules or applicable law; fraudulent use of a payment instrument; bad-faith or abusive chargeback activity; misuse of the platform; automation, scraping, or speculative mass bookings; or claims brought by another traveller where you booked on that traveller's behalf without authority. This indemnity does not require you to indemnify us for our own fraud or wilful misconduct and applies only to the extent permitted by law.",
        "",
        "Verification, Fraud Controls and Sanctions Screening",
        "Travel transactions may involve fraud, card misuse, identity mismatch, and regulatory controls. Tickettooasia.com may therefore conduct: cardholder verification; billing-address verification; device-risk checks; document checks; duplicate-booking checks; fraud screening; sanctions screening; and other reasonable security checks. If a transaction cannot be verified or appears suspicious, we may delay ticketing, request additional documentation, reverse or cancel a booking request, or refuse future business. Failure to respond to a verification request within the communicated deadline may result in cancellation of the pending booking, voiding of an unticketed reservation, or reversal of payment authorisation.",
        "",
        "Privacy Summary",
        "Tickettooasia.com may collect and process information required to search, book, ticket, confirm, service, cancel, refund, or otherwise administer travel arrangements. This may include: traveller names; contact details; itinerary information; payment information; billing information; passport or travel-document information where necessary; communications relating to servicing requests; and other information required for travel fulfilment. Information may need to be shared with airlines, GDSs, settlement partners, fraud-screening providers, customer-support providers, payment processors, and government or regulatory authorities where necessary. Separate suppliers maintain their own privacy policies.",
        "By booking through Tickettooasia.com, you acknowledge that booking information may need to be transferred across jurisdictions and among multiple service providers to perform the requested travel and related payment, fraud, and servicing functions.",
        "",
        "Cookie Summary",
        "Tickettooasia.com may use the following cookie categories or similar technologies: Strictly necessary cookies (Operate booking flow, maintain secure sessions, manage fraud controls, or preserve an in-progress booking/search); Preference and functionality cookies (Remember settings such as language, region, or other preferences); Analytics cookies (Understand site performance, conversion, errors, and service improvements); Advertising / attribution cookies (Where lawful, measure campaigns, advertising performance, personalisation, or affiliate attribution). Where applicable law requires consent, non-essential cookies will be offered on a consent basis and may be managed through the website's cookie settings.",
        "",
        "Advertiser and Affiliate Disclosure",
        "Tickettooasia.com may display: sponsored placements; paid search or metasearch traffic; affiliate links; co-branded promotional content; promotional rates funded partly or entirely by partners. Where Tickettooasia.com receives a commission, referral payment, advertising payment, or other material benefit connected with presented content, the relationship may be disclosed where appropriate. A commercial relationship does not mean that Tickettooasia.com is the airline, that an airline owns Tickettooasia.com, or that a displayed airline has generally endorsed Tickettooasia.com.",
        "If offers are ranked, highlighted, or presented with badges, the ranking may be influenced by price, itinerary quality, availability, supplier content, commercial relationships, conversion behaviour, or user preferences. No ranking should be interpreted as a guarantee of lowest price, best service, or airline endorsement unless expressly stated."
      ]
    },
    {
      icon: Scale,
      title: "5. General Legal Terms and Customer-Facing Snippets",
      twoColumn: true,
      content: [
        "",
        "Governing Law and Disputes",
        "These Terms and any dispute arising out of or relating to Tickettooasia.com, Noam Flyers Inc., or a Tickettooasia.com booking request shall be governed by the laws of the applicable jurisdiction designated by Noam Flyers Inc. and applicable U.S. federal law, except to the extent mandatory consumer law requires otherwise.",
        "Before formal proceedings are initiated, the parties should first attempt to resolve the issue through customer-support escalation in good faith. Nothing in this clause removes a consumer's right to pursue a complaint with a regulator, payment issuer, or consumer-protection authority where permitted by law.",
        "",
        "Electronic Communications and Notices",
        "You agree that Tickettooasia.com may communicate with you electronically through: email; SMS; website notices; account/dashboard notices; booking messages; or other digital communications. These communications may concern bookings, payments, schedule changes, cancellations, servicing requests, fraud verification, refund status, or policy updates. You are responsible for maintaining accurate contact information. For legal or formal notices to Noam Flyers Inc., customers should use the current contact details published on the official Tickettooasia.com website or the relevant legal/contact page.",
        "",
        "Intellectual Property and Acceptable Website Use",
        "All Tickettooasia.com platform content, except third-party airline or supplier content used under applicable rights, belongs to Noam Flyers Inc. or its licensors. This includes: text; page layouts; branding; interface design; source code; pricing presentation logic; service marks; and proprietary compilations. You may not: copy, mirror, scrape, frame, or harvest the platform without permission; use bots or scripted processes to query fares at scale; attempt to reverse-engineer rate rules or internal scoring systems; commercially resell platform content without authorisation; interfere with site security; interfere with payment flows; or otherwise misuse the platform.",
        "",
        "Changes to These Terms, Severability, Waiver and Survival",
        "Tickettooasia.com may amend these Terms from time to time to reflect changes in law, payment rules, supplier practice, product design, service-fee structures, dispute processes, or internal risk controls. Updated Terms become effective when posted unless a different effective date is stated. For completed bookings, the version in force at the time of purchase or otherwise applicable to that booking will generally govern, unless mandatory law requires otherwise.",
        "If any clause is held invalid, unlawful, or unenforceable, the remaining clauses will continue in effect to the maximum extent permitted by law. Failure to enforce a clause immediately does not waive the right to enforce it later. Provisions concerning payment, fees, liability, indemnity, data use, disputes, intellectual property, fraud controls, and rights that by their nature should continue after completion of a booking will survive termination or completion of the booking."
      ]
    },
    {
      icon: Globe,
      title: "Customer-Facing Wording Snippets",
      twoColumn: true,
      content: [
        "The following statements may be used in the website footer, FAQ, checkout, support pages, or booking communications. They summarise rather than replace the full Terms & Conditions.",
        "",
        "Independent Agency Status",
        "Tickettooasia.com is operated by Noam Flyers Inc., an independent travel agency. We are not an airline and do not operate flights.",
        "",
        "ARC Accreditation Statement",
        "Noam Flyers Inc. is an ARC-accredited travel agency. ARC accreditation reflects participation in recognised travel-agency ticketing and settlement infrastructure. ARC accreditation does not mean that we are an airline or affiliated with any airline.",
        "",
        "Booking Channel Statement",
        "You may book online yourself or request phone assistance. Assisted bookings may carry different or higher service fees than online self-service bookings.",
        "",
        "Fare Volatility Statement",
        "Air fares are dynamic and may change until ticketed and confirmed by the airline or supplier.",
        "",
        "Total Price Statement",
        "The final amount charged by Noam Flyers Inc. will be shown before payment confirmation. Optional airline extras may be charged separately by the airline.",
        "",
        "Ticketing Status Statement",
        "A booking request or payment receipt does not necessarily mean that the ticket has been issued. Final confirmation follows ticketing and/or supplier confirmation.",
        "",
        "Refund Rights Statement",
        "Refund and credit eligibility depends on airline fare rules, applicable law, timing, and whether Noam Flyers Inc. or the airline is the merchant of record.",
        "",
        "24-Hour Statement",
        "Airline 24-hour cancellation rules do not automatically apply to third-party agency bookings. Similar handling may be available where the applicable fare, supplier, or agency policy allows.",
        "",
        "No-Show Statement",
        "Most no-show bookings may lose value unless the airline rule, waiver, or applicable law provides relief.",
        "",
        "Name-Correction Statement",
        "Minor spelling corrections may be possible if the airline allows them. Traveller substitutions or ticket transfers are generally not permitted.",
        "",
        "Ancillary-Service Statement",
        "Seats, bags, meals, and other extras may be request-only or supplier-controlled. Airline approval and operating-carrier rules apply.",
        "",
        "Baggage-Refund Statement",
        "If an airline optional service is not provided, or if a checked bag is significantly delayed or lost, the refund request will generally need to be directed to the airline.",
        "",
        "Document-Responsibility Statement",
        "Travellers are responsible for ensuring that names, passports, visas, and other travel documents are accurate and valid for the full journey.",
        "",
        "Chargeback Statement",
        "If you believe a charge is unauthorised or incorrect, please contact us first so we can investigate. Your statutory card-dispute rights remain unaffected.",
        "",
        "Cookie-Consent Statement",
        "We use essential cookies to operate the site and, where permitted, optional cookies for analytics and advertising. You can manage your choices through Cookie Settings.",
        "",
        "These short statements are intended to summarise, not replace, the full Terms & Conditions. Where a short statement and the full Terms differ in detail, the full Terms will govern unless applicable law requires a more consumer-favourable interpretation."
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
            <span className="text-[#2a2420]/60">Terms & Conditions</span>
          </nav>

          <div className="max-w-auto mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Terms & Conditions
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

                          // 3. Render sub-headers in bold brown (Full List)
                          if (paragraph === "Corporate Identity and Operator" ||
                              paragraph === "ARC Accreditation and Verification" ||
                              paragraph === "Independent Agency Status and Airline Non-Affiliation" ||
                              paragraph === "Definitions" ||
                              paragraph === "Acceptance, Eligibility and Permitted Use" ||
                              paragraph === "Supplier Terms and Incorporated Airline Rules" ||
                              paragraph === "Booking Channels" ||
                              paragraph === "Booking Flow" ||
                              paragraph === "Dynamic Pricing and Fare Accuracy" ||
                              paragraph === "Total Price Disclosure, Taxes and Surcharges" ||
                              paragraph === "Tickettooasia.com Service-Fee Framework" ||
                              paragraph === "Important Rules About Tickettooasia.com Fees" ||
                              paragraph === "Sample Price Calculations" ||
                              paragraph === "Payment Authorisation, Merchant of Record and Secure Processing" ||
                              paragraph === "Failed Payments, Reversals and Chargebacks" ||
                              paragraph === "Pricing Errors, Tax Changes and Currency Conversion" ||
                              paragraph === "Fulfilment Policy and Ticket Issuance" ||
                              paragraph === "Ticketing Timelines and Possible Delays" ||
                              paragraph === "Confirmation, PNR and Airline Verification" ||
                              paragraph === "24-Hour Handling and Agency Policy" ||
                              paragraph === "Voluntary Changes and Exchanges" ||
                              paragraph === "Voluntary Cancellations and Future Credit" ||
                              paragraph === "Refundable and Non-Refundable Fares" ||
                              paragraph === "Airline Cancellations, Significant Schedule Changes and Alternative Transportation" ||
                              paragraph === "No-Shows, Missed Departures and Missed Connections" ||
                              paragraph === "Name Corrections, Name Changes and Reissues" ||
                              paragraph === "Ancillary Services, Baggage, Seats and Special Requests" ||
                              paragraph === "Scenario-Based Examples" ||
                              paragraph === "Traveller Responsibilities and Document Compliance" ||
                              paragraph === "Check-in, Boarding and Timeline Compliance" ||
                              paragraph === "Multi-Airline Itineraries, Separate Tickets and Special Requests" ||
                              paragraph === "Limitation of Liability" ||
                              paragraph === "Indemnity" ||
                              paragraph === "Verification, Fraud Controls and Sanctions Screening" ||
                              paragraph === "Privacy Summary" ||
                              paragraph === "Cookie Summary" ||
                              paragraph === "Advertiser and Affiliate Disclosure" ||
                              paragraph === "Governing Law and Disputes" ||
                              paragraph === "Electronic Communications and Notices" ||
                              paragraph === "Intellectual Property and Acceptable Website Use" ||
                              paragraph === "Changes to These Terms, Severability, Waiver and Survival" ||
                              paragraph === "Independent Agency Status" ||
                              paragraph === "ARC Accreditation Statement" ||
                              paragraph === "Booking Channel Statement" ||
                              paragraph === "Fare Volatility Statement" ||
                              paragraph === "Total Price Statement" ||
                              paragraph === "Ticketing Status Statement" ||
                              paragraph === "Refund Rights Statement" ||
                              paragraph === "24-Hour Statement" ||
                              paragraph === "No-Show Statement" ||
                              paragraph === "Name-Correction Statement" ||
                              paragraph === "Ancillary-Service Statement" ||
                              paragraph === "Baggage-Refund Statement" ||
                              paragraph === "Document-Responsibility Statement" ||
                              paragraph === "Chargeback Statement" ||
                              paragraph === "Cookie-Consent Statement") {
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