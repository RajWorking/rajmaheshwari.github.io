import { Linkedin, Github, GraduationCap, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from 'figma:asset/82a4164584183ab9eee16e92c09c79d4ab2ad616.png';

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Raj Maheshwari
              </h1>
              <p
                className="
                  inline-flex flex-wrap items-center gap-x-3 gap-y-2
                  text-lg md:text-xl
                  font-medium
                  text-zinc-700
                "
                style={{ fontFamily: "EB Garamond, serif" }}
              >
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  Masters in <span className="font-semibold text-zinc-900">ML/NLP</span>{" "}
                  @{" "}
                  <span className="font-semibold text-zinc-900">CMU</span>
                </span>
              
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  Prev: <span className="font-semibold text-zinc-900">SWE</span> @{" "}
                  <span className="font-semibold">
                    <span style={{ color: "#4285F4" }}>G</span>
                    <span style={{ color: "#DB4437" }}>o</span>
                    <span style={{ color: "#F4B400" }}>o</span>
                    <span style={{ color: "#4285F4" }}>g</span>
                    <span style={{ color: "#0F9D58" }}>l</span>
                    <span style={{ color: "#DB4437" }}>e</span>
                  </span>
                </span>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                  B.Tech. in <span className="font-semibold text-zinc-900">Computer Science and Engineering</span>{" "}
                  @{" "}
                  <span className="font-semibold text-zinc-900">IIIT Hyderabad</span>
                </span>
              </p>
            </div>

            {/* About Section */}
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm an{" "}
                <span className="text-sky-600 dark:text-sky-400">ML/NLP engineer</span> and{" "}
                <span className="text-sky-600 dark:text-sky-400">researcher</span> with a passion for building{" "}
                robust, large-scale systems that solve real-world problems. Currently pursuing my MS at{" "}
                <a
                  href="https://www.cs.cmu.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  <b>
                    <em>
                      CMU's School of Computer Science
                    </em>
                  </b>
                </a>{" "} (LTI/MIIS), 
                I focus on{" "}
                <span className="text-sky-600 dark:text-sky-400">post-training LLMs</span>,{" "}
                <span className="text-sky-600 dark:text-sky-400">evaluation</span>, and the{" "}
                <span className="text-sky-600 dark:text-sky-400">engineering infrastructure</span> that makes them reliable at scale.
              </p>
            
              <p>
                At{" "}
                <b>Google</b>{" "}
                (Search Verticals: Sports), I built large-scale sports experiences for hundreds of millions{" "}
                of fans across surfaces like Discover, Home Stack, Web Search, mobile apps, and notifications. I shipped products like{" "}
                <a
                  href="https://www.samsung.com/in/support/mobile-devices/how-to-use-now-bar-and-now-brief-features-on-the-samsung-galaxy-s25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 dark:text-sky-400 underline underline-offset-4"
                >
                  Samsung's S25 NowBar
                </a>{" "}
                by wiring{" "}
                <span className="text-sky-600 dark:text-sky-400">real-time 1P/3P data streams</span>{" "}
                into LLM-generated sports updates, and built end-to-end backend systems — from real-time data pipelines to{" "}
                <span className="text-sky-600 dark:text-sky-400">Knowledge Graph datasets</span>{" "}
                spanning 50+ locales, powering features like {" "}
                <span className="text-sky-600 dark:text-sky-400">Sports MiniApp Search</span> and {" "}
                <span className="text-sky-600 dark:text-sky-400">Sports Hub.</span>
              </p>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6 w-80 md:w-[22rem] lg:w-[26rem]">
              <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={profileImage}
                    alt="Raj Maheshwari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-3">
                <Button variant="outline" asChild className="bg-[#0A66C2] text-white border-[#0A66C2] hover:bg-[#004182] hover:text-white hover:border-[#004182]">
                  <a
                    href="https://www.linkedin.com/in/raj-maheshwari-awesome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-[#24292e] text-white border-[#24292e] hover:bg-black hover:text-white hover:border-black">
                  <a
                    href="https://github.com/RajWorking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-[#4285F4] text-white border-[#4285F4] hover:bg-[#1a73e8] hover:text-white hover:border-[#1a73e8]">
                  <a
                    href="https://scholar.google.com/citations?user=W2EjY_EAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Scholar"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Scholar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}