import { context } from "$live/live.ts";
import Header from "deco-sites/start/components/Header/Header.tsx";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function Home({ enableInspectVSCode }: Props) {
  return (
    <section>
      {enableInspectVSCode && !context.deploymentId && (
        <div class="min-h-screen flex-center-between flex-col">
          <Header logo="" link={[]} link_with_background={[]} />
        </div>
      )}
    </section>
  );
}
