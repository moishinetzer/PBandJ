declare module "fetch-lite" {
  export default function fetch(
    url: string,
    options?: {
      method?: string;
      headers?: any;
      body?: any;
      auth?: string;
      followredirect?: boolean;
    }
  ): Promise<{
    headers: any;
    statusText: string;
    status: number;
    url: string;
    body: any;
  }>;
}
