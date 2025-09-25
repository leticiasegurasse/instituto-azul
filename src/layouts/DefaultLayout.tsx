// Layout padrão para as páginas
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default DefaultLayout; 