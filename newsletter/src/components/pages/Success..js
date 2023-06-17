import icon from "../images/icon-success.svg";

export default function Success({ setShowSuccess }) {
  function dismiss() {
    setShowSuccess(null);
  }

  return (
    <div className="grid gap-[1.4375rem] py-[9.25rem] px-6 text-[#242742]">
      <img src={icon} alt="Success Icon" />
      <h1 className="font-bold text-4xl tracking-wider mt-[1.125rem]">
        Thanks for <br /> subscribing!
      </h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">ash@loremcompany.com</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
      <button
        className="bg-[#242742] text-white font-bold mt-60 pt-[1.0625rem] pb-4 rounded-lg hover:bg-[#ff6257] hover:shadow-lg"
        onClick={dismiss}
      >
        Dismiss message
      </button>
    </div>
  );
}
