import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { RichTextEditorDemo } from '../components/Demos/RichTextEditor'
import { Notification } from '../components/Demos/Notifications'

export function HomePage() {
  return (
    <>
      <Welcome />
      <Notification />
      <ColorSchemeToggle />
      <RichTextEditorDemo />
    </>
  );
}
