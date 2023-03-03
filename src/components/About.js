import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="min-h-screen md:min-h-[90vh] px-12 gap-12 justify-center items-center md:items-start">
      <div className="tracking-wide uppercase text-5xl py-12 font-medium text-center">
        About Me
      </div>
      <div className="flex flex-col md:flex-row md:items-start sm:items-center gap-12">
        <div className="relative md:w-2/4 sm:w-2/4">
          <img className="w-full h-full" alt="profile" src={profile} />
        </div>
        <div className="w-full md:max-w-2xl sm:w-5/6 flex flex-col gap-4 py-8 font-light text-lg">
          <p>
            Hey there! I'm Cory, a Full-Stack Web Developer with a degree in
            Commerce from the University of Victoria and a passion for learning
            and programming. With a background in accounting and investor
            relations, I bring a unique blend of analytical and creative
            problem-solving skills to my work.
          </p>
          <p>
            I enjoy using my creativity and logical thinking to design
            high-quality web applications and RESTful API interfaces. I excel in
            dynamic, collaborative work environments that require adaptability
            and proactive decision making. When I'm not busy coding, you can
            find me exploring the outdoors, applying my attention to detail and
            creative problem-solving abilities to challenges in rock climbing
            and scuba diving.
          </p>
          <p>
            I believe in making technology accessible to everyone and promoting
            diversity in the industry. I'm enthusiastic about growing my skills
            and making a positive impact on the web development world. If you're
            interested in learning more about me or have a project you'd like to
            collaborate on, please feel free to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
