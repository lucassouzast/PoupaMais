import * as C from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => {
  const valorFormatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{valorFormatado}</C.Info>
    </C.Container>
  );
};

