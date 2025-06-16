export class AuthService {
  public async validJwt(cookie: string | undefined): Promise<void> {
      const response = await fetch("http://localhost:3010/api/v0/auth/validJwt", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })

      if (response.status !== 200) {
        throw new Error("Unauthorized: Invalid JWT");
      }
  }
}
