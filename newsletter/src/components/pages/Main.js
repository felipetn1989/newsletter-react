import check from "../images/icon-list.svg";
import MailForm from "../form/MailForm";

export default function Main({setShowSuccess}) {
  return (
    <main className="grid gap-3.5 text-[#242742] py-8 px-6 bg-white lg:py-[6.375rem] lg:rounded-l-[2.0625rem]">
      <h1 className="font-bold text-[2.375rem] tracking-wide">Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="grid gap-y-2.5 mt-2.5">
        <li className="flex items-start gap-4">
          <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
          <span>Product discovery and building what matters</span>
        </li>
        <li className="flex items-start gap-4">
          <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li className="flex items-start gap-4">
          <img className="w-[1.375rem] translate-y-0.5" src={check} alt="" aria-hidden="true" />
          <span>And much more!</span>
        </li>
      </ul>
      <MailForm setShowSuccess={setShowSuccess} />
    </main>
  );
}
