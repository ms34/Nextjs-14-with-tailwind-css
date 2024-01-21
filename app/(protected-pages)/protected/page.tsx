export default async function Page() {
  const res: Integration[] = await fetch("https://api.vistar.cloud/api/v1/integrations/integration-list").then(
    (res) => res.json()
  );

  return (
    <div>
      <h1>Protected page</h1>
      <br />
      <ol>
        {res?.map((r, i) => (
          <li className="mb-5" key={i}>
            {r?.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export type IntegrationRead = {
  id?: string;
  company: string;
  name: string;
  template_name?:
    | "aws"
    | "google"
    | "office365"
    | "gsuite"
    | "slack"
    | "github"
    | "trello"
    | "jira"
    | "azure"
    | "bitbucket";
  metadata_json: object;
  active?: boolean;
  creator?: string;
  modifier?: string;
  created?: string;
  modified?: string;
};

export type Integration = {
  id: string;
  created: string;
  modified: string;
  name: string;
  note: string;
  template_name: string;
  category: string;
  icon: any;
  status: string;
  total_test: number;
  connected_accounts?: IntegrationRead[];
  isConnected?: boolean;
};
