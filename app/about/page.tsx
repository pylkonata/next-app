import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About | Next App',
}

const About = () => {
  return (
    <h3 className="text-2xl mt-3">Select subitem</h3>
  )
};

export default About;
