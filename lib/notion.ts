import { Client } from "@notionhq/client";

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string; // "Contract" | "Direct Hire" | "Contract-to-Hire"
  category: string; // "IT" | "STEM" | "Engineering" | "Data" | etc.
  description: string;
  posted: string;
  active: boolean;
}

let notion: Client | null = null;

function getNotionClient(): Client {
  if (!notion) {
    notion = new Client({ auth: process.env.NOTION_API_KEY });
  }
  return notion;
}

export async function getJobs(): Promise<Job[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    // Return empty array if Notion isn't configured yet
    return [];
  }

  try {
    const client = getNotionClient();
    // @notionhq/client v5+: databases.query → dataSources.query with data_source_id
    const response = await (client.dataSources as any).query({
      data_source_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Active",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Posted", direction: "descending" }],
    });

    return (response.results as any[])
      .map((page: any) => {
        const props = page.properties;
        return {
          id: page.id as string,
          title: (props.Title?.title?.[0]?.plain_text ?? "Untitled") as string,
          location: (props.Location?.rich_text?.[0]?.plain_text ?? "") as string,
          type: (props.Type?.select?.name ?? "") as string,
          category: (props.Category?.select?.name ?? "") as string,
          description: (props.Description?.rich_text?.[0]?.plain_text ?? "") as string,
          posted: (props.Posted?.date?.start ?? "") as string,
          active: (props.Active?.checkbox ?? false) as boolean,
        };
      })
      .filter((job: Job) => job.active);
  } catch (error) {
    console.error("Failed to fetch jobs from Notion:", error);
    return [];
  }
}
