import HelperChat from "../../components/ChatForm";
import { Container } from "../../components/ChatForm/style";
import * as theme from "../../styles/tokens/index";

const Home = () => {
  return (
    <Container
      width="100vw"
      height="100vh"
      padding="0px"
      margin="0px"
      backgroundColor={theme.blue.light}
      justifyContent="center"
    >
      <HelperChat />
    </Container>
  );
};

export default Home;
