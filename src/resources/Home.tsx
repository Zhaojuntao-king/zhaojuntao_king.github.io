"use client";

import { useState } from "react";
import { Column, Row, Text, Heading, Badge, RevealFx, Avatar, Button, Schema, Meta, Line } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Mailchimp } from "@/components";

export default function HomePage() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const highlights = home.highlights ?? [];
  const currentHighlightImage = highlights[currentHighlight];

  const showNextHighlight = () => {
    if (highlights.length === 0) return;
    setCurrentHighlight((prev) => (prev + 1) % highlights.length);
  };

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
      <img
        src={home.image}
        alt="Home cover"
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
          borderRadius: "16px",
          marginBottom: "24px",
          display: "block",
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

      {/* 首页图片切换播放 */}
      {currentHighlightImage && (
        <Column fillWidth horizontal="center" paddingY="24" gap="16">
          <Heading wrap="balance" variant="display-strong-m">
            Highlights
          </Heading>
          <div
            role="button"
            tabIndex={0}
            onClick={showNextHighlight}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                showNextHighlight();
              }
            }}
            style={{
              width: "100%",
              maxWidth: "960px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={currentHighlightImage.src}
              alt={currentHighlightImage.alt}
              style={{
                objectFit: "cover",
                borderRadius: "16px",
                width: "100%",
              }}
            />
          </div>
          <Text onBackground="neutral-weak" variant="label-default-s">
            Click image to view next highlight ({currentHighlight + 1}/{highlights.length})
          </Text>
        </Column>
      )}

      {/* Mailchimp 订阅 */}
      <Mailchimp />
    </Column>
  );
}
