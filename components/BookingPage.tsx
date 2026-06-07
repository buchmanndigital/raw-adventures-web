"use client";

import { useState } from "react";
import { LangBar } from "@/components/LangBar";
import { useBasePath } from "@/components/BasePathContext";
import { useLang } from "@/lib/lang-context";
import type { Lang } from "@/lib/translations";

const STATUS_COPY: Record<
  Lang,
  { sending: string; success: string; error: string }
> = {
  en: {
    sending: "Sending your request…",
    success: "Thanks! Your request was sent. We'll get back to you shortly.",
    error: "Something went wrong. Please email booking@raw-mountain.com directly.",
  },
  de: {
    sending: "Anfrage wird gesendet…",
    success: "Danke! Deine Anfrage wurde gesendet. Wir melden uns in Kürze.",
    error:
      "Etwas ist schiefgelaufen. Bitte schreib direkt an booking@raw-mountain.com.",
  },
  es: {
    sending: "Enviando tu solicitud…",
    success: "¡Gracias! Tu solicitud fue enviada. Te responderemos pronto.",
    error:
      "Algo salió mal. Escríbenos directamente a booking@raw-mountain.com.",
  },
  nl: {
    sending: "Aanvraag wordt verzonden…",
    success: "Bedankt! Je aanvraag is verzonden. We nemen snel contact op.",
    error:
      "Er ging iets mis. Mail ons rechtstreeks op booking@raw-mountain.com.",
  },
};

type BookingCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  back: string;
  summaryTitle: string;
  summary: string[];
  formTitle: string;
  required: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    country: string;
    dates: string;
    groupSize: string;
    riders: string;
    ability: string;
    offPiste: string;
    avalanche: string;
    equipment: string;
    room: string;
    flights: string;
    insurance: string;
    message: string;
  };
  placeholders: {
    dates: string;
    riders: string;
    message: string;
  };
  submit: string;
  mailHint: string;
  questionsTitle: string;
  questionsIntro: string;
  questions: { q: string; a: string }[];
};

