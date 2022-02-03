import { Page, PageContent } from 'components/layout/page';

export function NotFound() {
  return (
    <Page>
      <PageContent>
        <div className="flex flex-col items-center px-3 py-8 space-y-2 lg:px-8">
          <p className="text-3xl font-bold font-primary">NotFound</p>
        </div>
      </PageContent>
    </Page>
  );
}
