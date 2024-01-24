import axios from "axios";
import { vistarEndpoints } from "../lib/store/auto-generated/vistarEndpoints";
export default async function IntegrationsList() {
  // const res: Integration[] = await fetch("").then(
  //   (res) => res.json()
  // ).catch(res => console.log('error fetching integrations'))

  const url = "https://api.vistar.cloud/api/v1/integrations/integration-list";
  const res = await axios
    .get<Integration[]>(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
    });

    // const { data: order } = await store.dispatch(
    //     vistarEndpoints.endpoints.getIntegrationsIntegrationList.initiate()
    // ); 

  return (
    <div>
      <ul className="text-black">
        {!!res &&
          res?.map((r, i) => (
            <li className="mb-5" key={i}>
              {r?.name}
            </li>
          ))}
      </ul>
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
