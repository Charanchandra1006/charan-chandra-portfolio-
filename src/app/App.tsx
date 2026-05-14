import { CursorGlow, LoadingScreen } from '@shared/ui';
import { AppRouter } from './router';
import { Providers } from './providers';

export default function App() {
  return (
    <Providers>
      <LoadingScreen />
      <CursorGlow />
      <div className="relative z-10">
        <AppRouter />
      </div>
    </Providers>
  );
}
