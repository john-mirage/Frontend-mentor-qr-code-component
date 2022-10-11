import Card from "@components/Card";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-24 py-48">
      <h1 className="sr-only">Qr code component</h1>
      <Card />
    </main>
  );
};

export default App;