const COPY: Record<Lang, BookingCopy> = {
  en: {
    eyebrow: "Booking request",
    title: "Reserve your catskiing week",
    intro:
      "This is the static booking request for the Shar Mountains catskiing and catboarding trip. Send us the key details and we will confirm availability, group fit and the next steps personally.",
    back: "Back to tour",
    summaryTitle: "Trip snapshot",
    summary: [
      "6 guided riding days in the Shar Mountains",
      "7 nights, hotel meals, Skopje transfers and snowcat access",
      "Small groups with terrain matched to ability and stability",
      "Packages from €1.990 per person depending on season",
    ],
    formTitle: "Your request",
    required: "Fill in what you can — we'll reply personally to confirm the details.",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      country: "Country / departure airport",
      dates: "Preferred dates",
      groupSize: "Group size",
      riders: "Skiers / snowboarders",
      ability: "Ability level",
      offPiste: "Off-piste experience",
      avalanche: "Avalanche training",
      equipment: "Avalanche equipment needed?",
      room: "Room preference",
      flights: "Flight status",
      insurance: "Travel insurance",
      message: "Anything else we should know?",
    },
    placeholders: {
      dates: "Example: February 8-15, flexible in March, or custom week",
      riders: "Example: 2 snowboarders, 1 skier",
      message:
        "Tell us about fitness, powder experience, dietary needs, rental gear, single room requests or special timing.",
    },
    submit: "Prepare booking email",
    mailHint:
      "No payment is taken here. We first check availability and whether the trip fits your level.",
    questionsTitle: "Important before you request",
    questionsIntro:
      "These are the questions that matter most for a safe, realistic catskiing week.",
    questions: [
      {
        q: "What riding level is required?",
        a: "You should be confident on red and black pistes and comfortable in variable snow. This is not a beginner trip.",
      },
      {
        q: "How much off-piste experience should I have?",
        a: "Solid powder or freeride experience is strongly recommended. The guide adapts terrain, but everyone should be comfortable away from groomed slopes.",
      },
      {
        q: "Do I need avalanche gear?",
        a: "Avalanche equipment is mandatory. You can bring your own beacon, shovel, probe and airbag, or request rental gear in advance.",
      },
      {
        q: "Can I join alone?",
        a: "Yes. Solo travellers are welcome and are grouped by ability, preferred dates and riding style.",
      },
      {
        q: "What happens after the request?",
        a: "We check availability, ask any missing questions, confirm the setup and then send the booking details and deposit instructions.",
      },
    ],
  },
  de: {
    eyebrow: "Buchungsanfrage",
    title: "Reserviere deine Catskiing-Woche",
    intro:
      "Das ist die statische Buchungsanfrage für die Catskiing- und Catboarding-Tour im Shar-Gebirge. Schick uns die wichtigsten Daten, wir prüfen Verfügbarkeit, Gruppensetup und die nächsten Schritte persönlich.",
    back: "Zurück zur Tour",
    summaryTitle: "Trip im Überblick",
    summary: [
      "6 geführte Fahrtage im Shar-Gebirge",
      "7 Nächte, Hotelverpflegung, Skopje-Transfers und Snowcat-Zugang",
      "Kleine Gruppen mit Gelände passend zu Können und Schneesituation",
      "Pakete ab €1.990 pro Person, je nach Saison",
    ],
    formTitle: "Deine Anfrage",
    required: "Fülle aus, was du kannst – wir melden uns persönlich zur Bestätigung.",
    fields: {
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon / WhatsApp",
      country: "Land / Abflughafen",
      dates: "Wunschtermin",
      groupSize: "Gruppengröße",
      riders: "Skifahrer / Snowboarder",
      ability: "Fahrkönnen",
      offPiste: "Off-Piste-Erfahrung",
      avalanche: "Lawinentraining",
      equipment: "Lawinenausrüstung nötig?",
      room: "Zimmerwunsch",
      flights: "Flugstatus",
      insurance: "Reiseversicherung",
      message: "Was sollten wir noch wissen?",
    },
    placeholders: {
      dates: "Beispiel: 8.-15. Februar, flexibel im März oder eigene Woche",
      riders: "Beispiel: 2 Snowboarder, 1 Skifahrer",
      message:
        "Erzähl uns von Fitness, Powder-Erfahrung, Ernährung, Leihequipment, Einzelzimmerwunsch oder Timing.",
    },
    submit: "Buchungs-Mail vorbereiten",
    mailHint:
      "Hier wird noch nichts bezahlt. Wir prüfen zuerst Verfügbarkeit und ob die Tour zu deinem Level passt.",
    questionsTitle: "Wichtig vor der Anfrage",
    questionsIntro:
      "Diese Fragen sind entscheidend für eine sichere und realistische Catskiing-Woche.",
    questions: [
      {
        q: "Welches Fahrlevel brauche ich?",
        a: "Du solltest rote und schwarze Pisten sicher fahren und mit wechselndem Schnee klarkommen. Diese Tour ist nicht für Anfänger geeignet.",
      },
      {
        q: "Wie viel Off-Piste-Erfahrung brauche ich?",
        a: "Solide Powder- oder Freeride-Erfahrung ist klar empfohlen. Der Guide passt das Gelände an, aber alle sollten sich abseits präparierter Pisten wohlfühlen.",
      },
      {
        q: "Brauche ich Lawinenausrüstung?",
        a: "Lawinenausrüstung ist Pflicht. Du kannst LVS, Schaufel, Sonde und Airbag selbst mitbringen oder Leihequipment vorab anfragen.",
      },
      {
        q: "Kann ich alleine mitkommen?",
        a: "Ja. Solo-Reisende sind willkommen und werden nach Können, Termin und Fahrstil passend gruppiert.",
      },
      {
        q: "Was passiert nach der Anfrage?",
        a: "Wir prüfen Verfügbarkeit, klären offene Fragen, bestätigen das Setup und schicken dir anschließend Buchungsdetails und Infos zur Anzahlung.",
      },
    ],
  },
  es: {
    eyebrow: "Solicitud de reserva",
    title: "Reserva tu semana de catskiing",
    intro:
      "Esta es la solicitud estática para el viaje de catskiing y catboarding en las montañas Shar. Envíanos los datos clave y confirmaremos disponibilidad, nivel del grupo y próximos pasos personalmente.",
    back: "Volver al viaje",
    summaryTitle: "Resumen del viaje",
    summary: [
      "6 días guiados en las montañas Shar",
      "7 noches, comidas en hotel, traslados desde Skopje y acceso en snowcat",
      "Grupos pequeños con terreno adaptado al nivel y estabilidad",
      "Paquetes desde €1.990 por persona según temporada",
    ],
    formTitle: "Tu solicitud",
    required: "Rellena lo que puedas — te responderemos personalmente para confirmar.",
    fields: {
      name: "Nombre completo",
      email: "Email",
      phone: "Teléfono / WhatsApp",
      country: "País / aeropuerto de salida",
      dates: "Fechas preferidas",
      groupSize: "Tamaño del grupo",
      riders: "Esquiadores / snowboarders",
      ability: "Nivel",
      offPiste: "Experiencia fuera de pista",
      avalanche: "Formación en avalanchas",
      equipment: "¿Necesitas equipo de avalancha?",
      room: "Preferencia de habitación",
      flights: "Estado de vuelos",
      insurance: "Seguro de viaje",
      message: "¿Algo más que debamos saber?",
    },
    placeholders: {
      dates: "Ejemplo: 8-15 febrero, flexible en marzo o semana a medida",
      riders: "Ejemplo: 2 snowboarders, 1 esquiador",
      message:
        "Cuéntanos sobre condición física, polvo, dieta, alquiler, habitación individual o fechas especiales.",
    },
    submit: "Preparar email de reserva",
    mailHint:
      "Aquí no se realiza ningún pago. Primero comprobamos disponibilidad y si el viaje encaja con tu nivel.",
    questionsTitle: "Importante antes de solicitar",
    questionsIntro:
      "Estas preguntas importan para una semana de catskiing segura y realista.",
    questions: [
      {
        q: "¿Qué nivel necesito?",
        a: "Debes dominar pistas rojas y negras y sentirte cómodo en nieve variable. No es un viaje para principiantes.",
      },
      {
        q: "¿Cuánta experiencia fuera de pista necesito?",
        a: "Se recomienda experiencia sólida en polvo o freeride. El guía adapta el terreno, pero todos deben sentirse cómodos fuera de pista.",
      },
      {
        q: "¿Necesito equipo de avalancha?",
        a: "El equipo de avalancha es obligatorio. Puedes traer beacon, pala, sonda y airbag o solicitar alquiler con antelación.",
      },
      {
        q: "¿Puedo venir solo?",
        a: "Sí. Los viajeros solos son bienvenidos y se agrupan por nivel, fechas y estilo.",
      },
      {
        q: "¿Qué pasa después de la solicitud?",
        a: "Comprobamos disponibilidad, resolvemos dudas, confirmamos la configuración y enviamos los detalles de reserva y depósito.",
      },
    ],
  },
  nl: {
    eyebrow: "Boekingsaanvraag",
    title: "Reserveer je catskiing-week",
    intro:
      "Dit is de statische aanvraag voor de catskiing- en catboardingtrip in het Shar-gebergte. Stuur ons de belangrijkste gegevens en wij bevestigen beschikbaarheid, groepsmatch en volgende stappen persoonlijk.",
    back: "Terug naar trip",
    summaryTitle: "Tripoverzicht",
    summary: [
      "6 begeleide rijdagen in het Shar-gebergte",
      "7 nachten, hotelmaaltijden, Skopje-transfers en snowcat-toegang",
      "Kleine groepen met terrein passend bij niveau en stabiliteit",
      "Pakketten vanaf €1.990 per persoon afhankelijk van seizoen",
    ],
    formTitle: "Je aanvraag",
    required: "Vul in wat je kunt — we reageren persoonlijk om te bevestigen.",
    fields: {
      name: "Volledige naam",
      email: "Email",
      phone: "Telefoon / WhatsApp",
      country: "Land / luchthaven vertrek",
      dates: "Gewenste data",
      groupSize: "Groepsgrootte",
      riders: "Skiërs / snowboarders",
      ability: "Niveau",
      offPiste: "Off-piste ervaring",
      avalanche: "Lawinetraining",
      equipment: "Lawinemateriaal nodig?",
      room: "Kamervoorkeur",
      flights: "Vluchtstatus",
      insurance: "Reisverzekering",
      message: "Wat moeten we nog weten?",
    },
    placeholders: {
      dates: "Voorbeeld: 8-15 februari, flexibel in maart of eigen week",
      riders: "Voorbeeld: 2 snowboarders, 1 skiër",
      message:
        "Vertel ons over conditie, poederervaring, dieet, huurspullen, single room of timing.",
    },
    submit: "Boekingsmail voorbereiden",
    mailHint:
      "Hier wordt nog niets betaald. We checken eerst beschikbaarheid en of de trip bij je niveau past.",
    questionsTitle: "Belangrijk voor je aanvraagt",
    questionsIntro:
      "Deze vragen zijn belangrijk voor een veilige en realistische catskiing-week.",
    questions: [
      {
        q: "Welk niveau heb ik nodig?",
        a: "Je moet rode en zwarte pistes zeker rijden en comfortabel zijn in wisselende sneeuw. Deze trip is niet voor beginners.",
      },
      {
        q: "Hoeveel off-piste ervaring heb ik nodig?",
        a: "Solide poeder- of freeride-ervaring is sterk aanbevolen. De gids past terrein aan, maar iedereen moet zich buiten de piste comfortabel voelen.",
      },
      {
        q: "Heb ik lawinemateriaal nodig?",
        a: "Lawinemateriaal is verplicht. Je kunt beacon, schep, sonde en airbag meenemen of vooraf huurmateriaal aanvragen.",
      },
      {
        q: "Kan ik alleen komen?",
        a: "Ja. Solo-reizigers zijn welkom en worden ingedeeld op niveau, data en rijstijl.",
      },
      {
        q: "Wat gebeurt er na de aanvraag?",
        a: "We checken beschikbaarheid, stellen ontbrekende vragen, bevestigen de setup en sturen daarna boekingsdetails en aanbetalingsinformatie.",
      },
    ],
  },
};

