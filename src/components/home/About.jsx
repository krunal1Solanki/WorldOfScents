import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import burger1 from "../../assets/burger1.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>MBA Burger Wala</h4>
          <p>
            We are MBA Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={burger1} alt="Founder" />
              <h3>Krunal Solanki</h3>
            </div>

            <p>
              I am Krunal Solanki, the founder of World Of Scents. My day nevers starts 
              without a good perfume.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;