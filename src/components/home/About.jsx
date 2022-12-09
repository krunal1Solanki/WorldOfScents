import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import perfume1 from "../../assets/perfume1.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>World Of Scents</h4>
          <p>
            We make the world smell, Wonderful.
          </p>

          <p>
            Explore the various type of Scents. Click below to see the Scents.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={perfume1} alt="Founder" />
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