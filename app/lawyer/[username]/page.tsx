import Link from "next/link";
import { FullStar, EmptyStar } from "../../other/stars";
export default function ProfessionalProfilePage(props: any) {
  console.log(props);
  return (
    <div className="">
      <Link
        className="hover:underline pt-4 text-sky-900 flex pl-11 pb-6"
        href="./"
      >
        {" "}
        <img
          className="w-5 h-5 pt-1 pr-1"
          src="https://img.icons8.com/fluency-systems-regular/344/arrow-pointing-left.png"
          alt=""
        />
        Back to list
      </Link>
      <div className="w-full flex px-11">
        <div className="w-8/12  border-r border-solid border-slate-300 pt-4 px-2.5">
          <div className="w-full h-80 flex">
            <img
              className="w-56 shadow-xl h-64"
              src="https://clarkstonnews.com/wp-content/uploads/2017/08/obit-davis-erwin-701x929.jpg"
            />
            <div className="pl-3">
              <p className="font-bold text-xl">Ganesh Kadam</p>
              <p className="pb-3 text-sm">Advocate, Pune</p>
              <p className="text-sm">12412 Answers</p>
              <p className="text-sm pb-2">191 Consultations</p>
              <div className="flex">
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
              </div>
              <p className="text-xs pb-10">5.0 on 5.0</p>
              <div className="flex text-sm">
                <input className="mr-1.5" type="checkbox" checked /> Fluent in
                Hindi, English, Marathi
              </div>
            </div>
          </div>
          <div className="w-full pr-2 border-t border-solid border-slate-300 pt-3 pl-3 h-96">
            <p className="font-bold text-lg pb-2">
              About Advocate Ganesh Kadam
            </p>
            <p className="pb-3">
              I am practicing lawyer in field of Family, Labour Corporate and
              Civil (Property laws) courts.
            </p>
            <p className="pb-3">
              I have experience in Insurance claims and hospital service issue,
              where insurance companies denies the claim of claimant.
            </p>
            <p className="pb-3">
              As per No Fault law of New York state of USA.
            </p>
            <p className="pb-3">I am also GST Practitioner.</p>
            <p className="pb-3">
              I will be happy to provide a legal services in the society. All my
              services will be online Virtual in all fields of Law.
            </p>
            <p className="pb-2">I am available for legal consultation.</p>
            <p>
              I provide the Drafting, Document Review, Sale Deed, Will, Gift
              Deed, POA etc., Citation cases on any subject matter or Topics,
              Mutual Consent Divorce Agreement, MOU, Petition filing,
              Adjournment, Writ Petition drafting preparation for PIP at
              reasonable fees charges.
            </p>
          </div>
        </div>
        <div className="w-4/12 pt-2 pl-10 ">
          <p className="font-bold text-lg pb-3">Get legal help now</p>
          <form className="w-full" action="">
            <textarea
              placeholder="Describe your situation"
              name="Legal help"
              className="border border-slate-300 border-solid w-9/12 h-56 p-1.5 rounded-md mb-3"
            ></textarea>
            <input
              type="email"
              placeholder="My Email"
              className="px-16 rounded border border-solid border-slate-300 py-2 mb-4 text-sm "
            />
            <input
              type="email"
              placeholder="My Mobile Number"
              className="px-16 rounded border border-solid border-slate-300 py-2 mb-5 text-sm"
            />

            <Link
              className="block w-72 bg-cyan-700 text-white text-center py-2 rounded-lg mb-3"
              href="../question/"
            >
              Ask a Question
            </Link>
            <Link
              className="block w-72 bg-red-600 text-white text-center py-2 rounded-lg"
              href=""
            >
              Book a Consultation
            </Link>
          </form>
        </div>
      </div>
      <div className="w-full flex   px-11 pt-4">
        <div className="w-8/12  border-r border-solid border-slate-300 py-2 px-2.5 pb-3">
          <p className="font-semibold text-lg pb-4">Practice Areas</p>
          <div className="h-24">
            <p className="font-semibold text-lg pb-2">Family Law</p>
            <p className="text-sm">
              Marriage, Divorce, Alimony and maintenance, Restitution of
              conjugal rights, Judicial separation, Domestic violence, 498a,
              Child custody, Annulment of marriage
            </p>
          </div>
          <div className="h-24">
            <p className="font-semibold text-lg pb-2">Civil Law</p>
            <p className="text-sm">
              Name change, Passport issues, Date of birth issues, Aadhar card
              issues, PAN card issues, Legal notice, Civil cases, Defamation,
              Right to information, Banking, Loans, Recovery of money, Motor
              accident, International law
            </p>
          </div>
          <div className="h-28">
            <p className="font-semibold text-lg pb-2">Property Law</p>
            <p className="text-sm">
              Rights of sons/daughters/wife, Legal heir, Legal heirship
              certificate, Buying property, Selling property, Sale agreement,
              Sale deed, Gift deed, Wills and trusts, Power of attorney, Builder
              issues, Other property matters, Partition of property, Deed of
              family settlement, Succession certificate, Succession of property
            </p>
          </div>
          <div className="h-20">
            <p className="font-semibold text-lg pb-2">Business Law</p>
            <p className="text-sm">
              Corporate matters, Business contracts, Arbitration, Share
              transfer, Winding up petitions, Other business matters
            </p>
          </div>
          <div className="h-20">
            <p className="font-semibold text-lg pb-2">Constitutional Law</p>
            <p className="text-sm">
              Fundamental rights, OBC, Writ petitions, Public interest
              litigation, Other issues
            </p>
          </div>
        </div>
        <div className="w-4/12  pt-2 pl-10">
          <p className="font-semibold text-lg pb-3">Courts</p>
          <ul>
            <li>Bombay High Court</li>
            <li>Bombay High Court (Aurangabad Bench)</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex   px-11 pt-4">
        <div className="w-8/12  border-r border-solid border-slate-300 py-2 px-2.5 pb-3">
          <p className="font-semibold text-lg pb-3">
            Ganesh Kadams recent answers
          </p>
          <div className="flex">
            <div className="w-6/12">
              <p className="text-cyan-700">
                Rights of mother in deceased sons property
              </p>
              <p className="text-xs pb-3">Answered 2 days ago</p>
              <p>
                My brother was arrested for helping his friend (35 years) run
                away with a girl(23 years)
              </p>
              <p className="text-xs pb-3">Answered 2 days ago</p>
              <p className="text-cyan-700">
                Can OCI Cardholder get their share of agricultural land when it
                is subdivided?
              </p>
              <p className="text-xs pb-3">Answered 2 days ago</p>
              <p>We lived in a relationship after divorce for 9 months</p>
              <p className="text-xs pb-3">Answered 12 days ago</p>
              <p>Divorce from USA</p>
              <p className="text-xs ">Answered 12 days ago</p>
            </div>
            <div className="w-6/12">
              <p className="text-cyan-700">
                I want to relinquish my right of inheritance
              </p>
              <p className="text-xs pb-3">Answered 20 days ago</p>
              <p className="text-cyan-700">Divorce in Germany</p>
              <p className="text-xs pb-3">Answered 1 month ago</p>
              <p className="text-cyan-700">Divorce in Germany</p>
              <p className="text-xs pb-3">Answered 1 month ago</p>
              <p>MoU prior to Mutual Consent Divorce</p>
              <p className="text-xs pb-3">Answered 1 month ago</p>
              <p>
                What legal action can we take with wife residing in USA with two
                kids
              </p>
              <p className="text-xs ">Answered 1 month ago</p>
            </div>
          </div>
        </div>
        <div className="w-4/12  pt-2 pl-10 h-96">
          <p className="font-semibold text-lg pb-3 flex">
            <img
              className="w-6 h-7 pt-1"
              src="https://img.icons8.com/glyph-neue/344/user-location.png"
              alt=""
            />{" "}
            Office Location
          </p>
          <p className="pb-1">
            Flat No. 6, Plot No. 17, Survey No. 28/8/7/1, Sanjivani Building
          </p>
          <p className="pb-1">Raghav Nagar CHS, Opp Pendse Hall, Dhankawadi,</p>
          <p>Pune 411043</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.827788352356!2d73.83460021436834!3d18.491458174891328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff990000001%3A0x3291e3e36f9ad234!2sPune-Okayama%20Friendship%20Garden!5e0!3m2!1sen!2sng!4v1667025683912!5m2!1sen!2sng"
            width="300"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-full  px-11 pt-16 h-auto">
        <p className="font-semibold text-lg pb-3">Other lawyers in Pune</p>
        <div className="flex h-56  pb-6">
          <div className="w-4/12 border-r border-solid border-slate-300 py-2 px-2.5 pb-3 flex pt-2">
            <img
              className="shadow-xl w-32 h-40"
              src="https://remap.ch/wp-content/uploads/2020/12/PhilippHeer-1390x1536.jpg"
              alt=""
            />
            <div className="pl-6">
              <p className="text-cyan-700 font-semibold">Vikas Musale</p>
              <p className="text-sm pb-2">Advocate, Pune</p>
              <p className="text-xs">10 Answers</p>
              <p className="text-xs pb-2">1 Consultation</p>
              <div className="flex">
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
              </div>
              <p className="text-xs">4.0 on 5.0</p>
            </div>
          </div>
          <div className="w-4/12 border-r border-solid border-slate-300 py-2 px-2.5 pb-3 flex pt-2">
            <img
              className="shadow-xl h-40 w-32"
              src="https://th.bing.com/th/id/OIP.ebkVb31_WRgupRDZ_xS-CwHaLH?pid=ImgDet&rs=1"
              alt=""
            />
            <div className="pl-6">
              <p className="text-cyan-700 font-semibold">Rahul Kankariya</p>
              <p className="text-sm pb-3">Advocate, Pune</p>
              <div className="flex">
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
              </div>
              <p className="text-xs">Not rated</p>
            </div>
          </div>
          <div className="w-4/12  py-2 px-2.5 pb-3 flex">
            <img
              className="shadow-xl h-40 w-32"
              src="https://th.bing.com/th/id/R.45c3d9ddfeb1bd34c75138ba6ac4c562?rik=G5kw6dK5U7spEw&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="pl-6">
              <p className="text-cyan-700 font-semibold">
                Akshay Uttam Chikhale
              </p>
              <p className="text-sm pb-2">Advocate, Pune</p>
              <p className="text-xs pb-3">4 Answers</p>
              <div className="flex">
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
              </div>
              <p className="text-xs">Not rated</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-2 pb-7">
          <Link
            className="w-2/12 text-cyan-700 border-solid border border-cyan-700 rounded-3xl p-3 hover:bg-cyan-700 hover:text-white block mx-auto text-center"
            href=""
          >
            SEE MORE LAWYERS
          </Link>
        </div>
      </div>
      <footer className="bg-zinc-700 text-white w-full">
        <div className="px-11 py-6 h-56 border-b border-solid border-gray-500 flex">
          <div className="w-3/12">
            <p className="font-semibold">About LegalWaka</p>
            <div className="grid w-full pl-2 pt-2">
              <a className="text-sm" href="">
                About Us
              </a>
              <a className="text-sm" href="">
                Contact Us
              </a>
              <a className="text-sm" href="">
                Send Feedback
              </a>
              <a className="text-sm" href="">
                LegalWaka Blog
              </a>
              <a className="text-sm" href="">
                Terms of Use
              </a>
              <a className="text-sm" href="">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="w-3/12 ">
            {" "}
            <p className="font-semibold">Lawyers</p>
            <div className="grid w-full pl-1 pt-2">
              <a className="text-xs" href="">
                Lawyers in New Delhi
              </a>
              <a className="text-xs" href="">
                Lawyers in Bangalore
              </a>
              <a className="text-xs" href="">
                Lawyers in Hyderabad
              </a>
              <a className="text-xs" href="">
                Lawyers in Mumbai
              </a>
              <a className="text-xs" href="">
                Lawyers in Kolkata
              </a>
              <a className="text-xs" href="">
                Lawyers in Noida
              </a>
              <a className="text-xs" href="">
                Lawyers in Allahabad
              </a>
              <a className="text-xs" href="">
                More lawyers
              </a>
            </div>
          </div>
          <div className="w-3/12">
            <p className="font-semibold">Divorce Lawyers</p>
            <div className="grid w-full pl-1 pt-2">
              <a className="text-xs" href="">
                Divorce lawyers in New Delhi
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Bangalore
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Hyderabad
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Mumbai
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Kolkata
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Noida
              </a>
              <a className="text-xs" href="">
                Divorce lawyers in Allahabad
              </a>
              <a className="text-xs" href="">
                More divorce lawyers
              </a>
            </div>
          </div>
          <div className="w-3/12 ">
            <p className="font-semibold">Property Lawyers</p>
            <div className="grid w-full pl-1 pt-2">
              <a className="text-xs" href="">
                Property lawyers in New Delhi
              </a>
              <a className="text-xs" href="">
                Property lawyers in Bangalore
              </a>
              <a className="text-xs" href="">
                Property lawyers in Hyderabad
              </a>
              <a className="text-xs" href="">
                Property lawyers in Mumbai
              </a>
              <a className="text-xs" href="">
                Property lawyers in Kolkata
              </a>
              <a className="text-xs" href="">
                Property lawyers in Noida
              </a>
              <a className="text-xs" href="">
                Property lawyers in Allahabad
              </a>
              <a className="text-xs" href="">
                More property lawyers
              </a>
            </div>
          </div>
          <div className="w-3/12 ">
            <p className="font-semibold">Indian Lawyers</p>
            <div className="grid w-full pl-1 pt-2">
              <a className="text-xs" href="">
                Indian Penal Code
              </a>
              <a className="text-xs" href="">
                Hindu Marriage Act
              </a>
              <a className="text-xs" href="">
                Special Marriages Act
              </a>
              <a className="text-xs" href="">
                Hindu Succession Act
              </a>
              <a className="text-xs" href="">
                Criminal Procedure Code
              </a>
              <a className="text-xs" href="">
                Indian Divorce Act
              </a>
              <a className="text-xs" href="">
                Consumer Protection Act
              </a>
              <a className="text-xs" href="">
                More Indian laws
              </a>
            </div>
          </div>
        </div>
        <div className="px-11 py-6 h-36 ">
          <p className="text-sm font-light pb-5">
            Disclaimer: The lawyer listings on kaanoon.com do not constitute a
            referral or endorsement by kaanoon.com. kaanoon.com is not an
            advertising service for lawyers. kaanoon.com is providing legal
            information for nominal charges. Your access to and use of this site
            is subject to our{" "}
            <a className="text-base hover:underline" href="">
              Terms of Use.
            </a>
          </p>
          <p className="text-sm font-light">
            © 2013-2022 Kaanoon Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
