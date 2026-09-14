import { useEffect, useRef, useState } from "react";

/* ── Scroll reveal observer ──────────────────────────────────── */
function useRevealObserver() {
  const observed = useRef(false);
  useEffect(() => {
    if (observed.current) return;
    observed.current = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Preloader / Initial Loading Screen ──────────────────────────── */
function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoaded(true), 300);
          setTimeout(() => setIsHidden(true), 1100);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 65);

    return () => clearInterval(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className={`preloader-screen ${isLoaded ? "preloader-exit" : ""}`}>
      <div className="preloader-overlay-grid" />
      <div className="preloader-content">
        <div className="preloader-logo-ring">
          <div className="preloader-radar-sweep" />
          <img src="/images/navy.png" alt="Bangladesh Navy Crest" className="preloader-logo" />
        </div>

        <div className="preloader-title-wrap">
          <h1 className="preloader-title">Bangladesh Navy</h1>
          <h2 className="preloader-subtitle">বাংলাদেশ নৌবাহিনী</h2>
          <div className="preloader-divider">
            <span className="divider-line" />
            <span className="divider-anchor">⚓</span>
            <span className="divider-line" />
          </div>
          <p className="preloader-motto">
            <span className="motto-en">"In War and Peace Invincible at Sea"</span>
            <span className="motto-bn">শান্তিতে সংগ্রামে সমুদ্রে দুর্জয়</span>
          </p>
        </div>

        <div className="preloader-progress-box">
          <div className="preloader-progress-bar">
            <div className="preloader-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="preloader-status">
            <span className="status-text">INITIALIZING MARITIME DEFENSE NETWORK</span>
            <span className="status-percent">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Top Scroll Progress Bar ─────────────────────────────────── */
function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollPercent}%` }}
    />
  );
}

/* ── Main App ────────────────────────────────────────────────── */
export default function App() {
  useRevealObserver();

  return (
    <>
      {/* Initial Loading Screen */}
      <Preloader />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Top Ticker */}
      <div className="top-bar">
        <div className="ticker-wrap">
          <div className="ticker-content">
            <span>Navy Day 2026 Celebrations</span>
            <span>New Frigate BNS Bangabandhu Commissioned</span>
            <span>Joint Naval Exercise CARAT Bangladesh Completed</span>
            <span>Officer Cadet Recruitment Open for 2026-A Batch</span>
            <span>Maritime Search & Rescue Operations Continue</span>
            <span>Navy Day 2026 Celebrations</span>
            <span>New Frigate BNS Bangabandhu Commissioned</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <div className="navbar-inner">
          <a href="#" className="nav-brand">
            <div className="nav-emblem">
              <img src="/images/navy.png" alt="Bangladesh Navy Crest" />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-title">Bangladesh Navy</span>
              <span className="nav-brand-subtitle">বাংলাদেশ নৌবাহিনী</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#fleet" className="active">Fleet</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-cta">
            <a href="#career" className="btn-enlist">Join Navy</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/images/hero-bg.jpg" alt="Bangladesh Navy Fleet in formation" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-radar-overlay" />
        <div className="hero-scanline" />

        <div className="hero-content">
          <div className="hero-badge reveal">
            ⚓ Official Website of Bangladesh Navy
          </div>
          <h1 className="reveal reveal-delay-1">
            Bangladesh Navy
            <span className="text-gold">Invincible at Sea</span>
          </h1>
          <p className="hero-motto reveal reveal-delay-2">
            <em>"In War and Peace Invincible at Sea"</em> — Defending our maritime sovereignty,
            protecting our blue economy, and safeguarding the nation's interests across
            the Bay of Bengal and beyond.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#fleet" className="btn-hero-primary">
              Explore Fleet →
            </a>
            <a href="#about" className="btn-hero-secondary">
              Our Mission ◇
            </a>
          </div>
        </div>

        <div className="hero-stats reveal reveal-delay-4">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Vessels</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Submarines</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">27K+</div>
            <div className="stat-label">Personnel</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1971</div>
            <div className="stat-label">Established</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#fleet" className="hero-scroll-indicator" aria-label="Scroll Down">
          <div className="mouse-icon">
            <div className="mouse-wheel" />
          </div>
          <span>Scroll</span>
        </a>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="#0a0e1a"
            />
          </svg>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="section fleet-section" id="fleet">
        <div className="section-inner">
          <div className="section-header reveal">
            <div className="section-label">Our Strength</div>
            <h2 className="section-title">Naval Fleet & Assets</h2>
            <p className="section-subtitle">
              The Bangladesh Navy operates a modern and versatile fleet including frigates,
              corvettes, submarines, patrol vessels, and naval aviation assets.
            </p>
          </div>

          <div className="fleet-grid">
            {/* Card 1 - Warship */}
            <div className="fleet-card reveal reveal-delay-1">
              <div className="fleet-card-image">
                <img src="/images/warship.jpg" alt="BNS Bangabandhu Frigate" />
                <div className="fleet-card-badge">Frigate</div>
              </div>
              <div className="fleet-card-body">
                <div className="fleet-card-category">Surface Combatant</div>
                <h3 className="fleet-card-title">Guided Missile Frigates</h3>
                <p className="fleet-card-desc">
                  Advanced multi-role frigates equipped with modern weapons systems, sensors,
                  and electronic warfare capabilities for blue-water operations.
                </p>
                <div className="fleet-card-meta">
                  <div className="fleet-card-stat">
                    <span className="icon">⚓</span> 3,500 tons
                  </div>
                  <div className="fleet-card-stat">
                    <span className="icon">🎯</span> Anti-ship missiles
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Submarine */}
            <div className="fleet-card reveal reveal-delay-2">
              <div className="fleet-card-image">
                <img src="/images/submarine.jpg" alt="Bangladesh Navy Submarine" />
                <div className="fleet-card-badge">Submarine</div>
              </div>
              <div className="fleet-card-body">
                <div className="fleet-card-category">Underwater Force</div>
                <h3 className="fleet-card-title">Ming-class Submarines</h3>
                <p className="fleet-card-desc">
                  Diesel-electric submarines providing stealth capability and strategic
                  deterrence. Commissioned in 2017, marking a new era of underwater warfare.
                </p>
                <div className="fleet-card-meta">
                  <div className="fleet-card-stat">
                    <span className="icon">🌊</span> 2,113 tons
                  </div>
                  <div className="fleet-card-stat">
                    <span className="icon">🎯</span> Torpedo tubes
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Helicopter */}
            <div className="fleet-card reveal reveal-delay-3">
              <div className="fleet-card-image">
                <img src="/images/helicopter.jpg" alt="Navy Rescue Helicopter" />
                <div className="fleet-card-badge">Aviation</div>
              </div>
              <div className="fleet-card-body">
                <div className="fleet-card-category">Naval Aviation</div>
                <h3 className="fleet-card-title">Maritime Helicopters</h3>
                <p className="fleet-card-desc">
                  Multi-purpose maritime helicopters for anti-submarine warfare, search and
                  rescue, logistics support, and maritime patrol operations.
                </p>
                <div className="fleet-card-meta">
                  <div className="fleet-card-stat">
                    <span className="icon">🚁</span> AW109
                  </div>
                  <div className="fleet-card-stat">
                    <span className="icon">📡</span> SAR equipped
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Aircraft */}
            <div className="fleet-card reveal reveal-delay-4">
              <div className="fleet-card-image">
                <img src="/images/aircraft.jpg" alt="Maritime Patrol Aircraft" />
                <div className="fleet-card-badge">Fixed Wing</div>
              </div>
              <div className="fleet-card-body">
                <div className="fleet-card-category">Maritime Patrol</div>
                <h3 className="fleet-card-title">Patrol Aircraft</h3>
                <p className="fleet-card-desc">
                  Maritime patrol and reconnaissance aircraft for extended-range surveillance,
                  anti-submarine warfare, and exclusive economic zone monitoring.
                </p>
                <div className="fleet-card-meta">
                  <div className="fleet-card-stat">
                    <span className="icon">✈️</span> Long range
                  </div>
                  <div className="fleet-card-stat">
                    <span className="icon">📡</span> Radar equipped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-content reveal">
              <div className="section-label">Our Mission</div>
              <h3>
                Guardians of the <span className="highlight">Maritime Frontier</span>
              </h3>
              <p>
                The Bangladesh Navy is the naval warfare branch of the Bangladesh Armed Forces,
                responsible for the defense of Bangladesh's territorial waters, maritime economic zones,
                and coastal territories.
              </p>
              <p>
                With a proud legacy dating back to the Liberation War of 1971, the Bangladesh Navy has
                evolved into a three-dimensional force capable of operating across the surface,
                subsurface, and air domains.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-icon">🛡️</span>
                  <div className="feature-text">
                    <strong>Maritime Defense</strong>
                    Protecting territorial waters and sovereignty
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">🌊</span>
                  <div className="feature-text">
                    <strong>Blue Economy</strong>
                    Safeguarding marine resources and trade routes
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">🤝</span>
                  <div className="feature-text">
                    <strong>Disaster Relief</strong>
                    Humanitarian assistance and disaster response
                  </div>
                </div>
                <div className="about-feature">
                  <span className="feature-icon">🎓</span>
                  <div className="feature-text">
                    <strong>Training</strong>
                    World-class officer training at BNA, Chittagong
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual reveal reveal-delay-2">
              <div className="about-image-wrapper">
                <img src="/images/warship.jpg" alt="Bangladesh Navy Operations" />
              </div>
              <div className="about-float-card">
                <div className="float-number">53+</div>
                <div className="float-text">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section news-section" id="news">
        <div className="section-inner">
          <div className="section-header reveal">
            <div className="section-label">Latest Updates</div>
            <h2 className="section-title">News & Highlights</h2>
            <p className="section-subtitle">
              Stay informed about the latest developments, operations, and
              achievements of the Bangladesh Navy.
            </p>
          </div>

          <div className="news-grid">
            <div className="news-card featured reveal">
              <div className="news-card-image">
                <img src="/images/hero-bg.jpg" alt="Naval Fleet Exercise" />
              </div>
              <div className="news-card-overlay">
                <div className="news-card-date">September 14, 2026</div>
                <h3 className="news-card-title">
                  Bangladesh Navy Successfully Conducts Multi-Nation Naval Exercise
                </h3>
                <p className="news-card-excerpt">
                  The Bangladesh Navy has successfully concluded a joint multinational
                  naval exercise in the Bay of Bengal, strengthening regional maritime cooperation
                  and interoperability with allied navies.
                </p>
              </div>
            </div>

            <div className="news-card reveal reveal-delay-1">
              <div className="news-card-image">
                <img src="/images/submarine.jpg" alt="Submarine Operations" />
              </div>
              <div className="news-card-overlay">
                <div className="news-card-date">September 10, 2026</div>
                <h3 className="news-card-title">
                  Submarine Squadron Completes Deep-Sea Patrol Mission
                </h3>
              </div>
            </div>

            <div className="news-card reveal reveal-delay-2">
              <div className="news-card-image">
                <img src="/images/helicopter.jpg" alt="Rescue Operation" />
              </div>
              <div className="news-card-overlay">
                <div className="news-card-date">September 7, 2026</div>
                <h3 className="news-card-title">
                  Naval Aviation Rescues 42 Fishermen in Bay of Bengal
                </h3>
              </div>
            </div>

            <div className="news-card reveal reveal-delay-3">
              <div className="news-card-image">
                <img src="/images/aircraft.jpg" alt="Maritime Patrol" />
              </div>
              <div className="news-card-overlay">
                <div className="news-card-date">September 3, 2026</div>
                <h3 className="news-card-title">
                  New Maritime Patrol Aircraft Inducted Into Service
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Recruitment */}
      <section className="section cta-section" id="career">
        <div className="cta-banner reveal">
          <div className="cta-content">
            <div className="section-label">Serve the Nation</div>
            <h2>
              Join the <span style={{ color: "var(--gold-bright)" }}>Bangladesh Navy</span>
            </h2>
            <p>
              Build a career of honor and distinction. The Bangladesh Navy offers world-class
              training, leadership development, and the pride of serving at sea.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-hero-primary">
                Apply Now →
              </a>
              <a href="#" className="btn-hero-secondary">
                Learn More ◇
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <img src="/images/navy.png" alt="Emblem" style={{ height: "40px", width: "auto" }} />
                <h3 style={{ margin: 0 }}>Bangladesh Navy</h3>
              </div>
              <p>
                In War and Peace Invincible at Sea. The Bangladesh Navy is committed
                to defending the nation's maritime interests and ensuring peace and
                security in our waters.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="YouTube">▶</a>
                <a href="#" aria-label="Instagram">◻</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Fleet Overview</a></li>
                <li><a href="#">Naval Bases</a></li>
                <li><a href="#">BN Dockyard</a></li>
                <li><a href="#">Naval Academy</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Operations</h4>
              <ul>
                <li><a href="#">Maritime Patrol</a></li>
                <li><a href="#">Search & Rescue</a></li>
                <li><a href="#">Humanitarian Aid</a></li>
                <li><a href="#">UN Peacekeeping</a></li>
                <li><a href="#">Joint Exercises</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Naval Headquarters</a></li>
                <li><a href="#">Dhaka, Bangladesh</a></li>
                <li><a href="#">info@navy.mil.bd</a></li>
                <li><a href="#">Career Inquiries</a></li>
                <li><a href="#">Media Relations</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Bangladesh Navy. All rights reserved.</p>
            <div className="footer-flag">
              <div className="flag-circle" />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                People's Republic of Bangladesh
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
