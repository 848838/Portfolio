import { useEffect, useState } from "react";

const portfolioData = {
  name: "Shubham Jha",
 title: "Full-Stack Developer & Product Designer",

 tagline: "Building digital products through design, development, and strategy.",


  about:
     "Graphic Designer & Full-Stack Developer with 1.4+ years of professional experience at GMS Private Ltd. Specialized in branding, marketing technology, SEO, CMS management, and full-stack application development, delivering user-focused digital experiences from concept to deployment.",

 designProjects: [
  {
    id: 1,
    title: "Email Campaigns",
    category: "SFMC & Mailchimp",
    desc: "Executed high-performing email marketing campaigns using Salesforce Marketing Cloud and Mailchimp, including automation, audience segmentation, and performance optimization.",
    link: "https://www.behance.net/knowledgeworld11",
  },

  {
    id: 2,
    title: "Brand & Social",
    category: "Visual Design",
    desc: "Created branding systems, social media creatives, advertising banners, and marketing collateral for digital campaigns.",
    link: "https://www.behance.net/knowledgeworld11",
  },

  {
    id: 3,
    title: "CMS & SEO",
    category: "Web Management",
    desc: "Managed website content through CMS platforms while implementing SEO best practices to improve search visibility and user engagement.",
    link: "https://www.behance.net/knowledgeworld11",
  },

  {
    id: 4,
    title: "Triphive Adventures",
    category: "Web Design",
    desc: "Developed brand identity, promotional creatives, and digital assets to strengthen online presence and customer engagement.",
    link: "https://www.behance.net/knowledgeworld11",
  },
],

  devProjects: [
  {
    id: 5,
    title: "Chatrix",
    category: "Mobile App",
    desc: "Cross-platform real-time messaging application featuring end-to-end encryption, authentication, media sharing, and live communication.",
    link: "https://github.com/848838",
  },

  {
    id: 5.3,
    title: "Twinno",
    category: "Mobile App",
    desc: "Modern social communication platform built with React Native, focused on real-time interactions and seamless user experience.",
    link: "https://github.com/848838",
  },

  {
    id: 6,
    title: "Instagram Clone",
    category: "Full Stack App",
    desc: "Full-stack social media application featuring authentication, feeds, stories, user profiles, and real-time engagement features.",
    link: "https://www.linkedin.com/in/shubham-jha-417428251/?skipRedirect=true",
  },

  {
    id: 7,
    title: "Zomato Clone",
    category: "iOS App",
    desc: "Mobile food ordering platform with restaurant discovery, menu browsing, cart management, and seamless ordering workflows.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7263129719687061504/",
  },
],
};

const NavBar = ({ active }) => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(8,8,10,0.96)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 100,
        flexWrap: "wrap",
      }}
    >
      {["home", "design", "dev", "about"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          style={{
            color:
              active === item
                ? "#ffffff"
                : "rgba(255,255,255,0.55)",
            textDecoration: "none",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div
    style={{
      textAlign: "center",
      marginBottom: "3rem",
      maxWidth: 700,
      marginInline: "auto",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(2rem, 5vw, 4rem)",
        color: "#fff",
        marginBottom: "1rem",
        lineHeight: 1.1,
      }}
    >
      {title}
    </h2>

    <p
      style={{
        color: "rgba(255,255,255,0.6)",
        fontSize: 16,
        lineHeight: 1.7,
      }}
    >
      {subtitle}
    </p>
  </div>
);

const DesignCard = ({ title, category, desc, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "none",
      width: "100%",
    }}
  >
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem",
        borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        textAlign: "center",
        width: "100%",
        transition: "0.3s ease",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: "#FF6B6B",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {category}
      </span>

      <h3
        style={{
          color: "#fff",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontSize: 24,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7,
          fontSize: 15,
        }}
      >
        {desc}
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          color: "#FF6B6B",
          fontSize: 14,
        }}
      >
        View Project ↗
      </div>
    </div>
  </a>
);

const DevCard = ({ title, category, desc, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "none",
      width: "100%",
    }}
  >
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem",
        borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        textAlign: "center",
        width: "100%",
        transition: "0.3s ease",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: "#FF6B6B",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {category}
      </span>

      <h3
        style={{
          color: "#fff",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontSize: 24,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7,
          fontSize: 15,
        }}
      >
        {desc}
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          color: "#FF6B6B",
          fontSize: 14,
        }}
      >
        Watch Demo ↗
      </div>
    </div>
  </a>
);

export default function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const style = document.createElement("style");

    style.textContent = `
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      html{
        scroll-behavior:smooth;
      }

      body{
        background:#08080A;
        font-family:Arial, sans-serif;
        overflow-x:hidden;
      }

      section{
        width:100%;
      }

      a{
        transition:0.3s ease;
      }

      a:hover{
        opacity:0.85;
      }

      @media(max-width:768px){
        nav{
          gap:1rem !important;
          padding:1rem !important;
        }
      }
    `;

    document.head.appendChild(style);

    const handleScroll = () => {
      const sections = ["home", "design", "dev", "about"];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: "#08080A",
        minHeight: "100vh",
      }}
    >
      <NavBar active={active} />

      {/* HERO */}

      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 850,
            width: "100%",
          }}
        >
          <p
            style={{
              color: "#FF6B6B",
              marginBottom: "1rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: 14,
            }}
          >
            Portfolio 2026
          </p>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(3rem, 10vw, 6rem)",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            {portfolioData.name}
          </h1>

          <h2
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "clamp(1.1rem, 3vw, 2rem)",
              marginBottom: "2rem",
            }}
          >
            {portfolioData.tagline}
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              fontSize: 16,
              maxWidth: 650,
              margin: "0 auto 2rem",
            }}
          >
            {portfolioData.about}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#design"
              style={{
                padding: "14px 28px",
                background: "#FF6B6B",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 8,
              }}
            >
              Design Work
            </a>

            <a
              href="#dev"
              style={{
                padding: "14px 28px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 8,
              }}
            >
              Dev Projects
            </a>
          </div>
        </div>
      </section>

      {/* DESIGN */}

      <section
        id="design"
        style={{
          padding: "6rem 1.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
     <SectionTitle
  title="Design Work"
  subtitle="Creative solutions across branding, email marketing, digital campaigns, and user-focused visual design."
/>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {portfolioData.designProjects.map((item) => (
            <DesignCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* DEVELOPMENT */}

      <section
        id="dev"
        style={{
          padding: "6rem 1.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
<SectionTitle
  title="Development"
  subtitle="Cross-platform mobile applications, full-stack web solutions, and scalable digital products."
/>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {portfolioData.devProjects.map((item) => (
            <DevCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        style={{
          padding: "6rem 1.5rem",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <SectionTitle
          title="About Me"
          subtitle="Designer + Developer focused on creating modern digital experiences."
        />

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.9,
            fontSize: 16,
            maxWidth: 700,
            margin: "0 auto 2rem",
          }}
        >
        Based in New Delhi, I combine design, development, and digital marketing to build impactful products. My experience spans branding, marketing technology, web platforms, and mobile applications, with a strong focus on user experience and business outcomes.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "MongoDB",
            "Figma",
            "SEO",
            "SFMC",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "10px 16px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          padding: "2rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <a
            href="https://github.com/848838"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/shubham-jha-417428251"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.behance.net/knowledgeworld11"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            Behance
          </a>
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 14,
          }}
        >
          © 2026 Shubham Jha • Designer • Developer • Solver
        </p>
      </footer>
    </div>
  );
}