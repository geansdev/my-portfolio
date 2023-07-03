import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { ContactSection } from "../Contacts/style";
import { AboutSectionH3, AboutSectionText } from "./style";

export const AboutMe = () => {
  return (
    <ContactSection id="about-me">
      <Container>
        <AboutSectionH3>
          <Text as="h3" type="heading1" color="grey5">
            Sobre{" "}
            <Text as="span" type="heading1" color="brand1">
              mim
            </Text>
          </Text>
        </AboutSectionH3>
        <AboutSectionText>
          <Text type="body1" color="grey2">
            Desde os treze anos tive um interesse em assuntos relacionados à
            tecnologia; a maneira como uma aplicação é montada, ou como ocorre a
            lógica por trás de um website e suas respostas.
          </Text>
          <Text type="body1" color="grey2">
            Mas foi somente 10 anos depois que resolvi arriscar e realmente
            aprender a manusear esse mundo de variáveis e inúmeras
            possibilidades, fazendo uso das diversas ferramentas que nos são
            disponibilizadas.
          </Text>
          <Text type="body1" color="grey2">
            Atualmente conheço tecnologias tanto no lado do Front como Backend,
            como HTML & CSS, Javascript, React.js, Node.js, Express, Typescript,
            TypeORM, Python e Django; formas de gerenciamento de projetos como a
            metodologia Scrum, e manejamento e organização de código com o Git.
          </Text>
        </AboutSectionText>
      </Container>
    </ContactSection>
  );
};
