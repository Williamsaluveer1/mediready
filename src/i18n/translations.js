export const translations = {
  sv: {
    nav: {
      links: [
        { to: '/kunskapstest', label: 'Diagnostiskt test' },
        { to: '/physicians', label: 'Om oss' },
      ],
      cta: 'Prova din kunskapsnivå',
      login: 'Logga in',
      register: 'Registrera dig',
      menuToggle: 'Öppna meny',
      menuClose: 'Stäng meny',
      langToggle: 'Byt språk',
      langSv: 'SV',
      langEn: 'EN',
    },
    hero: {
      badge: 'Anmälan öppen för 2026',
      titleLine1: 'Vi hjälper dig på din väg mot',
      titleHighlight: ' svensk läkarlegitimation',
      description: 'Interaktiva föreläsningar via Zoom med erfarna läkare.',
      descriptionLine1: 'Interaktiva föreläsningar via Zoom',
      descriptionLine2: 'med erfarna läkare.',
      primaryCta: 'Prova din kunskapsnivå',
      videoCta: 'Se video',
      videoOpenLabel: 'Se video',
      videoCloseLabel: 'Stäng video',
      trust: [
        { strong: 'Live via Zoom', span: 'Interaktiva föreläsningar' },
        { strong: '4 läkare', span: 'ST & överläkare' },
        { strong: 'Svenska riktlinjer', span: 'Aktuell handläggning' },
      ],
      imageAlt: 'Läkare i utbildningsmiljö',
    },
    homeServices: {
      label: 'Våra tjänster',
      title: 'Förbered dig för ',
      highlight: 'kunskapsprovet',
      description:
        'Interaktiva föreläsningar inom samtliga medicinska områden, med utgångspunkt från kunskapsprovet – allt i enlighet med svensk handläggning och riktlinjer.',
      readMore: 'Läs mer',
      viewAll: 'Visa alla tjänster',
      items: [
        {
          title: 'Interaktiva föreläsningar',
          description:
            'Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid.',
          link: '/services#lectures',
        },
        {
          title: 'Diagnostiskt kunskapsprov',
          description:
            '150 flervalsfrågor för att ge en övergripande bild av ditt nuvarande kunskapsläge inför kunskapsprovet.',
          link: '/services#test',
        },
        {
          title: 'Kliniska ämnen',
          description:
            'Internmedicin, kirurgi, pediatrik, gynekologi, psykiatri, neurologi, infektion och mer.',
          link: '/services#clinical',
        },
        {
          title: 'Prekliniska ämnen',
          description:
            'Cellbiologi, fysiologi, genetik, immunologi och andra grundläggande medicinska ämnen.',
          link: '/services#preclinical',
        },
        {
          title: 'Språkträning',
          description:
            'Träna medicinska termer och svenska uttryck samtidigt som du lär dig svensk handläggning.',
          link: '/services#language',
        },
        {
          title: 'Svenska riktlinjer',
          description:
            'Allt innehåll är i enlighet med svensk handläggning och aktuella behandlingsriktlinjer.',
          link: '/services#guidelines',
        },
      ],
    },
    homeSecurity: {
      title: 'Så fungerar utbildningen',
      items: [
        {
          title: 'Läkare som undervisar',
          description: 'Erfarna läkare håller i föreläsningarna.',
        },
        {
          title: 'Live via Zoom',
          description: 'Föreläsningarna hålls Live så att du kan ställa frågor och avbryta när du vill.',
        },
        {
          title: 'Kursupplägg',
          description: 'Vi utgår från tidigare kunskapsprov och gör djupdykningar inom samtliga medicinska specialiteter.',
        },
      ],
    },
    homeTrust: {
      title: 'Om utbildningen',
      description:
        'Utbildningen byggs upp kring kunskapsprovet och med svenska riktlinjer så att du får en tydlig och säker väg mot svensk läkarlegitimation. Vi täcker in både prekliniska och kliniska ämnen i linje med det som faktiskt testas på kunskapsprovet. Erfarna läkare föreläser live via Zoom så att du kan ställa frågor, följa med i realtid och samtidigt träna din medicinska svenska. Med månadsprenumeration får du tillgång till alla lektioner och kan planera din förberedelse i din egen takt. Vårt mål är att du ska känna dig trygg inför kunskapsprovet och väl förberedd för nästa steg in i det svenska sjukvårdssystemet.',
      descriptionMobile:
        'Utbildningen byggs kring kunskapsprovet och svenska riktlinjer så att du får en tydlig och säker väg mot legitimation. Vi täcker både prekliniska och kliniska ämnen i linje med det som faktiskt testas, och allt presenteras enligt svensk medicinsk handläggning och aktuella behandlingsrekommendationer. Erfarna läkare föreläser live via Zoom så att du kan ställa frågor, följa med i realtid och samtidigt träna din medicinska svenska.',
      cta: 'Läs mer om utbildningen',
      ctaTo: '/physicians',
    },
    homeCta: {
      title: 'Redo att komma igång?',
      description:
        'Skapa ditt konto och få tillgång till föreläsningarna som hjälper dig att förbereda inför kunskapsprovet.',
      primaryCta: 'Kom igång',
      primaryTo: '/register',
    },
    homeOffer: {
      title: 'Vad vi erbjuder',
      description:
        'En prenumeration som ger dig tillgång till alla live-föreläsningar via Zoom.',
      bullets: [
        'Live-föreläsningar via Zoom med möjlighet att ställa frågor.',
        'Innehåll som följer kunskapsprovet och svensk medicinsk handläggning.',
        'Du kan avsluta när som helst – prenumerationen är månadsvis.',
      ],
      cta: 'Registrera dig',
      ctaTo: '/register',
    },
    about: {
      stats: [
        { value: '4', label: 'Erfarna läkare' },
        { value: '150', label: 'Övningsfrågor' },
        { value: '100%', label: 'Svenskt fokus' },
        { value: 'Live', label: 'Interaktiva kurser' },
      ],
      label: 'Vilka är vi?',
      title: 'Vi hjälper dig nå ',
      highlight: 'svensk legitimation',
      description1:
        'Vi är fyra läkare, på olika nivåer (ST och överläkare) som vill hjälpa er öka motivation, språk och förståelse/kunskap i svensk medicinsk handläggning.',
      description2:
        'Med prenumeration får du tillgång till alla våra lektioner via Zoom. Prenumerationen är månadsvis – du kan avsluta när som helst.',
      primaryCta: 'Läs mer om oss',
      secondaryCta: 'Möt oss',
      imageAltMain: 'Medicinsk föreläsningssal med läkare',
      imageAltSecondary: 'Läkare i diskussion',
      badge: 'Kunskapsprovet',
      valuesTitle: 'Vad vi erbjuder',
      values: [
        {
          title: 'Kunskapsprovet i fokus',
          description:
            'Föreläsningar via Zoom inom samtliga medicinska områden. Med månadsprenumeration får du tillgång till alla lektioner.',
        },
        {
          title: 'Svenska riktlinjer',
          description:
            'Allt i enlighet med svensk handläggning och riktlinjer samtidigt som du tränar på din svenska!',
        },
        {
          title: 'Språkträning',
          description:
            'Öva upp dina medicinska språkfärdigheter på svenska genom interaktiva sessioner med oss läkare.',
        },
      ],
    },
    team: {
      sectionLabel: 'Vilka är vi?',
      title: 'Vi är ',
      highlight: 'Mediready',
      cta: 'Läs mer om oss',
      members: [
        {
          name: 'Christian Unge',
          role: 'Medireadys internmedicinexpert',
          specialty: 'Internmedicin',
          image: '/Christian.JPG',
          shortBio:
            'Överläkare i internmedicin. Har doktorerat i Global Hälsa. Tidigare studierektor för AT-läkarna på Karolinska sjukhuset.',
          bio:
            'Överläkare i internmedicin på Danderyds sjukhus. Har doktorerat i Global Hälsa och varit studierektor för AT-läkarna på Karolinska sjukhuset. På Mediready förbereder han utlandsutbildade läkare inför kunskapsprovet och vidare ut i arbetslivet som läkare i Sverige.',
          education: 'Doktorsexamen i Global Hälsa',
          certifications: [
            'Överläkare i internmedicin',
            'Tidigare studierektor för AT-läkare, Karolinska sjukhuset',
          ],
        },
        {
          name: 'Mats Ek',
          role: 'Medireadys psykiatriexpert',
          specialty: 'Psykiatri',
          image: '/Mats.JPEG',
          shortBio:
            'Överläkare i psykiatri på WeMind Psykiatri. Ordförande i Region Stockholms Läkemedelskommitté. Doktorerat i psykiatrisk epidemiologi vid Karolinska Institutet.',
          bio:
            'Överläkare i psykiatri på WeMind Psykiatri i Tyresö. Ordförande i Region Stockholms Läkemedelskommitté. Disputerad i psykiatrisk epidemiologi vid Karolinska Institutet.',
          education:
            'Master i folkhälsa, Johns Hopkins University; Doktorsexamen i psykiatrisk epidemiologi, Karolinska Institutet',
          certifications: [
            'Överläkare i psykiatri',
            'Ordförande, Region Stockholms Läkemedelskommitté',
          ],
        },
        {
          name: 'Oskar Pettersson',
          role: 'Medireadys allmänmedicinexpert',
          specialty: 'Allmänmedicin',
          image: '/Oskar.png',
          shortBio:
            'ST-läkare i allmänmedicin i Region Skåne. Över tre års erfarenhet av undervisning inför kunskapsprovet.',
          bio:
            'ST-läkare i allmänmedicin i Region Skåne med över tre års erfarenhet av undervisning inför kunskapsprovet. Hjälper läkare att förbereda sig strukturerat, effektivt och med fokus på det som verkligen krävs för att lyckas.',
          education: 'ST-läkare i allmänmedicin',
          certifications: ['Över 3 års erfarenhet av kunskapsprovsundervisning'],
        },
        {
          name: 'Sofie Wiklund',
          role: 'Medireadys kirurgiexpert',
          specialty: 'Kirurgi',
          image: '/sofie.JPG',
          shortBio:
            'ST-läkare i kirurgi i Västra Götalandsregionen. Utbildad och arbetat i Köpenhamn med erfarenhet som utländsk läkare. Tidigare leg. sjuksköterska med 10 års erfarenhet inom akut/ambulanssjukvård.',
          bio:
            'ST-läkare i kirurgi i Västra Götalandsregionen. Utbildad och arbetat i Köpenhamn, Danmark och har erfarenhet av att vara utländsk läkare. Tidigare legitimerad sjuksköterska med cirka 10 års erfarenhet inom akut- och ambulanssjukvård. På Mediready motiverar hon inför kommande arbete som läkare i Sverige och förbereder inför kunskapsprovet.',
          education: 'Läkarutbildning i Köpenhamn, Leg. sjuksköterska',
          certifications: [
            'ST-läkare i kirurgi',
            '10 års erfarenhet inom akut/ambulanssjukvård',
          ],
        },
      ],
      page: {
        label: 'Om oss',
        title: 'Vi är ',
        highlight: 'läkarna',
        titleRest: ' bakom Mediready',
        description:
          'Mediready drivs av fyra läkare som föreläser via Zoom för blivande läkare. Prenumerationen är månadsvis och ger tillgång till alla lektioner. Läs mer om oss nedan.',
        education: 'Utbildning',
        certifications: 'Certifieringar',
        ctaTitle: 'Redo att komma igång?',
        ctaDescription: 'Kontakta oss så berättar vi mer.',
        ctaButton: 'Kontakta oss',
        viewCourses: 'Visa kurser',
      },
    },
    testimonials: {
      label: 'Omdömen',
      title: 'Vad våra ',
      highlight: 'deltagare',
      titleRest: ' säger',
      ariaPrev: 'Föregående omdöme',
      ariaNext: 'Nästa omdöme',
      ariaGoto: 'Gå till omdöme {{n}}',
      ariaRating: '{{rating}} av 5 stjärnor',
      items: [
        {
          id: 1,
          content:
            'Mediready hjälpte mig att förstå svensk medicinsk handläggning på ett sätt som mina egna studier aldrig kunde. De interaktiva föreläsningarna var ovärderliga inför kunskapsprovet.',
          author: 'Läkare från Tyskland',
          role: 'Klarade kunskapsprovet 2024',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=faces',
        },
        {
          id: 2,
          content:
            'Som utlandsutbildad läkare var det svårt att veta var jag skulle börja. Medireadys diagnostiska prov visade mig exakt vilka områden jag behövde fokusera på.',
          author: 'Läkare från Polen',
          role: 'Förberedde sig för kunskapsprovet',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=faces',
        },
        {
          id: 3,
          content:
            'Jag uppskattade att jag kunde träna medicinska termer på svenska samtidigt som jag lärde mig om svenska behandlingsriktlinjer.',
          author: 'Läkare från Syrien',
          role: 'Nu legitimerad i Sverige',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=faces',
        },
      ],
    },
    contact: {
      label: 'Kom igång',
      heading: 'Har du en fråga till oss?',
      description:
        'Kontakta oss för att lära dig mer om våra interaktiva föreläsningar och prenumerationstjänster. Vi hjälper dig på vägen mot svensk läkarlegitimation.',
      infoEmail: 'E-post',
      infoInstagram: 'Instagram',
      infoFacebook: 'Facebook',
      formTitle: 'Kontakta oss',
      nameLabel: 'Fullständigt namn',
      namePlaceholder: 'Ditt namn',
      emailLabel: 'E-post',
      emailPlaceholder: 'din.email@exempel.se',
      institutionLabel: 'Land där du utbildats',
      institutionPlaceholder: 'T.ex. Tyskland, Polen, Syrien',
      interestLabel: 'Vad är du intresserad av?',
      selectPlaceholder: 'Välj ett alternativ',
      optSubscription: 'Prenumerationstjänst',
      optTest: 'Diagnostiskt kunskapsprov',
      optLectures: 'Interaktiva föreläsningar',
      optInfo: 'Generell information',
      messageLabel: 'Meddelande',
      messagePlaceholder: 'Berätta mer om dina behov och frågor...',
      submit: 'Skicka meddelande',
      note: 'Vi återkommer så snart vi kan.',
      alert: 'Tack för ditt intresse! Vi kontaktar dig inom kort.',
    },
    footer: {
      tagline:
        'Vi hjälper utlandsutbildade läkare att förbereda sig för kunskapsprovet.',
      servicesTitle: 'Tjänster',
      brandTitle: 'Mediready',
      resourcesTitle: 'Tjänster',
      contactTitle: 'Kontakta oss',
      contactText: 'Har du frågor om våra tjänster eller vill veta mer? Kontakta oss.',
      legalPrivacy: 'Integritetspolicy',
      legalTerms: 'Användarvillkor',
      copyright: '© {{year}} Mediready. Alla rättigheter förbehållna.',
      links: {
        programs: [
          { label: 'Interaktiva föreläsningar', to: '/services#lectures' },
          { label: 'Diagnostiskt prov', to: '/services#test' },
          { label: 'Kliniska ämnen', to: '/services#clinical' },
          { label: 'Prekliniska ämnen', to: '/services#preclinical' },
          { label: 'Språkträning', to: '/services#language' },
        ],
        institute: [
          { label: 'Om oss', to: '/physicians' },
          { label: 'Kontakt', to: '/contact' },
          { label: 'Integritetspolicy', to: '/privacy' },
          { label: 'Användarvillkor', to: '/terms' },
        ],
        resources: [
          { label: 'Kom igång', to: '/register' },
          { label: 'Diagnostiskt test', to: '/kunskapstest' },
        ],
      },
    },
    pages: {
      register: {
        title: 'Registrera dig',
        subtitle: 'Skapa ett konto för att komma igång.',
        nameLabel: 'Fullständigt namn',
        namePlaceholder: 'Ditt namn',
        emailLabel: 'E-post',
        emailPlaceholder: 'din.email@exempel.se',
        passwordLabel: 'Lösenord',
        passwordPlaceholder: 'Välj ett lösenord',
        confirmPasswordLabel: 'Bekräfta lösenord',
        confirmPasswordPlaceholder: 'Skriv lösenordet igen',
        passwordMismatchError: 'Lösenorden matchar inte.',
        submit: 'Registrera dig',
        submitting: 'Skickar...',
        haveAccount: 'Har du redan ett konto?',
        signInLink: 'Logga in',
      },
      swish: {
        label: 'Swish',
        title: 'Betala med',
        highlight: 'Swish',
        description: 'Här hittar du vår Swish-länk och nummer.',
        cardTitle: 'Swish-betalning',
        numberLabel: 'Swish-nummer',
        openSwish: 'Öppna Swish',
        note: 'Tips: Öppna sidan på mobilen för att länken ska fungera direkt i Swish-appen.',
      },
      kunskapstest: {
        label: 'Diagnostiskt test',
        title: 'Välkommen till Medireadys diagnostiska test',
        description: 'För läkare med utbildning utanför Sverige.',
        infoTitle: 'Om provet',
        infoIntro: 'Detta prov består av 150 flervalsfrågor och är utformat för att ge oss en övergripande bild av ditt nuvarande kunskapsläge inför det svenska kunskapsprovet för legitimation. Baserat på resultatet kommer vi att avgöra om vi tycker att du har rätt kunskapsnivå för att kunna tillgodogöra dig vår kurs.',
        contentTitle: 'Provets innehåll är uppdelat i ungefär:',
        preclinicalTitle: 'Prekliniska frågor',
        preclinicalExamples: 't.ex. cellbiologi, fysiologi, genetik, immunologi',
        clinicalTitle: 'Kliniska frågor',
        clinicalExamples: 't.ex. internmedicin, kirurgi, pediatrik, gynekologi, psykiatri, neurologi, infektion',
        startButton: 'Klicka här för att komma vidare till provet',
        startButtonMobile: 'Vidare till provet',
        note: 'Provet tar ca 2-3 timmar att genomföra. Du kan ta paus och fortsätta senare.',
        ctaTitle: 'Har du frågor?',
        ctaDescription: 'Kontakta oss om du har funderingar kring provet eller våra tjänster.',
        ctaButton: 'Kontakta oss',
      },
      buyCourse: {
        label: 'Prenumeration',
        title: 'Live-föreläsningar inför kunskapsprovet',
        description: 'Betala månadsvis och få tillgång till alla live-föreläsningar via Zoom. Vi är läkare som undervisar utlandsutbildade läkare så att du ska klara kunskapsprovet.',
        badge: 'Prenum.',
        courseTitle: 'Prenumeration – alla live-föreläsningar',
        courseDescription: 'Mediready är läkare som undervisar utlandsutbildade läkare inför det svenska kunskapsprovet. Du betalar månadsvis och får tillgång till alla live-föreläsningar som sker via Zoom.',
        priceLabel: 'Pris',
        price: '2000 kr',
        pricePeriod: '/ månad',
        includesTitle: 'Detta ingår:',
        includes: [
          'Tillgång till alla live-föreläsningar via Zoom',
          'Läkare som undervisar – inriktat på kunskapsprovet',
          'Kliniska ämnen (internmedicin, kirurgi, pediatrik, m.m.)',
          'Prekliniska ämnen (fysiologi, immunologi, m.m.)',
          'Språkträning med medicinska termer på svenska',
        ],
        formTitle: 'Kom igång – skapa ditt konto',
        formIntro: 'Fyll i dina uppgifter för att gå vidare till betalning.',
        nameLabel: 'Fullständigt namn',
        namePlaceholder: 'Ditt namn',
        emailLabel: 'E-post',
        emailPlaceholder: 'din.email@exempel.se',
        passwordLabel: 'Lösenord',
        passwordPlaceholder: 'Ditt lösenord',
        confirmPasswordLabel: 'Bekräfta lösenord',
        confirmPasswordPlaceholder: 'Skriv lösenordet igen',
        passwordMismatchError: 'Lösenorden matchar inte.',
        messageLabel: 'Meddelande (valfritt)',
        messagePlaceholder: 'Skriv eventuella frågor här...',
        submitButton: 'Gå vidare till betalning',
        formNote: 'Du får direkt tillgång till kursen efter aktiv prenumeration.',
        successMessage: 'Tack för din anmälan! Vi kontaktar dig snart.',
        ctaTitle: 'Har du frågor?',
        ctaDescription: 'Tveka inte att höra av dig om du har funderingar.',
        ctaButton: 'Kontakta oss',
      },
      privacy: {
        label: 'Juridik',
        title: 'Integritetspolicy',
        lastUpdated: 'Senast uppdaterad: februari 2026',
        sections: [
          {
            heading: 'Introduktion',
            paragraphs: [
              'Mediready (vi, oss) värnar om din integritet. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du använder våra tjänster.',
            ],
          },
          {
            heading: 'Personuppgifter vi samlar in',
            paragraphs: [
              'Vi samlar in uppgifter som du anger vid registrering och användning av tjänsten, till exempel namn och e-postadress. Vi lagrar även information kopplad till din prenumeration och deltagande i våra sessioner.',
            ],
          },
          {
            heading: 'Betalningar via Stripe',
            paragraphs: [
              'Betalningar för vår månadsprenumeration hanteras av betalningsleverantören Stripe. När du betalar delar vi nödvändiga uppgifter (t.ex. e-post, betalningsreferens) med Stripe för att genomföra transaktionen. Kortuppgifter hanteras direkt av Stripe och lagras inte av oss.',
              'Mer information om hur Stripe hanterar dina uppgifter finns i Stripes integritetspolicy: https://stripe.com/privacy',
            ],
          },
          {
            heading: 'Möten via Zoom',
            paragraphs: [
              'Våra live-föreläsningar och möten sker via videotjänsten Zoom. När du deltar i en session hanterar Zoom personuppgifter i samband med mötet, till exempel ditt namn, e-postadress samt video- och ljuddata under mötet.',
              'Zoom agerar som underleverantör för oss. Läs mer om Zooms hantering av personuppgifter här: https://zoom.us/privacy',
            ],
          },
          {
            heading: 'Kontakt',
            paragraphs: [
              'Vid frågor om denna integritetspolicy eller vår hantering av personuppgifter, kontakta oss på hej@mediready.se.',
            ],
          },
        ],
      },
      terms: {
        label: 'Juridik',
        title: 'Användarvillkor',
        lastUpdated: 'Senast uppdaterad: februari 2026',
        sections: [
          {
            heading: 'Godkännande av villkor',
            paragraphs: [
              'Genom att använda Medireadys tjänster godkänner du dessa användarvillkor. Om du inte accepterar villkoren får du inte använda tjänsterna.',
            ],
          },
          {
            heading: 'Prenumeration och betalning',
            paragraphs: [
              'Prenumerationen på våra tjänster löper månadsvis och debiteras via betalningsleverantören Stripe. Du kan när som helst avsluta din prenumeration; den löper då till slutet av den betalda perioden.',
              'Villkor för återbetalning och avbokning framgår av den information som ges vid köp. Stripe hanterar själva betalningsflödet; deras villkor finns på https://stripe.com/legal.',
            ],
          },
          {
            heading: 'Deltagande i sessioner via Zoom',
            paragraphs: [
              'Live-föreläsningar och möten genomförs via tjänsten Zoom. Genom att delta godkänner du att Zoom används för mötena och att du följer Zooms användarvillkor såväl som våra instruktioner under sessionerna.',
            ],
          },
          {
            heading: 'Kontakt',
            paragraphs: [
              'För frågor om användarvillkoren, kontakta oss på hej@mediready.se.',
            ],
          },
        ],
      },
      services: {
        label: 'Våra tjänster',
        title: 'Förbered dig för ',
        highlight: 'kunskapsprovet',
        description:
          'Interaktiva föreläsningar inom samtliga medicinska områden, med utgångspunkt från kunskapsprovet – allt i enlighet med svensk handläggning och riktlinjer.',
        contactMore: 'Kontakta oss för mer info',
        ctaTitle: 'Redo att börja?',
        ctaDesc: 'Kontakta oss på hej@mediready.se eller följ oss på Instagram @mediready.se',
        ctaBtn: 'Kontakta oss',
        programs: [
          {
            id: 'lectures',
            title: 'Interaktiva föreläsningar',
            description:
              'Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid.',
            details: [
              'Live sessioner med oss läkare',
              'Möjlighet att ställa frågor direkt',
              'Interaktiv diskussion med andra deltagare',
              'Inspelningar tillgängliga efteråt',
              'Regelbundna schemalagda tillfällen',
            ],
          },
          {
            id: 'test',
            title: 'Diagnostiskt kunskapsprov',
            description: '150 flervalsfrågor för att ge en övergripande bild av ditt nuvarande kunskapsläge.',
            details: [
              '150 flervalsfrågor totalt',
              '~1/3 prekliniska frågor',
              '~2/3 kliniska frågor',
              'Direkt feedback på resultat',
              'Identifiera dina svaga områden',
            ],
          },
          {
            id: 'clinical',
            title: 'Kliniska ämnen',
            description: 'Omfattande genomgång av alla kliniska ämnen som testas i kunskapsprovet.',
            details: [
              'Internmedicin',
              'Kirurgi',
              'Pediatrik',
              'Gynekologi & obstetrik',
              'Psykiatri',
              'Neurologi',
              'Infektionssjukdomar',
            ],
          },
          {
            id: 'preclinical',
            title: 'Prekliniska ämnen',
            description: 'Grundläggande medicinska ämnen som utgör basen för kunskapsprovet.',
            details: ['Cellbiologi', 'Fysiologi', 'Genetik', 'Immunologi', 'Farmakologi', 'Patologi', 'Mikrobiologi'],
          },
          {
            id: 'language',
            title: 'Språkträning',
            description: 'Träna medicinska termer och svenska uttryck samtidigt som du lär dig svensk handläggning.',
            details: [
              'Medicinska termer på svenska',
              'Patientkommunikation',
              'Journalföring',
              'Kollegial kommunikation',
              'Svenska behandlingsriktlinjer',
            ],
          },
          {
            id: 'guidelines',
            title: 'Svenska riktlinjer',
            description: 'Allt innehåll är i enlighet med svensk handläggning och aktuella behandlingsriktlinjer.',
            details: [
              'Aktuella Läkemedelsverkets riktlinjer',
              'Socialstyrelsens rekommendationer',
              'Regionala vårdprogram',
              'Nationella kvalitetsregister',
              'Svensk klinisk praxis',
            ],
          },
          {
            id: 'subscription',
            title: 'Prenumeration',
            description: 'Få tillgång till alla våra tjänster genom en prenumerationstjänst.',
            details: [
              'Tillgång till alla interaktiva föreläsningar',
              'Obegränsade diagnostiska prov',
              'Alla kliniska och prekliniska ämnen',
              'Språkträning inkluderad',
              'Kontakta oss för mer info',
            ],
          },
        ],
      },
      contact: {
        label: 'Kontakt',
        title: 'Fråga ',
        highlight: 'oss',
        description:
          'Har du frågor om våra tjänster eller vill veta mer? Vi återkommer så snart vi kan.',
        faqTitle: 'Vanliga frågor',
        faqs: [
          {
            q: 'Vad är kunskapsprovet?',
            a: 'Kunskapsprovet är ett prov som läkare utbildade utanför EU/EES måste klara för att få svensk läkarlegitimation. Det testar både prekliniska och kliniska kunskaper.',
          },
          {
            q: 'Hur fungerar era föreläsningar?',
            a: 'Vi erbjuder interaktiva Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid till våra experter.',
          },
          {
            q: 'Vad kostar prenumerationen?',
            a: 'Kontakta oss på hej@mediready.se för information om priser och prenumerationsalternativ.',
          },
          {
            q: 'Kan jag testa min kunskapsnivå först?',
            a: 'Ja! Vi har ett diagnostiskt kunskapsprov med 150 frågor som hjälper dig förstå var du ligger och vilka områden du behöver fokusera på.',
          },
        ],
        followTitle: 'Följ oss',
        followDesc: 'Håll dig uppdaterad om nyheter och tips.',
      },
    },
  },

  en: {
    nav: {
      links: [
        { to: '/kunskapstest', label: 'Diagnostic test' },
        { to: '/physicians', label: 'About us' },
      ],
      cta: 'Test your knowledge level',
      login: 'Log in',
      register: 'Register',
      menuToggle: 'Open menu',
      menuClose: 'Close menu',
      langToggle: 'Change language',
      langSv: 'SV',
      langEn: 'EN',
    },
    hero: {
      badge: 'Application open for 2026',
      titleLine1: 'We help you on your way to',
      titleHighlight: ' Swedish medical licensure',
      description: 'Interactive lectures via Zoom with experienced doctors.',
      descriptionLine1: 'Interactive lectures via Zoom',
      descriptionLine2: 'with experienced doctors.',
      primaryCta: 'Test your knowledge level',
      videoCta: 'Watch video',
      videoOpenLabel: 'Watch video',
      videoCloseLabel: 'Close video',
      trust: [
        { strong: 'Live via Zoom', span: 'Interactive lectures' },
        { strong: '4 instructors', span: 'Residents & consultants' },
        { strong: 'Swedish guidelines', span: 'Clinical practice' },
      ],
      imageAlt: 'Doctors in an educational setting',
    },
    homeServices: {
      label: 'What we offer',
      title: 'Prepare for the ',
      highlight: 'knowledge test',
      description:
        'Interactive lectures across all medical fields, based on the Swedish knowledge test—aligned with Swedish clinical practice and guidelines.',
      readMore: 'Read more',
      viewAll: 'View all services',
      items: [
        {
          title: 'Interactive lectures',
          description:
            'Zoom/video-based sessions where you actively participate and can ask questions in real time.',
          link: '/services#lectures',
        },
        {
          title: 'Diagnostic knowledge test',
          description:
            '150 multiple-choice questions to give you an overview of your current level ahead of the knowledge test.',
          link: '/services#test',
        },
        {
          title: 'Clinical subjects',
          description:
            'Internal medicine, surgery, pediatrics, OB/GYN, psychiatry, neurology, infectious diseases, and more.',
          link: '/services#clinical',
        },
        {
          title: 'Pre-clinical subjects',
          description:
            'Cell biology, physiology, genetics, immunology, and other foundational medical topics.',
          link: '/services#preclinical',
        },
        {
          title: 'Language training',
          description:
            'Practice Swedish medical terminology and expressions while learning Swedish clinical workflows.',
          link: '/services#language',
        },
        {
          title: 'Swedish guidelines',
          description:
            'All content is aligned with Swedish clinical management and current treatment guidelines.',
          link: '/services#guidelines',
        },
      ],
    },
    homeSecurity: {
      title: 'How the training works',
      items: [
        {
          title: 'Doctors teach',
          description: 'Experienced doctors deliver the lectures – no middleman, straight from the clinic to you.',
        },
        {
          title: 'Live via Zoom',
          description: 'Join from anywhere. Lectures are live so you can ask questions and follow along in real time.',
        },
        {
          title: 'Structured course',
          description: 'Clear structure aligned with the knowledge requirements – so you know what to expect and can plan ahead.',
        },
      ],
    },
    homeTrust: {
      title: 'About the training',
      description:
        'The training is built around the knowledge test and Swedish guidelines so you have a clear path to licensure. We cover both preclinical and clinical topics in line with what is actually tested, and everything is presented according to Swedish medical practice and current treatment recommendations. Experienced doctors teach live via Zoom so you can ask questions, follow along in real time, and build your medical Swedish at the same time. With a monthly subscription you get access to all lessons and can plan your preparation at your own pace. Our aim is for you to feel confident ahead of the knowledge test and well prepared for the next step into the Swedish healthcare system.',
      descriptionMobile:
        'The training is built around the knowledge test and Swedish guidelines so you have a clear path to licensure. We cover both preclinical and clinical topics in line with what is actually tested, and everything is presented according to Swedish medical practice and current treatment recommendations. Experienced doctors teach live via Zoom so you can ask questions, follow along in real time, and build your medical Swedish at the same time.',
      cta: 'Read more about the training',
      ctaTo: '/physicians',
    },
    homeCta: {
      title: 'Ready to get started?',
      description:
        'Create your account and access lectures and materials that help you prepare for the knowledge test.',
      primaryCta: 'Get started',
      primaryTo: '/register',
    },
    homeOffer: {
      title: 'What we offer',
      description:
        'A subscription that gives you access to all live lectures and a clear structure for the knowledge test.',
      bullets: [
        'Live Zoom lectures with time for questions.',
        'Content aligned with the knowledge test and Swedish clinical practice.',
        'Monthly subscription — cancel anytime.',
      ],
      cta: 'Sign up',
      ctaTo: '/register',
    },
    about: {
      stats: [
        { value: '4', label: 'Doctors' },
        { value: '150', label: 'Practice questions' },
        { value: '100%', label: 'Swedish focus' },
        { value: 'Live', label: 'Interactive' },
      ],
      label: 'Who are we?',
      title: 'We help you reach ',
      highlight: 'Swedish licensure',
      description1:
        'We are four doctors at different stages (residents and consultants) who want to help you build motivation, language skills, and confidence in Swedish clinical practice.',
      description2:
        'Our interactive lectures provide solid preparation for the knowledge test and your path into the Swedish healthcare system.',
      primaryCta: 'Read about us',
      secondaryCta: 'Meet us',
      imageAltMain: 'Medical lecture hall',
      imageAltSecondary: 'Doctors discussing a case',
      badge: 'Knowledge test',
      valuesTitle: 'What you get',
      values: [
        {
          title: 'Knowledge test focus',
          description: 'Interactive lectures across all medical fields, based on the knowledge test.',
        },
        {
          title: 'Swedish guidelines',
          description: 'Aligned with Swedish clinical practice and guidelines—while you train your Swedish.',
        },
        {
          title: 'Language training',
          description: 'Build Swedish medical language skills through interactive sessions with our team.',
        },
      ],
    },
    team: {
      sectionLabel: 'Who are we?',
      title: 'Meet the ',
      highlight: 'team',
      cta: 'Read more about us',
      members: [
        {
          name: 'Christian Unge',
          role: 'Internal medicine instructor',
          specialty: 'Internal medicine',
          image: '/Christian.JPG',
          shortBio:
            'Consultant in internal medicine at Danderyd Hospital. PhD in Global Health. Former internship program director at Karolinska.',
          bio:
            'Consultant in internal medicine at Danderyd Hospital. PhD in Global Health and former internship program director at Karolinska. At Mediready, he prepares internationally trained doctors for the knowledge test and for working as doctors in Sweden.',
          education: 'PhD in Global Health',
          certifications: [
            'Consultant in internal medicine',
            'Former internship program director, Karolinska Hospital',
          ],
        },
        {
          name: 'Mats Ek',
          role: 'Psychiatry instructor',
          specialty: 'Psychiatry',
          image: '/Mats.JPEG',
          shortBio:
            'Consultant psychiatrist at WeMind Psychiatry. Chair of Stockholm Region’s Drug Committee. PhD in psychiatric epidemiology.',
          bio:
            'Consultant psychiatrist at WeMind Psychiatry in Tyresö and Chair of Stockholm Region’s Drug Committee. MPH from Johns Hopkins and PhD in psychiatric epidemiology from Karolinska Institutet.',
          education: 'MPH, Johns Hopkins University; PhD, Karolinska Institutet',
          certifications: ['Consultant psychiatrist', 'Chair, Stockholm Region Drug Committee'],
        },
        {
          name: 'Oskar Pettersson',
          role: 'Family medicine instructor',
          specialty: 'Family medicine',
          image: '/Oskar.png',
          shortBio:
            'Family medicine resident in Region Skåne. Over three years of teaching for the knowledge test.',
          bio:
            'Family medicine resident in Region Skåne with over three years of experience teaching for the knowledge test. He helps doctors prepare in a structured, efficient way—focused on what is needed to succeed.',
          education: 'Family medicine residency',
          certifications: ['3+ years of knowledge test teaching'],
        },
        {
          name: 'Sofie Wiklund',
          role: 'Surgery instructor',
          specialty: 'Surgery',
          image: '/sofie.JPG',
          shortBio:
            'Surgery resident in Västra Götaland. Trained and worked in Copenhagen with experience as an “international doctor”.',
          bio:
            'Surgery resident in Västra Götaland. Trained and worked in Copenhagen, Denmark, with first-hand experience of being an “international doctor”. Former registered nurse with ~10 years of emergency/ambulance experience. At Mediready, she motivates you for working as a doctor in Sweden and prepares you for the knowledge test.',
          education: 'Medical training in Copenhagen; Registered nurse',
          certifications: ['Surgery residency', '10 years in emergency/ambulance care'],
        },
      ],
      page: {
        label: 'About us',
        title: 'We are the ',
        highlight: 'doctors',
        titleRest: ' behind Mediready',
        description:
          'We are four doctors supporting internationally trained colleagues on the path to Swedish medical licensure. Learn more about us below.',
        education: 'Education',
        certifications: 'Qualifications',
        ctaTitle: 'Ready to get started?',
        ctaDescription: 'Contact us and we’ll tell you more.',
        ctaButton: 'Contact us',
        viewCourses: 'View courses',
      },
    },
    testimonials: {
      label: 'Testimonials',
      title: 'What our ',
      highlight: 'participants',
      titleRest: ' say',
      ariaPrev: 'Previous testimonial',
      ariaNext: 'Next testimonial',
      ariaGoto: 'Go to testimonial {{n}}',
      ariaRating: '{{rating}} out of 5 stars',
      items: [
        {
          id: 1,
          content:
            'Mediready helped me understand Swedish clinical management in a way my self-study never could. The interactive lectures were invaluable before the knowledge test.',
          author: 'Doctor from Germany',
          role: 'Passed the knowledge test 2024',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=faces',
        },
        {
          id: 2,
          content:
            'As an internationally trained doctor it was hard to know where to start. Mediready’s diagnostic test showed me exactly which areas to focus on.',
          author: 'Doctor from Poland',
          role: 'Preparing for the knowledge test',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=faces',
        },
        {
          id: 3,
          content:
            'I appreciated being able to practice Swedish medical terminology while learning Swedish guidelines.',
          author: 'Doctor from Syria',
          role: 'Now licensed in Sweden',
          rating: 5,
          image:
            'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=faces',
        },
      ],
    },
    contact: {
      label: 'Get started',
      heading: 'Have a question?',
      description:
        'Contact us to learn more about our interactive lectures and subscription options. We help you on the path to Swedish medical licensure.',
      infoEmail: 'Email',
      infoInstagram: 'Instagram',
      infoFacebook: 'Facebook',
      formTitle: 'Contact us',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your.email@example.com',
      institutionLabel: 'Country of training',
      institutionPlaceholder: 'e.g. Germany, Poland, Syria',
      interestLabel: 'What are you interested in?',
      selectPlaceholder: 'Select an option',
      optSubscription: 'Subscription',
      optTest: 'Diagnostic test',
      optLectures: 'Interactive lectures',
      optInfo: 'General information',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your questions and needs...',
      submit: 'Send message',
      note: 'We’ll get back to you as soon as we can.',
      alert: 'Thanks for your interest! We will contact you shortly.',
    },
    footer: {
      tagline:
        'We help internationally trained doctors prepare for the knowledge test and the path to Swedish medical licensure.',
      servicesTitle: 'Services',
      brandTitle: 'Mediready',
      resourcesTitle: 'Services',
      contactTitle: 'Contact',
      contactText: 'Questions about our services? Reach out—we’re happy to help.',
      legalPrivacy: 'Privacy policy',
      legalTerms: 'Terms of service',
      copyright: '© {{year}} Mediready. All rights reserved.',
      links: {
        programs: [
          { label: 'Interactive lectures', to: '/services#lectures' },
          { label: 'Diagnostic test', to: '/services#test' },
          { label: 'Clinical subjects', to: '/services#clinical' },
          { label: 'Pre-clinical subjects', to: '/services#preclinical' },
          { label: 'Language training', to: '/services#language' },
        ],
        institute: [
          { label: 'About us', to: '/physicians' },
          { label: 'Contact', to: '/contact' },
          { label: 'Privacy policy', to: '/privacy' },
          { label: 'Terms of service', to: '/terms' },
        ],
        resources: [
          { label: 'Get started', to: '/register' },
          { label: 'Diagnostic test', to: '/kunskapstest' },
        ],
      },
    },
    pages: {
      register: {
        title: 'Create an account',
        subtitle: 'Sign up to get started.',
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your.email@example.com',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Choose a password',
        confirmPasswordLabel: 'Confirm password',
        confirmPasswordPlaceholder: 'Type your password again',
        passwordMismatchError: 'Passwords do not match.',
        submit: 'Sign up',
        submitting: 'Submitting...',
        haveAccount: 'Already have an account?',
        signInLink: 'Log in',
      },
      swish: {
        label: 'Swish',
        title: 'Pay with',
        highlight: 'Swish',
        description: 'Here you can find our Swish link and number.',
        cardTitle: 'Swish payment',
        numberLabel: 'Swish number',
        openSwish: 'Open Swish',
        note: 'Tip: Open this page on your phone to launch the Swish app.',
      },
      kunskapstest: {
        label: 'Diagnostic test',
        title: 'Welcome to Mediready\'s diagnostic test',
        description: 'For doctors educated outside Sweden.',
        infoTitle: 'About the test',
        infoIntro: 'This test consists of 150 multiple-choice questions and is designed to give you an overview of your current knowledge level ahead of the Swedish medical licensing exam. Please read the information below carefully before starting the test.',
        contentTitle: 'The test content is divided into approximately:',
        preclinicalTitle: 'Pre-clinical questions',
        preclinicalExamples: 'e.g. cell biology, physiology, genetics, immunology',
        clinicalTitle: 'Clinical questions',
        clinicalExamples: 'e.g. internal medicine, surgery, pediatrics, gynecology, psychiatry, neurology, infectious diseases',
        startButton: 'Click here to proceed to the test',
        startButtonMobile: 'To the test',
        note: 'The test takes approximately 2-3 hours to complete. You can pause and continue later.',
        ctaTitle: 'Any questions?',
        ctaDescription: 'Contact us if you have any questions about the test or our services.',
        ctaButton: 'Contact us',
      },
      buyCourse: {
        label: 'Subscription',
        title: 'Live lectures for the knowledge test',
        description: 'Pay monthly and get access to all live lectures via Zoom. We are doctors teaching internationally trained doctors so you can pass the Swedish knowledge test.',
        badge: 'Sub.',
        courseTitle: 'Subscription – all live lectures',
        courseDescription: 'Mediready is doctors teaching other internationally trained doctors for the Swedish medical licensing knowledge test. You pay monthly and get access to all live lectures held via Zoom.',
        priceLabel: 'Price',
        price: '999 kr',
        pricePeriod: '/ month',
        includesTitle: 'What\'s included:',
        includes: [
          'Access to all live lectures via Zoom',
          'Doctors teaching – focused on the knowledge test',
          'Clinical subjects (internal medicine, surgery, pediatrics, etc.)',
          'Pre-clinical subjects (physiology, immunology, etc.)',
          'Language training with Swedish medical terminology',
        ],
        formTitle: 'Get started – create your account',
        formIntro: 'Fill in your details to proceed to payment.',
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your.email@example.com',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Your password',
        confirmPasswordLabel: 'Confirm password',
        confirmPasswordPlaceholder: 'Type your password again',
        passwordMismatchError: 'Passwords do not match.',
        messageLabel: 'Message (optional)',
        messagePlaceholder: 'Write any questions here...',
        submitButton: 'Go to payment',
        formNote: 'You get immediate access to the course after an active subscription.',
        successMessage: 'Thank you for your registration! We\'ll contact you soon.',
        ctaTitle: 'Any questions?',
        ctaDescription: 'Don\'t hesitate to reach out if you have any questions.',
        ctaButton: 'Contact us',
      },
      privacy: {
        label: 'Legal',
        title: 'Privacy policy',
        lastUpdated: 'Last updated: February 2026',
        sections: [
          {
            heading: 'Introduction',
            paragraphs: [
              'Mediready ("we", "us") is committed to protecting your privacy. This policy describes how we collect, use, and protect your personal data when you use our services.',
            ],
          },
          {
            heading: 'Personal data we collect',
            paragraphs: [
              'We collect information you provide when registering and using the service, such as name and email address. We also store information related to your subscription and participation in our sessions.',
            ],
          },
          {
            heading: 'Payments via Stripe',
            paragraphs: [
              'Payments for our monthly subscription are processed by our payment provider Stripe. When you pay, we share necessary details (e.g. email, payment reference) with Stripe to complete the transaction. Card details are processed directly by Stripe and are not stored by us.',
              'For more information on how Stripe handles your data, see Stripe\'s privacy policy: https://stripe.com/privacy',
            ],
          },
          {
            heading: 'Meetings via Zoom',
            paragraphs: [
              'Our live lectures and meetings are held via the Zoom video service. When you join a session, Zoom processes personal data in connection with the meeting, such as your name, email address, and video/audio during the session.',
              'Zoom acts as a sub-processor for us. Read more about Zoom\'s handling of personal data here: https://zoom.us/privacy',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              'If you have questions about this privacy policy or our handling of personal data, contact us at hej@mediready.se.',
            ],
          },
        ],
      },
      terms: {
        label: 'Legal',
        title: 'Terms of service',
        lastUpdated: 'Last updated: February 2026',
        sections: [
          {
            heading: 'Acceptance of terms',
            paragraphs: [
              'By using Mediready\'s services, you agree to thesee terms of service. If you do not accept the terms, you may not use the services.',
            ],
          },
          {
            heading: 'Subscription and payment',
            paragraphs: [
              'Subscription to our services runs on a monthly basis and is charged via our payment provider Stripe. You may cancel your subscription at any time; it will then run until the end of the paid period.',
              'Refund and cancellation terms are set out in the information provided at purchase. Stripe handles the payment flow; their terms are available at https://stripe.com/legal.',
            ],
          },
          {
            heading: 'Participation in sessions via Zoom',
            paragraphs: [
              'Live lectures and meetings are conducted via the Zoom service. By participating, you agree that Zoom is used for the meetings and that you will follow Zoom\'s terms of use as well as our instructions during the sessions.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              'For questions about the terms of service, contact us at hej@mediready.se.',
            ],
          },
        ],
      },
      services: {
        label: 'Services',
        title: 'Prepare for the ',
        highlight: 'knowledge test',
        description:
          'Interactive lectures across all medical fields, based on the Swedish knowledge test—aligned with Swedish clinical practice and guidelines.',
        contactMore: 'Contact us to learn more',
        ctaTitle: 'Ready to start?',
        ctaDesc: 'Contact us at hej@mediready.se or follow us on Instagram @mediready.se',
        ctaBtn: 'Contact us',
        programs: [
          {
            id: 'lectures',
            title: 'Interactive lectures',
            description:
              'Zoom/video-based sessions where you actively participate and can ask questions in real time.',
            details: [
              'Live sessions with our team',
              'Ask questions directly',
              'Interactive discussion with participants',
              'Recordings available afterwards',
              'Regular scheduled sessions',
            ],
          },
          {
            id: 'test',
            title: 'Diagnostic knowledge test',
            description: '150 multiple-choice questions to give you an overview of your current level.',
            details: [
              '150 multiple-choice questions',
              '~1/3 pre-clinical',
              '~2/3 clinical',
              'Immediate feedback',
              'Identify weak areas',
            ],
          },
          {
            id: 'clinical',
            title: 'Clinical subjects',
            description: 'A structured overview of the clinical subjects covered by the knowledge test.',
            details: [
              'Internal medicine',
              'Surgery',
              'Pediatrics',
              'OB/GYN',
              'Psychiatry',
              'Neurology',
              'Infectious diseases',
            ],
          },
          {
            id: 'preclinical',
            title: 'Pre-clinical subjects',
            description: 'Foundational medical topics needed for the knowledge test.',
            details: ['Cell biology', 'Physiology', 'Genetics', 'Immunology', 'Pharmacology', 'Pathology', 'Microbiology'],
          },
          {
            id: 'language',
            title: 'Language training',
            description: 'Practice Swedish medical language while learning Swedish clinical workflows.',
            details: [
              'Swedish medical terminology',
              'Patient communication',
              'Documentation',
              'Colleague communication',
              'Swedish clinical guidelines',
            ],
          },
          {
            id: 'guidelines',
            title: 'Swedish guidelines',
            description: 'Aligned with Swedish clinical practice and up-to-date treatment guidelines.',
            details: [
              'Current national guidelines',
              'Authority recommendations',
              'Regional care programs',
              'Quality registers',
              'Swedish clinical practice',
            ],
          },
          {
            id: 'subscription',
            title: 'Subscription',
            description: 'Access all our services through a subscription.',
            details: [
              'Access to all interactive lectures',
              'Unlimited diagnostic tests',
              'All clinical & pre-clinical content',
              'Language training included',
              'Contact us for details',
            ],
          },
        ],
      },
      contact: {
        label: 'Contact',
        title: 'Get in touch with ',
        highlight: 'us',
        description:
          'Questions about our services or want to know how we can help? We’ll get back to you as soon as we can.',
        faqTitle: 'FAQ',
        faqs: [
          {
            q: 'What is the knowledge test?',
            a: 'The Swedish knowledge test is required for doctors trained outside the EU/EEA to obtain Swedish medical licensure. It covers both pre-clinical and clinical knowledge.',
          },
          {
            q: 'How do your lectures work?',
            a: 'We offer interactive Zoom/video-based lectures where you actively participate and can ask questions in real time.',
          },
          {
            q: 'What does the subscription cost?',
            a: 'Email us at hej@mediready.se for pricing and subscription options.',
          },
          {
            q: 'Can I test my level first?',
            a: 'Yes! Our diagnostic test with 150 questions helps you understand your current level and where to focus.',
          },
        ],
        followTitle: 'Follow us',
        followDesc: 'Stay updated with news and tips.',
      },
    },
  },
}

