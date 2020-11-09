import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";

import Image from "next/image";
import {
  Section,
  ContentText,
  ContentWrapper,
  TitleWrapper,
  Title,
} from "../styles/HomeStyle";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <Section>
        <Card title="Desenvolvimento Mobile" path="/images/mobile.svg" />
        <Card title="FrontEnd e BackEnd" path="/images/web.svg" />
      </Section>

      {/* Gerar um componente separado para as sections */}
      <TitleWrapper>
        <Title>Soluções tecnológicas de alto nível</Title>
      </TitleWrapper>
      <Section>
        <ContentWrapper>
          <ContentText>
            Desenvolver sistemas, sejam eles aplicativos mobile, web app
            (front-end), API (back-end), banco de dados e infra-estrutura na
            nuvem que causem impacto de alto nível no mundo atual.
          </ContentText>

          <Image src="/images/docs.svg" width="300" height="300" />
        </ContentWrapper>
      </Section>

      <TitleWrapper>
        <Title>O que nos faz diferentes</Title>
      </TitleWrapper>
      <Section>
        <ContentWrapper>
          <Image src="/images/devices.svg" width="300" height="300" />
          <ContentText>
            Criação de um sistema de ponta a ponta. Usamos JavaScript,
            TypeScript e seus respectivos frameworks, para garantir um código
            unificado e mais estável para aplicação final.
          </ContentText>
        </ContentWrapper>
      </Section>
      <Section>
        <ContentWrapper>
          <ContentText>
            Somos experts em desenvolvimento mobile. Nossa equipe é composta de
            especialistas em desenvolvimento mobile na tecnologia React Native.
            Nós somos experientes no assunto.
          </ContentText>
          <Image src="/images/designer.svg" width="300" height="300" />
        </ContentWrapper>
      </Section>
    </div>
  );}
 