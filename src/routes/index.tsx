import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import netcareChatbotAsset from "@/assets/netcare-patient-support-chatbot.png.asset.json";
import cvAsset from "@/assets/Kananelo_Moloi_CV.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kananelo Moloi | Software Developer" },
      { name: "description", content: "Explore Kananelo Moloi's software projects, technology skills, experience, and education." },
      { property: "og:title", content: "Kananelo Moloi | Software Developer" },
      { property: "og:description", content: "An interactive portfolio spanning .NET, React, IoT, cloud, and technology education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = ["C#", "Python", "JavaScript", "React", "Node.js", ".NET Core", "MySQL", "HTML5", "CSS"];
const roles = ["software developer", "problem solver", "technology facilitator"];

function Index() {
  const [role, setRole] = useState(roles[0]);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let roleIndex = 0;
    const interval = window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setRole(roles[roleIndex]);
    }, 2400);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="fixed left-0 top-0 z-50 h-0.5 bg-primary transition-[width] duration-150" style={{ width: `${scroll}%` }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-drift absolute right-[-12rem] top-[28%] size-[34rem] rounded-full bg-accent/60 blur-3xl" />
      </div>

      <nav aria-label="Main navigation" className="sticky top-0 z-40 border-b border-line bg-glass backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg font-bold">Kananelo <span className="text-primary">Moloi</span></a>
          <div className="hidden items-center gap-6 font-mono text-[11px] uppercase text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">01 Work</a>
            <a href="#path" className="transition-colors hover:text-foreground">02 Path</a>
            <a href="#craft" className="transition-colors hover:text-foreground">03 Craft</a>
            <a href="#contact" className="transition-colors hover:text-foreground">04 Contact</a>
          </div>
          <a href="tel:+27783306898" className="rounded-full bg-foreground px-4 py-2 font-mono text-[11px] font-medium text-primary-foreground transition-colors hover:bg-primary">Call me</a>
        </div>
      </nav>

      <main className="relative z-10">
        <header id="top" className="mx-auto grid min-h-[78vh] max-w-6xl grid-cols-12 items-center gap-10 px-5 py-16 md:py-24">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-glass px-3 py-1.5 font-mono text-[10px] uppercase text-muted-foreground backdrop-blur-md">
              <span className="animate-caret size-1.5 rounded-full bg-ok" />
              Building from Phuthaditjhaba, South Africa
            </div>
            <h1 className="font-display text-6xl font-bold leading-[0.98] text-balance sm:text-7xl md:text-8xl">Kananelo<br />Moloi<span className="animate-caret text-primary">_</span></h1>
            <p className="mt-5 min-h-6 font-mono text-sm text-primary">{`> ${role}`}</p>
            <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">I turn curiosity into useful software — connecting <strong className="font-medium text-foreground">.NET backends, React interfaces, IoT, and cloud thinking</strong>. Today, I build and help the next generation understand how technology works.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary">Explore my work</a>
              <a href={cvAsset.url} download="Kananelo_Moloi_CV.pdf" className="rounded-full border border-line bg-glass px-5 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:border-primary/50">Download CV ↓</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-2xl border border-line bg-glass p-5 shadow-xl backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-1.5 border-b border-line pb-4">
                <span className="size-2.5 rounded-full bg-destructive/60" /><span className="size-2.5 rounded-full bg-chart-4/70" /><span className="size-2.5 rounded-full bg-ok/70" />
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">kananelo.config.ts</span>
              </div>
              <pre className="overflow-x-auto py-5 font-mono text-xs leading-7"><code><span className="text-muted-foreground">const </span>developer = {`{`}<br />  role: <span className="text-primary">"developer + facilitator"</span>,<br />  stack: [<span className="text-primary">".NET"</span>, <span className="text-primary">"React"</span>],<br />  focus: <span className="text-primary">"IoT · Cloud"</span>,<br />  mindset: <span className="text-primary">"keep learning"</span>,<br />  status: <span className="text-ok">"building"</span><br />{`}`};</code></pre>
               <div className="flex justify-between border-t border-line pt-3 font-mono text-[10px] text-muted-foreground"><span>1 featured project</span><span className="text-ok">● online</span></div>
            </div>
          </div>
        </header>

        <div className="overflow-hidden border-y border-line bg-glass py-3 backdrop-blur-md">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs text-muted-foreground">
            {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill} <span className="ml-10 text-primary">/</span></span>)}
          </div>
        </div>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading number="01" eyebrow="Selected work" title="Things I've created" note="Hover to inspect" />
           <div>
             <ProjectCard image={netcareChatbotAsset.url} width={1368} height={768} title="Netcare Patient Support Chatbot" label="Featured project" description="An accessible healthcare support assistant that helps patients find hospitals and specialists, navigate appointments and pre-admission, and quickly reach emergency information. It includes guided prompts, voice support, text-size controls, and a dark mode." tags={["Patient support", "Conversational UI", "Voice assistance", "Accessibility"]} href="https://github.com/Immaculate96-dev/Netcare-Patient-Support-Chatbot" />
           </div>
        </section>

        <section id="path" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading number="02" eyebrow="The path" title="Learning, then leading" />
          <div className="grid gap-5 md:grid-cols-2">
            <Timeline title="Experience" entries={[
              { date: "Mar 2026 — Present", title: "Developer & IT Facilitator", place: "CumLaude Research Institute · Phuthaditjhaba", body: "Developing and maintaining the institute website while facilitating practical and theory learning in IoT and cloud computing." },
              { date: "Feb 2026", title: "Information Technology Facilitator", place: "Free State Smart Skills Center · Phuthaditjhaba", body: "Guided community learners through Cisco Networking Academy courses including cybersecurity and digital literacy." },
            ]} />
            <Timeline title="Education" entries={[
              { date: "2023 — 2025", title: "National Diploma · Software Development", place: "Nelson Mandela University · Port Elizabeth", body: "Built a software development foundation spanning applications, databases, and problem solving." },
              { date: "2022", title: "Higher Certificate · IT User Support", place: "Nelson Mandela University · George", body: "Learned the support, systems, and communication foundations behind dependable technology." },
            ]} />
          </div>
        </section>

        <section id="craft" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading number="03" eyebrow="The toolkit" title="Code, communication & curiosity" />
          <div className="grid gap-5 md:grid-cols-3">
            <InfoPanel title="Technologies"><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-line bg-background/60 px-3 py-1.5 font-mono text-xs">{skill}</span>)}</div></InfoPanel>
            <InfoPanel title="Certificates"><ul className="space-y-4 text-sm"><li><span className="text-primary">/</span> Advanced Secure Technologies <span className="text-muted-foreground">· 2022</span></li><li><span className="text-primary">/</span> CCNA Introduction to Networks <span className="text-muted-foreground">· 2023</span></li><li><span className="text-primary">/</span> Introduction to Cybersecurity <span className="text-muted-foreground">· 2023</span></li></ul></InfoPanel>
            <InfoPanel title="Beyond code"><p className="text-sm leading-6 text-muted-foreground">Communication, teamwork, critical thinking, time management, leadership, and adaptability.</p><div className="mt-5 border-t border-line pt-5"><p className="font-mono text-[10px] uppercase text-primary">Languages</p><p className="mt-2 text-sm leading-7">Sesotho · English · Zulu · Pedi · Tswana</p></div></InfoPanel>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="overflow-hidden rounded-2xl border border-line bg-glass p-8 backdrop-blur-xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div><p className="font-mono text-[11px] uppercase text-primary">( 04 ) — Contact</p><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let’s build what’s next.</h2><p className="mt-4 max-w-[42ch] text-muted-foreground">I’m ready to contribute, learn fast, and turn the next challenge into working software.</p></div>
              <div className="flex flex-col gap-4 md:items-end"><a className="font-mono text-sm underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="mailto:moloimartin8@gmail.com">moloimartin8@gmail.com</a><a className="font-mono text-sm hover:text-primary" href="tel:+27783306898">078 330 6898</a><a href={cvAsset.url} download="Kananelo_Moloi_CV.pdf" className="mt-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary">Download my CV ↓</a></div>
            </div>
          </div>
          <p className="mt-7 text-center font-mono text-[10px] uppercase text-muted-foreground">Kananelo Moloi · Phuthaditjhaba, South Africa · 2026</p>
        </section>
      </main>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, note }: { number: string; eyebrow: string; title: string; note?: string }) {
  return <div className="mb-9 flex items-end justify-between"><div><p className="font-mono text-[11px] uppercase text-primary">( {number} ) — {eyebrow}</p><h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2></div>{note && <span className="hidden font-mono text-xs text-muted-foreground md:block">{note}</span>}</div>;
}

