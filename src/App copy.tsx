import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Column,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface LinearLoginCodeEmailProps {
  validationCode?: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

export const LinearLoginCodeEmail = ({
  validationCode = "abnormal-carlo",
}: LinearLoginCodeEmailProps) => (
  <Html>
    <Head />
    <Preview>Your login for SVENN</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Hello, Carlo! 👋</Heading>

        <Section>
          <Column>
            <Text style={paragraph}>Welcome to</Text>
          </Column>
          <Column>
            <Img src="svenn_logo.png" alt="SVENN Logo" height="28" />
          </Column>
        </Section>
        {/* <Heading style={heading}>Welcome to SVENN</Heading> */}
        <Text style={paragraph}>
          You can now login using these credentials below:
        </Text>
        <Section>
          <Column style={paragraph}>Email: </Column>
          <Column style={paragraph}>
            <Text style={email}>carlo@gmail.com</Text>
          </Column>
        </Section>
        <Text style={paragraph}>
          Password:
          <code style={code}>{validationCode}</code>
        </Text>
        {/* <Text style={paragraph}>
          If the link does not work, you may contact the admin in this email:
          svenn_admin@springvalley.com
        </Text> */}
      </Container>
    </Body>
  </Html>
);

export default LinearLoginCodeEmail;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const flex_container: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "560px",
};

const heading: React.CSSProperties = {
  color: "#2c2891",
  fontSize: "28px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  padding: "17px 0 0",
};

const paragraph: React.CSSProperties = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const email: React.CSSProperties = {
  color: "#3c4149",
  fontSize: "18px",
  fontWeight: "700",
  marginLeft: "8px",
};

const hr: React.CSSProperties = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};

const code: React.CSSProperties = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "8px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#3c4149",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "18px",
  borderRadius: "4px",
  color: "#3c4149",
  marginLeft: "8px",
};
