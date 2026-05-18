import React from "react";

const pilotSubject = encodeURIComponent("AXS-Tech pilot dataset request");
const pilotBody = encodeURIComponent(
  "I'm interested in an AXS-Tech vocal dataset / sonic forensics pilot. Please send availability, pricing, and a sample schema."
);
const contactHref = `mailto:hello@axs-tech.io?subject=${pilotSubject}&body=${pilotBody}`;

const stages = [
  ["Dry", "Raw source takes with consent, recording context, and provenance notes."],
  ["Cleaned", "Noise reduction, de-essing, timing cleanup, and artifact labels."],
  ["Mixed", "Professional vocal production with EQ, dynamics, saturation, and intent notes."],
  ["Mastered", "Release-ready masters with loudness, true peak, QC, and chain metadata."],
];

const forensicPoints = [
  ["Spectral fingerprinting", "Content-based signatures built for matching, clustering, and similarity review."],
  ["Provenance analysis", "Evidence packages for authenticity, attribution, AXS-ID hooks, and chain of custody."],
  ["Audit-ready reporting", "Clear results for legal, R&D, and model evaluation teams."],
];

function App() {
  React.useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AXS-Tech home">
          AXS-Tech
        </a>
        <nav aria-label="Main navigation">
          <a href="#datasets">Datasets</a>
          <a href="#forensics">Forensics</a>
          <a href="#pilot">Pilot</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={contactHref}>
          Request pilot dataset
        </a>
      </header>

      <section className="hero" id="top" data-reveal>
        <div className="hero-copy">
          <h1>Rights-cleared vocal data for audio AI labs</h1>
          <p>
            AXS-Tech builds dry-to-mastered vocal datasets with professional engineering notes, rich metadata,
            and spectral fingerprinting for training, evaluation, and research.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={contactHref}>
              Request pilot dataset <span>{"->"}</span>
            </a>
            <a className="text-link" href="#schema">
              View data schema <span>{"->"}</span>
            </a>
          </div>
        </div>

        <figure className="signal-frame" aria-label="Subdued waveform and spectrogram signal">
          <img src="/assets/spectral-hero.png" alt="Cyan waveform over green spectral analysis" />
        </figure>
      </section>

      <section className="pipeline" id="datasets" data-reveal>
        <p className="section-label">Vocal data pipeline</p>
        <div className="pipeline-row">
          {stages.map(([title, description], index) => (
            <article key={title} data-reveal>
              <h2>{title}</h2>
              <p>{description}</p>
              {index < stages.length - 1 && <span className="stage-arrow">{"->"}</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="schema" data-reveal>
        <div>
          <p className="section-label">Dataset structure</p>
          <h2>Enough metadata to reproduce the decision.</h2>
          <p>
            Each sample can include source rights, recording conditions, processing stage, chain settings, acoustic
            measurements, artifact labels, and human engineer notes.
          </p>
        </div>
        <pre>{`{
  "asset_id": "axs_vocal_0042",
  "rights": "ai_training_and_eval",
  "stage": "mixed",
  "lufs_integrated": -14.1,
  "processing": ["eq", "de_ess", "compression"],
  "artifact_labels": ["sibilance_controlled"],
  "engineer_notes": "Forward pop vocal; controlled edge"
}`}</pre>
      </section>

      <section className="split-section forensics" id="forensics" data-reveal>
        <div>
          <p className="section-label">Sonic forensics</p>
          <h2>Signal, provenance, and evidence.</h2>
          <p>
            Spectral fingerprinting and provenance analysis for teams that need defensible answers, not visual noise.
          </p>
          <a className="text-link" href={contactHref}>
            Discuss a forensic pilot <span>{"->"}</span>
          </a>
        </div>
        <div className="quiet-list">
          {forensicPoints.map(([title, description]) => (
            <article key={title} data-reveal>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pilot" id="pilot" data-reveal>
        <div>
          <p className="section-label">Pilot packages</p>
          <h2>Start small. Prove signal quality. Scale only if it fits.</h2>
        </div>
        <div className="pilot-options">
          <article data-reveal>
            <strong>5-sample demo</strong>
            <span>Fast evaluation of format and metadata.</span>
          </article>
          <article data-reveal>
            <strong>25-100 sample paid pilot</strong>
            <span>Dry-to-mastered chains with custom labels.</span>
          </article>
          <article data-reveal>
            <strong>Custom licensed corpus</strong>
            <span>Targeted datasets for model training and evaluation.</span>
          </article>
        </div>
      </section>

      <section className="final-cta" id="contact" data-reveal>
        <div>
          <h2>Request a pilot dataset.</h2>
          <p>
            Send the model type, intended use, desired sample count, and whether you need dataset, forensics, or both.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={contactHref}>
            Request pilot dataset <span>{"->"}</span>
          </a>
          <a className="text-link" href="mailto:hello@axs-tech.io">
            hello@axs-tech.io <span>{"->"}</span>
          </a>
        </div>
      </section>

      <footer data-reveal>
        <div>
          <strong>AXS-Tech</strong>
          <span>Rights-cleared audio data. Built by audio engineers.</span>
        </div>
        <span>axs-tech.io</span>
        <span>AXS-ID provenance compatible</span>
      </footer>
    </main>
  );
}

export default App;