function ProjectCard({ image, width, height, title, label, description, tags, href }: { image: string; width: number; height: number; title: string; label: string; description: string; tags: string[]; href: string }) {
  return <article className="group overflow-hidden rounded-2xl border border-line bg-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><a href={href} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`} className="grid md:grid-cols-[1.45fr_1fr]"><div className="overflow-hidden border-b border-line md:border-b-0 md:border-r"><img src={image} alt="Netcare Patient Support Chatbot interface" loading="lazy" width={width} height={height} className="aspect-[16/9] h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]" /></div><div className="flex flex-col justify-between p-6 md:p-8"><div><div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-bold">{title}</h3><span className="shrink-0 font-mono text-[10px] uppercase text-muted-foreground">{label}</span></div><p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p><div className="mt-6 flex flex-wrap gap-1.5">{tags.map((tag) => <span key={tag} className="rounded-md border border-line bg-background/60 px-2 py-1 font-mono text-[10px]">{tag}</span>)}</div></div><span className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-medium text-primary">View repository <span aria-hidden="true">↗</span></span></div></a></article>;
}

function Timeline({ title, entries }: { title: string; entries: { date: string; title: string; place: string; body: string }[] }) {
  return <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-xl"><p className="font-mono text-[11px] uppercase text-muted-foreground">{title}</p><ol className="mt-6 space-y-8">{entries.map((entry, index) => <li key={entry.title} className="relative border-l border-line pl-6"><span className={`absolute -left-[5px] top-1 size-2.5 rounded-full ${index === 0 ? "bg-primary" : "bg-muted-foreground"}`} /><p className="font-mono text-[10px] uppercase text-primary">{entry.date}</p><h3 className="mt-1 font-display text-lg font-bold">{entry.title}</h3><p className="mt-1 text-sm font-medium">{entry.place}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{entry.body}</p></li>)}</ol></div>;
}

function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"><p className="mb-5 font-mono text-[11px] uppercase text-muted-foreground">{title}</p>{children}</div>;
}
