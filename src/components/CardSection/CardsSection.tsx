import * as C from './styles'


export const CardsSection = () => {
  return (
    <C.Container>
      <C.Card>
        <C.CardTitle>
          + Econômico <span role="img" aria-label="economia">💰</span>
        </C.CardTitle>
        <C.CardMonth>Março</C.CardMonth>
        <C.CardValue $color="green">+ R$ 985,00</C.CardValue>
      </C.Card>

      <C.Card>
        <C.CardTitle>
          + Gastos <span role="img" aria-label="gastos">💸</span>
        </C.CardTitle>
        <C.CardMonth>Abril</C.CardMonth>
        <C.CardValue $color="red">+ R$ 985,00</C.CardValue>
      </C.Card>

      <C.Card>
        <C.CardTitle>
          Saldo Médio <span role="img" aria-label="médio">🔍</span>
        </C.CardTitle>
        <C.CardValue $color="green" $bold>R$ 1.692,00</C.CardValue>
      </C.Card>
    </C.Container>
  );
};