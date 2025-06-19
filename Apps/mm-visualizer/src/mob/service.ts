import { Mob } from ".";

export class MobService {
  public async getAll(cookie: string | undefined): Promise<Mob[]> {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4020/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie}`,
        },
        body: JSON.stringify({
          query: `
            query {
              getAll {
                id
                name
                image
                size
                description
              }
            }
        `,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            reject("Unauthorized");
            return;
          }
          return response.json();
        })
        .then((json) => {
          resolve(json.data.getAll);
        })
        .catch((error) => reject(error));
    });
  }
}
