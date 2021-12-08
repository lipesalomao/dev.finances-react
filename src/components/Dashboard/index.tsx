import { Sumary } from "../Sumary";
import { Container } from "./styles";
import { Transactions } from "../Transactions";

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <Transactions />
    </Container>
  );
}