const fieldOrder: (keyof BookingCopy["fields"])[] = [
  "name",
  "email",
  "phone",
  "country",
  "dates",
  "groupSize",
  "riders",
  "ability",
  "offPiste",
  "avalanche",
  "equipment",
  "room",
  "flights",
  "insurance",
];

export function BookingPage() {
  const { lang } = useLang();
  const basePath = useBasePath();
  const copy = COPY[lang];
  const statusCopy = STATUS_COPY[lang];
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("company") as string)?.trim()) return; // honeypot

    const fields = fieldOrder
      .map((field) => ({
        label: copy.fields[field],
        value: ((data.get(copy.fields[field]) as string) ?? "").trim(),
      }))
      .filter((f) => f.value);
    const message = ((data.get(copy.fields.message) as string) ?? "").trim();
    const replyTo = (data.get(copy.fields.email) as string)?.trim();

    if (fields.length === 0 && !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `${copy.eyebrow}: ${copy.title}`,
          replyTo,
          fields,
          message,
        }),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <LangBar />
      <main className="booking-page">
        <section className="booking-hero">
          <a href={basePath} className="booking-back">
            {copy.back}
          </a>
          <p className="section-label">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="booking-intro">{copy.intro}</p>
        </section>

        <section className="booking-layout">
          <aside className="booking-summary">
            <h2>{copy.summaryTitle}</h2>
            <ul>
              {copy.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.mailHint}</p>
          </aside>

          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div>
              <h2>{copy.formTitle}</h2>
              <p>{copy.required}</p>
            </div>
            <div className="booking-fields">
              {fieldOrder.map((field) => (
                <label key={field}>
                  <span>{copy.fields[field]}</span>
                  <input
                    name={copy.fields[field]}
                    placeholder={
                      field === "dates"
                        ? copy.placeholders.dates
                        : field === "riders"
                          ? copy.placeholders.riders
                          : ""
                    }
                  />
                </label>
              ))}
              <label className="booking-wide">
                <span>{copy.fields.message}</span>
                <textarea name={copy.fields.message} placeholder={copy.placeholders.message} />
              </label>
            </div>
            {/* Honeypot — hidden from users, catches bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
              }}
            />
            <button
              type="submit"
              className="btn-primary booking-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? statusCopy.sending : copy.submit}
            </button>
            {status === "success" && (
              <p role="status" style={{ marginTop: "1rem", color: "var(--ice)" }}>
                {statusCopy.success}
              </p>
            )}
            {status === "error" && (
              <p role="alert" style={{ marginTop: "1rem", color: "var(--accent)" }}>
                {statusCopy.error}
              </p>
            )}
          </form>
        </section>

        <section className="booking-questions">
          <p className="section-label">{copy.questionsTitle}</p>
          <h2>{copy.questionsIntro}</h2>
          <div className="booking-question-grid">
            {copy.questions.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
