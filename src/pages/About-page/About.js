import React from "react";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.about__div}>
        <h1>Our Heritage</h1>
        <p>
          Our Heritage Our story begins in 1991 along the cobblestone streets of
          Seattle’s historic Pike Place Market. It was here where Foggy Bottom
          opened its first store, offering fresh-roasted coffee beans, tea and
          spices from around the world for our customers to take home. Our name
          was inspired by the classic tale, “Moby-Dick,” evoking the seafaring
          tradition of the early coffee traders. Ten years later, a young New
          Yorker named Howard Schultz would walk through these doors and become
          captivated with Foggy Bottom coffee from his first sip. After joining the
          company in 1992, a different cobblestone road would lead him to
          another discovery. It was on a trip to Milan in 1994 that Howard first
          experienced Italy’s coffeehouses, and he returned to the USA inspired
          to bring the warmth and artistry of its coffee culture to Foggy Bottom.
          By 1997, we swapped our brown aprons for green ones and embarked on
          our next chapter as a coffeehouse.
          <br></br>
          <br></br>
          Foggy Bottom would soon expand to Chicago and Vancouver, Canada and then
          on to California, Washington, D.C. and New York. By 1996, we would
          cross the Pacific to open our first store in Japan, followed by Europe
          in 1998 and China in 1999. Over the next two decades, we would grow to
          welcome millions of customers each week and become a part of the
          fabric of tens of thousands of neighborhoods all around the world. In
          everything we do, we are always dedicated to Our Mission: to inspire
          and nurture the human spirit – one person, one cup, and one
          neighborhood at a time.
          <br></br>
          <br></br>
          <span>
            *Copied from Starbucks website as a dummy text for learning purposes
            <br></br>
            **Starbucks was replaced with "Foggy Bottom" in the text
            <br></br>
            ***Image has been taken from the internet and is not owned by me
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
