    "use client";

import { 
  Info, 
  Landmark, 
  Plane, 
  DollarSign, 
  FileText, 
  Globe, 
  Package, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  Scale, 
  AlertCircle, 
  Phone,
  Shield,
  Award,
  RefreshCw,
  Banknote,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function TaxesFeesPage() {
  const sections = [
    {
      icon: Info,
      title: "Introduction",
      content: [
        "Tickettooasia.com is operated by Noam Flyers Inc. Tickettooasia.com is an independent travel agency and is not an airline. This page explains the difference between government taxes, airport or passenger charges, airline-imposed charges, and Noam Flyers Inc.'s own service fees.",
        "The purpose of this page is to provide customers with a clear understanding of the different components that may make up the total price of an airline booking. Airline taxation and fee structures can vary by itinerary, country, airport, airline, fare type, passenger type, and date of travel. The final amount presented before payment should therefore always be treated as the applicable price for the transaction.",
        "When a customer books air travel through Tickettooasia.com, the total amount may include the airline's base fare, airline-imposed surcharges or carrier charges, government taxes, airport or passenger charges, security or inspection fees, and, where applicable, a service fee charged by Noam Flyers Inc.",
        "Optional services selected by the customer may result in additional charges. These may include checked baggage, seat selection, upgrades, priority services, travel protection, or other airline or third-party ancillary products."
      ]
    },
    {
      icon: Landmark,
      title: "Government Taxes and Airport Charges",
      content: [
        "Government taxes and airport-related charges are generally imposed by the applicable government authority, airport, security agency, or other regulatory body. These amounts are normally collected through the airline ticketing and settlement process.",
        "The amount applicable to a specific booking may depend on the origin, destination, connecting airports, country of travel, point of sale, cabin class, passenger type, fare construction, and date of travel.",
        "Accordingly, amounts shown in general examples on this page should not be interpreted as a guaranteed tax amount for any particular itinerary.",
        "For U.S.-related travel, commonly applicable charges may include federal air transportation excise taxes, domestic segment taxes, international facilities taxes, Transportation Security Administration security fees, Passenger Facility Charges, and other applicable government or airport charges.",
        "International itineraries may also include passenger duties, airport charges, inspection fees, customs or immigration-related charges, or other government-imposed amounts."
      ]
    },
    {
      icon: Plane,
      title: "Airline-Imposed Charges",
      content: [
        "Airlines may impose charges in addition to the base fare. Depending on the airline and fare purchased, these may include carrier-imposed surcharges, change penalties, cancellation penalties, reissue charges, no-show penalties, or other amounts associated with the airline's fare rules.",
        "Airline-imposed charges are separate from any service fee charged by Noam Flyers Inc.",
        "Tickettooasia.com does not represent an airline-imposed charge as a government tax or as a Tickettooasia.com agency fee.",
        "Airline charges may vary based on the airline, route, fare family, cabin, ticket conditions, passenger type, and timing of the transaction."
      ]
    },
    {
      icon: DollarSign,
      title: "Noam Flyers Inc. Service Fees",
      content: [
        "Noam Flyers Inc. may charge a service fee for certain services provided through Tickettooasia.com.",
        "These fees compensate Noam Flyers Inc. for travel-agency services and are separate from airline fares, government taxes, airport charges, airline penalties, and optional ancillary services.",
        "Where a service fee applies, the applicable amount will be disclosed before the customer authorises payment or before the requested service is performed, as applicable."
      ]
    },
    {
      icon: FileText,
      title: "Noam Flyers Inc. Transaction-Fee Schedule",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[480px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Noam Flyers Inc. Fee Type</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Draft Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Online self-service air booking fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 0.00 to USD 60.00 per passenger, per ticket</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Online premium-cabin or high-touch air booking fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Up to USD 120.00 per passenger</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Assisted standard booking fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 15.00 to USD 150.00 per passenger, per ticket</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Assisted complex/multi-city/manual itinerary fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Up to USD 250.00 per passenger</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Assisted search variation fee — alternate dates / nearby airports on request</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Up to USD 50.00 per passenger</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Group or non-standard research fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>As quoted before payment</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2" style={{ color: '#2a242060' }}>
              The amounts above are agency service fees and are not government taxes, airport charges, airline-imposed penalties, or airline surcharges.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Online and Assisted Booking Fees",
      content: [
        "Tickettooasia.com may provide both online self-service booking and assisted booking support.",
        "A customer completing a booking independently through the online booking process may receive a different service-fee structure from a customer who requests assistance from a Noam Flyers Inc. representative.",
        "Assisted bookings may involve additional manual work, including itinerary research, fare comparison, passenger-detail verification, payment assistance, manual ticketing, special requests, or other support.",
        "Any difference in service fees between online and assisted booking channels will be disclosed before the customer commits to the transaction."
      ]
    },
    {
      icon: Package,
      title: "Optional Services and Ancillaries",
      content: [
        "The displayed airfare may not include optional services that have not been selected by the customer.",
        "Additional charges may apply for:",
        "• Checked baggage",
        "• Seat selection",
        "• Preferred seating",
        "• Priority boarding",
        "• Cabin upgrades",
        "• Meals or other onboard services",
        "• Travel protection or insurance",
        "• Airline-specific ancillary services",
        "• Other optional products or services",
        "Where an optional service is selected during the booking process, the applicable charge should be displayed before payment is completed."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "Dynamic Taxes and Pricing",
      content: [
        "Airfare, taxes, fees, and availability may change before a booking is fully confirmed and ticketed.",
        "A fare or tax amount displayed during an initial search may change because of airline inventory changes, fare-class availability, government tax changes, airport charges, currency fluctuations, supplier updates, or other factors.",
        "The final amount displayed or quoted to the customer before payment authorisation is the amount that should be reviewed before completing the transaction.",
        "Tickettooasia.com does not guarantee that an initially displayed fare or tax amount will remain available until ticketing unless the fare has been successfully confirmed and ticketed.",
        "If the applicable fare or total price changes before completion of the transaction, the customer may be informed of the revised amount and, where applicable, given the opportunity to accept or decline the revised price."
      ]
    },
    {
      icon: FileText,
      title: "Tax Codes and Ticket Receipts",
      content: [
        "Airline tickets and booking confirmations may display taxes and charges using industry-standard tax codes rather than full descriptions.",
        "Tax codes and their application may vary depending on the itinerary, country, airport, passenger type, and other characteristics of the booking.",
        "Customers requiring a detailed explanation of the taxes and charges applicable to a specific reservation should refer to the final ticket receipt, booking confirmation, invoice, or other transaction documentation provided for that reservation."
      ]
    },
    {
      icon: FileText,
      title: "Illustrative Tax and Fee Table",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[640px] sm:min-w-full">
            <p className="text-xs mb-2" style={{ color: '#2a242060' }}>
              The following table is provided for general informational purposes only. It does not constitute a quotation of the taxes applicable to any specific itinerary.
            </p>
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Component</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Typical Basis</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Official/Public Anchor or Treatment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>U.S. Air Transportation Excise Tax</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Percentage of applicable taxable fare</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>7.5% where applicable</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>U.S. Domestic Segment Tax</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Per taxable domestic segment</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 5.30 per applicable segment</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>U.S. International Facilities Tax</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Per qualifying international passenger</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>USD 23.40 where applicable</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>TSA September 11 Security Fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Passenger/trip basis</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>TSA-collected security fee</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Passenger Facility Charge</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Per eligible airport segment</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Up to USD 4.50 per eligible segment, subject to applicable route limits</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Other International Inspection/User Fees</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Itinerary-specific</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Varies depending on country and itinerary</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airport and Passenger Charges</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airport/route specific</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Varies</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airline-Imposed Charges</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline and fare specific</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Varies</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Noam Flyers Inc. Service Fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Agency-specific</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>As disclosed before payment</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Optional Ancillary Services</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Service selected by customer</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>As displayed before purchase</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2" style={{ color: '#2a242060' }}>
              The tax and fee amounts above are illustrative and may change according to applicable law, regulation, airline rules, airport requirements, itinerary, or other applicable circumstances.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "Refundability of Taxes and Fees",
      content: [
        "Government taxes, airport charges, passenger duties, and other authority-imposed amounts are not necessarily refundable in every cancellation or refund situation.",
        "Whether a particular tax or charge is refundable may depend on applicable law, the airline's rules, the fare conditions, whether the ticket was used, whether the charge was actually collected or remitted, and the applicable refund procedure.",
        "Noam Flyers Inc.'s own service fees are separate from airline fares and government charges. A service fee may be non-refundable once the related agency service has been performed, subject to the applicable service-fee terms and any legal requirement to refund the amount.",
        "Customers should review the applicable Cancellation & Refund Policy and Post-Ticketing Service Fees before requesting a cancellation, refund, exchange, or other post-ticketing service."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment and Collection",
      content: [
        "Noam Flyers Inc. may collect amounts associated with an airline booking, including airfare, applicable taxes, charges, and any disclosed agency service fee, depending on the applicable booking and payment structure.",
        "Where permitted by the applicable payment and ticketing arrangements, the total transaction may consist of multiple payment components. Where multiple components are used, the combined amount should correspond to the total amount agreed to by the customer before payment.",
        "Customers should carefully review the total amount, currency, passenger names, itinerary, fare conditions, baggage inclusions, optional services, and applicable agency service fees before submitting payment."
      ]
    },
    {
      icon: FileText,
      title: "Tax and Fee Responsibility",
      content: (
        <div className="overflow-x-auto mt-2 -mx-2 sm:-mx-4 md:mx-0">
          <div className="min-w-[640px] sm:min-w-full">
            <table className="w-full border-collapse text-xs sm:text-sm" style={{ borderColor: '#eae0d5' }}>
              <thead>
                <tr style={{ backgroundColor: '#eae0d5' }}>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Charge Type</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Typically Determined By</th>
                  <th className="border px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Treatment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airline base fare</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Forms the transportation price</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airline-imposed surcharge</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Subject to airline pricing and fare rules</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Government tax</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Government authority</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Collected as applicable to the itinerary</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Airport charge</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airport or applicable authority</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Varies by airport and itinerary</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Security fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Government/security authority</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applies where required</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Passenger Facility Charge</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applicable airport/authority</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applies to eligible itineraries</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Optional baggage or seat fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Airline or service provider</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applies only when selected or otherwise applicable</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Noam Flyers Inc. service fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc.</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Agency charge disclosed before payment</td>
                </tr>
                <tr className="transition-colors" style={{ borderColor: '#eae0d5' }}>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3 font-medium" style={{ borderColor: '#eae0d5', color: '#3d3226' }}>Post-ticketing service fee</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Noam Flyers Inc.</td>
                  <td className="border px-2 sm:px-4 py-2 sm:py-3" style={{ borderColor: '#eae0d5', color: '#2a242099' }}>Applies where a qualifying after-sale service is requested</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: CheckCircle,
      title: "Final Price Disclosure",
      content: [
        "The final price presented to the customer before payment is the most important price in the transaction.",
        "Before authorising payment, customers should review:",
        "• The total price",
        "• The applicable currency",
        "• Passenger names",
        "• Travel dates",
        "• Origin and destination",
        "• Flight details",
        "• Cabin and fare type",
        "• Included baggage",
        "• Optional services selected",
        "• Airline fare restrictions",
        "• Cancellation and refund conditions",
        "• Any Noam Flyers Inc. service fee",
        "If the customer does not agree with the final price or applicable conditions, the customer should not proceed with payment."
      ],
      twoColumn: true
    },
    {
      icon: Scale,
      title: "Legal Clause",
      content: [
        "Government taxes, passenger duties, airport charges, security fees, and other authority-imposed amounts are not controlled by Noam Flyers Inc. and may change before ticketing or travel.",
        "Noam Flyers Inc.'s own service fees are agency charges for services provided through Tickettooasia.com and are separate from government taxes, airport charges, airline-imposed penalties, airline surcharges, fare differences, and optional ancillary charges.",
        "Payment of an agency service fee does not create or guarantee any right to an airline refund, waiver, exchange, cancellation, or other airline-approved remedy.",
        "The final taxes, fees, and total amount payable are determined by the applicable itinerary, fare, supplier conditions, taxes, regulations, and services selected by the customer at the time of booking."
      ]
    },
    {
      icon: AlertCircle,
      title: "Important Disclaimer",
      content: [
        "The examples and descriptions on this page are provided for general informational purposes only and do not guarantee the taxes, fees, or charges applicable to any specific reservation.",
        "The final price and applicable charges presented during the booking process and reflected in the issued ticket, invoice, receipt, or confirmation will govern the applicable transaction."
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
            <span className="text-[#2a2420]/60">Taxes & Fees</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
                Taxes & Fees
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

                          // 3. Normal paragraph
                          return (
                            <p key={pIndex} className="col-span-2 leading-relaxed" style={{ color: '#2a242099' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // React element handler (table)
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