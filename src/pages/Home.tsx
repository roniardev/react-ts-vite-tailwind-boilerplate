import { Page, PageContent } from 'components/layout/page';

export function Home() {
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col items-center px-3 py-8 space-y-2 lg:px-8">
          <p className="font-bold text-3xl font-primary">
            React + Typescript + Vite + Tailwind Boilerplate
          </p>
        </div>
      </PageContent>
    </Page>
  );
}
