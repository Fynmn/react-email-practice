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

interface IEmailProps {
  firstName: string;
  email: string;
}

const VisitorRequestEmail = ({
  firstName = "Carlo",
  email = "carlo@gmail.com",
}: IEmailProps) => {
  return (
    <Tailwind>
      <Container className="bg-white">
        <Container className="flex justify-center bg-gray-200 py-4">
          <Column>
            <Text className="text-indigo-800 text-2xl mr-4 font-medium">
              Welcome to
            </Text>
          </Column>
          <Column>
            <img src="svenn_logo.png" alt="SVENN Logo" height={28} />
          </Column>
        </Container>
        <Container className="bg-white w-screen">
          <Heading className="text-indigo-800 text-5xl font-bold ml-8">
            Hello, {firstName}!👋
          </Heading>

          <Text className="text-gray-500 text-2xl ml-8 pr-12 font-semibold">
            You can now visit Spring Valley!
          </Text>
          <Text className="text-gray-500 text-lg ml-8 pr-12">
            Just present the QR Code below to the Security Guard.
          </Text>
        </Container>

        <Container className="flex justify-center">
          <Column className="">
            <img src="qrcode.png" alt="SVENN Logo" height={150} />
          </Column>
        </Container>

        <Container className="bg-gray-600 flex justify-center text-center mt-8 p-4">
          <Column>
            <Text className="px-10 text-white">
              If the QR Code does not work, you may contact the admin with the
              contact information below:
            </Text>
            <Text className="font-medium text-white">
              svenn_admin@springvalley.com <br></br>09123456789
            </Text>
          </Column>
        </Container>
      </Container>
    </Tailwind>
  );
};

export default VisitorRequestEmail;
