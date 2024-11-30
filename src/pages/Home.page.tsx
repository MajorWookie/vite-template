import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { RichTextEditorDemo } from '../components/Demos/RichTextEditor'

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <RichTextEditorDemo />
    </>
  );
}
