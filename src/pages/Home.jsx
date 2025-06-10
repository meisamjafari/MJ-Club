import Container from "../component/Container";
import Svg from "../component/Svg";
import Offer from "../component/Offer";
import CategoryOffer from "../component/CategoryOffer";

export default function Home() {
  return (
    <Container>
      <section>
        <Svg />
        <Offer />
        <CategoryOffer category="کراتین ها" />
        <CategoryOffer category="پروتئین ها" />
      </section>
    </Container>
  );
}
