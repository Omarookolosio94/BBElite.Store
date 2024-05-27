/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import ValueProposition from "modules/partials/ValueProposition";
import aboutImg from "assets/img/bbEliteStyle.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {addMetaData({
        title: "About BB Elite Apparels | Our Story, Mission, and Values",
        description:
          "Learn about BB Elite Apparels' journey, mission, and values. Discover how we're empowering women through fashion and promoting African heritage. Read our story and join our community of strong, confident women.",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="text-black hover:underline">
              About
            </Link>
          </header>
        </section>

        <section className="mb-[38px] flex h-auto flex-col-reverse items-center gap-5 sm:flex-row">
          <div className="h-full w-full sm:w-1/2">
            <h5 className="mb-5 text-[28px] font-[500]">Our Story</h5>

            <main>
              <p className="mb-3">
                BB Elite Apparels is more than just a clothing brand - it's a
                movement. We're on a mission to empower women to embrace their
                individuality and celebrate their unique sense of style.
              </p>

              <p className="mb-3">
                Founded in 2022 by Maryjane Ejimagwa, a fashion enthusiast with
                a passion for African culture and heritage, BB Elite Apparels
                was born out of a desire to fill a gap in the market for
                stylish, affordable, and high-quality clothing that reflects the
                beauty and diversity of Africa.
              </p>
              <p className="mb-5">
                Growing up in Lagos, Nigeria, Maryjane was inspired by the
                vibrant colors, patterns, and textures of African fabrics and
                the way they were used to tell stories and express identity. She
                saw an opportunity to share this beauty with the world and
                create a brand that would not only make women look and feel
                great but also connect them with their heritage.
              </p>

              <h2 className="mb-3 mt-8 text-[18px] font-[500] text-brand">
                Our Vision
              </h2>
              <p>
                At BB Elite Apparels, we believe that fashion is a powerful tool
                for self-expression and empowerment. We're committed to creating
                clothing that's not only stylish and trendy but also meaningful
                and impactful. Our vision is to build a community of strong,
                confident women who embrace their individuality and celebrate
                their African heritage.
              </p>

              <h2 className="mb-3 mt-8 text-[18px] font-[500] text-brand">
                Our Values
              </h2>

              <div>
                <ul>
                  <li className="mb-3">
                    <strong>Quality:</strong> We're committed to using only the
                    highest-quality materials and craftsmanship to ensure our
                    clothing stands the test of time.
                  </li>
                  <li className="mb-3">
                    <strong>Inclusivity:</strong> We believe that fashion is for
                    everyone, regardless of size, shape, or background.
                  </li>
                  <li className="mb-3">
                    <strong>Sustainability:</strong> We're dedicated to reducing
                    our environmental impact and promoting sustainable fashion
                    practices.
                  </li>
                  <li className="mb-3">
                    <strong>Community:</strong> We're building a community of
                    women who support and uplift each other.
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-8 text-[18px] font-[500] text-brand">
                Join The Movement
              </h2>
              <p className="mb-10">
                Thank you for joining us on this journey. We're excited to have
                you as part of our community and can't wait to see how you style
                our clothing. Remember, fashion is a form of self-expression,
                and we encourage you to embrace your individuality and celebrate
                your unique sense of style.
              </p>

              <p>Sincerely,</p>
              <p>
                <b>Maryjane Ejimagwa</b>
                <br />
                Founder, BB Elite Apparels
              </p>
            </main>
          </div>

          <div className="flex h-full w-full items-center overflow-hidden rounded-[4px] sm:w-1/2">
            <img
              src={aboutImg}
              alt="About BB Elite Apparels˝"
              className="w-full rounded-[4px]"
            />
          </div>
        </section>

        <ValueProposition />
      </div>
    </>
  );
};

export default About;
