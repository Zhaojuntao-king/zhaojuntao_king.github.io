"use client";

import { Column, Row, Text, Heading, Badge, RevealFx, Avatar, Button, Schema, Meta, Line } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Mailchimp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function HomePage() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center">
      {/* SEO Metadata */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 顶部封面图 */}
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage: `url(${home.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          marginBottom: "24px",
        }}
      />

      {/* 文字介绍 */}
      <Column maxWidth="s" horizontal="center" align="center" gap="m">
        <RevealFx fillWidth horizontal="center" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            {home.subline}
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.4} horizontal="center">
          <Button
            id="about"
            data-border="rounded"
            href={about.path}
            variant="secondary"
            size="m"
            weight="default"
            arrowIcon
          >
            <Row gap="8" vertical="center">
              {about.avatar.display && (
                <Avatar src={person.avatar} size="m" />
              )}
              {about.title}
            </Row>
          </Button>
        </RevealFx>
      </Column>

      {/* 精选项目图片 */}
      {about.work.display && (
        <Column fillWidth horizontal="center" paddingY="24">
          <Heading wrap="balance" variant="display-strong-m">
            Selected Projects
          </Heading>
          <Row fillWidth gap="12" flexWrap>
            {about.work.experiences.map((exp, i) =>
              exp.images.map((img, j) => (
                <img
                  key={`${i}-${j}`}
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "30%", borderRadius: "12px" }}
                />
              ))
            )}
          </Row>
        </Column>
      )}

      {/* 首页图片网格 */}
      {home.highlights?.length > 0 && (
        <Column fillWidth horizontal="center" paddingY="24">
          <Heading wrap="balance" variant="display-strong-m">
            Highlights
          </Heading>
          <Row fillWidth gap="12" flexWrap>
            {home.highlights.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                style={{ width: "32%", borderRadius: "12px" }}
              />
            ))}
          </Row>
        </Column>
      )}

      {/* Mailchimp 订阅 */}
      <Mailchimp />
    </Column>
  );
}
