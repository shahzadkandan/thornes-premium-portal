import type { Metadata } from "next";
import { getAboutPage, getSiteSettings } from "../../../lib/wordpress/queries";
import { pageMetadata } from "../../../lib/seo";
import {
  BulletList,
  Container,
  DarkPageHero,
  MediaImage,
  PrimaryCta,
  SectionHeading,
} from "../../../components/next/site-primitives";

export async function generateMetadata(): Promise<Metadata> {
  const [settings, page] = await Promise.all([getSiteSettings(), getAboutPage()]);
  return pageMetadata(settings, page.hero.title, page.hero.description, page.story.image, "/about");
}

export default async function AboutPage() {
  const page = await getAboutPage();
  return (
    <div className="bg-[color:var(--navy-deep)]">
      <DarkPageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        current="About"
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <MediaImage
              asset={page.story.image}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
              Our role
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
              {page.story.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-white/65">
              {page.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mission"
              title="Make cross-border healthcare procurement clearer."
              description={page.mission}
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Vision"
              title="Build trust through useful coordination."
              description={page.vision}
            />
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Working principles"
            title="Evidence-led, buyer-focused and practical."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {page.values.map((value) => (
              <article key={value.title} className="rounded-[24px] glass p-7">
                <h2 className="font-display text-2xl text-white">{value.title}</h2>
                <p className="mt-3 leading-7 text-white/60">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-28">
        <Container>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <SectionHeading
              align="left"
              eyebrow="Verified information"
              title="Claims should be supported before they are published."
              description="Formal certifications, testimonials, team details and manufacturing claims are displayed only when approved evidence is available in the content model."
            />
            <div className="mt-7">
              <BulletList
                items={
                  page.certifications.length
                    ? page.certifications
                        .filter((item) => item.verified)
                        .map((item) => `${item.title} - ${item.issuer}`)
                    : [
                        "No certifications are currently presented as verified on this website.",
                        "Supplier and product evidence is reviewed per inquiry.",
                      ]
                }
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-28">
        <Container>
          <div className="rounded-[28px] bg-gradient-to-br from-[color:var(--teal)] to-[color:var(--cyan-accent)] p-px">
            <div className="rounded-[27px] bg-[color:var(--navy-deep)] p-8 text-center md:p-12">
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                {page.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/60">{page.cta.description}</p>
              <div className="mt-7">
                <PrimaryCta href={page.cta.cta.href}>{page.cta.cta.label}</PrimaryCta>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
