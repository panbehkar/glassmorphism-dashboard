import { RouteTitle } from '@/router';
import { Container } from '@/views/components';

export const Users = ({ title }: RouteTitle) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};
