import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function LandingComingSoon() {
  const [quote, setQuote] = useState("");

  const quotes = {
    en: "Something extraordinary is awakening. Mystical voices, sacred technology and your inner wisdom merge into a unique experience.",
    pt: "Algo extraordinário está despertando. Vozes místicas, tecnologia sagrada e sua sabedoria interior se fundem em uma experiência única.",
    es: "Algo extraordinario está despertando. Voces místicas, tecnología sagrada y tu sabiduría interior se fusionan en una experiencia única."
  };

  function detectLanguage() {
    if (typeof window !== 'undefined') {
      const lang = navigator.language?.substring(0, 2).toLowerCase();
      if (lang === 'en') return 'en';
      if (lang === 'pt') return 'pt';
      if (lang === 'es') return 'es';
    }
    return 'en';
  }

  useEffect(() => {
    const lang = detectLanguage();
    setQuote(quotes[lang]);
  }, []);

  return (
    <>
      <Head>
        <title>SoulSpark Oracle Voices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="page">
        <div className="content">
          <img 
            src="/the-oracle-logo-horizontal.svg" 
            alt="SoulSpark Oracle Voices" 
            className="logo"
          />
          <p className="quote">"{quote}"</p>
        </div>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            height: 100%;
            overflow: hidden;
          }

          body {
            height: 100%;
            overflow: hidden;
            font-family: 'Nunito', sans-serif;
          }

          #__next {
            height: 100%;
          }
        `}</style>

        <style jsx>{`
          .page {
            background: linear-gradient(135deg, #000043 0%, #0000AF 100%);
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 15px;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            max-width: min(90vw, 800px);
            width: 100%;
          }

          .logo {
            width: 100%;
            max-width: 550px;
            height: auto;
            object-fit: contain;
          }

          .quote {
            font-family: 'EB Garamond', serif;
            font-style: italic;
            color: white;
            font-size: 1.4rem;
            line-height: 1.6;
            max-width: 650px;
            margin: 0;
          }

          /* Tablet */
          @media (max-width: 768px) {
            .content {
              gap: 25px;
            }

            .logo {
              max-width: 480px;
            }

            .quote {
              font-size: 1.3rem;
              max-width: 90%;
            }
          }

          /* Mobile */
          @media (max-width: 480px) {
            .page {
              padding: 10px;
            }

            .content {
              gap: 20px;
            }

            .logo {
              max-width: 320px;
            }

            .quote {
              font-size: 1.1rem;
              line-height: 1.5;
              max-width: 95%;
            }
          }

          /* Small Mobile */
          @media (max-width: 360px) {
            .logo {
              max-width: 280px;
            }

            .quote {
              font-size: 1rem;
              line-height: 1.4;
            }
          }

          /* Large Desktop - Reducir tipografía */
          @media (min-width: 1200px) {
            .quote {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}