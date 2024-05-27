/* eslint-disable no-template-curly-in-string */
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";

const Terms = () => {

  return (
    <>
      {addMetaData({
        title: "Terms and Conditions",
        description: "Read our terms and conditions to understand our policies and procedures at BB Elite Apparels, including payment terms, shipping, and returns.",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/terms" className="text-black hover:underline">
              Terms of Use
            </Link>
          </header>
        </section>

        <section className="mb-[28px]">
          <p>
            This page is under construction. We'll be back soon with something
            awesome!
          </p>
        </section>
      </div>
    </>
  );
};

export default Terms;
